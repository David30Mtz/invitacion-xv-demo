import { motion } from "motion/react"
import {
  CakeSlice,
  Church,
  Music,
  PartyPopper,
  UtensilsCrossed,
} from "lucide-react"

import invitation from "../../data/invitation"

const icons = [
  Church,
  PartyPopper,
  UtensilsCrossed,
  CakeSlice,
  Music,
]

function Timeline() {
  return (
    <section className="section section--dark">
      <div className="section-container">
        <p className="section-eyebrow">
          Cada momento será especial
        </p>

        <h2 className="section-title section-title--light">
          Itinerario
        </h2>

        <div className="timeline">
          {invitation.itinerario.map(
            (item, index) => {
              const Icon =
                icons[index] || PartyPopper

              return (
                <motion.div
                  className="timeline-item"
                  key={`${item.hora}-${item.actividad}`}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >
                  <div className="timeline-item__icon">
                    <Icon size={21} />
                  </div>

                  <div className="timeline-item__content">
                    <span>{item.hora}</span>
                    <h3>{item.actividad}</h3>
                  </div>
                </motion.div>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}

export default Timeline