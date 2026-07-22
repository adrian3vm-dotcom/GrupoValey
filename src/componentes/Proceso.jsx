import { useState } from "react";
import "../estilos/Proceso.css";

const procesos = [
  {
    id: 1,
    icono: "🔍",
    titulo: "Selección de Sitio",
    descripcion:
      "Analizamos la ubicación ideal considerando uso de suelo, accesos, factibilidad de servicios, normativas y potencial de inversión para asegurar el éxito del proyecto.",
    puntos: [
      "Análisis del terreno",
      "Factibilidad",
      "Uso de suelo",
      "Servicios disponibles",
      "Viabilidad financiera",
    ],
    imagen: "/imagenes/proceso/01.webp",
  },

  {
    id: 2,
    icono: "📐",
    titulo: "Diseño",
    descripcion:
      "Desarrollamos propuestas arquitectónicas y de ingeniería buscando funcionalidad, estética y optimización de costos.",
    puntos: [
      "Arquitectura",
      "Ingenierías",
      "Modelado 3D",
      "Coordinación",
      "Presupuesto",
    ],
    imagen: "/imagenes/proceso/02.webp",
  },

  {
    id: 3,
    icono: "🏗",
    titulo: "Proyecto Ejecutivo",
    descripcion:
      "Generamos toda la documentación técnica para ejecutar la obra con precisión.",
    puntos: [
      "Planos ejecutivos",
      "Detalles constructivos",
      "Especificaciones",
      "Catálogo de conceptos",
      "Cuantificaciones",
    ],
    imagen: "/imagenes/proceso/03.webp",
  },

  {
    id: 4,
    icono: "📄",
    titulo: "Tramitología",
    descripcion:
      "Gestionamos permisos, licencias y autorizaciones necesarias para desarrollar el proyecto.",
    puntos: [
      "Permisos",
      "Licencias",
      "Gestiones",
      "Municipio",
      "Dependencias",
    ],
    imagen: "/imagenes/proceso/04.webp",
  },

  {
    id: 5,
    icono: "🏢",
    titulo: "Construcción",
    descripcion:
      "Ejecutamos la obra con supervisión constante, control de calidad y altos estándares.",
    puntos: [
      "Supervisión",
      "Control de calidad",
      "Seguridad",
      "Avances",
      "Entrega",
    ],
    imagen: "/imagenes/proceso/05.webp",
  },

  {
    id: 6,
    icono: "🔧",
    titulo: "Mantenimiento",
    descripcion:
      "Continuamos respaldando nuestros proyectos mediante mantenimiento preventivo y correctivo.",
    puntos: [
      "Preventivo",
      "Correctivo",
      "Garantías",
      "Seguimiento",
      "Soporte",
    ],
    imagen: "/imagenes/proceso/06.webp",
  },
];

function Proceso() {

  const [activo, setActivo] = useState(null);

  const seleccionar = (item) => {

    if (activo?.id === item.id) {

      setActivo(null);

    } else {

      setActivo(item);

    }

  };

  const porcentaje = activo
    ? ((activo.id - 1) / (procesos.length - 1)) * 100
    : 0;

  const obtenerClase = (item) => {

    if (!activo) return "paso";

    if (item.id === activo.id) return "paso activo";

    if (item.id < activo.id) return "paso izquierda";

    return "paso derecha";

  };

  return (
        <section id="proceso" className="proceso">

      <div className="procesoHeader">

        <span className="subtituloProceso">
          NUESTRO PROCESO
        </span>

        <h2>
          Nos encargamos de todo el proceso.
          <br />
          
        </h2>

        <p>
          Desde la selección del terreno hasta la entrega del proyecto,
          coordinamos cada etapa para garantizar calidad, eficiencia y control.
        </p>

      </div>

      <div className="contenedorProceso">

        <div className="lineaBase"></div>

        <div
          className="lineaActiva"
          style={{ width: `${porcentaje}%` }}
        ></div>

        <div className="iconosProceso">

          {procesos.map((item) => (

            <div
              key={item.id}
              className={obtenerClase(item)}
              onClick={() => seleccionar(item)}
            >

              <div className="circulo">

                {item.icono}

              </div>

              <h3>{item.titulo}</h3>

            </div>

          ))}

        </div>

      </div>

      {activo && (

        <div className="detalleProceso">

          <div className="detalleImagen">

            <img
              src={activo.imagen}
              alt={activo.titulo}
            />

          </div>

          <div className="detalleTexto">

            <span className="numeroProceso">

              0{activo.id}

            </span>

            <h3>

              {activo.titulo}

            </h3>

            <p>

              {activo.descripcion}

            </p>

            <ul>

              {activo.puntos.map((punto,index)=>(

                <li key={index}>

                  ✓ {punto}

                </li>

              ))}

            </ul>

          </div>

        </div>

      )}

    </section>

  );

}

export default Proceso;