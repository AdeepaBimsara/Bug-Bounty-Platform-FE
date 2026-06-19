import { ProgramsSection } from "./ProgramsSection";
import ReportsTable from "./ReportsTable";
import { Sidebar } from "./Sidebar";
import StatsCards from "./StatsCards";
import TopNav from "./TopNav";

export const DashMain = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
        
      <div className="hidden lg:block">
          <Sidebar />       
      </div>
    

      <TopNav />

      <main className="lg:ml-84 pt-20 lg:pt-25 pb-8">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10">
          <StatsCards />
          <ProgramsSection />
          <ReportsTable />
        </div>
      </main>
    </div>
  );
};

export default DashMain;
