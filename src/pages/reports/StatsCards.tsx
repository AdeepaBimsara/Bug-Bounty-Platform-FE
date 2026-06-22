import { FileText, CheckCircle, Clock, DollarSign } from 'lucide-react';

interface StatsCardsProps {
  stats: {
    total: number;
    accepted: number;
    pending: number;
    earnings: number;
  };
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  const cards = [
    {
      label: 'Total Reports',
      value: stats.total,
      icon: FileText,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
    },
    {
      label: 'Accepted Reports',
      value: stats.accepted,
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      label: 'Pending Review',
      value: stats.pending,
      icon: Clock,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
    },
    {
      label: 'Total Earnings',
      value: `$${stats.earnings.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className="glass-hover group rounded-xl p-6 transition-all duration-300"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-muted-foreground">{card.label}</h3>
              <div className={`${card.bgColor} rounded-lg p-2 transition-all duration-300 group-hover:scale-110`}>
                <Icon className={`h-5 w-5 ${card.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-foreground">{card.value}</p>
            <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400/50 to-transparent" />
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards