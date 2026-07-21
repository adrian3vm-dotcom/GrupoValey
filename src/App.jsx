import { Routes, Route } from "react-router-dom";

import Encabezado from "./componentes/Encabezado";
import Inicio from "./componentes/Inicio";
import Nosotros from "./componentes/Nosotros";
import Proceso from "./componentes/Proceso";
import Proyectos from "./componentes/Proyectos";
import Clientes from "./componentes/Clientes";
import Cobertura from "./componentes/Cobertura";
import Ecosistema from "./componentes/Ecosistema";
import Contacto from "./componentes/Contacto";
import PiePagina from "./componentes/PiePagina";

import Industrial from "./paginas/Industrial";
import Comercial from "./paginas/Comercial";
import Habitacional from "./paginas/Habitacional";

function Home() {
  return (
    <>
      <Encabezado />
      <Inicio />
      <Nosotros />
      <Proceso />
      <Proyectos />
      <Clientes />
      <Cobertura />
      <Ecosistema />
      <Contacto />
      <PiePagina />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/proyectos/industrial"
        element={<Industrial />}
      />

      <Route
        path="/proyectos/comercial"
        element={<Comercial />}
      />

      <Route
        path="/proyectos/habitacional"
        element={<Habitacional />}
      />
    </Routes>
  );
}

export default App;