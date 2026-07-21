import { motion } from "motion/react"

import invitation from "../../data/invitation"

function Presentation() {
  return (
    <section
      id="presentation"
      className="section section--dark presentation-section"
    >
      <motion.div
        className="section-container presentation-content"
        initial={{
          opacity: 0,
          y: 35,
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
          duration: 0.9,
        }}
      >
        <p className="section-eyebrow">
          Una nueva etapa comienza
        </p>

        <h2 className="section-title section-title--light">
          Mis XV años
        </h2>

        <div className="ornament ornament--light">
          <span />
          <span className="ornament__diamond" />
          <span />
        </div>

        <p className="presentation-message">
          {invitation.quinceanera.mensaje}
        </p>

        <div className="family-info">
          <p>{invitation.familia.titulo}</p>

          <div className="family-info__names">
            {invitation.familia.padres.map(
              (padre) => (
                <span key={padre}>{padre}</span>
              ),
            )}
          </div>

          <p className="family-info__label">
            Y acompañada por mis padrinos
          </p>

          <div className="family-info__names">
            {invitation.familia.padrinos.map(
              (padrino) => (
                <span key={padrino}>{padrino}</span>
              ),
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Presentation