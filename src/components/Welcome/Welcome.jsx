import { motion } from "motion/react"
import { Sparkles, Volume2 } from "lucide-react"

import { invitation } from "../../data/invitation"

function Welcome({ onOpen }) {
  return (
    <motion.section
      className="cinematic-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="cinematic-intro__background"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 14,
          ease: "linear",
        }}
      />

      <div className="cinematic-intro__overlay" />
      <div className="cinematic-intro__vignette" />
      <div className="cinematic-intro__grain" />

      <div className="cinematic-particles" aria-hidden="true">
        <span className="cinematic-particle cinematic-particle--1" />
        <span className="cinematic-particle cinematic-particle--2" />
        <span className="cinematic-particle cinematic-particle--3" />
        <span className="cinematic-particle cinematic-particle--4" />
        <span className="cinematic-particle cinematic-particle--5" />
        <span className="cinematic-particle cinematic-particle--6" />
      </div>

      <div className="cinematic-intro__content">
        <motion.div
          className="cinematic-intro__symbol"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          <Sparkles size={18} strokeWidth={1.4} />
        </motion.div>

        <motion.p
          className="cinematic-intro__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.8,
          }}
        >
          Estás invitado a celebrar
        </motion.p>

        <div className="cinematic-intro__name-wrapper">
          <motion.h1
            className="cinematic-intro__name"
            initial={{
              opacity: 0,
              y: 35,
              clipPath: "inset(0 100% 0 0)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0% 0 0)",
            }}
            transition={{
              delay: 0.85,
              duration: 1.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {invitation.name}
          </motion.h1>
        </div>

        <motion.p
          className="cinematic-intro__event"
          initial={{
            opacity: 0,
            letterSpacing: "0.6em",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "0.22em",
          }}
          transition={{
            delay: 1.6,
            duration: 1,
          }}
        >
          {invitation.eventName}
        </motion.p>

        <motion.div
          className="cinematic-intro__divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 2,
            duration: 0.9,
          }}
        >
          <span />
          <i />
          <span />
        </motion.div>

        <motion.p
          className="cinematic-intro__date"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
          }}
        >
          {invitation.dateLabel}
        </motion.p>

        <motion.button
          type="button"
          className="cinematic-intro__button"
          onClick={onOpen}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.55,
            duration: 0.8,
          }}
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span>Abrir invitación</span>
          <Volume2 size={16} strokeWidth={1.7} />
        </motion.button>

        <motion.p
          className="cinematic-intro__sound"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.1,
            duration: 0.8,
          }}
        >
          Activa el sonido para vivir la experiencia
        </motion.p>
      </div>

      <motion.div
        className="cinematic-intro__bottom-line"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
          delay: 3,
          duration: 0.9,
        }}
      />
    </motion.section>
  )
}

export default Welcome