import { Link } from "react-router-dom";
import "../estilos/Proyectos.css";

function Proyectos() {

  return (

    <section
  id="proyectos"
  className="proyectos"
>
    

      <div className="fondoOscuro"></div>

      <div className="proyectosHeader">

        <span className="subtituloProyectos">

          NUESTROS PROYECTOS

        </span>

        <h2>

          Experiencia que se
          <br />
          construye.

        </h2>

        <p>

          Conoce algunos de los proyectos desarrollados por Grupo Valey
          en los sectores industrial, comercial y habitacional.

        </p>

      </div>

      <div className="categorias">

        <Link to="/proyectos/industrial">
          <button>
            Industrial
          </button>
        </Link>

        <Link to="/proyectos/comercial">
          <button>
            Comercial
          </button>
        </Link>

        <Link to="/proyectos/habitacional">
          <button>
            Habitacional
          </button>
        </Link>

      </div>

    </section>

  );

}

export default Proyectos;