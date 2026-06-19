import { ArrowUpRight } from "lucide-react";

type Severity = "Critical" | "High" | "Medium" | "Low";

const programs: {
  name: string;
  initials: string;
  type: string;
  reward: string;
  severities: Severity[];
  managed: boolean;
}[] = [
  {
    name: "NebulaPay",
    initials: "NP",
    type: "Web · API · Mobile",
    reward: "$500 – $25,000",
    severities: ["Critical", "High", "Medium"],
    managed: true,
  },
  {
    name: "Orbit Cloud",
    initials: "OC",
    type: "Infrastructure · IoT",
    reward: "$750 – $40,000",
    severities: ["Critical", "High"],
    managed: true,
  },
  {
    name: "Quantum Health",
    initials: "QH",
    type: "Web · API",
    reward: "$250 – $15,000",
    severities: ["High", "Medium", "Low"],
    managed: false,
  },
  {
    name: "Vertex Bank",
    initials: "VB",
    type: "Web · Mobile",
    reward: "$1,000 – $60,000",
    severities: ["Critical", "High", "Medium"],
    managed: true,
  },
  {
    name: "Pixel Forge",
    initials: "PF",
    type: "Web · Gaming",
    reward: "$150 – $8,000",
    severities: ["High", "Medium", "Low"],
    managed: false,
  },
  {
    name: "DataLoom",
    initials: "DL",
    type: "API · Data",
    reward: "$500 – $30,000",
    severities: ["Critical", "High", "Medium"],
    managed: true,
  },
];

const severityStyles: Record<Severity, string> = {
  Critical: "bg-destructive/15 text-destructive ring-destructive/30",
  High: "bg-primary/15 text-primary ring-primary/30",
  Medium: "bg-accent/15 text-accent ring-accent/30",
  Low: "bg-muted text-muted-foreground ring-border",
};

export const FeaturePrograms = () => {
  return (
    <div>
      <section
        id="programs"
        className="relative overflow-hidden py-24 sm:py-32"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-950" />

          <div className="absolute left-0 top-1/3 h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute right-0 top-0 h-75 w-75 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute bottom-0 left-1/2 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
                Featured Programs
              </div>

              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Live Bug Bounty
                <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                Explore active bug bounty programs and earn rewards by
                discovering vulnerabilities before attackers do.
              </p>
            </div>

            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-cyan-500/40
                hover:bg-white/10
              "
            >
              View All Programs
              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>

          {/* Program Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((p) => (
              <div
                key={p.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-500/30
                  hover:shadow-2xl
                  hover:shadow-cyan-500/10
                "
              >
                {/* Glow Effect */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-linear-to-br
                      from-cyan-500/20
                      to-blue-600/20
                      text-lg
                      font-bold
                      text-cyan-400
                      ring-1
                      ring-cyan-400/20
                    "
                  >
                    {p.initials}
                  </span>

                  <div>
                    <h3 className="font-semibold text-white">{p.name}</h3>

                    <p className="text-sm text-slate-400">{p.type}</p>
                  </div>

                  {p.managed && (
                    <span
                      className="
                        ml-auto
                        rounded-full
                        border
                        border-emerald-500/20
                        bg-emerald-500/10
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-emerald-400
                      "
                    >
                      Managed
                    </span>
                  )}
                </div>

                {/* Reward */}
                <div
                  className="
                    mt-6
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    p-5
                  "
                >
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Reward Range
                  </p>

                  <p className="mt-2 text-2xl font-bold text-cyan-400">
                    {p.reward}
                  </p>
                </div>

                {/* Severity Tags */}
                <div className="mt-5 flex flex-wrap gap-2 text-amber-50">
                  {p.severities.map((sev) => (
                    <span
                      key={sev}
                      className={`
                        rounded-lg
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        ring-1
                  ${severityStyles[sev]}
                `}
                    >
                      {sev}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="
                    mt-7
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                    bg-linear-to-r
                    from-cyan-500
                    to-blue-600
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  View Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturePrograms;
