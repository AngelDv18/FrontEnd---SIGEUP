import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Asegúrate de importar Routes y Route

import Horarios from '../views/Alumno/Horarios';  // Vista de Horarios para Alumno

const AlumnoRouter = () => {
  return (
    <Routes>  {/* Asegúrate de envolver las rutas con <Routes> */}
      <Route path="/horarios" element={<Horarios />} />
    </Routes>
  );
};

export default AlumnoRouter;
