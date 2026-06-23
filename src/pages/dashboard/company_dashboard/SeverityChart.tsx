import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Critical",
    value: 18,
  },
  {
    name: "High",
    value: 35,
  },
  {
    name: "Medium",
    value: 62,
  },
  {
    name: "Low",
    value: 41,
  },
];

const COLORS = [
  "#EF4444", // Critical
  "#F97316", // High
  "#EAB308", // Medium
  "#3B82F6", // Low
];

const SeverityChart = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div
      className="
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        p-6
        h-full
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Severity Distribution</h2>

        <p className="text-gray-400 text-sm mt-1">
          Vulnerabilities by severity level
        </p>
      </div>

      <div className="h-65">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center -mt-4 mb-5">
        <h3 className="text-3xl font-bold text-white">{total}</h3>

        <p className="text-gray-400 text-sm">Total Reports</p>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-gray-300">{item.name}</span>
            </div>

            <span className="text-white font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeverityChart;
