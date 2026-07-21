import { useState } from "react"
import { motion } from "motion/react"
import {
  CheckCircle2,
  MessageCircle,
  UserRound,
  UsersRound,
} from "lucide-react"

import invitation from "../../data/invitation"

function RSVP() {
  const [name, setName] = useState("")
  const [guests, setGuests] = useState("1")
  const [attendance, setAttendance] = useState("Sí asistiré")

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      invitation.rsvp.mensaje,
      "",
      `Nombre: ${name}`,
      `Asistencia: ${attendance}`,
      `Número de personas: ${guests}`,
    ].join("\n")

    const whatsappUrl =
      `https://wa.me/${invitation.rsvp.telefono}` +
      `?text=${encodeURIComponent(message)}`

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section className="section section--light">
      <motion.div
        className="section-container rsvp-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-icon">
          <CheckCircle2 size={29} />
        </div>

        <p className="section-eyebrow section-eyebrow--dark">
          Será un honor contar contigo
        </p>

        <h2 className="section-title">
          Confirma tu asistencia
        </h2>

        <p className="rsvp-section__deadline">
          Confirma antes del{" "}
          <strong>{invitation.rsvp.fechaLimite}</strong>
        </p>

        <form
          className="rsvp-form"
          onSubmit={handleSubmit}
        >
          <label className="form-field">
            <span>Nombre completo</span>

            <div className="form-field__input">
              <UserRound size={18} />

              <input
                type="text"
                placeholder="Escribe tu nombre"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                required
              />
            </div>
          </label>

          <label className="form-field">
            <span>Confirmación</span>

            <select
              value={attendance}
              onChange={(event) =>
                setAttendance(event.target.value)
              }
            >
              <option>Sí asistiré</option>
              <option>No podré asistir</option>
            </select>
          </label>

          <label className="form-field">
            <span>Número de personas</span>

            <div className="form-field__input">
              <UsersRound size={18} />

              <select
                value={guests}
                onChange={(event) =>
                  setGuests(event.target.value)
                }
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
              </select>
            </div>
          </label>

          <button
            type="submit"
            className="primary-button primary-button--full"
          >
            <MessageCircle size={19} />
            Confirmar por WhatsApp
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default RSVP