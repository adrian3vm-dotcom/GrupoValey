import "../estilos/Cobertura.css";

function Cobertura() {
  return (
    <section className="cobertura" id="cobertura">
      <div className="coberturaContenido">

        <div className="coberturaInfo">

          <span className="coberturaSubtitulo">
            PRESENCIA NACIONAL
          </span>

          <h2>
            Trayectoria que
            <br />
            construye <em>confianza.</em>
          </h2>

          <p className="coberturaTexto">
            Cada uno de nuestros proyectos se desarrolla bajo
            estándares de calidad y eficiencia operativa. Nuestra
            experiencia a lo largo de más de dos décadas nos ha
            permitido consolidar procesos sólidos y adaptables a las
            necesidades de cada proyecto.
          </p>

          <div className="coberturaNumeros">

            <div className="coberturaDato">
              <strong>+20</strong>
              <span>
                AÑOS DE
                <br />
                EXPERIENCIA
              </span>
            </div>

            <div className="coberturaDato">
              <strong>+150</strong>
              <span>
                OBRAS
                <br />
                EJECUTADAS
              </span>
            </div>

            <div className="coberturaDato">
              <strong>+55 mil</strong>
              <span>
                M²
                <br />
                CONSTRUIDOS
              </span>
            </div>

          </div>

        </div>

        <div className="coberturaMapa">

          <div className="mapaContenedor">

            <img
              src="/mapa-mexico.png"
              alt="Presencia de Grupo Valey en México"
              className="mapaMexico"
            />

          </div>
        

          <div className="estadosCobertura">
            <span>Baja California</span>
            <span>Sonora</span>
            <span>Chihuahua</span>
            <span>Sinaloa</span>
            <span>Jalisco</span>
            <span>Querétaro</span>
            <span>Nuevo León</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Cobertura;