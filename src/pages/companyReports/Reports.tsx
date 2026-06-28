import { Delete, View } from "lucide-react"
import Sidebar from "../dashboard/company_dashboard/Sidebar"

export const Reports = () => {
    return(
        <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0B1120] to-[#111827] text-white flex">

  {/* Sidebar */}
 <Sidebar/>

  {/* Main Content */}
  <main className="flex-1 p-8 ml-72">

    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold">Reports Management</h1>
        <p className="text-gray-400 mt-2">
          Review, manage and track vulnerability reports submitted by security
          researchers.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search reports..."
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-80"
        />

        <button className="bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-xl font-semibold">
          Export Reports
        </button>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-4 gap-6 mb-8">

      <div className="bg-white/5 border border-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 hover:-translate-y-1 transition">
        <h3 className="text-gray-400">Total Reports</h3>
        <h2 className="text-4xl font-bold mt-3">2,847</h2>
        <p className="text-green-400 mt-2">+18% this month</p>
      </div>

      <div className="bg-white/5 border border-yellow-500/20 backdrop-blur-xl rounded-2xl p-6">
        <h3 className="text-gray-400">Pending Review</h3>
        <h2 className="text-4xl font-bold mt-3">127</h2>
        <p className="text-yellow-400 mt-2">Awaiting triage</p>
      </div>

      <div className="bg-white/5 border border-green-500/20 backdrop-blur-xl rounded-2xl p-6">
        <h3 className="text-gray-400">Resolved Reports</h3>
        <h2 className="text-4xl font-bold mt-3">1,964</h2>
        <p className="text-green-400 mt-2">+12% this month</p>
      </div>

      <div className="bg-white/5 border border-red-500/20 backdrop-blur-xl rounded-2xl p-6">
        <h3 className="text-gray-400">Critical Vulnerabilities</h3>
        <h2 className="text-4xl font-bold mt-3">46</h2>
        <p className="text-red-400 mt-2">Needs immediate action</p>
      </div>

    </div>

    {/* Filters */}
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-8">

      <input
        placeholder="Search reports, researchers or programs..."
        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 mb-4"
      />

      <div className="flex gap-3 flex-wrap">

        {[
          "All Reports",
          "Pending",
          "Triaged",
          "In Review",
          "Resolved",
          "Rejected",
          "Duplicate",
        ].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-cyan-500/20"
          >
            {tab}
          </button>
        ))}
      </div>

    </div>

    {/* Content Layout */}
    <div className="grid grid-cols-12 gap-6">

      {/* Reports Table */}
      <div className="col-span-9">

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">

          <table className="w-full">

            <thead className="bg-black/30">
              <tr className="text-left text-gray-400 ">
                <th className="p-4">Report ID</th>
                <th>Program</th>
                <th>Researcher</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Date</th>
                <th>Reward</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t border-white/5 hover:bg-white/5 transition">
                <td className="p-4">#DEF-2847</td>
                <td>Google Cloud</td>
                <td>John Doe</td>

                <td>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400">
                    Critical
                  </span>
                </td>

                <td>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                    In Review
                  </span>
                </td>

                <td>2026-06-20</td>

                <td>$5,000</td>

                <td>
                  <div className="flex gap-3">
                    <button className="text-cyan-400"> <View></View></button>
                    <button className="text-red-400"><Delete/></button>
                  </div>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Insights Panel */}
      <div className="col-span-3 space-y-6">

      

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <h3 className="font-semibold mb-4">Quick Actions</h3>

          <div className="space-y-3">
            <button className="w-full bg-cyan-500/20 py-3 rounded-xl">
              Export Reports
            </button>

            <button className="w-full bg-purple-500/20 py-3 rounded-xl">
              Invite Researchers
            </button>

            <button className="w-full bg-blue-500/20 py-3 rounded-xl">
              Create Program
            </button>
          </div>
        </div>

      </div>

    </div>


   

  </main>

</div>
    )
}

export default Reports