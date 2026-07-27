import "../estilos/Nosotros.css";

function Nosotros() {
  return (
    <section className="nosotros">

      <div className="nosotrosImagen">

        <img
          src="/imagenes/nosotros/edificio-principal.webp"
          alt="Edificio Grupo Valey"
        />

        <div className="infoProyecto">

        </div>

      </div>

      <div className="nosotrosTexto">

        <span className="subtitulo">
          NUESTRA HISTORIA
        </span>

        <h2>
          Un grupo <span>sólido</span> con visión de futuro
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