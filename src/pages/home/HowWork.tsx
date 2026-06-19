import { UserPlus, Search, FileText, Award } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Join the Platform",
    desc: "Create your researcher profile, complete identity verification, and unlock access to live programs.",
  },
  {
    icon: Search,
    title: "Discover Programs",
    desc: "Browse public and private bounty programs filtered by scope, technology, and reward tier.",
  },
  {
    icon: FileText,
    title: "Report Vulnerabilities",
    desc: "Submit clear, reproducible reports through our structured workflow with built-in collaboration.",
  },
  {
    icon: Award,
    title: "Earn Rewards",
    desc: "Get triaged fast and paid securely once your finding is validated by the program team.",
  },
];

export const HowWork = () => {
  return (
    <div>
      <section
        id="how-it-works"
        className="relative overflow-hidden py-24 sm:py-32 min-h-screen bg-[#050816] text-white"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/3 h- w-62.5 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute right-0 bottom-0 h-75 w-75 rounded-full bg-blue-600/10 blur-[140px]" />
          
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
              How It Works
            </div>

            <h2
              className="
                mt-6
                text-4xl
                font-extrabold
                tracking-tight
                text-white
                sm:text-5xl
                "
            >
              From Discovery
              <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                To Reward
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              A simple and secure workflow that helps researchers discover
              vulnerabilities and organizations resolve them before attackers
              can exploit them.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
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
                {/* Step Number */}
                <div
                  className="
                    absolute
                    right-6
                    top-4
                    text-7xl
                    font-black
                    text-white/5
                    "
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

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
                  <step.icon
                    className="h-8 w-8 text-cyan-400"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-slate-400">
                  {step.desc}
                </p>

                {/* Bottom Accent Line */}
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

export default HowWork;
