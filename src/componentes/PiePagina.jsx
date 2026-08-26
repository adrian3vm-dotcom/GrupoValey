import "../estilos/PiePagina.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebook
} from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";

const logo = "/grupo-valey/logo-blanco.webp";

export default function PiePagina() {

  const location = useLocation();

  const esHome = location.pathname === "/";

  return (
    <footer className="piePagina">

      <div className="piePaginaContenido">

        {esHome ? (
          <a href="#inicio">
            <img
              src={logo}
              alt="Grupo Valey"
              className="piePaginaLogo"
            />
          </a>
        ) : (
          <Link to="/">
            <img
              src={logo}
              alt="Grupo Valey"
              className="piePaginaLogo"
            />
          </Link>
        )}

        <nav className="piePaginaNav">

          {esHome ? (
            <>
              <a href="#grupo">Grupo</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
            </>
          ) : (
            <>
              <Link to="/">Inicio</Link>
              <Link to="/">Proyectos</Link>
              <Link to="/">Contacto</Link>
            </>
          )}

          <Link to="/politica-de-privacidad">
            Política de privacidad
          </Link>

        </nav>

        <div className="piePaginaRedes">

          <a
            href="https://www.instagram.com/grupovaley/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://www.facebook.com/GpoValey/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={22} />
          </a>

          <a
            href="https://www.linkedin.com/company/grupo-valey/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="https://wa.me/52TU_NUMERO"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>

        </div>

      </div>

      <div className="piePaginaLinea"></div>

      <p className="piePaginaCopyright">
        © 2026 Grupo Valey. Todos los derechos reservados.
      </p>

    </footer>
  );
}