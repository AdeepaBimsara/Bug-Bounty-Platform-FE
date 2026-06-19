import { FileText, CheckCircle, DollarSign, Zap } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const StatCard = ({ icon, label, value }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold text-cyan-400">{value}</p>
    </div>
  );
}

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        icon={<FileText className="w-6 h-6 text-cyan-400" />}
        label="Total Reports"
        value="24"
      />
      <StatCard
        icon={<CheckCircle className="w-6 h-6 text-cyan-400" />}
        label="Accepted Bugs"
        value="15"
      />
      <StatCard
        icon={<DollarSign className="w-6 h-6 text-cyan-400" />}
        label="Total Earnings"
        value="$2,450"
      />
      <StatCard
        icon={<Zap className="w-6 h-6 text-cyan-400" />}
        label="Reputation Score"
        value="890"
      />
    </div>
  );
}

export default StatsCards
