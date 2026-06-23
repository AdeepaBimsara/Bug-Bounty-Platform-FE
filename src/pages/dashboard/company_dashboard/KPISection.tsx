import KPICard from "./KPICard";

const KPISection = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
      <KPICard title="Active Programs" value="24" growth="+12%" />

      <KPICard title="Reports Submitted" value="1,248" growth="+18%" />

      <KPICard title="Resolved Reports" value="982" growth="+22%" />

      <KPICard title="Rewards Paid" value="$58,400" growth="+15%" />
    </div>
  );
};

export default KPISection;
