import {
  Activity,
  ShieldCheck,
  Zap,
  Trophy,
  Wallet,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Tracking",
    desc: "Monitor report status, triage progress, and program activity from a single live dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Report Submission",
    desc: "End-to-end encrypted disclosures with structured templates and PoC attachments.",
  },
  {
    icon: Zap,
    title: "Fast Triaging",
    desc: "A dedicated triage team validates findings in hours, not weeks, so researchers get paid faster.",
  },
  {
    icon: Trophy,
    title: "Reputation System",
    desc: "Build credibility with signal, reputation, and impact scores tracked across every program.",
  },
  {
    icon: Wallet,
    title: "Rewards Management",
    desc: "Automated, compliant global payouts with full bounty history and tax documentation.",
  },
  {
    icon: Globe,
    title: "Global Researcher Community",
    desc: "Tap into a vetted community of hackers across 190+ countries and every major timezone.",
  },
];

export const Features = () => {
  return (
    <div>
      <section
        id="features"
        className="relative overflow-hidden py-24 sm:py-32"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/90" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-4 py-2
          text-sm
          font-medium
          text-cyan-400
        "
            >
              Platform Features
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Everything You Need
              <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                To Secure Your Assets
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Purpose-built tools for security researchers and organizations to
              collaborate, report vulnerabilities, and improve security faster.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-cyan-500/30
            hover:shadow-2xl
            hover:shadow-cyan-500/10
          "
              >
                {/* Hover Glow */}
                <div
                  className="
              absolute
              -right-10
              -top-10
              h-32
              w-32
              rounded-full
              bg-cyan-500/10
              blur-3xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
                />

                {/* Icon */}
                <div
                  className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-cyan-500/20
              to-blue-600/20
              ring-1
              ring-cyan-400/20
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:ring-cyan-400/50
            "
                >
                  <f.icon
                    className="h-8 w-8 text-cyan-400"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-slate-400">{f.desc}</p>

                {/* Bottom Line */}
                <div
                  className="
              absolute
              bottom-0
              left-0
              h-1
              w-0
              bg-linear-to-r
              from-cyan-400
              to-blue-500
              transition-all
              duration-500
              group-hover:w-full
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
