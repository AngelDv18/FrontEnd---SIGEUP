import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";  // Importamos Navigate
import SidebarAlumno from "../components/Alumno/SideBar";  // Sidebar para Alumno
import AlumnoRouter from "./AlumnosRouter";  // Rutas de Alumno
import LoginRouter from "./LoginRouter";  // Rutas de Login

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Redirige la raíz (/) al login */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a Login */}

        {/* Rutas para el módulo Alumno */}
        <Route path="/alumno/*" element={
          <>
            <SidebarAlumno /> {/* Sidebar específico para Alumno */}
            <div className="ml-64 p-8 w-full">
              <AlumnoRouter /> {/* Rutas del módulo Alumno */}
            </div>
          </>
        } />

        {/* Rutas para el módulo Login */}
        <Route path="/login/*" element={<LoginRouter />} /> {/* Rutas del módulo Login */}

        {/* Otras rutas pueden ir aquí */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
