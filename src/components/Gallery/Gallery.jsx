import { motion } from "motion/react"

import foto1 from "../../assets/images/foto-1.jpg"
import foto2 from "../../assets/images/foto-2.jpg"
import foto3 from "../../assets/images/foto-3.jpg"
import foto4 from "../../assets/images/foto-4.jpg"

const photos = [
  {
    src: foto1,
    alt: "Fotografía de la quinceañera",
  },
  {
    src: foto2,
    alt: "Sesión fotográfica de XV años",
  },
  {
    src: foto3,
    alt: "Retrato de la quinceañera",
  },
  {
    src: foto4,
    alt: "Fotografía especial para la invitación",
  },
]

function Gallery() {
  return (
    <section className="section section--light">
      <div className="section-container section-container--wide">
        <p className="section-eyebrow section-eyebrow--dark">
          Momentos que quiero compartir
        </p>

        <h2 className="section-title">
          Galería
        </h2>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.figure
              className={`gallery-item gallery-item--${index + 1}`}
              key={photo.src}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery