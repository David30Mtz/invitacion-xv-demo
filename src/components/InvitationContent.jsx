import { motion } from "framer-motion"
import { Heart } from "lucide-react"

function InvitationContent() {
  return (
    <motion.main
      className="invitation-content"
      initial={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <p className="hero-kicker">Nuestra boda</p>

        <h2>
          Valentina
          <span>&</span>
          Santiago
        </h2>

        <Heart
          className="hero-heart"
          size={27}
          strokeWidth={1.3}
        />

        <p className="hero-message">
          Después de recorrer juntos una parte de nuestra historia,
          queremos celebrar el comienzo de una nueva etapa contigo.
        </p>

        <p className="hero-date">14 de febrero de 2027</p>

        <p className="hero-location">
          Hacienda Los Olivos · León, Guanajuato
        </p>
      </motion.div>

      <div className="scroll-indicator">
        <span>Descubre nuestra historia</span>
        <div className="scroll-line" />
      </div>
    </motion.main>
  )
}

export default InvitationContent