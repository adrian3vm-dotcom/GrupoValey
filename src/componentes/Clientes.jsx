import "../estilos/Clientes.css";

const clientes = [
 {
      nombre: "DISTLAB",
    logo: "/logos/clientes/distlab.png",
 },
 {
    nombre: "Cash N Go",
    logo: "/logos/clientes/cashngo logo.png",
  },
  {
    nombre: "Sonora Naturals",
    logo: "/logos/clientes/sonora naturals logo.jpg",
  },
  {
    nombre: "BBVA",
    logo: "/logos/clientes/BBVA logo.jpg",
  },
  {
    nombre: "Caffenio",
    logo: "/logos/clientes/caffenio logo.png",
  },
  {
    nombre: "Coppel",
    logo: "/logos/clientes/coppel logo.svg",
  },
  {
    nombre: "China Energy",
    logo: "/logos/clientes/china energy logo.png",
  },
  {
    nombre: "Construplan",
    logo: "/logos/clientes/construplan logo.png",
  },
  {
    nombre: "CT",
    logo: "/logos/clientes/ct logo.png",
  },
  {
    nombre: "Fresnillo",
    logo: "/logos/clientes/fresnillo logo.png",
  },
  {
    nombre: "Grupo Delza",
    logo: "/logos/clientes/grupo delza logo.png",
  },
  {
    nombre: "Grupo México",
    logo: "/logos/clientes/grupo mexico logo.png",
  },
  {
    nombre: "Lear",
    logo: "/logos/clientes/lear logo.png",
 
  },
  {
    nombre: "Osisko Development",
    logo: "/logos/clientes/osisko development.png",
  },
  {
    nombre: "Parque La Ruina",
    logo: "/logos/clientes/parque la ruina logo.jpg",
  },
  {
    nombre: "Pollo Feliz",
    logo: "/logos/clientes/pollo feliz logo.png",
  },
  {
    nombre: "Ruba",
    logo: "/logos/clientes/ruba logo.png",
  },
  {
    nombre: "San Carlos Plaza",
    logo: "/logos/clientes/san carlos plaza logo.jpg",
  },
  {
    nombre: "Sedona",
    logo: "/logos/clientes/sedona.png",
  },
  {
    nombre: "Selecta",
    logo: "/logos/clientes/selecta logo.png",
  },
  {
    nombre: "SilverCrest",
    logo: "/logos/clientes/silvercrest logo.png",
  },
  {
    nombre: "Gobierno de Sonora",
    logo: "/logos/clientes/sonora gob logo.png",
  },
  {
    nombre: "Super Leyva",
    logo: "/logos/clientes/super leyva logo.jpg",
  },
  {
    nombre: "Ternium",
    logo: "/logos/clientes/ternium logo.png",
  },
  {
    nombre: "Walbridge",
    logo: "/logos/clientes/walbridge logo.png",
  },
];

function Clientes() {
  const logosDuplicados = [...clientes, ...clientes];

  return (
    <section className="clientes" id="clientes">
      <div className="clientesHeader">
        <span className="subtituloClientes">
          NUESTROS CLIENTES
        </span>

        <h2>
          Empresas que han
          <br />
          confiado en nosotros.
        </h2>

        <p>
          Construimos relaciones basadas en experiencia,
          compromiso y resultados.
        </p>
      </div>

      <div className="carruselClientes">
        <div className="logosTrack">
          {logosDuplicados.map((cliente, index) => (
            <div
              className="clienteLogo"
              key={`${cliente.nombre}-${index}`}
            >
              <img
                src={cliente.logo}
                alt={cliente.nombre}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clientes;