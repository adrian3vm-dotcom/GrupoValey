import "../estilos/Contacto.css";
export default function Contacto(){

    return(

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

    <form>

        <div className="fila">

            <div className="campo">

                <label>Nombre</label>

                <input
                    type="text"
                    name="nombre"
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
                />

            </div>

            <div className="campo">

                <label>Teléfono</label>

                <input
                    type="tel"
                    name="telefono"
                />

            </div>

        </div>

        <div className="campo">

            <label>¿Cómo podemos ayudarle?</label>

            <textarea
                rows="6"
                name="mensaje"
            ></textarea>

        </div>

        <button type="submit">

            <span>ENVIAR</span>
        <span className="flecha">→</span>

        </button>

    </form>

</div>

            </div>

        </section>

    )

}