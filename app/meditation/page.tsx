"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Meditation() {
  const [feeling, setFeeling] = useState<string | null>(null)
  const [meditationPlan, setMeditationPlan] = useState(false)
  const [activeSession, setActiveSession] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", description: "" })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Create audio element for breathing sound
  useEffect(() => {
    // Create a dummy audio element since we don't have the actual file
    audioRef.current = new Audio()
    audioRef.current.src = "/meditation-sound.mp3"
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleFeelingSelect = (feeling: string) => {
    setFeeling(feeling)
  }

  const generateMeditationPlan = () => {
    if (feeling) {
      setMeditationPlan(true)
    } else {
      alert("Please select how you are feeling first")
    }
  }

  const startSession = (sessionName: string) => {
    setActiveSession(sessionName)
    if (audioRef.current) {
      try {
        audioRef.current.play().catch((e) => console.log("Audio play error:", e))
        setIsPlaying(true)
      } catch (error) {
        console.error("Failed to play audio:", error)
        // Still set as playing for demo purposes
        setIsPlaying(true)
      }
    }
  }

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((e) => console.log("Audio play error:", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleIconClick = (type: string) => {
    switch (type) {
      case "calendar":
        setModalContent({
          title: "Meditation Schedule",
          description:
            "View and manage your upcoming meditation sessions. Set reminders and track your progress over time.",
        })
        break
      case "insights":
        setModalContent({
          title: "Meditation Insights",
          description:
            "View detailed analytics about your meditation practice. See trends, improvements, and personalized recommendations.",
        })
        break
      case "settings":
        setModalContent({
          title: "Meditation Settings",
          description:
            "Customize your meditation experience. Adjust sound levels, visual preferences, and notification settings.",
        })
        break
    }
    setShowModal(true)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-neutral-900 to-primary-900 rounded-xl overflow-hidden shadow-2xl">
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-4xl text-primary-200">🎧</span>
            <h1 className="text-2xl font-bold text-white">MEDITATION AI</h1>
          </div>
          <div className="flex gap-4">
            <button
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              onClick={() => handleIconClick("calendar")}
            >
              <span className="material-symbols-outlined text-white">calendar_month</span>
            </button>
            <button
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              onClick={() => handleIconClick("insights")}
            >
              <span className="material-symbols-outlined text-white">insights</span>
            </button>
            <button
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
              onClick={() => handleIconClick("settings")}
            >
              <span className="material-symbols-outlined text-white">settings</span>
            </button>
            <button
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-all hover:shadow-lg hover:scale-105"
              onClick={() => {
                if (activeSession) {
                  toggleAudio()
                } else {
                  startSession("Quick Session")
                }
              }}
            >
              {activeSession ? (isPlaying ? "Pause Session" : "Resume Session") : "Start Session"}
            </button>
          </div>
        </header>

        <main className="px-6 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered <span className="text-primary-300">Mindfulness</span> Hub
              </h2>
              <p className="text-neutral-200 mb-6">
                Immerse yourself in a personalized meditation experience. Our AI analyzes your mood and stress levels to
                recommend the perfect mindfulness techniques.
              </p>
              <div className="bg-neutral-800/50 p-5 rounded-lg mb-6 backdrop-blur-sm border border-neutral-700">
                <h3 className="text-xl font-semibold text-white mb-3">How are you feeling today?</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <button
                    className={`py-3 px-4 rounded-lg text-white transition-colors ${feeling === "Stressed" ? "bg-primary-600" : "bg-neutral-700/50 hover:bg-primary-600/50"}`}
                    onClick={() => handleFeelingSelect("Stressed")}
                  >
                    Stressed
                  </button>
                  <button
                    className={`py-3 px-4 rounded-lg text-white transition-colors ${feeling === "Anxious" ? "bg-primary-600" : "bg-neutral-700/50 hover:bg-primary-600/50"}`}
                    onClick={() => handleFeelingSelect("Anxious")}
                  >
                    Anxious
                  </button>
                  <button
                    className={`py-3 px-4 rounded-lg text-white transition-colors ${feeling === "Tired" ? "bg-primary-600" : "bg-neutral-700/50 hover:bg-primary-600/50"}`}
                    onClick={() => handleFeelingSelect("Tired")}
                  >
                    Tired
                  </button>
                  <button
                    className={`py-3 px-4 rounded-lg text-white transition-colors ${feeling === "Restless" ? "bg-primary-600" : "bg-neutral-700/50 hover:bg-primary-600/50"}`}
                    onClick={() => handleFeelingSelect("Restless")}
                  >
                    Restless
                  </button>
                  <button
                    className={`py-3 px-4 rounded-lg text-white transition-colors ${feeling === "Unmotivated" ? "bg-primary-600" : "bg-neutral-700/50 hover:bg-primary-600/50"}`}
                    onClick={() => handleFeelingSelect("Unmotivated")}
                  >
                    Unmotivated
                  </button>
                  <button
                    className={`py-3 px-4 rounded-lg text-white transition-colors ${feeling === "Curious" ? "bg-primary-600" : "bg-neutral-700/50 hover:bg-primary-600/50"}`}
                    onClick={() => handleFeelingSelect("Curious")}
                  >
                    Curious
                  </button>
                </div>
                <button
                  className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-all hover:shadow-lg group"
                  onClick={generateMeditationPlan}
                >
                  <span className="group-hover:mr-2 transition-all">Generate Meditation Plan</span>
                  <span className="material-symbols-outlined align-middle group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-2 items-center bg-neutral-800/30 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary-300">smart_display</span>
                  <span className="text-white">Guided Sessions</span>
                </div>
                <div className="flex gap-2 items-center bg-neutral-800/30 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary-300">waves</span>
                  <span className="text-white">Ambient Sounds</span>
                </div>
                <div className="flex gap-2 items-center bg-neutral-800/30 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary-300">calendar_month</span>
                  <span className="text-white">Custom Plans</span>
                </div>
                <div className="flex gap-2 items-center bg-neutral-800/30 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary-300">monitoring</span>
                  <span className="text-white">Progress Tracking</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="bg-neutral-800/40 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Meditation visualization"
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent flex items-end p-4">
                    <div className="flex w-full justify-between items-center">
                      <div>
                        <h3 className="text-lg font-medium text-white">Deep Focus Meditation</h3>
                        <p className="text-neutral-300 text-sm">15 minutes · Recommended for you</p>
                      </div>
                      <button
                        className="bg-primary-500 hover:bg-primary-400 text-white p-3 rounded-full transition-transform hover:scale-110"
                        onClick={() => startSession("Deep Focus Meditation")}
                      >
                        <span className="material-symbols-outlined">
                          {isPlaying && activeSession === "Deep Focus Meditation" ? "pause" : "play_arrow"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mb-8">
                  <div
                    className={`breathing-orb w-24 h-24 bg-primary-400 rounded-full flex items-center justify-center relative ${isPlaying ? "animate-pulse" : ""}`}
                    onClick={toggleAudio}
                  >
                    <div
                      className={`w-20 h-20 bg-primary-300 rounded-full absolute ${isPlaying ? "animate-pulse" : ""}`}
                    ></div>
                    <div
                      className={`w-16 h-16 bg-primary-200 rounded-full absolute ${isPlaying ? "animate-pulse" : ""}`}
                    ></div>
                    <div
                      className={`w-10 h-10 bg-white rounded-full absolute ${isPlaying ? "animate-pulse" : ""}`}
                    ></div>
                    <span className="text-primary-900 font-medium z-10">Breathe</span>
                  </div>
                </div>

                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-medium text-white">Audio Environments</h3>
                  <button className="text-primary-300 hover:text-primary-200 transition-colors">See All</button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    className="bg-neutral-700/50 hover:bg-neutral-600/50 p-3 rounded-lg flex flex-col items-center text-white transition-colors"
                    onClick={() => startSession("Rain")}
                  >
                    <span className="material-symbols-outlined text-2xl mb-1">water_drop</span>
                    <span className="text-sm">Rain</span>
                  </button>
                  <button
                    className="bg-neutral-700/50 hover:bg-neutral-600/50 p-3 rounded-lg flex flex-col items-center text-white transition-colors"
                    onClick={() => startSession("Ocean")}
                  >
                    <span className="material-symbols-outlined text-2xl mb-1">waves</span>
                    <span className="text-sm">Ocean</span>
                  </button>
                  <button
                    className="bg-neutral-700/50 hover:bg-neutral-600/50 p-3 rounded-lg flex flex-col items-center text-white transition-colors"
                    onClick={() => startSession("Forest")}
                  >
                    <span className="material-symbols-outlined text-2xl mb-1">forest</span>
                    <span className="text-sm">Forest</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {meditationPlan && (
            <div className="mt-12 bg-neutral-800/30 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
              <h2 className="text-2xl font-bold text-white mb-4">Your AI-Generated Meditation Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-neutral-700/40 rounded-lg p-4 hover:bg-neutral-700/60 transition-colors cursor-pointer group">
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300 font-medium">Morning</span>
                    <span className="text-neutral-300">10 min</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">Energizing Breath</h3>
                  <p className="text-neutral-300 text-sm">Start your day with focused breathing to awaken your mind.</p>
                  <button
                    className="mt-3 text-primary-300 flex items-center group-hover:opacity-100 transition-opacity"
                    onClick={() => startSession("Energizing Breath")}
                  >
                    <span>Begin session</span>
                    <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="bg-neutral-700/40 rounded-lg p-4 hover:bg-neutral-700/60 transition-colors cursor-pointer group">
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300 font-medium">Afternoon</span>
                    <span className="text-neutral-300">15 min</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">Stress Relief</h3>
                  <p className="text-neutral-300 text-sm">
                    Mid-day relaxation to center yourself and manage stress levels.
                  </p>
                  <button
                    className="mt-3 text-primary-300 flex items-center group-hover:opacity-100 transition-opacity"
                    onClick={() => startSession("Stress Relief")}
                  >
                    <span>Begin session</span>
                    <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="bg-neutral-700/40 rounded-lg p-4 hover:bg-neutral-700/60 transition-colors cursor-pointer group">
                  <div className="flex justify-between mb-2">
                    <span className="text-primary-300 font-medium">Evening</span>
                    <span className="text-neutral-300">20 min</span>
                  </div>
                  <h3 className="text-white font-medium mb-1">Deep Sleep Prep</h3>
                  <p className="text-neutral-300 text-sm">Calm your mind and prepare your body for restful sleep.</p>
                  <button
                    className="mt-3 text-primary-300 flex items-center group-hover:opacity-100 transition-opacity"
                    onClick={() => startSession("Deep Sleep Prep")}
                  >
                    <span>Begin session</span>
                    <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal for icon actions */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-neutral-800 rounded-xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{modalContent.title}</h3>
              <button className="text-neutral-400 hover:text-white" onClick={() => setShowModal(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-neutral-300 mb-6">{modalContent.description}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

