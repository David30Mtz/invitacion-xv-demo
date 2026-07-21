import { motion } from "motion/react"
import { Gift } from "lucide-react"

import invitation from "../../data/invitation"

function Gifts() {
  return (
    <section className="section section--dark">
      <motion.div
        className="section-container gifts-section"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="section-icon section-icon--light">
          <Gift size={29} />
        </div>

        <p className="section-eyebrow">
          Un detalle especial
        </p>

        <h2 className="section-title section-title--light">
          Mesa de regalos
        </h2>

        <p className="gifts-section__message">
          {invitation.regalos.mensaje}
        </p>

        <div className="gift-card">
          <span>Mesa de regalos</span>

          <strong>
            {invitation.regalos.tienda}
          </strong>

          <p>
            Número de evento:{" "}
            {invitation.regalos.numeroEvento}
          </p>

          <a
            href={invitation.regalos.enlace}
            target="_blank"
            rel="noreferrer"
            className="secondary-button secondary-button--light"
          >
            Ver mesa de regalos
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Gifts