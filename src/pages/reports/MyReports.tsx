'use client';

import { useState, useMemo } from 'react';
import {
  FileText,
  CheckCircle,
  Clock,
  DollarSign,
  Edit2,
  Trash2,
  Search,
  Filter,
  ChevronDown,
  X,
  Save,
} from 'lucide-react';
import StatsCards from './StatsCards';
import ReportsTable from './ReportsTable';
import EditModal from './EditModal';
import Sidebar from '../dashboard/researcher_dashboard/Sidebar';

interface Report {
  id: string;
  program: string;
  vulnerability: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Accepted' | 'Reviewing' | 'Pending' | 'Rejected';
  reward: number;
  date: string;
}

const initialReports: Report[] = [
  {
    id: 'REP-001',
    program: 'Google Security Program',
    vulnerability: 'Stored XSS Vulnerability',
    severity: 'Critical',
    status: 'Accepted',
    reward: 5000,
    date: '21 Jun 2026',
  },
  {
    id: 'REP-002',
    program: 'Meta Bug Bounty',
    vulnerability: 'API Authentication Bypass',
    severity: 'High',
    status: 'Reviewing',
    reward: 2500,
    date: '20 Jun 2026',
  },
  {
    id: 'REP-003',
    program: 'Microsoft Security',
    vulnerability: 'Information Disclosure',
    severity: 'Medium',
    status: 'Pending',
    reward: 1000,
    date: '18 Jun 2026',
  },
  {
    id: 'REP-004',
    program: 'Apple Security Bounty',
    vulnerability: 'CSRF Token Validation',
    severity: 'High',
    status: 'Accepted',
    reward: 3500,
    date: '17 Jun 2026',
  },
  {
    id: 'REP-005',
    program: 'Amazon Bug Bounty',
    vulnerability: 'SQL Injection in Search',
    severity: 'Critical',
    status: 'Reviewing',
    reward: 4000,
    date: '16 Jun 2026',
  },
];

export default function MyReportsPage() {
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All Status');
  const [filterSeverity, setFilterSeverity] = useState<string>('All Severity');
  const [sortBy, setSortBy] = useState<string>('date');
  const [editingReport, setEditingReport] = useState<Report | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const filteredReports = useMemo(() => {
    let result = reports.filter((report) => {
      const matchesSearch =
        report.vulnerability.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filterStatus === 'All Status' || report.status === filterStatus;
      const matchesSeverity = filterSeverity === 'All Severity' || report.severity === filterSeverity;

      return matchesSearch && matchesStatus && matchesSeverity;
    });

    result.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'reward') {
        return b.reward - a.reward;
      } else if (sortBy === 'severity') {
        const severityOrder = { Critical: 4, High: 3, Medium: 2, Low: 1 };
        return severityOrder[b.severity as keyof typeof severityOrder] -
          severityOrder[a.severity as keyof typeof severityOrder];
      }
      return 0;
    });

    return result;
  }, [reports, searchTerm, filterStatus, filterSeverity, sortBy]);

  const handleSave = (updatedReport: Report) => {
    setReports(
      reports.map((report) => (report.id === updatedReport.id ? updatedReport : report))
    );
    setEditingReport(null);
  };

  const handleDelete = (id: string) => {
    setReports(reports.filter((report) => report.id !== id));
    setDeleteConfirm(null);
  };

  const stats = {
    total: reports.length,
    accepted: reports.filter((r) => r.status === 'Accepted').length,
    pending: reports.filter((r) => r.status !== 'Accepted' && r.status !== 'Rejected').length,
    earnings: reports
      .filter((r) => r.status === 'Accepted')
      .reduce((sum, r) => sum + r.reward, 0),
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
        <Sidebar/>
      <main className="ml-72 flex-1 overflow-y-auto">
        <div className="space-y-6 px-6 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">My Reports</h1>
              <p className="text-muted-foreground">Track, manage and update your vulnerability submissions</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20">
              <span>+</span>
              <span>Submit New Report</span>
            </button>
          </div>

          <StatsCards stats={stats} />

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
              reports={filteredReports}
              onEdit={setEditingReport}
              onDeleteClick={setDeleteConfirm}
            />

            {filteredReports.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <FileText className="mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-lg font-semibold text-foreground">No reports found</p>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {editingReport && <EditModal report={editingReport} onSave={handleSave} onClose={() => setEditingReport(null)} />}

      {deleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass-hover rounded-xl p-6 shadow-2xl">
            <h3 className="mb-2 text-lg font-bold text-foreground">Delete Report?</h3>
            <p className="mb-6 text-muted-foreground">This action cannot be undone. The report {deleteConfirm} will be permanently deleted.</p>
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
}
