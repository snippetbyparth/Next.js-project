import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/dashboard/dashboardheader";
import StatsCard from "@/components/dashboard/statscard";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <DashboardHeader />
          <div className="grid grid-cols-2 mt-5">
            <StatsCard title="Total Employees" value={2307} />
            <StatsCard title="Departments" value={23} />
            <StatsCard title="Active Employees" value={12} />
            <StatsCard title="New Employees" value={45} />
          </div>
        </main>
      </div>
    </>
  );
}
