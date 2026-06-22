import { Edit2, Trash2 } from "lucide-react";

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

interface ReportsTableProps {
  reports: Report[];
  onEdit: (report: Report) => void;
  onDeleteClick: (id: string) => void;
}

export const ReportsTable = ({
  reports,
  onEdit,
  onDeleteClick,
}: ReportsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-cyan-400/20">
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              Report ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              program ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              program Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              Title
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              severity
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              description
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr
              key={report._id}
              className="border-b border-cyan-400/10 transition-all duration-200 hover:bg-white/5"
            >
              <td className="px-4 py-3">
                <span className="font-mono text-sm font-semibold text-cyan-400">
                  {report._id}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground">
                  {report.programId}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">
                  {report.programName}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">
                  {report.title}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">
                  {report.severity}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">
                  {report.description}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">
                  {report.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-foreground max-w-xs truncate block">
                  {report.createdAt}
                </span>
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
                    onClick={() => onDeleteClick(report._id)}
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
};

export default ReportsTable;
