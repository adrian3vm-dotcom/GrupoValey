import "../estilos/PiePagina.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const logo = "/grupo-valey/logo-blanco.png";
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
                    >
                        <FaInstagram size={22} />
                    </a>

                    <a
                        href="https://wa.me/52TU_NUMERO"
                        target="_blank"
                        rel="noreferrer"
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