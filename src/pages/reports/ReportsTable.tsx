'use client';

import { Edit2, Trash2 } from 'lucide-react';
import SeverityBadge from './SeverityBadge';
import StatusBadge from './StatusBadge';

interface Report {
  id: string;
  program: string;
  vulnerability: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Accepted' | 'Reviewing' | 'Pending' | 'Rejected';
  reward: number;
  date: string;
}

interface ReportsTableProps {
  reports: Report[];
  onEdit: (report: Report) => void;
  onDeleteClick: (id: string) => void;
}

export const ReportsTable = ({ reports, onEdit, onDeleteClick }: ReportsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-cyan-400/20">
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Report ID</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Program</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Vulnerability</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Severity</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Status</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Reward</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Date</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr
              key={report.id}
              className="border-b border-cyan-400/10 transition-all duration-200 hover:bg-white/5"
            >
              <td className="px-4 py-3">
                <span className="font-mono text-sm font-semibold text-cyan-400">{report.id}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground">{report.program}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">{report.vulnerability}</span>
              </td>
              <td className="px-4 py-3">
                <SeverityBadge severity={report.severity} />
              </td>
              <td className="px-4 py-3">
                <StatusBadge status={report.status} />
              </td>
              <td className="px-4 py-3">
                <span className="font-semibold text-emerald-400">${report.reward.toLocaleString()}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-muted-foreground">{report.date}</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(report)}
                    className="group relative rounded-lg bg-cyan-500/20 p-2 transition-all duration-300 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20"
                    title="Edit report"
                  >
                    <Edit2 className="h-4 w-4 text-cyan-400" />
                  </button>
                  <button
                    onClick={() => onDeleteClick(report.id)}
                    className="group relative rounded-lg bg-red-500/20 p-2 transition-all duration-300 hover:bg-red-500/30 hover:shadow-lg hover:shadow-red-500/20"
                    title="Delete report"
                  >
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportsTable
