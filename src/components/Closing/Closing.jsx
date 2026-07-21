import { motion } from "motion/react"
import { Heart } from "lucide-react"

import invitation from "../../data/invitation"

function Closing() {
  return (
    <footer className="closing-section">
      <div className="closing-section__overlay" />

      <motion.div
        className="closing-content"
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
          duration: 1,
        }}
      >
        <Heart
          size={25}
          strokeWidth={1.4}
        />

        <p>Gracias por formar parte de</p>

        <h2>
          {invitation.quinceanera.nombre}
        </h2>

        <span>
          {invitation.quinceanera.frasePrincipal}
        </span>

        <div className="ornament ornament--light">
          <span />
          <span className="ornament__diamond" />
          <span />
        </div>

        <small>
          {invitation.evento.fechaTexto}
        </small>
      </motion.div>
    </footer>
  )
}

export default Closing