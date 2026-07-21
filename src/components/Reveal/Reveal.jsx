import { useCallback, useEffect, useMemo } from "react"
import { motion } from "motion/react"

import invitation from "../../data/invitation"
import quinceaneraPhoto from "../../assets/images/quinceanera.jpg"

import "./Reveal.css"

function Reveal({ onComplete, onFinish }) {
  const finishReveal = useCallback(() => {
    if (onComplete) {
      onComplete()
      return
    }

    if (onFinish) {
      onFinish()
    }
  }, [onComplete, onFinish])

  const petals = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 7 + Math.random() * 6,
        size: 9 + Math.random() * 10,
        rotation: Math.random() * 360,
        opacity: 0.35 + Math.random() * 0.55,
      })),
    [],
  )

  useEffect(() => {
    const timer = window.setTimeout(() => {
      finishReveal()
    }, 6500)

    return () => window.clearTimeout(timer)
  }, [finishReveal])

  return (
    <motion.section
      className="reveal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Fotografía */}
      <motion.div
        className="reveal__background"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 7,
          ease: "easeOut",
        }}
      >
        <img
          src={quinceaneraPhoto}
          alt={`Fotografía de ${invitation.quinceanera.nombre}`}
        />
      </motion.div>

      {/* Capas cinematográficas */}
      <div className="reveal__overlay" />
      <div className="reveal__vignette" />
      <div className="reveal__grain" />

      {/* Pétalos */}
      <div className="reveal-petals" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className={`reveal-petal reveal-petal--${
              (petal.id % 3) + 1
            }`}
            style={{
              "--petal-left": petal.left,
              "--petal-delay": `${petal.delay}s`,
              "--petal-duration": `${petal.duration}s`,
              "--petal-size": `${petal.size}px`,
              "--petal-rotation": `${petal.rotation}deg`,
              "--petal-opacity": petal.opacity,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="reveal__content">
        {/* Inicial */}
        <motion.div
          className="reveal__initial"
          initial={{
            opacity: 0,
            scale: 0.78,
            filter: "blur(14px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.4,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {invitation.quinceanera.inicial}
        </motion.div>

        {/* Frase superior */}
        <motion.p
          className="reveal__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.35,
          }}
        >
          Una noche para recordar
        </motion.p>

        {/* Nombre */}
        <motion.h2
          className="reveal__name"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 1.9,
          }}
        >
          {invitation.quinceanera.nombre}
        </motion.h2>

        {/* Ornamento */}
        <motion.div
          className="reveal__ornament"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 1.1,
            delay: 2.6,
          }}
        >
          <span />
          <i />
          <span />
        </motion.div>

        {/* Evento */}
        <motion.p
          className="reveal__event"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          {invitation.eventName}
        </motion.p>

        {/* Botón */}
        <motion.button
          type="button"
          className="reveal__button"
          onClick={finishReveal}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 3.7,
          }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          Continuar
        </motion.button>
      </div>

      <motion.div
        className="reveal__bottom-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1,
          delay: 4.2,
        }}
      />
    </motion.section>
  )
}

export default Reveal