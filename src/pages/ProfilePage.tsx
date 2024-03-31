import { useContext } from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SimpleWidget } from "../components/SimpleWidget";
import { Table } from "../components/Table";
import { UserInfo } from "../components/UserInfo";
import { ViewType } from "../components/ViewType";
import { CourseContext } from "../contexts/courses.context";

export const ProfilePage = () => {
  const { totalHours, courses } = useContext(CourseContext);

  return (
    <main className=" w-[95%] max-w-[1200px] mx-auto">
      <section>
        <h1 className="mb-2 text-xl font-bold">Profesores</h1>
        <h2 className="text-sm">Crea y gestiona los profesores</h2>
        <UserInfo />
      </section>

      <section className="flex flex-col items-start justify-center pb-2 border-b border-gray-500">
        <ViewType />

        <div className="grid w-full grid-cols-3 gap-2">
          <SimpleWidget title="Horas totales" value={totalHours} />
          <SimpleWidget title="Horas lectivas" value={0} />
          <SimpleWidget title="Horas complementarioas" value={0} />
        </div>
      </section>

      <section>
        <Link
          to={"/perfil/add"}
          className="flex items-center gap-2 px-4 py-2 my-4 ml-auto text-white rounded-md bg-nuela-primary w-fit"
        >
          <IoAdd size={20} />
          <span>Añadir Asignatura</span>
        </Link>
        <Table courses={courses} />
      </section>
    </main>
  );
};
