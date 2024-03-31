import { IoBrowsersOutline, IoLogoReact, IoTimeOutline } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/profle",
    icon: <IoBrowsersOutline size={20} />,
    title: "Inico",
  },
  {
    path: "/profile/horarios",
    icon: <IoTimeOutline size={20} />,
    title: "Horarios",
  },
];

export const Sidebar = () => {
  return (
    <div id="menu" className="left-0 z-10 min-h-screen text-black w-60 ">
      <div id="logo" className="flex items-center justify-between px-4 my-6">
        <h1 className="flex items-center gap-2 font-bold">
          <IoLogoReact />
          <span>Tajamar</span>
        </h1>
        <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full">J</div>
      </div>

      <div id="nav" className="w-full px-4">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
