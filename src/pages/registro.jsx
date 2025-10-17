
export default function Registro(){
    return (
      <nav>
        <ul>
          <p>Registro de Usuario</p>
        </ul>

        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required />
        <br />
        <br />

        <label for="email">Correo:</label>
        <input type="email" id="email" required />
        <br />
        <br />

        <label for="edad">Edad:</label>
        <input type="number" id="edad" required min="18" />
        <br />
        <br />

        <label for="password">Contraseña:</label>
        <input type="password" id="password" required minlength="6" />
        <br />
        <br />

        <button type="submit">Registrarse</button>
      </nav>
    )
}