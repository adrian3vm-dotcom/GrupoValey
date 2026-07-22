import "../estilos/Clientes.css";

const clientes = [
 {
      nombre: "DISTLAB",
    logo: "/logos/clientes/distlab.webp",
 },
 {
    nombre: "Cash N Go",
    logo: "/logos/clientes/cashngo logo.webp",
  },
  {
    nombre: "Sonora Naturals",
    logo: "/logos/clientes/sonora naturals logo.webp",
  },
  {
    nombre: "BBVA",
    logo: "/logos/clientes/BBVA logo.webp",
  },
  {
    nombre: "Caffenio",
    logo: "/logos/clientes/caffenio logo.webp",
  },
  {
    nombre: "Coppel",
    logo: "/logos/clientes/coppel logo.svg",
  },
  {
    nombre: "China Energy",
    logo: "/logos/clientes/china energy logo.webp",
  },
  {
    nombre: "Construplan",
    logo: "/logos/clientes/construplan logo.webp",
  },
  {
    nombre: "CT",
    logo: "/logos/clientes/ct logo.webp",
  },
  {
    nombre: "Fresnillo",
    logo: "/logos/clientes/fresnillo logo.webp",
  },
  {
    nombre: "Grupo Delza",
    logo: "/logos/clientes/grupo delza logo.webp",
  },
  {
    nombre: "Grupo México",
    logo: "/logos/clientes/grupo mexico logo.webp",
  },
  {
    nombre: "Lear",
    logo: "/logos/clientes/lear logo.webp",
 
  },
  {
    nombre: "Osisko Development",
    logo: "/logos/clientes/osisko development.webp",
  },
  {
    nombre: "Parque La Ruina",
    logo: "/logos/clientes/parque la ruina logo.webp",
  },
  {
    nombre: "Pollo Feliz",
    logo: "/logos/clientes/pollo feliz logo.webp",
  },
  {
    nombre: "Ruba",
    logo: "/logos/clientes/ruba logo.webp",
  },
  {
    nombre: "San Carlos Plaza",
    logo: "/logos/clientes/san carlos plaza logo.webp",
  },
  {
    nombre: "Sedona",
    logo: "/logos/clientes/sedona.webp",
  },
  {
    nombre: "Selecta",
    logo: "/logos/clientes/selecta logo.webp",
  },
  {
    nombre: "SilverCrest",
    logo: "/logos/clientes/silvercrest logo.webp",
  },
  {
    nombre: "Gobierno de Sonora",
    logo: "/logos/clientes/sonora gob logo.webp",
  },
  {
    nombre: "Super Leyva",
    logo: "/logos/clientes/super leyva logo.webp",
  },
  {
    nombre: "Ternium",
    logo: "/logos/clientes/ternium logo.webp",
  },
  {
    nombre: "Walbridge",
    logo: "/logos/clientes/walbridge logo.webp",
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