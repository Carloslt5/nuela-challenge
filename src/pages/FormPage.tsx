import { AllCourses, AllGroups, AllHours } from "../constants/Couses.const";
import { AllSpace, AllSubjects, AllSubjectsType } from "../constants/Subjects.const";
import { useCourse } from "../hooks/useCourse.hook";

export const FormPage = () => {
  const { register, handleSubmit, onSubmit } = useCourse();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg p-4 mx-auto mt-5 bg-white rounded-md"
    >
      <h1 className="mb-4">Añadir asignatura</h1>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Selecciona la asignatura
        </label>
        <select
          {...register("nombre")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
          required
        >
          {AllSubjects.map((asignatura, index) => (
            <option key={index}>{asignatura}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Tipo de asignatura</label>
        <select
          {...register("tipo")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
          required
        >
          {AllSubjectsType.map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Curso</label>
        <select
          {...register("curso")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
          required
        >
          {AllCourses.map((course, index) => (
            <option key={index}>{course}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Grupo</label>
        <select
          {...register("grupo")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
          required
        >
          {AllGroups.map((group, index) => (
            <option key={index}>{group}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Horas</label>
        <select
          {...register("horas_semanales")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
          required
        >
          {AllHours.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
      </div>

      <div className="w-full mb-6 ">
        <label className="block mb-2 text-sm font-medium text-gray-900">Espacio</label>
        <select
          {...register("espacio_regular")}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
          required
        >
          {Object.entries(AllSpace).flatMap(([course, value]) => {
            return value.map((group) => (
              <option key={`${course}-${group}`} value={`${course} - Grupo ${group}`}>
                {`${course} - Grupo ${group}`}
              </option>
            ));
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
