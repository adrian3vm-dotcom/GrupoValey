import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "../estilos/Contacto.css";

export default function Contacto() {

    const form = useRef();

    const [enviando, setEnviando] = useState(false);
    const [estado, setEstado] = useState("");

    const enviarFormulario = (e) => {

        e.preventDefault();

        setEnviando(true);
        setEstado("");

        emailjs
            .sendForm(
                "service_2jlubur",
                "template_4npx0tg",
                form.current,
                "2AY9vo5MuF6O5GlLI"
            )

            .then(() => {

                setEstado("success");

                form.current.reset();

            })

            .catch((error) => {

                console.error(error);

                setEstado("error");

            })

            .finally(() => {

                setEnviando(false);

            });

    };

    return (

        <section id="contacto" className="contacto">

            <div className="contactoContainer">

                <div className="contactoInfo">

                    <span>CONTACTO</span>

                    <h2>

                        HABLEMOS

                        <br />

                        DE SU

                        <br />

                        PROYECTO

                    </h2>

                    <div className="linea"></div>

                    <p>

                        Nos gusta conocer las ideas desde el principio.

                        Cuéntenos la suya y nos pondremos en contacto
                        con usted.

                        <br /><br />

                        admin@grupovaley.com

                    </p>

                </div>

                <div className="contactoFormulario">

                    <form
                        ref={form}
                        onSubmit={enviarFormulario}
                    >

                        <div className="fila">

                            <div className="campo">

                                <label>Nombre</label>

                                <input
                                    type="text"
                                    name="nombre"
                                    required
                                />

                            </div>

                            <div className="campo">

                                <label>Empresa (opcional)</label>

                                <input
                                    type="text"
                                    name="empresa"
                                />

                            </div>

                        </div>

                        <div className="fila">

                            <div className="campo">

                                <label>Correo electrónico</label>

                                <input
                                    type="email"
                                    name="correo"
                                    required
                                />

                            </div>

                            <div className="campo">

                                <label>Teléfono</label>

                                <input
                                    type="tel"
                                    name="telefono"
                                    required
                                />

                            </div>

                        </div>

                        <div className="campo">

                            <label>¿Cómo podemos ayudarle?</label>

                            <textarea
                                rows="6"
                                name="mensaje"
                                required
                            ></textarea>

                        </div>

                        <button
                            type="submit"
                            disabled={enviando}
                        >

                            <span>

                                {enviando
                                    ? "ENVIANDO..."
                                    : "ENVIAR"}

                            </span>

                            <span className="flecha">

                                →

                            </span>

                        </button>

                        {

                            estado === "success" && (

                                <div className="mensajeExito">

                                    <strong>

                                        ✓ Solicitud enviada correctamente.

                                    </strong>

                                    <br />

                                    Gracias por contactar a Grupo Valey.

                                    Nuestro equipo revisará su información y se pondrá en contacto con usted a la brevedad.

                                </div>

                            )

                        }

                        {

                            estado === "error" && (

                                <div className="mensajeError">

                                    Hubo un problema al enviar la solicitud.

                                    Intente nuevamente en unos minutos.

                                </div>

                            )

                        }

                    </form>

                </div>

            </div>

        </section>

    );

}