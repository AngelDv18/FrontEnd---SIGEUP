import React from 'react';
import TableHorarios from './TableHorarios'; // Importa el componente TableHorarios

const Horarios = () => {
  return (  
    <div className="flex">
      
      <div className="ml-64 p-8 w-full"> {/* Contenido principal con margen izquierdo para el sidebar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Horarios</h1>
          {/* Filtros: buscar, filtro y calendario */}
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Buscar Grupo"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <button className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              <i className="fas fa-filter"></i> Filtro
            </button>
            <button className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              <i className="fas fa-calendar-alt"></i> Calendario
            </button>
          </div>
        </div>

        {/* Aquí usas el componente TableHorarios */}
        <TableHorarios />

        {/* Paginación */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">Anterior</button>
          <span>1 de 11</span>
          <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Horarios;

