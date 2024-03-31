import { CourseGroup, CourseHours, CourseType } from "../constants/Couses.const";
import { Subject, SubjectSpace, SubjectType } from "../constants/Subjects.const";

export const FormPage = () => {
  return (
    <form className="w-full max-w-lg p-4 mx-auto mt-5 bg-white rounded-md">
      <h1 className="mb-4">Añadir asignatura</h1>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Selecciona la asignatura
        </label>
        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md">
          <option disabled selected>
            Selecciona una asignatura
          </option>

          {Subject.map((asignatura, index) => (
            <option key={index}>{asignatura}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Tipo de asignatura</label>
        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md">
          <option disabled selected>
            Selecciona el tipo
          </option>

          {SubjectType.map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Curso</label>
        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md">
          <option disabled selected>
            Selecciona el curso
          </option>

          {Object.values(CourseType).map((course, index) => (
            <option key={index}>{course}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Grupo</label>
        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md">
          <option disabled selected>
            Selecciona el grupo
          </option>

          {Object.values(CourseGroup).map((course, index) => (
            <option key={index}>{course}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Horas</label>
        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md">
          <option disabled selected>
            Selecciona las horas
          </option>

          {CourseHours.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Espacio</label>
        <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md">
          <option disabled selected>
            Selecciona el espacio
          </option>

          {Object.entries(SubjectSpace).flatMap(([course, value]) => {
            if (Array.isArray(value)) {
              return value.map((group) => (
                <option key={`${course}-${group}`} value={`${course} - Grupo ${group}`}>
                  {`${course} - Grupo ${group}`}
                </option>
              ));
            } else {
              return (
                <option key={course} value={value}>
                  {value}
                </option>
              );
            }
          })}
        </select>
      </div>

      <button
        type="submit"
        className="flex items-center px-4 py-2 my-4 ml-auto font-bold text-gray-800 bg-gray-300 rounded-md"
      >
        Añadir asignatura
      </button>
    </form>
  );
};
