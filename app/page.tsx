import { SubscriptionDashboardDemo } from "../components/SubscriptionDashboardDemo";

export const metadata = {
  title: "SubscriFlow – SaaS Subscription Management Dashboard",
  description:
    "SubscriFlow is a powerful, intuitive dashboard for support and finance teams to manage SaaS subscriptions, view active plans, refund payments, and handle changes with ease. Built for clarity, speed, and control.",
  openGraph: {
    title: "SubscriFlow – SaaS Subscription Management",
    description:
      "Dashboard for support and finance teams to view, modify, refund, and cancel SaaS subscriptions. Lightning fast. Effortless to use.",
    url: "https://subscriflow.com",
    siteName: "SubscriFlow",
    images: [
      {
        url: "https://subscriflow.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SubscriFlow SaaS Subscription Dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-[#e7f9ff] text-zinc-900">
      <main className="flex min-h-screen w-full flex-col gap-12 px-6 py-12 sm:px-10 lg:px-16 lg:max-w-[1600px] lg:mx-auto">
        {/* Header: SubscriFlow brand header with actions */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-teal-400/30 bg-white px-5 py-2 shadow-sm">
              <span className="text-2xl font-black tracking-tight text-teal-600">SubscriFlow</span>
            </div>
            <p className="text-sm font-medium text-teal-700 sm:text-base">
              Subscription management for SaaS teams.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end w-full sm:w-auto">
            <a
              href="#dashboard-demo"
              className="w-full sm:w-auto text-center rounded-full border border-teal-400/30 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Dashboard Demo
            </a>
            <a
              href="mailto:chirag@bidx.ai"
              className="w-full sm:w-auto text-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md"
            >
              Contact
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="grid min-h-[500px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 shadow-sm">
              Full Lifecycle Control
            </p>
            <h1 className="text-4xl font-black leading-tight text-teal-950 sm:text-5xl">
              Run Your SaaS. Control Your Revenue.
            </h1>
            <p className="max-w-3xl text-lg leading-7 text-zinc-700">
              SubscriFlow puts subscription management in your hands –
              track renewals, manage refunds, update plans, and keep customers happy. One dashboard. Zero chaos.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4 w-full">
              <a
                href="#dashboard-demo"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md"
              >
                Try the Dashboard
              </a>
              <a
                href="mailto:chirag@bidx.ai"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-teal-400/30 bg-white px-5 py-3 text-sm font-semibold text-teal-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Book a Demo
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 opacity-70" aria-hidden />
            <div className="relative flex flex-col justify-center p-6">
              <img
                src="/window.svg"
                alt="Dashboard preview"
                className="rounded-xl mx-auto shadow-lg border border-cyan-200 w-[270px] h-auto"
              />
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-2 text-teal-800 text-base">
                  <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
                  Real-time subscription overview
                </li>
                <li className="flex items-center gap-2 text-teal-800 text-base">
                  <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
                  Plan upgrades/downgrades instantly
                </li>
                <li className="flex items-center gap-2 text-teal-800 text-base">
                  <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
                  Cancel, refund, or reactivate in one click
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dashboard Demo Section */}
        <section id="dashboard-demo" className="rounded-2xl border border-cyan-200 bg-white/90 px-6 py-12 shadow-md w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-6">SaaS Subscription Dashboard Demo</h2>
          <SubscriptionDashboardDemo />
        </section>

        {/* Footer CTA */}
        <section
          id="cta"
          className="rounded-2xl border border-cyan-200/60 bg-gradient-to-br from-white via-cyan-50 to-white px-6 py-12 text-teal-900 shadow-sm sm:px-12"
        >
          <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">SubscriFlow</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Master Your SaaS Revenue</h2>
              <p className="text-base text-teal-800">
                Control subscriptions, get actionable insights, respond to customers – fast. Your finance and support teams will thank you.
              </p>
            </div>

            <div className="grid gap-4 rounded-xl border border-cyan-100 bg-white/80 p-6 text-sm shadow-sm sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">Explore</p>
                <a className="block text-cyan-900 transition hover:text-teal-600" href="#dashboard-demo">
                  Dashboard
                </a>
                <a className="block text-cyan-900 transition hover:text-teal-600" href="#cta">
                  Product
                </a>
                <a className="block text-cyan-900 transition hover:text-teal-600" href="mailto:chirag@bidx.ai">
                  Contact
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">Connect</p>
                <a className="block text-cyan-900 transition hover:text-teal-600" href="https://github.com/">
                  GitHub
                </a>
                <a className="block text-cyan-900 transition hover:text-teal-600" href="mailto:chirag@bidx.ai">
                  Support
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center border-t border-cyan-100 pt-6 text-center text-xs text-teal-800 gap-2">
            <span>SubscriFlow SaaS Subscription Dashboard • MIT licensed</span>
            <span>
              Owner: Chirag Dodiya – <a href="mailto:chirag@bidx.ai" className="hover:text-teal-600 underline">chirag@bidx.ai</a>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}