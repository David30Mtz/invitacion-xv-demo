import { motion } from "motion/react"
import { ChevronDown } from "lucide-react"

import invitation from "../../data/invitation"

function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(
      "#presentation",
    )

    nextSection?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="hero-section">
      <div className="hero-section__overlay" />

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      >
        <p className="hero-content__eyebrow">
          Celebremos juntos
        </p>

        <h1 className="hero-content__title">
          {invitation.quinceanera.nombre}
        </h1>

        <p className="hero-content__subtitle">
          {invitation.quinceanera.frasePrincipal}
        </p>

        <div className="hero-date">
          <span>{invitation.evento.dia}</span>

          <div>
            <p>{invitation.evento.mes}</p>
            <p>{invitation.evento.anio}</p>
          </div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        className="hero-scroll-button"
        onClick={scrollToNextSection}
        aria-label="Continuar leyendo"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.7,
          repeat: Infinity,
        }}
      >
        <ChevronDown size={27} />
      </motion.button>
    </section>
  )
}

export default Hero