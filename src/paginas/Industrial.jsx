import { HashLink } from "react-router-hash-link";

import industriales from "../datos/industrial";

import ProyectoCard from "../componentes/ProyectoCard";

import "../estilos/Industrial.css";

function Industrial() {
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

          PROYECTOS INDUSTRIALES

        </span>

        <h1>

          Infraestructura que
          impulsa industrias.

        </h1>

        <p>

          Conoce algunos de los proyectos industriales
          desarrollados por Grupo Valey.

        </p>

      </div>

      <div className="gridIndustrial">

        {industriales.map((proyecto) => (

          <ProyectoCard

            key={proyecto.id}

            proyecto={proyecto}

          />

        ))}

      </div>

    </section>
  );
}

export default Industrial;