import {
  Shield,

  // Mail,
} from "lucide-react";

const columns = [
  {
    title: "Platform",
    links: ["Programs", "Leaderboard", "Researchers", "Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Security", "Disclosure Policy", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Top Footer */}
        <div className="grid gap-12 lg:grid-cols-6">

          {/* Logo Area */}
          <div className="lg:col-span-2">

            <a href="/" className="group flex items-center gap-3">

              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl
                  bg-linear-to-br
                  from-cyan-500/20
                  to-blue-600/20
                  ring-1 ring-cyan-400/30
                  transition-all duration-300
                  group-hover:scale-110
                "
              >
                <Shield className="h-5 w-5 text-cyan-400" />
              </div>

              <span className="text-xl font-bold tracking-tight">
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  DefenZo
                </span>
              </span>

            </a>

            <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
              Securing digital assets through the collective power of
              ethical hackers and world-class security researchers.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
{/* 
              <a
                href="#"
                className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="rounded-lg border border-white/10 p-2 text-slate-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400"
              >
                <Mail className="h-5 w-5" />
              </a> */}

            </div>

          </div>

          {/* Links */}
          {columns.map((col) => (
            <div key={col.title}>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>

              <ul className="mt-5 space-y-3">

                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-sm
                        text-slate-400
                        transition-colors
                        duration-300
                        hover:text-cyan-400
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} DefenZo. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500">

              <span>SOC 2 Type II</span>

              <span className="h-4 w-px bg-white/10" />

              <span>ISO 27001</span>

              <span className="h-4 w-px bg-white/10" />

              <span>GDPR Ready</span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer