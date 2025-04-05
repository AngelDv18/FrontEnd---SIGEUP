import { useState } from "react"
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import logo from "../../assets/Login/Logoupqroo.png"; // Ensure this path is correct

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate(); // Inicia el hook de navegación

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)

    // Aquí puedes agregar la lógica de autenticación (API, validación, etc.)
    // Después de una autenticación exitosa, rediriges al usuario
    navigate("/alumno/inicio"); // Ensure this route exists in your router configuration
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white text-black dark:bg-white dark:text-black">
      <div className="bg-white shadow-lg p-10 rounded-xl w-96">
        <div className="w-24 h-24 mx-auto mb-6 overflow-hidden">
          <img src={logo} alt="Logo UPQROO" className="w-full h-full object-contain" />
        </div>

        <h2 className="text-center text-2xl font-semibold mb-4 text-gray-700">
          Inicia sesión <span className="text-orange-500">SIGEUP</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Correo o matrícula"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <p className="text-sm text-blue-600 hover:underline cursor-pointer">
            ¿Olvidaste tu contraseña?
          </p>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Entrar
          </button>

          <p className="text-sm text-center">
            ¿No tienes cuenta?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">Crear cuenta</span>
          </p>
        </form>
      </div>
    </div>
  )
}
