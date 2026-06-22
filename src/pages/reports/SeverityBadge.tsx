interface SeverityBadgeProps {
  severity: "Critical" | "High" | "Medium" | "Low";
}

export const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  const styles: Record<string, { bg: string; text: string; glow: string }> = {
    Critical: {
      bg: "bg-red-500/20",
      text: "text-red-400",
      glow: "shadow-red-500/20",
    },
    High: {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      glow: "shadow-orange-500/20",
    },
    Medium: {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      glow: "shadow-yellow-500/20",
    },
    Low: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
  };

  const style = styles[severity];

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${style.bg} ${style.text} shadow-lg ${style.glow}`}
    >
      {severity}
    </span>
  );
};

export default SeverityBadge;
