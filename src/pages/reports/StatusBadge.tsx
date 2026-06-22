interface StatusBadgeProps {
  status: 'Accepted' | 'Reviewing' | 'Pending' | 'Rejected';
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const styles: Record<string, { bg: string; text: string; glow: string }> = {
    Accepted: {
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      glow: 'shadow-green-500/20',
    },
    Reviewing: {
      bg: 'bg-cyan-500/20',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20',
    },
    Pending: {
      bg: 'bg-gray-500/20',
      text: 'text-gray-300',
      glow: 'shadow-gray-500/20',
    },
    Rejected: {
      bg: 'bg-red-500/20',
      text: 'text-red-400',
      glow: 'shadow-red-500/20',
    },
  };

  const style = styles[status];

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${style.bg} ${style.text} shadow-lg ${style.glow}`}>
      {status}
    </span>
  );
}

export default StatusBadge