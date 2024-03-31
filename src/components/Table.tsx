export const Table = () => {
  const data = [
    {
      nombre: "matematicas",
      tipo: "obligatoria",
      curso: "1º bachillerato",
      grupo: "B",
      horas: "5 h",
      espacio: "1º Bach - Grupo B",
    },
    {
      nombre: "matematicas",
      tipo: "obligatoria",
      curso: "2º bachillerato",
      grupo: "C",
      horas: "5 h",
      espacio: "2º Bach - Grupo C",
    },
    {
      nombre: "fisica y quimica",
      tipo: "obligatoria",
      curso: "4º ESO",
      grupo: "A",
      horas: "5 h",
      espacio: "Laboratorio",
    },
  ];
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
        {data.map((item, index) => (
          <tr key={index} className="grid grid-cols-7 gap-1 p-2 text-left">
            <td>{item.nombre}</td>
            <td>{item.tipo}</td>
            <td>{item.curso}</td>
            <td>{item.grupo}</td>
            <td>{item.horas}</td>
            <td>{item.espacio}</td>
            <td className="flex gap-1">
              <button>Ver</button>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
