import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (pass === "75734881") {
      const userData = {
        email: user.trim().toLowerCase(),
        name: user.split("@")[0] || "Usuario"
      };

      try {
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('Usuario guardado:', userData);
        navigate("/dashboard");
      } catch (error) {
        console.error('Error al guardar usuario:', error);
        alert('Error al iniciar sesión');
      }
    } else {
      alert("Constraseña incorrecta");
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <img src="/img/logo.png" alt="logo" />
        <p className="slogan" >“Innovación, confianza y un cuidado integral diseñado para cada etapa de tu vida.”</p>
      </div>

      <div className="right-panel">
        <form onSubmit={handleLogin}>
          <h2 className="right-panel-text">Iniciar Sesión</h2>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;