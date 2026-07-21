import "../estilos/Encabezado.css";

function Encabezado() {
  return (
    <header className="encabezado">

      <div className="logo-contenedor">
        <img
          src="/grupo-valey/logo-negro.png"
          alt="Grupo Valey"
          className="logo"
        />
        
      </div>

      <nav className="menu">
        <a href="#">CONSTRUCTORA</a>
        <a href="#">SERVICIOS</a>
        <a href="#">PRESENCIA</a>
        <a href="#">CONTACTO</a>
      </nav>

      <div className="acciones">
        <button>COTIZAR</button>
      </div>

    </header>
  );
}

export default Encabezado;
