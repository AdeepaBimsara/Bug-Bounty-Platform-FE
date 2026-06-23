import KPISection from "./KPISection";
import SecurityOverviewChart from "./SecurityOverviewChart";
import SeverityChart from "./SeverityChart";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className=" min-h-screen bg-[#0B0F19] text-white p-6">
      <div>
        <Sidebar />
      </div>

      <div className="mb-9 ml-64">
        <h1 className="text-4xl font-bold">Company Dashboard</h1>
        <p className="text-gray-400 mt-2">
          Monitor your bug bounty programs and vulnerability reports.
        </p>
      </div>

      <div className="ml-64">
        <KPISection />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-20 ml-64">
        <div className="lg:col-span-2">
          <SecurityOverviewChart />
        </div>
        <SeverityChart />
      </div>
    </div>
  );
};

export default Dashboard;
