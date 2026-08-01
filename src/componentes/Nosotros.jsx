import "../estilos/Nosotros.css";

function Nosotros() {
  return (
    <section className="nosotros">

      <div className="nosotrosImagen">

        <img
          src="/imagenes/nosotros/edificio-principal.webp"
          alt="Equipo de Grupo Valey durante una reunión de seguridad en obra"
        />

        <div className="infoProyecto">
        </div>

      </div>


      <div className="nosotrosTexto">

        <span className="subtitulo">
          NUESTRA HISTORIA
        </span>

        <h2>
          UN GRUPO <span>SÓLIDO</span> CON VISIÓN DE FUTURO
        </h2>

        <p>
          Grupo Valey nació en Hermosillo con el compromiso de
          desarrollar proyectos que transforman el entorno mediante
          soluciones de construcción de alta calidad, procesos
          eficientes y una ejecución impecable.
        </p>

        <p>
          Durante más de dos décadas hemos participado en
          desarrollos residenciales, industriales, comerciales e
          infraestructura, construyendo relaciones de confianza con
          cada cliente y entregando proyectos que perduran.
        </p>

        <a href="#proyectos" className="btnNosotros">
          VER PROYECTOS
        </a>

      </div>

    </section>
  );
}

export default Nosotros;