import { useState } from "react";

import {
  registrarAlumno,
  registrarEmpresa
} from "../formularioService";


const formularios = {
  empresa: {
    cardClass: "company-card",
    icon: "lucide:building-2",
    title: (
      <>
        ¿Tu empresa necesita
        <br />
        capacitar a su equipo?
      </>
    ),
    description:
      "Programas de formación a medida para potenciar el talento de tu organización.",
    fields: [
      {
        name: "ruc",
        type: "text",
        placeholder: "RUC de la empresa"
      },
      {
        name: "empresa",
        type: "text",
        placeholder: "Nombre de la empresa"
      },
      {
        name: "contacto",
        type: "text",
        placeholder: "Nombre de contacto"
      },
      {
        name: "email",
        type: "email",
        placeholder: "Correo corporativo"
      },
      {
        name: "telefono",
        type: "text",
        placeholder: "Teléfono"
      }
    ],
    selectPlaceholder: "¿En qué está interesado?",
    options: [
      "Capacitación corporativa",
      "Programa personalizado"
    ],
    buttonClass: "btn btn-primary",
    buttonLabel: "Solicitar información",
    benefits: [
      <>Programas<br />personalizados</>,
      <>Capacitaciones<br />en empresa</>,
      <>Acompañamiento<br />especializado</>
    ]
  },

  alumno: {
    cardClass: "professional-card",
    icon: "lucide:graduation-cap",
    title: (
      <>
        ¿Quieres seguir
        <br />
        aprendiendo?
      </>
    ),
    description:
      "Regístrate y forma parte de nuestra comunidad. Accede a cursos, programas y novedades.",
    fields: [
      {
        name: "nombre",
        type: "text",
        placeholder: "Nombre completo"
      },
      {
        name: "dni",
        type: "text",
        placeholder: "DNI"
      },
      {
        name: "email",
        type: "email",
        placeholder: "Correo electrónico"
      },
      {
        name: "telefono",
        type: "text",
        placeholder: "Teléfono"
      }
    ],
    selectPlaceholder: "¿Qué te interesa?",
    options: [
      "Cursos",
      "Certificados",
      "Capacitaciones"
    ],
    buttonClass: "btn btn-dark",
    buttonLabel: "Solicitar Cuenta",
    benefits: [
      <>Acceso a cursos y<br />talleres</>,
      <>Certificación digital</>,
      <>Contenido<br />actualizado</>,
      <>Acompañamiento<br />docente</>
    ]
  }
};


function RegistroForm({ tipo }) {

  const formulario = formularios[tipo];

  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  if (!formulario) return null;


  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    setMensaje("");
    setError("");
    setEnviando(true);

    try {

      const formData =  new FormData(form);
      const datos = Object.fromEntries(formData.entries());

      if (tipo === "alumno") {
        await registrarAlumno(datos);
        form.reset();

        setMensaje(
          "Registro realizado correctamente."
        );

      } else if (tipo === "empresa") {
        await registrarEmpresa(datos);
        form.reset();
        setMensaje(
          "Solicitud enviada correctamente."
        );

      }

    } catch (error) {

      console.error(
        "Error al registrar formulario:",
        error
      );

      setError(
        "No se pudo registrar la información. Inténtalo nuevamente."
      );

    } finally {

      setEnviando(false);

    }

  }

  return (

    <article
      className={`form-card ${formulario.cardClass}`}
    >

      <div className="form-card-header">

        <div className="form-icon">
          <iconify-icon
            icon={formulario.icon}
          ></iconify-icon>
        </div>

        <div>
          <h3>{formulario.title}</h3>
          <p>{formulario.description}</p>
        </div>

      </div>


      <div className="form-content">

        <form onSubmit={handleSubmit}>

          {formulario.fields.map((field) => (

            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required
            />

          ))}


          <select
            name="interes"
            defaultValue=""
            required
          >

            <option value="" disabled>
              {formulario.selectPlaceholder}
            </option>

            {formulario.options.map((option) => (

              <option
                key={option}
                value={option}
              >
                {option}
              </option>

            ))}

          </select>


          <button
            className={formulario.buttonClass}
            type="submit"
            disabled={enviando}
          >
            {enviando
              ? "Enviando..."
              : formulario.buttonLabel}
          </button>


          {mensaje && (
            <span className="small" role="status">
              {mensaje}
            </span>
          )}


          {error && (
            <span className="small" role="alert">
              {error}
            </span>
          )}

        </form>


        <div className="form-benefits">

          {formulario.benefits.map(
            (benefit, index) => (

              <div key={index}>

                <strong>✓</strong>

                <span>
                  {benefit}
                </span>

              </div>

            )
          )}

        </div>

      </div>

    </article>

  );

}


export default RegistroForm;