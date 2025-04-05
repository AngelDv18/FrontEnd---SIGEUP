// import React from 'react';
// import TableHorarios from '../../components/Alumno/TablaHorarios'; // Importa el componente de la tabla de horarios
// import { Link } from 'react-router-dom'; // Si deseas agregar enlaces de navegación

// const Horarios = () => {
//   return (
//     <div className="flex">    
//     <TableHorarios /> {/* Componente de la tabla de horarios */}
//     </div>
//   );
// };

// export default Horarios;

import React from 'react';
import { Table } from '../../components/Alumno/Table'; // Importa el componente de la tabla de horarios
import { studentsData } from '../../data/StudentsData';

 const Horarios = () => {
  
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Nombre", accessor: "nombre" },
    { header: "Apellido Paterno", accessor: "apellidoP" },
    { header: "Apellido Materno", accessor: "apellidoM" },
    { header: "Estatus", accessor: "estatus" },
    { header: "Cuatrimestre", accessor: "cuatrimestre" },
    { header: "Grupo", accessor: "grupo" },
    { header: "Promedio", accessor: "promedio" },
  ];

  return (  
    <div className="">
      <h2 className="pl-8 pb-2">Tabla Estudiantes</h2>
      <Table
        data={studentsData}
        columns={columns}
        showActions
        onView={(alumno) => alert(`Alumno: ${alumno.nombre}`)}
        onEdit={(alumno) => alert(`Editar: ${alumno.nombre}`)}
      />
    </div>
  );
};

export default Horarios;