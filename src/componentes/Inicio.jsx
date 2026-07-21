import "../estilos/Inicio.css";

function Inicio() {
  return (
    <section id="inicio" className="hero">

      <div className="overlay"></div>

      <div className="heroContenido">

        <p className="ubicacion">
          HERMOSILLO, SONORA 
        </p>

        <h1>
          CONSTRUIMOS
          <br />

          <span className="dorado">
            VALOR REAL 
          </span>
          <br />

            PARA TU INVERSION
        </h1>

        <p className="heroDescripcion">
          Más de 20 años transformando el noroeste de México con
          proyectos residenciales, comerciales e industriales llave en mano.
        </p>

        <div className="botones">

          <button className="btnBlanco">
            VER SERVICIOS
          </button>

          <button className="btnNegro">
            COTIZAR AHORA
          </button>

        </div>

      </div>

    </section>
  );
}

export default Inicio;