interface Props {
  title: string;
  value: string;
  growth: string;
}

const KPICard = ({ title, value, growth }: Props) => {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-2xl
      p-5
      hover:border-cyan-500/40
      transition-all
    "
    >
      <p className="text-gray-400 text-sm">{title}</p>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>

      <span className="text-green-400 text-sm">{growth}</span>
    </div>
  );
};

export default KPICard;
