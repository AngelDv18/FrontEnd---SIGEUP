import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaClipboardList, FaUserGraduate, FaPowerOff } from 'react-icons/fa';

export const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      path: "/inicio",
      label: "Inicio",
      icon: <FaHome />,
    },
    {
      path: "/materias",
      label: "Materias",
      icon: <FaBook />, // Icono para Materias
    },
    {
      path: "/grupos",
      label: "Grupos",
      icon: <FaClipboardList />, // Icono para Grupos
    },
    {
      path: "/asignaciones",
      label: "Asignaciones",
      icon: <FaUserGraduate />, // Icono para Asignaciones
    },
    {
      path: "/plan-estudio",
      label: "Plan de Estudio",
      icon: <FaBook />, // Icono para Plan de Estudio (también un libro)
    },
    {
      path: "/cerrar-sesion",
      label: "Cerrar sesión",
      icon: <FaPowerOff />, // Icono de Cerrar sesión
    },
  ];

  return (
    <nav className="w-60 bg-orange-600 text-white font-semibold">
      <ul className="space-y-4 py-6 px-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-orange-700 hover:text-white rounded-lg ${location.pathname === link.path ? "bg-orange-700 text-white" : ""}`}
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
