import { useState } from "react";
import "../estilos/Encabezado.css";

function Encabezado() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="encabezado">

      <div className="logo-contenedor">
        <a href="#inicio" onClick={cerrarMenu}>
          <img
            src="/grupo-valey/logo-negro.webp"
            alt="Grupo Valey"
            className="logo"
          />
        </a>
      </div>

      {/* MENÚ ESCRITORIO */}

      <nav className="menu">

        <a href="#proyectos">
          CONSTRUCTORA
        </a>

        <a href="#proceso">
          SERVICIOS
        </a>

        <a href="#cobertura">
          PRESENCIA
        </a>

        <a href="#contacto">
          CONTACTO
        </a>

      </nav>

      <div className="acciones">

        <a href="#contacto">

          <button>

            COTIZAR

          </button>

        </a>

      </div>

      {/* BOTÓN HAMBURGUESA */}

      <button
        className="hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰
      </button>

      {/* MENÚ MÓVIL */}

      <div
        className={`menuMovil ${menuAbierto ? "activo" : ""}`}
      >

        <a href="#proyectos" onClick={cerrarMenu}>
          Constructora
        </a>

        <a href="#proceso" onClick={cerrarMenu}>
          Servicios
        </a>

        <a href="#cobertura" onClick={cerrarMenu}>
          Presencia
        </a>

        <a href="#contacto" onClick={cerrarMenu}>
          Contacto
        </a>

        <a
          href="#contacto"
          className="btnMenu"
          onClick={cerrarMenu}
        >
          Cotizar
        </a>

      </div>

    </header>
  );

}

export default Encabezado;