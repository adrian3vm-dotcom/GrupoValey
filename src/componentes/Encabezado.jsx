import { useState, useEffect } from "react";
import "../estilos/Encabezado.css";

function Encabezado() {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  useEffect(() => {

    const manejarScroll = () => {

      setScrolled(window.scrollY > 60);

    };

    window.addEventListener(
      "scroll",
      manejarScroll,
      {
        passive: true
      }
    );

    manejarScroll();

    return () => {

      window.removeEventListener(
        "scroll",
        manejarScroll
      );

    };

  }, []);

  return (

    <header
      className={`encabezado ${
        scrolled ? "scrolled" : ""
      }`}
    >

      {/* =====================================================
          LOGO
          ===================================================== */}

      <div className="logo-contenedor">

        <a
          href="#inicio"
          onClick={cerrarMenu}
        >

          <img
            src={
              scrolled
                ? "/grupo-valey/logo-negro.webp"
                : "/grupo-valey/logo--blanco.webp"
            }
            alt="Grupo Valey"
            className="logo"
          />

        </a>

      </div>


      {/* =====================================================
          MENÚ ESCRITORIO
          ===================================================== */}

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


      {/* =====================================================
          BOTÓN HAMBURGUESA
          ===================================================== */}

      <button
        className="hamburguesa"
        onClick={() =>
          setMenuAbierto(!menuAbierto)
        }
        aria-label="Abrir menú"
      >

        ☰

      </button>


      {/* =====================================================
          MENÚ MÓVIL
          ===================================================== */}

      <div
        className={`menuMovil ${
          menuAbierto ? "activo" : ""
        }`}
      >

        <a
          href="#proyectos"
          onClick={cerrarMenu}
        >
          Constructora
        </a>

        <a
          href="#proceso"
          onClick={cerrarMenu}
        >
          Servicios
        </a>

        <a
          href="#cobertura"
          onClick={cerrarMenu}
        >
          Presencia
        </a>

        <a
          href="#contacto"
          onClick={cerrarMenu}
        >
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