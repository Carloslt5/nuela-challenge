import { Sidebar } from "./Sidebar";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-y-scroll antialiased bg-slate-100 text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex ">
        <Sidebar />
        <div className="flex-grow p-2 text-black bg-slate-200">{children}</div>
      </div>
    </div>
  );
};
