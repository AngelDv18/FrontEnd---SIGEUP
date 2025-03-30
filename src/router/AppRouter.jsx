import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../views/Login"
// Aquí irás agregando más vistas, por ejemplo:
// import Dashboard from "../views/Dashboard"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
