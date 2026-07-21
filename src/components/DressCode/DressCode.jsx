import { motion } from "motion/react"
import { Shirt, Sparkles } from "lucide-react"

import invitation from "../../data/invitation"

function DressCode() {
  return (
    <section className="section section--cream">
      <motion.div
        className="section-container dress-code"
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
        <div className="section-icon">
          <Shirt size={29} />
        </div>

        <p className="section-eyebrow section-eyebrow--dark">
          Para esta noche especial
        </p>

        <h2 className="section-title">
          Código de vestimenta
        </h2>

        <p className="dress-code__type">
          {invitation.vestimenta.codigo}
        </p>

        <p className="dress-code__description">
          {invitation.vestimenta.descripcion}
        </p>

        <div className="reserved-colors">
          <Sparkles size={18} />

          <p>
            Los colores{" "}
            <strong>
              {invitation.vestimenta.coloresReservados.join(
                " y ",
              )}
            </strong>{" "}
            están reservados para la quinceañera.
          </p>
        </div>

        <div className="color-samples">
          <span className="color-sample color-sample--blue" />
          <span className="color-sample color-sample--silver" />
        </div>
      </motion.div>
    </section>
  )
}

export default DressCode