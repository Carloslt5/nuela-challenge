import { Link, useLocation } from "react-router-dom";

type SidebarMenuItemProps = {
  path: string;
  icon: JSX.Element;
  title: string;
};

export const SidebarMenuItem = ({ path, icon, title }: SidebarMenuItemProps) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={`w-full py-2 px-1 mb-2 inline-flex space-x-2 rounded-md items-centerpy-3 hover:bg-slate-200 transition ease-linear duration-150 text-black ${
        pathname === path ? "bg-gray-300" : ""
      }`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm font-bold leading-5">{title}</span>
      </div>
    </Link>
  );
};
