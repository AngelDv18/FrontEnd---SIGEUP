import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import AlumnoRouter from './AlumnosRouter';  // Rutas del Alumno
import LoginRouter from './LoginRouter';  // Rutas de Login
import { MainLayout } from '../layout/MainLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Redirige la raíz (/) al login */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a Login */}

        {/* Rutas para el módulo Alumno */}
        
        <Route element={<MainLayout />}>
          <Route path="/alumno/*" element={<AlumnoRouter />} />
        </Route>

        {/* Rutas para el módulo Login */}
        <Route path="/login/*" element={<LoginRouter />} /> {/* Rutas del módulo Login */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
