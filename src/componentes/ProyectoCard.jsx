import "../estilos/ProyectoCard.css";

function ProyectoCard({ proyecto }) {
  return (
    <article className="proyectoCard">

      <div className="imagenContainer">

        <img
          src={proyecto.imagen}
          alt={proyecto.cliente}
          className="imagenProyecto"
        />

        <div className="overlay">

          <div className="info">

            <p>{proyecto.ubicacion}</p>

            <p>{proyecto.area}</p>

            <p>{proyecto.anio}</p>

          </div>

        </div>

      </div>

      <div className="logoContainer">

        <img
          src={proyecto.logo}
          alt={proyecto.cliente}
          className="logoProyecto"
        />

      </div>

    </article>
  );
}

export default ProyectoCard;