import { ArrowRight, Shield, Rocket } from "lucide-react";

export const CallToAction = () => {

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-slate-950" />

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-cyan-500/20
            bg-white/5
            px-8
            py-16
            backdrop-blur-xl
            sm:px-12
            sm:py-20
          "
        >

          {/* Glow */}
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-blue-600/10 blur-[100px]" />

          {/* Badge */}
          <div className="flex justify-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-400
              "
            >
              <Shield className="h-4 w-4" />
              Trusted by Security Teams Worldwide
            </div>
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-center
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Ready To Secure
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Digital Assets?
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              text-lg
              leading-relaxed
              text-slate-400
            "
          >
            Join thousands of organizations and ethical hackers
            working together to discover vulnerabilities before
            attackers can exploit them.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                12K+
              </h3>
              <p className="text-sm text-slate-400">
                Researchers
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                4.8K+
              </h3>
              <p className="text-sm text-slate-400">
                Reports
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="text-center">
              <h3 className="text-3xl font-bold text-cyan-400">
                $2.7M
              </h3>
              <p className="text-sm text-slate-400">
                Rewards Paid
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
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
              <Rocket className="h-5 w-5" />

              Join Now

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
                hover:border-cyan-500/30
              "
            >
              Talk To Sales
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CallToAction