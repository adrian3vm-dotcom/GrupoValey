import "../estilos/Ecosistema.css";

const empresas = [
    {
        titulo: "CONSTRUCTORA",
        descripcion:
            "Ejecución de obra civil, industrial y comercial con los más altos estándares de calidad.",
        imagen: "/imagenes/ecosistema/construccion.webp",
    },
    {
        titulo: "INMOBILIARIA",
        descripcion:
            "Compra, venta y comercialización de propiedades con asesoría personalizada.",
        imagen: "/imagenes/ecosistema/inmobiliaria.webp",
    },
    {
        titulo: "DESARROLLADORA",
        descripcion:
            "Planeación y desarrollo de proyectos inmobiliarios que generan valor.",
        imagen: "/imagenes/ecosistema/desarrolladora.webp",
    },
];

export default function Ecosistema() {

    return (

        <section id="grupo" className="ecosistema">

            <div className="ecosistemaTitulo">

                <span>NUESTRO</span>

                <h2>GRUPO</h2>

                <p>
                    Empresas especializadas que trabajan de forma coordinada
                    para ofrecer soluciones integrales en construcción e
                    inversión inmobiliaria.
                </p>

            </div>

            <div className="paneles">

                {empresas.map((empresa) => (

                    <article
                        className="panel"
                        key={empresa.titulo}
                    >

                        <img
                            src={empresa.imagen}
                            alt={empresa.titulo}
                        />

                        <div className="overlay"></div>

                        <div className="contenido">

                            <h3>{empresa.titulo}</h3>

                            <p>{empresa.descripcion}</p>

                        </div>

                    </article>

                ))}

            </div>

            <div className="ecosistemaFooter">

                <span className="linea"></span>

                <p>

                    UN MISMO GRUPO, UN MISMO COMPROMISO

                    <strong> CONSTRUIR VALOR.</strong>

                </p>

                <span className="linea"></span>

            </div>

        </section>

    );

}