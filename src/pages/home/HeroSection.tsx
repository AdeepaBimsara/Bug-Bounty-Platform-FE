import { ShieldCheck, Bug, ArrowRight, Lock } from "lucide-react";
import CyberVideo from "../../assets/cybervideo.MP4";

export const Hero = () => {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-70"
          >
            <source src={CyberVideo} />
          </video>

          <div className="absolute inset-0 bg-black/85" />

          <div className="absolute inset-0 bg-linear-to-r  via-transparent " />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-5
                py-2
                text-sm
                font-medium
                text-cyan-400
                backdrop-blur-md
              "
            >
              <ShieldCheck className="h-4 w-4" />
              Trusted by 1,200+ Security Teams Worldwide
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Protect Your
              <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Digital Assets
              </span>
              Through Ethical Hacking
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-amber-50">
              Defenzo connects organizations with elite security researchers to
              discover vulnerabilities before attackers do. Launch bug bounty
              programs, receive verified reports, and strengthen your security
              posture.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-cyan-500/40
                "
              >
                <Bug className="h-5 w-5" />
                Start Hunting
                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
              "
              >
                <Lock className="h-5 w-5" />
                Launch a Program
              </button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
              >
                <h3 className="text-3xl font-bold text-cyan-400">12K+</h3>

                <p className="mt-1 text-sm text-slate-400">Researchers</p>
              </div>

              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
              >
                <h3 className="text-3xl font-bold text-cyan-400">4.8K+</h3>

                <p className="mt-1 text-sm text-slate-400">Vulnerabilities</p>
              </div>

              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
              >
                <h3 className="text-3xl font-bold text-cyan-400">$2.7M</h3>

                <p className="mt-1 text-sm text-slate-400">Rewards Paid</p>
              </div>

              <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
              "
              >
                <h3 className="text-3xl font-bold text-cyan-400">99.9%</h3>

                <p className="mt-1 text-sm text-slate-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
