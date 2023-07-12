import "./login.css";
export default function login() {
    return (
        <div>
             <h2>Iniciar sesión</h2>
      
      <form>
        <label htmlFor="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" required /><br /><br />
        
        <label htmlFor="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required /><br /><br />
        
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
}