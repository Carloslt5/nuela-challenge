import { useContext } from "react";
import { CourseContext } from "../contexts/courses.context";
import { Course } from "../types/Courses.types";

type TableProps = {
  courses: Course[];
};

export const Table = ({ courses }: TableProps) => {
  const { deleteCourseByID } = useContext(CourseContext);

  return (
    <table className="w-full overflow-hidden bg-white rounded-xl">
      <thead className="w-full text-xs text-gray-500 uppercase bg-gray-50 ">
        <tr className="grid grid-cols-7 gap-1 p-2 text-left ">
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Curso</th>
          <th>Grupo</th>
          <th>Horas semanales</th>
          <th>Espacio Regular</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((item, index) => (
          <tr key={index} className="grid grid-cols-7 gap-1 p-2 text-left">
            <td>{item.nombre}</td>
            <td>{item.tipo}</td>
            <td>{item.curso}</td>
            <td>{item.grupo}</td>
            <td>{item.horas_semanales} h</td>
            <td>{item.espacio_regular}</td>
            <td className="flex flex-wrap gap-1 text-sm">
              <button className="text-nuela-primary">Ver</button>
              <button className="text-nuela-primary">Editar</button>
              <button className="text-red-500" onClick={() => deleteCourseByID(item.id!)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
