import React from 'react';
import { Link } from 'react-router-dom'; // Para manejar las rutas internas

const SidebarAlumno = () => {
  return (
    <div className="w-64 bg-orange-600 text-white h-screen p-5 fixed">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">SIGEUP</h1>
      </div>
      <ul>
        <li>
          <Link to="/alumno/inicio" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-home mr-2"></i> Inicio
          </Link>
        </li>
        <li>
          <Link to="/alumno/horario" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-home mr-2"></i> Horario
          </Link>
        </li>
        <li>
          <Link to="/alumno/kardex" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-book mr-2"></i> Kardex
          </Link>
        </li>
        <li>
          <Link to="/alumno/calificaciones" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-graduation-cap mr-2"></i> Calificaciones
          </Link>
        </li>
        <li>
          <Link to="/alumno/reinscripciones" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-user-plus mr-2"></i> Reinscripciones
          </Link>
        </li>
        <li>
          <Link to="/alumno/tramites" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-cogs mr-2"></i> Trámites
          </Link>
        </li>
        <li>
          <Link to="/alumno/cerrar-sesion" className="flex items-center p-3 mb-3 rounded-lg hover:bg-orange-700">
            <i className="fas fa-sign-out-alt mr-2"></i> Cerrar sesión
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAlumno;
