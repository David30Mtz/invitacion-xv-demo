import { motion } from "motion/react"
import {
  CalendarDays,
  Church,
  Clock3,
  MapPin,
  PartyPopper,
} from "lucide-react"

import invitation from "../../data/invitation"

function EventCard({
  icon,
  title,
  hour,
  place,
  address,
  maps,
}) {
  return (
    <motion.article
      className="event-card"
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <div className="event-card__icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <div className="event-card__detail">
        <Clock3 size={18} />
        <span>{hour}</span>
      </div>

      <div className="event-card__detail">
        <MapPin size={18} />

        <div>
          <strong>{place}</strong>
          <span>{address}</span>
        </div>
      </div>

      <a
        className="secondary-button"
        href={maps}
        target="_blank"
        rel="noreferrer"
      >
        Ver ubicación
      </a>
    </motion.article>
  )
}

function EventDetails() {
  const addToCalendar = () => {
    const title = encodeURIComponent(
      `XV años de ${invitation.quinceanera.nombre}`,
    )

    const location = encodeURIComponent(
      invitation.recepcion.lugar,
    )

    const details = encodeURIComponent(
      `Celebración de XV años de ${invitation.quinceanera.nombreCompleto}`,
    )

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}` +
      `&dates=20261122T010000Z/20261122T070000Z` +
      `&details=${details}` +
      `&location=${location}`

    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="section section--cream">
      <div className="section-container">
        <p className="section-eyebrow section-eyebrow--dark">
          Acompáñame a celebrar
        </p>

        <h2 className="section-title">
          Detalles del evento
        </h2>

        <div className="events-grid">
          <EventCard
            icon={<Church size={29} />}
            title={invitation.ceremonia.titulo}
            hour={invitation.ceremonia.hora}
            place={invitation.ceremonia.lugar}
            address={
              invitation.ceremonia.direccion
            }
            maps={invitation.ceremonia.maps}
          />

          <EventCard
            icon={<PartyPopper size={29} />}
            title={invitation.recepcion.titulo}
            hour={invitation.recepcion.hora}
            place={invitation.recepcion.lugar}
            address={
              invitation.recepcion.direccion
            }
            maps={invitation.recepcion.maps}
          />
        </div>

        <button
          type="button"
          className="calendar-button"
          onClick={addToCalendar}
        >
          <CalendarDays size={19} />
          Agregar al calendario
        </button>
      </div>
    </section>
  )
}

export default EventDetails