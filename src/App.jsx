import { useRef, useState } from "react"
import { AnimatePresence } from "motion/react"
import { Volume2, VolumeX } from "lucide-react"

import Welcome from "./components/Welcome/Welcome"
import Reveal from "./components/Reveal/Reveal"
import Hero from "./components/Hero/Hero"
import Presentation from "./components/Presentation/Presentation"
import Countdown from "./components/Countdown/Countdown"
import EventDetails from "./components/EventDetails/EventDetails"
import Timeline from "./components/Timeline/Timeline"
import Gallery from "./components/Gallery/Gallery"
import DressCode from "./components/DressCode/DressCode"
import Gifts from "./components/Gifts/Gifts"
import RSVP from "./components/RSVP/RSVP"
import Closing from "./components/Closing/Closing"
import "./styles/invitation.css"

import music from "./assets/musica.mp3"

import "./styles/invitation.css"

function App() {
  const [step, setStep] = useState("welcome")
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)

  const openInvitation = () => {
    setStep("reveal")

    if (!audioRef.current) return

    audioRef.current.volume = 0.3

    audioRef.current.play().catch((error) => {
      console.log("No fue posible reproducir el audio:", error)
    })
  }

  const showContent = () => {
    setStep("content")
  }

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => {
          setIsMuted(false)
        })
        .catch((error) => {
          console.log("No fue posible reproducir el audio:", error)
        })
    } else {
      audioRef.current.pause()
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
        preload="auto"
      />

      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <Welcome
            key="welcome"
            onOpen={openInvitation}
          />
        )}

        {step === "reveal" && (
          <Reveal
            key="reveal"
            onFinish={showContent}
          />
        )}

        {step === "content" && (
          <main
            key="content"
            className="invitation-content"
          >
            <Hero />
            <Presentation />
            <Countdown />
            <EventDetails />
            <Timeline />
            <Gallery />
            <DressCode />
            <Gifts />
            <RSVP />
            <Closing />
          </main>
        )}
      </AnimatePresence>

      {step !== "welcome" && (
        <button
          type="button"
          className="music-button"
          onClick={toggleMusic}
          aria-label={
            isMuted
              ? "Reproducir música"
              : "Pausar música"
          }
        >
          {isMuted ? (
            <VolumeX size={19} />
          ) : (
            <Volume2 size={19} />
          )}
        </button>
      )}
    </>
  )
}

export default App