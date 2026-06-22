import { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import ReportsTable from "./ReportsTable";
import EditModal from "./EditModal";
import Sidebar from "../dashboard/researcher_dashboard/Sidebar";
import { getReports } from "../../services/reportService";
import api from "../../services/api";

interface Report {
  _id: string;

  programId: number;

  programName: string;

  title: string;

  severity: string;

  description: string;

  status: string;

  createdAt: string;
}

export const MyReportsPage = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All Status");
  const [filterSeverity, setFilterSeverity] = useState<string>("All Severity");
  const [sortBy, setSortBy] = useState<string>("date");
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const data = await getReports();

      setReports(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (updatedReport: Report) => {
    try {
      const response = await api.put(
        `/reports/${updatedReport._id}`,
        updatedReport,
      );

      setReports(
        reports.map((report) =>
          report._id === updatedReport._id ? response.data : report,
        ),
      );

      setEditingReport(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/reports/${id}`);

      setReports(reports.filter((report) => report._id !== id));

      setDeleteConfirm(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <Sidebar />
      <main className="ml-72 flex-1 overflow-y-auto">
        <div className="space-y-6 px-6 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">My Reports</h1>
              <p className="text-muted-foreground">
                Track, manage and update your vulnerability submissions
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20">
              <span>+</span>
              <span>Submit New Report</span>
            </button>
          </div>

          <div className="glass-hover rounded-xl p-6">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg bg-white/5 py-2 pl-10 pr-4 text-foreground placeholder-muted-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
                />
              </div>

              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="appearance-none rounded-lg bg-white/5 py-2 pl-3 pr-8 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <option>All Status</option>
                    <option>Accepted</option>
                    <option>Reviewing</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>

                <div className="relative">
                  <select
                    value={filterSeverity}
                    onChange={(e) => setFilterSeverity(e.target.value)}
                    className="appearance-none rounded-lg bg-white/5 py-2 pl-3 pr-8 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <option>All Severity</option>
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none rounded-lg bg-white/5 py-2 pl-3 pr-8 text-foreground outline-none transition-all duration-300 hover:bg-white/10 focus:bg-white/15 focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="reward">Sort by Reward</option>
                    <option value="severity">Sort by Severity</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>
            </div>

            <ReportsTable
              reports={reports}
              onEdit={setEditingReport}
              onDeleteClick={setDeleteConfirm}
            />
          </div>
        </div>
      </main>

      {editingReport && (
        <EditModal
          report={editingReport}
          onSave={handleSave}
          onClose={() => setEditingReport(null)}
        />
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass-hover rounded-xl p-6 shadow-2xl">
            <h3 className="mb-2 text-lg font-bold text-foreground">
              Delete Report?
            </h3>
            <p className="mb-6 text-muted-foreground">
              This action cannot be undone. The report {deleteConfirm} will be
              permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 rounded-lg bg-white/5 py-2 font-semibold text-foreground transition-all duration-300 hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 rounded-lg bg-red-500/20 py-2 font-semibold text-red-400 transition-all duration-300 hover:bg-red-500/30"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReportsPage;
