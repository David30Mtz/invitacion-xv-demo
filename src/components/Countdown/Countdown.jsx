import { useEffect, useState } from "react"
import { motion } from "motion/react"

import invitation from "../../data/invitation"

const calculateTimeLeft = () => {
  const eventDate = new Date(
    invitation.evento.fecha,
  ).getTime()

  const currentDate = new Date().getTime()
  const difference = eventDate - currentDate

  if (difference <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    }
  }

  return {
    dias: Math.floor(
      difference / (1000 * 60 * 60 * 24),
    ),

    horas: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),

    minutos: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),

    segundos: Math.floor(
      (difference / 1000) % 60,
    ),
  }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const countdownItems = [
    {
      label: "Días",
      value: timeLeft.dias,
    },
    {
      label: "Horas",
      value: timeLeft.horas,
    },
    {
      label: "Minutos",
      value: timeLeft.minutos,
    },
    {
      label: "Segundos",
      value: timeLeft.segundos,
    },
  ]

  return (
    <section className="section section--light countdown-section">
      <motion.div
        className="section-container"
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
        <p className="section-eyebrow section-eyebrow--dark">
          Falta muy poco
        </p>

        <h2 className="section-title">
          Cuenta regresiva
        </h2>

        <div className="countdown-grid">
          {countdownItems.map((item) => (
            <div
              className="countdown-card"
              key={item.label}
            >
              <strong>
                {String(item.value).padStart(
                  2,
                  "0",
                )}
              </strong>

              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <p className="countdown-date">
          {invitation.evento.fechaTexto}
        </p>
      </motion.div>
    </section>
  )
}

export default Countdown