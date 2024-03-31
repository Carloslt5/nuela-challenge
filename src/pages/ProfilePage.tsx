import { IoAdd } from "react-icons/io5";
import { SimpleWidget } from "../components/SimpleWidget";
import { Table } from "../components/Table";
import { UserInfo } from "../components/UserInfo";

export const ProfilePage = () => {
  return (
    <main className=" w-[95%] max-w-[1200px] bg-red-200 mx-auto">
      <section>
        <h1 className="mb-2 text-xl font-bold">Profesores</h1>
        <h2 className="text-sm">Crea y gestiona los profesores</h2>
        <UserInfo />
      </section>

      <section className="flex flex-col items-start justify-center pb-2 border-b border-gray-500">
        <ul className="flex items-start justify-center p-1 mx-auto mb-6 text-sm font-bold rounded-md bg-slate-300">
          <li className="px-4 py-1 bg-white rounded-md">Semanal</li>
          <li className="px-4 py-1 rounded-md">Anual</li>
        </ul>
        <div className="grid w-full grid-cols-3 gap-2">
          <SimpleWidget title="Horas totales" value={20} />
          <SimpleWidget title="Horas lectivas" value={20} />
          <SimpleWidget title="Horas complementarioas" value={20} />
        </div>
      </section>

      <section>
        <button className="flex items-center px-4 py-2 my-4 ml-auto font-bold text-gray-800 bg-gray-300 rounded-md">
          <IoAdd size={20} />
          <span>Añadir Asignatura</span>
        </button>
        <Table />
      </section>
    </main>
  );
};
