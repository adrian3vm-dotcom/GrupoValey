import "../estilos/Encabezado.css";

function Encabezado() {
  return (
    <header className="encabezado">

      <div className="logo-contenedor">
        <a href="#inicio">
          <img
            src="/grupo-valey/logo-negro.webp"
            alt="Grupo Valey"
            className="logo"
          />
        </a>
      </div>

      <nav className="menu">
        <a href="#proyectos">CONSTRUCTORA</a>
        <a href="#proceso">SERVICIOS</a>
        <a href="#cobertura">PRESENCIA</a>
        <a href="#contacto">CONTACTO</a>
      </nav>

      <div className="acciones">
        <a href="#contacto">
          <button>COTIZAR</button>
        </a>
      </div>

    </header>
  );
}

export default Encabezado;