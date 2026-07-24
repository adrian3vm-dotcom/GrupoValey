import "../estilos/PiePagina.css";
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebook } from "react-icons/fa6";

const logo = "/grupo-valey/logo-blanco.webp";

export default function PiePagina() {
  return (
    <footer className="piePagina">

      <div className="piePaginaContenido">

        <a href="#inicio">
          <img
            src={logo}
            alt="Grupo Valey"
            className="piePaginaLogo"
          />
        </a>

        <nav className="piePaginaNav">
          <a href="#grupo">Grupo</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
          <a href="/politica-de-privacidad">
            Política de privacidad
          </a>
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
            targer="blank"
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