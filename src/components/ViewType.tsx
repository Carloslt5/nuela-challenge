import { useState } from "react";

export const ViewType = () => {
  const [viewType, setViewType] = useState("semanal");

  const handleViewTypeChange = (type: string) => {
    setViewType(type);
  };

  return (
    <ul className="flex items-start justify-center p-1 mx-auto mb-6 text-sm font-bold rounded-md bg-slate-300">
      <li
        className={`px-4 py-1 rounded-md cursor-pointer  transition-all ${
          viewType === "semanal" ? "bg-white" : ""
        }`}
        onClick={() => handleViewTypeChange("semanal")}
      >
        Semanal
      </li>
      <li
        className={`px-4 py-1 rounded-md cursor-pointer transition-all ${
          viewType === "anual" ? "bg-white" : ""
        }`}
        onClick={() => handleViewTypeChange("anual")}
      >
        Anual
      </li>
    </ul>
  );
};
