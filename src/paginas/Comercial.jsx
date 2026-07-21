import { HashLink } from "react-router-hash-link";

import comerciales from "../datos/comercial";

import ProyectoCard from "../componentes/ProyectoCard";

import "../estilos/Industrial.css";

function Comercial() {
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
          PROYECTOS COMERCIALES
        </span>

        <h1>
          Espacios que conectan
          <br />
          negocios y personas.
        </h1>

        <p>
          Conoce algunos de los proyectos comerciales
          desarrollados por Grupo Valey.
        </p>

      </div>

      <div className="gridIndustrial">

        {comerciales.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))}

      </div>

    </section>
  );
}

export default Comercial;