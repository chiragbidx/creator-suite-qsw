#
# Dev-focused image with git-polling supervisor.
# - Installs deps via npm ci (fast, deterministic)
# - Includes git so scripts/git-poll.js can fetch updates
# - Runs dev server via scripts/dev-supervisor.js (turbopack enabled by script)
#
FROM node:20-bookworm-slim AS deps

WORKDIR /app
ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_FONT_IGNORE_FAILED_DOWNLOADS=1

RUN corepack enable

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# --- Runtime stage ---
FROM node:20-bookworm-slim AS dev

# Precreate workspace and user
WORKDIR /app
ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1 \
    NEXT_FONT_IGNORE_FAILED_DOWNLOADS=1 \
    PORT=8080 \
    HOST=0.0.0.0

# git for polling; ca-certificates for https remotes
RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Create non-root user and ensure workspace is writable
RUN useradd -m -u 1001 nextjs || true \
  && mkdir -p /app \
  && chown -R 1001:1001 /app

# Copy files with correct ownership to keep writes working (e.g., .next)
COPY --chown=nextjs:nextjs --from=deps /app/node_modules ./node_modules
COPY --chown=nextjs:nextjs . .

USER nextjs

EXPOSE 8080

# Healthcheck surfaces crashes quickly
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:'+(process.env.PORT||8080),r=>process.exit(r.statusCode>=400?1:0)).on('error',()=>process.exit(1))"

CMD ["node", "scripts/dev-supervisor.js"]
