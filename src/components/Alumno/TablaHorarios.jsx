import React from 'react';

const TableHorarios = () => {
  const horarios = [
    { grupo: '28BV', materia: 'COMPILADORES', carrera: 'Ing en software', clave: 'COIN 28BV', horario: 'Lunes - 10:00 AM' },
    { grupo: '28BV', materia: 'COMPILADORES', carrera: 'Ing en software', clave: 'COIN 28BV', horario: 'Martes - 12:00 PM' },
    { grupo: '28BV', materia: 'MATEMATICAS', carrera: 'Ing en software', clave: 'MAT 28BV', horario: 'Miércoles - 2:00 PM' },
    // Agrega más datos si es necesario
  ];

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-brown-700 text-white">
            <th className="px-4 py-2">Grupo</th>
            <th className="px-4 py-2">Materia</th>
            <th className="px-4 py-2">Carrera</th>
            <th className="px-4 py-2">Clave</th>
            <th className="px-4 py-2">Horario</th>
            <th className="px-4 py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{horario.grupo}</td>
              <td className="px-4 py-2">{horario.materia}</td>
              <td className="px-4 py-2">{horario.carrera}</td>
              <td className="px-4 py-2">{horario.clave}</td>
              <td className="px-4 py-2">{horario.horario}</td>
              <td className="px-4 py-2">
                <button className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  Descargar PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHorarios;
