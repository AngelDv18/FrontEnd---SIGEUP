// src/components/SideBar.tsx
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaClipboardList, FaGraduationCap, FaFileAlt, FaPowerOff, FaCalendarAlt } from 'react-icons/fa';


export const Sidebar = () => {
  const location = useLocation();

  const links = [
    {
      path: "/alumno/inicio",
      label: "Inicio",
      icon: <FaHome />,
    },
    {
      path: "/alumno/horarios",
      label: "Horarios",
      icon: <FaCalendarAlt />,
    },
    {
      path: "/alumno/kardex",
      label: "Kardex",
      icon: <FaClipboardList />,
    },
    {
      path: "/alumno/calificaciones",
      label: "Calificaciones",
      icon: <FaGraduationCap />,
    },
    {
      path: "/alumno/reinscripciones",
      label: "Reinscripciones",
      icon: <FaFileAlt />,
    },
    {
      path: "/alumno/tramites",
      label: "Tramites",
      icon: <FaFileAlt />,
    },
    {
      path: "/",
      label: "Cerrar sesión",
      icon: <FaPowerOff />,
    },
  ];

  return (
    <nav className="w-60 bg-primary text-white font-semibold">
     <ul className="space-y-4 py-6 px-4">
  {links.map((link) => (
    <li key={link.path}>
      <Link
        to={link.path}
        className={`flex items-center gap-4 px-6 py-4 hover:bg-secondary hover:text-white rounded-normal ${location.pathname === link.path ? "bg-secondary text-white" : ""}`}
      >
        <span>{link.icon}</span>
        <span>{link.label}</span>
      </Link>
    </li>
  ))}
</ul>

    </nav>
  );
};