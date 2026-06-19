import {  Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
// UserPlus, Search, FileText, Award,
const navLinks = [
  { lable: "programs", href: "" },
  { lable: "How It Work", href: "" },
  { lable: "Fetures", href: "" },
  { lable: "Leaderboard", href: "" },
];


export const Navbar = () => {

  const navigate = useNavigate()
    
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
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
                group-hover:ring-cyan-400/60
               "
            >
              <Shield className="h-5 w-5 text-cyan-400" aria-hidden="true" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                DefenZo
              </span>
            </span>
          </a>

          {/* Navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.lable}
                href={link.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-slate-400
                  transition-all
                  duration-300
                  hover:text-white
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.lable}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              className="
                rounded-xl
                px-5 py-2.5
                text-sm font-medium
                text-slate-300
                transition-all duration-300
                hover:bg-white/5
                hover:text-white
              "
              onClick={() => navigate("/register")}

            >
              Sign In
            </button>

            <button
              className="
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                px-6 py-2.5
                text-sm font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-all duration-300
                hover:scale-105
                hover:shadow-cyan-500/40
              "
             onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
