import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../views/Login/Login'; // Componente de Login

const LoginRouter = () => {
  return (
    <Routes>  {/* Envolvemos las rutas con <Routes> */}
      <Route path="/" element={<Login />} /> {/* Ruta para el Login */}
    </Routes>
  );
};

export default LoginRouter;
