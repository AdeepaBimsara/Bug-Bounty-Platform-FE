'use client';

import { CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';

interface Report {
  id: string;
  program: string;
  vulnerability: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Reviewing' | 'Accepted' | 'Rejected';
  reward: string;
}

const reports: Report[] = [
  {
    id: '1',
    program: 'TechCorp',
    vulnerability: 'SQL Injection in Login',
    severity: 'Critical',
    status: 'Accepted',
    reward: '$5,000',
  },
  {
    id: '2',
    program: 'SecureCloud',
    vulnerability: 'CORS Misconfiguration',
    severity: 'High',
    status: 'Reviewing',
    reward: '$2,500',
  },
  {
    id: '3',
    program: 'DataVault',
    vulnerability: 'Weak Password Policy',
    severity: 'Medium',
    status: 'Pending',
    reward: '$1,000',
  },
  {
    id: '4',
    program: 'NetworkPro',
    vulnerability: 'Exposed API Keys',
    severity: 'Critical',
    status: 'Accepted',
    reward: '$8,000',
  },
  {
    id: '5',
    program: 'TechCorp',
    vulnerability: 'Information Disclosure',
    severity: 'High',
    status: 'Rejected',
    reward: '$0',
  },
  {
    id: '6',
    program: 'SecureCloud',
    vulnerability: 'Rate Limiting Bypass',
    severity: 'Medium',
    status: 'Reviewing',
    reward: '$1,500',
  },
];

const SeverityBadge = ({ severity }: { severity: Report['severity'] }) => {
  const colors = {
    Critical: 'bg-red-400/20 text-red-400 border-red-400/30',
    High: 'bg-orange-400/20 text-orange-400 border-orange-400/30',
    Medium: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
    Low: 'bg-blue-400/20 text-blue-400 border-blue-400/30',
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold border ${colors[severity]}`}>
      {severity}
    </span>
  );
}

const StatusBadge = ({ status }: { status: Report['status'] }) => {
  const statusConfig = {
    Pending: {
      icon: Clock,
      bg: 'bg-gray-400/20 text-gray-400 border-gray-400/30',
    },
    Reviewing: {
      icon: AlertCircle,
      bg: 'bg-blue-400/20 text-blue-400 border-blue-400/30',
    },
    Accepted: {
      icon: CheckCircle,
      bg: 'bg-green-400/20 text-green-400 border-green-400/30',
    },
    Rejected: {
      icon: XCircle,
      bg: 'bg-red-400/20 text-red-400 border-red-400/30',
    },
  };

  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded border text-xs font-semibold ${config.bg}`}>
      <IconComponent className="w-3.5 h-3.5" />
      {status}
    </div>
  );
}

export const ReportsTable = () => {
  return (
    <div className="glassmorphism-dark cyber-border">
      <div className="p-6 border-b border-cyan-400/10">
        <h2 className="text-xl font-bold text-white">Recent Reports</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-cyan-400/10">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Program
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Vulnerability
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Severity
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">
                Reward
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b border-cyan-400/10 hover:bg-cyan-400/5 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-cyan-400 font-medium">
                  {report.program}
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  {report.vulnerability}
                </td>
                <td className="px-6 py-4 text-sm">
                  <SeverityBadge severity={report.severity} />
                </td>
                <td className="px-6 py-4 text-sm">
                  <StatusBadge status={report.status} />
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-cyan-400">
                  {report.reward}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default ReportsTable