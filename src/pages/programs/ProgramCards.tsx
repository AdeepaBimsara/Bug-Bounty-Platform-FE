import { Target, Users, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProgramCardProps {
  program: {
    id: number;
    name: string;
    company: string;
    logo: string;
    status: string;
    bountyMax: string;
    vulnerabilitiesFound: number;
    researchersCount: number;
    lastUpdated: string;
    tags: string[];
  };
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className="
    group relative overflow-hidden rounded-2xl
    border border-cyan-400/20
    bg-linear-to-br from-slate-900/80 via-slate-900/50 to-cyan-950/40
    backdrop-blur-xl
    transition-all duration-500
    hover:-translate-y-1
    hover:border-cyan-400/60
    hover:shadow-xl
    hover:shadow-cyan-500/20
  "
    >
      {/* Glow Background */}

      <div
        className="
      absolute inset-0
      bg-linear-to-br
      from-cyan-400/10
      via-transparent
      to-blue-500/10
      opacity-0
      group-hover:opacity-100
      transition-all duration-500
    "
      />

      <div className="relative p-6 space-y-5">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div
              className="
            h-14 w-14
            flex items-center justify-center
            rounded-2xl
            bg-cyan-400/10
            border border-cyan-400/30
            text-2xl
            shadow-lg
            shadow-cyan-500/10
            group-hover:scale-110
            transition-transform
          "
            >
              {program.logo}
            </div>

            <div className="min-w-0">
              <h3
                className="
              font-bold
              text-lg
              text-white
              truncate
              group-hover:text-cyan-400
              transition-colors
            "
              >
                {program.name}
              </h3>

              <p
                className="
              text-sm
              text-slate-400
            "
              >
                {program.company}
              </p>
            </div>
          </div>

          <span
            className="
          px-3 py-1
          rounded-full
          text-xs
          font-semibold
          bg-emerald-400/10
          text-emerald-400
          border border-emerald-400/20
        "
          >
            {program.status}
          </span>
        </div>

        {/* Reward */}

        <div
          className="
        rounded-xl
        p-4
        bg-black/30
        border border-cyan-400/10
      "
        >
          <p className="text-xs text-slate-400">Maximum Bounty</p>

          <h2
            className="
          mt-1
          text-3xl
          font-black
          text-cyan-400
        "
          >
            {program.bountyMax}
          </h2>
        </div>

        {/* Tags */}

        <div className="flex flex-wrap gap-2">
          {program.tags.map((tag) => (
            <span
              key={tag}
              className="
            px-3 py-1
            rounded-full
            text-xs
            bg-cyan-400/10
            text-cyan-300
            border border-cyan-400/20
          "
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}

        <div
          className="
        grid grid-cols-3
        gap-3
      "
        >
          <div
            className="
          rounded-xl
          bg-white/5
          border border-white/10
          p-3
          text-center
        "
          >
            <Target className="mx-auto text-cyan-400 h-5" />

            <p className="mt-2 text-white font-bold">
              {(program.vulnerabilitiesFound / 1000).toFixed(1)}K
            </p>

            <p className="text-xs text-slate-400">Vulns</p>
          </div>

          <div
            className="
          rounded-xl
          bg-white/5
          border border-white/10
          p-3
          text-center
        "
          >
            <Users className="mx-auto text-cyan-400 h-5" />

            <p className="mt-2 text-white font-bold">
              {program.researchersCount}
            </p>

            <p className="text-xs text-slate-400">Researchers</p>
          </div>

          <div
            className="
          rounded-xl
          bg-white/5
          border border-white/10
          p-3
          text-center
        "
          >
            <Clock className="mx-auto text-cyan-400 h-5" />

            <p
              className="
            mt-2 
            text-white
            font-bold
            text-sm
          "
            >
              {program.lastUpdated}
            </p>

            <p className="text-xs text-slate-400">Updated</p>
          </div>
        </div>

        {/* Buttons */}

        <div className="flex gap-3 pt-3">
          <button
            onClick={() => {
              navigate(`/programs/${program.id}`);
            }}
            className="
          flex-1
          py-3
          rounded-xl
          bg-linear-to-r
          from-cyan-400
          to-blue-500
          text-black
          font-bold
          hover:shadow-lg
          hover:shadow-cyan-400/30
          transition-all
          active:scale-95
        "
          >
            View Program
          </button>

          <button
          onClick={() => {
              navigate(`/submit-report/${program.id}`);
            }}
            className="
          flex-1
          py-3
          rounded-xl
          border
          border-cyan-400/30
          text-cyan-300
          font-semibold
          hover:bg-cyan-400/10
          transition-all
          active:scale-95
        "
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}
