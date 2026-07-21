import { HashLink } from "react-router-hash-link";

import habitacionales from "../datos/habitacional";

import ProyectoCard from "../componentes/ProyectoCard";

import "../estilos/Industrial.css";

function Habitacional() {
  return (
    <section className="industrial">

      <div className="industrialHeader">

        <HashLink
          smooth
          to="/#proyectos"
          className="volver"
        >
          ← Volver
        </HashLink>

        <span className="subtitulo">
          PROYECTOS HABITACIONALES
        </span>

        <h1>
          Espacios diseñados
          <br />
          para vivir.
        </h1>

        <p>
          Conoce algunos de los proyectos habitacionales
          desarrollados por Grupo Valey.
        </p>

      </div>

      <div className="gridIndustrial">

        {habitacionales.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))}

      </div>

    </section>
  );
}

export default Habitacional;