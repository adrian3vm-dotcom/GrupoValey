import "../estilos/PoliticaPrivacidad.css";
import PiePagina from "../componentes/PiePagina";
import { Link, useLocation } from "react-router-dom";


export default function PoliticaPrivacidad() {
  return (
    <>
      <main className="politicaPrivacidad">

        <section className="politicaContenido">

          <div className="politicaContenidoWrapper">

            <a
              href="/"
              className="politicaHeroVolver"
            >
              ← Volver 
            </a>


            <h1>
              Política de
              <br />
              Privacidad
            </h1>

            <span className="politicaFecha">
              Última actualización: Agosto de 2026
            </span>

            <p>
              La presente Política de Privacidad establece los términos en que
              <strong> Grupo Valey </strong>
              utiliza y protege la información proporcionada por los usuarios al
              utilizar este sitio web.
            </p>

            <p>
              Grupo Valey está comprometido con la seguridad,
              confidencialidad y protección de los datos personales de
              clientes, proveedores, aliados estratégicos y visitantes.
            </p>

            <p>
              Cuando solicitamos información mediante formularios de contacto
              u otros medios disponibles en este sitio web, lo hacemos con la
              finalidad de brindar una mejor atención, proporcionar información
              sobre nuestros servicios y dar seguimiento a solicitudes
              relacionadas con nuestros proyectos.
            </p>

            <h2>Información que recopilamos</h2>

            <p>
              Nuestro sitio web puede recopilar información proporcionada
              voluntariamente por los usuarios mediante formularios, llamadas,
              correos electrónicos o canales de contacto disponibles.
            </p>

            <ul>
              <li>Nombre completo.</li>
              <li>Correo electrónico.</li>
              <li>Número telefónico.</li>
              <li>Empresa u organización.</li>
              <li>Información relacionada con proyectos.</li>
              <li>Solicitudes de cotización.</li>
              <li>Mensajes enviados mediante formularios.</li>
            </ul>

            <p>
              También podrán recopilarse ciertos datos técnicos relacionados
              con la navegación, tales como dirección IP, navegador utilizado,
              páginas visitadas, tiempo de permanencia y dispositivo utilizado,
              con fines estadísticos y de mejora continua.
            </p>

            <h2>Uso de la información</h2>

            <p>
              La información recopilada será utilizada para proporcionar el
              mejor servicio posible y atender adecuadamente las necesidades de
              nuestros clientes y visitantes.
            </p>

            <ul>
              <li>Atender solicitudes de contacto.</li>
              <li>Dar seguimiento a proyectos.</li>
              <li>Elaborar cotizaciones.</li>
              <li>Brindar información sobre nuestros servicios.</li>
              <li>Mejorar la experiencia de navegación.</li>
              <li>Realizar análisis estadísticos.</li>
              <li>Fortalecer nuestros procesos de atención al cliente.</li>
              <li>Cumplir obligaciones legales aplicables.</li>
            </ul>

            <div className="politicaDestacado">
              <p>
                Grupo Valey podrá comunicarse con los usuarios mediante correo
                electrónico, llamada telefónica o mensajería instantánea para
                dar seguimiento a solicitudes, cotizaciones, proyectos o
                consultas realizadas a través de este sitio web.
              </p>
            </div>

            <h2>Seguridad de la información</h2>

            <p>
              Implementamos medidas administrativas, técnicas y operativas para
              proteger la información contra accesos no autorizados,
              alteraciones, pérdida, divulgación o uso indebido.
            </p>

            <p>
              Sin embargo, debido a la naturaleza de Internet, ningún sistema
              puede garantizar una seguridad absoluta, por lo que el usuario
              reconoce los riesgos inherentes al uso de medios electrónicos.
            </p>

            <h2>Cookies</h2>

            <p>
              Este sitio web puede utilizar cookies y tecnologías similares con
              la finalidad de mejorar la experiencia de navegación y obtener
              métricas estadísticas sobre el uso del sitio.
            </p>

            <p>
              El usuario puede configurar su navegador para aceptar, rechazar o
              eliminar cookies en cualquier momento.
            </p>

            <h2>Enlaces a terceros</h2>

            <p>
              Nuestro sitio puede contener enlaces a sitios externos que
              pudieran resultar de interés para el usuario.
            </p>

            <p>
              Una vez que el usuario abandone este sitio web mediante dichos
              enlaces, Grupo Valey no tendrá control sobre el contenido,
              políticas o prácticas de privacidad de esos sitios externos.
            </p>

            <h2>Control de información personal</h2>

            <p>
              Los usuarios podrán solicitar información relacionada con los
              datos personales que hayan proporcionado a través de este sitio
              web.
            </p>

            <p>
              Asimismo, podrán solicitar la actualización, corrección o
              eliminación de información cuando resulte procedente conforme a la
              legislación aplicable.
            </p>

            <p>
              Grupo Valey no venderá, alquilará, cederá ni distribuirá
              información personal a terceros sin consentimiento del titular,
              salvo cuando sea requerido por ley o autoridad competente.
            </p>

            <h2>Servicios y actividades</h2>

            <p>
              Grupo Valey participa en proyectos relacionados con construcción,
              infraestructura, desarrollo inmobiliario, proyectos industriales,
              comerciales y habitacionales, así como servicios complementarios
              dentro de su ecosistema empresarial.
            </p>

            <p>
              La información proporcionada por los usuarios podrá utilizarse
              exclusivamente para atender solicitudes relacionadas con estos
              servicios y actividades.
            </p>

            <h2>Modificaciones a esta política</h2>

            <p>
              Grupo Valey se reserva el derecho de modificar los términos de la
              presente Política de Privacidad en cualquier momento.
            </p>

            <p>
              Las actualizaciones serán publicadas en esta misma página y
              entrarán en vigor desde su fecha de publicación.
            </p>

            <div className="politicaContacto">

              <h2>Contacto</h2>

              <p>
                Para cualquier duda, comentario o solicitud relacionada con esta
                Política de Privacidad o con el tratamiento de información
                personal, puede comunicarse con Grupo Valey mediante los medios
                de contacto disponibles en este sitio web.
              </p>

            </div>

          </div>

        </section>

      </main>

      <PiePagina />
    </>
  );
}