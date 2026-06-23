import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    submitted: 45,
    resolved: 30,
    pending: 15,
  },
  {
    month: "Feb",
    submitted: 70,
    resolved: 55,
    pending: 20,
  },
  {
    month: "Mar",
    submitted: 95,
    resolved: 75,
    pending: 25,
  },
  {
    month: "Apr",
    submitted: 120,
    resolved: 90,
    pending: 30,
  },
  {
    month: "May",
    submitted: 140,
    resolved: 115,
    pending: 25,
  },
  {
    month: "Jun",
    submitted: 165,
    resolved: 140,
    pending: 20,
  },
];

const SecurityOverviewChart = () => {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        p-6
        shadow-lg
      "
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Security Overview</h2>

          <p className="text-gray-400 text-sm mt-1">
            Vulnerability reports submitted and resolved
          </p>
        </div>

        <div className="bg-cyan-500/10 px-4 py-2 rounded-xl border border-cyan-500/20">
          <span className="text-cyan-400 text-sm">Last 6 Months</span>
        </div>
      </div>

      <div className="h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="submittedGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="resolvedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />

            <XAxis dataKey="month" stroke="#9CA3AF" />

            <YAxis stroke="#9CA3AF" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="submitted"
              stroke="#06B6D4"
              fill="url(#submittedGradient)"
              strokeWidth={3}
            />

            <Area
              type="monotone"
              dataKey="resolved"
              stroke="#8B5CF6"
              fill="url(#resolvedGradient)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-[#111827] rounded-xl p-4">
          <p className="text-gray-400 text-sm">Submitted</p>
          <h3 className="text-cyan-400 text-2xl font-bold">165</h3>
        </div>

        <div className="bg-[#111827] rounded-xl p-4">
          <p className="text-gray-400 text-sm">Resolved</p>
          <h3 className="text-purple-400 text-2xl font-bold">140</h3>
        </div>

        <div className="bg-[#111827] rounded-xl p-4">
          <p className="text-gray-400 text-sm">Resolution Rate</p>
          <h3 className="text-green-400 text-2xl font-bold">84.8%</h3>
        </div>
      </div>
    </div>
  );
};

export default SecurityOverviewChart;
