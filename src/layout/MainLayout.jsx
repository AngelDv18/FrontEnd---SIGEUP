import { Sidebar } from "../components/Alumno/SideBar";
import { Outlet } from "react-router-dom";

export const MainLayout = ({ children}) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 max-w-screen overflow-x-hidden">
        <div id="content-slot" className="px-16 py-8">
        <Outlet />
        </div>
      </div>
    </div>
  );
};