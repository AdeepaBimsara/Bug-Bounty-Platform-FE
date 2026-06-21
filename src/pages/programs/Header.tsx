export const Header = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-accent/5 to-transparent px-6 py-12 md:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 bg-accent/10 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Browse Programs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore active bug bounty programs and find security challenges that match your skills
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="
              group
              relative
              rounded-2xl
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              p-6
              shadow-lg
              shadow-cyan-500/10
              hover:-translate-y-2
              hover:border-cyan-400/60
              transition-all
              duration-300
              ">
            <div className="text-2xl font-bold text-accent">127</div>
            <div className="text-xs text-muted-foreground mt-1">Active Programs</div>
          </div>
          <div className="
              group
              relative
              rounded-2xl
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              p-6
              shadow-lg
              shadow-cyan-500/10
              hover:-translate-y-2
              hover:border-cyan-400/60
              transition-all
              duration-300
          ">
            <div className="text-2xl font-bold text-accent">$2.3M</div>
            <div className="text-xs text-muted-foreground mt-1">Total Bounties</div>
          </div>
          <div className="
              group
              relative
              rounded-2xl
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              p-6
              shadow-lg
              shadow-cyan-500/10
              hover:-translate-y-2
              hover:border-cyan-400/60
              transition-all
              duration-300
          ">
            <div className="text-2xl font-bold text-accent">8.5K</div>
            <div className="text-xs text-muted-foreground mt-1">Researchers</div>
          </div>
          <div className="
              group
              relative
              rounded-2xl
              bg-white/5
              backdrop-blur-xl
              border
              border-cyan-500/20
              p-6
              shadow-lg
              shadow-cyan-500/10
              hover:-translate-y-2
              hover:border-cyan-400/60
              transition-all
              duration-300
          ">
            <div className="text-2xl font-bold text-accent">12K+</div>
            <div className="text-xs text-muted-foreground mt-1">Submissions</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header