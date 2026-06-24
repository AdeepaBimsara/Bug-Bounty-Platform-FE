import {
Search,
Bell,
Plus,
Shield,
Activity,
FileWarning,
DollarSign,
} from "lucide-react";

import CompanySidebar from "../dashboard/company_dashboard/Sidebar";
import { useState } from "react";
import CreateProgramModal from "./CreateProgramModal";

export default function ProgramsManagementPage() {

     const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white"> <CompanySidebar />

  <main className="ml-64 min-h-screen p-8">
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-4xl font-bold">
          Programs Management
        </h1>

        <p className="text-slate-400 mt-2">
          Manage, monitor and optimize all bug bounty programs.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="
          p-3
          rounded-xl
          border
          border-cyan-500/20
          bg-white/5
        "
        >
          <Bell size={20} />
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="
          flex
          items-center
          gap-2
          px-5
          py-3
          rounded-xl
          bg-cyan-500
          text-black
          font-semibold
        "
        >
          <Plus size={18} />
          Create Program
        </button>

         <CreateProgramModal    
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
      <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6">
        <Shield className="text-cyan-400 mb-4" />

        <h3 className="text-slate-400 text-sm">
          Total Programs
        </h3>

        <h2 className="text-4xl font-bold mt-2">
          24
        </h2>
      </div>

      <div className="rounded-2xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-6">
        <Activity className="text-green-400 mb-4" />

        <h3 className="text-slate-400 text-sm">
          Active Programs
        </h3>

        <h2 className="text-4xl font-bold mt-2">
          18
        </h2>
      </div>

      <div className="rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-xl p-6">
        <FileWarning className="text-orange-400 mb-4" />

        <h3 className="text-slate-400 text-sm">
          Reports Received
        </h3>

        <h2 className="text-4xl font-bold mt-2">
          1,245
        </h2>
      </div>

      <div className="rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6">
        <DollarSign className="text-purple-400 mb-4" />

        <h3 className="text-slate-400 text-sm">
          Rewards Paid
        </h3>

        <h2 className="text-4xl font-bold mt-2">
          $87K
        </h2>
      </div>
    </div>

    {/* Search + Filters */}
    <div className="flex flex-col lg:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search
          className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-cyan-400
        "
        />

        <input
          placeholder="Search programs..."
          className="
          w-full
          pl-12
          py-4
          rounded-2xl
          bg-white/5
          border
          border-cyan-500/20
          backdrop-blur-xl
        "
        />
      </div>

      <div className="flex gap-3 flex-wrap">
        {[
          "All",
          "Active",
          "Draft",
          "Private",
          "Archived",
        ].map((item) => (
          <button
            key={item}
            className="
            px-5
            py-3
            rounded-xl
            bg-white/5
            border
            border-cyan-500/20
          "
          >
            {item}
          </button>
        ))}
      </div>
    </div>

    {/* Program Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((program) => (
        <div
          key={program}
          className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-white/5
          backdrop-blur-xl
          p-6
          hover:border-cyan-400/50
          transition-all
        "
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">
              E-Commerce Platform
            </h3>

            <span
              className="
              px-3
              py-1
              rounded-full
              text-xs
              bg-green-500/20
              text-green-400
            "
            >
              Active
            </span>
          </div>

          <p className="text-slate-400 mt-3">
            Public bug bounty program focused on
            web applications and APIs.
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs">
              Web
            </span>

            <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs">
              API
            </span>
          </div>

          <div className="mt-5 space-y-2 text-sm text-slate-300">
            <p>Reward: $100 - $5,000</p>
            <p>Researchers: 124</p>
            <p>Reports: 43</p>
          </div>

          <div className="flex gap-2 mt-6">
            <button className="flex-1 py-2 rounded-lg bg-cyan-500 text-black font-medium">
              View
            </button>

            <button className="flex-1 py-2 rounded-lg border border-white/10">
              Edit
            </button>

            <button className="flex-1 py-2 rounded-lg border border-white/10">
              Reports
            </button>
          </div>
        </div>
      ))}
    </div>
  </main>
</div>
    )

}