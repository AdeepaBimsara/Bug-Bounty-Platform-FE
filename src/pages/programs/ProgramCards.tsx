import { Target, Users, Clock, TrendingUp } from 'lucide-react'

interface ProgramCardProps {
  program: {
    id: number
    name: string
    company: string
    logo: string
    status: string
    bountyMax: string
    vulnerabilitiesFound: number
    researchersCount: number
    lastUpdated: string
    tags: string[]
  }
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-accent/20 bg-linear-to-br from-card/50 to-card/30 backdrop-blur transition-all duration-300 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10">
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-xl font-bold text-accent group-hover:bg-accent/20 transition-colors">
              {program.logo}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate leading-tight">
                {program.name}
              </h3>
              <p className="text-sm text-muted-foreground truncate">
                {program.company}
              </p>
            </div>
          </div>
          <div className="flex h-6 items-center rounded-full bg-accent/10 px-2.5">
            <span className="text-xs font-medium text-accent">{program.status}</span>
          </div>
        </div>

        {/* Bounty Info */}
        <div className="rounded-lg bg-secondary/30 p-3 border border-secondary/50">
          <div className="text-xs text-muted-foreground mb-1">Max Bounty</div>
          <div className="text-2xl font-bold text-accent">{program.bountyMax}</div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {program.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="rounded-lg bg-card/50 border border-border/50 p-3 text-center">
            <div className="flex items-center justify-center h-5 mb-1">
              <Target className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-semibold text-foreground">
              {(program.vulnerabilitiesFound / 1000).toFixed(1)}K
            </div>
            <div className="text-xs text-muted-foreground">Vulns</div>
          </div>
          <div className="rounded-lg bg-card/50 border border-border/50 p-3 text-center">
            <div className="flex items-center justify-center h-5 mb-1">
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-semibold text-foreground">
              {program.researchersCount}
            </div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          <div className="rounded-lg bg-card/50 border border-border/50 p-3 text-center">
            <div className="flex items-center justify-center h-5 mb-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-semibold text-foreground">
              {program.lastUpdated}
            </div>
            <div className="text-xs text-muted-foreground">Updated</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <button className="flex-1 rounded-lg bg-accent text-accent-foreground font-medium py-2 px-3 text-sm hover:bg-accent/90 transition-colors active:scale-95">
            View Program
          </button>
          <button className="flex-1 rounded-lg border border-accent/30 text-accent font-medium py-2 px-3 text-sm hover:bg-accent/10 transition-colors active:scale-95">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  )
}
