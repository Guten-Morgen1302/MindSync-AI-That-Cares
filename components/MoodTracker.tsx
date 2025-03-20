"use client"

import { useState } from "react"

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([])
  const [noteText, setNoteText] = useState("")
  const [moodSaved, setMoodSaved] = useState(false)

  const moods = [
    { name: "Happy", icon: "sentiment_very_satisfied", color: "bg-green-500" },
    { name: "Content", icon: "sentiment_satisfied", color: "bg-blue-500" },
    { name: "Neutral", icon: "sentiment_neutral", color: "bg-gray-500" },
    { name: "Anxious", icon: "sentiment_dissatisfied", color: "bg-yellow-500" },
    { name: "Sad", icon: "sentiment_very_dissatisfied", color: "bg-red-500" },
  ]

  const triggers = [
    { name: "Work", icon: "work" },
    { name: "Relationships", icon: "family_restroom" },
    { name: "Health", icon: "fitness_center" },
    { name: "Finances", icon: "payments" },
    { name: "Personal Growth", icon: "self_improvement" },
    { name: "Other", icon: "add" },
  ]

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
  }

  const handleTriggerSelect = (trigger: string) => {
    if (selectedTriggers.includes(trigger)) {
      setSelectedTriggers(selectedTriggers.filter((t) => t !== trigger))
    } else {
      setSelectedTriggers([...selectedTriggers, trigger])
    }
  }

  const saveMoodEntry = () => {
    if (!selectedMood) {
      alert("Please select a mood")
      return
    }

    setMoodSaved(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setMoodSaved(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-xl shadow-2xl p-8 text-white">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-700 to-primary-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">monitoring</span>
              </div>
              <h1 className="text-3xl font-bold">Mood Tracker</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 p-2 rounded-lg text-neutral-300">
                <span className="material-symbols-outlined">calendar_month</span>
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 p-2 rounded-lg text-neutral-300">
                <span className="material-symbols-outlined">insights</span>
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 p-2 rounded-lg text-neutral-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800 mb-6">
              <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2>
              <div className="grid grid-cols-5 gap-4 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.name}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 ${
                      selectedMood === mood.name
                        ? `${mood.color} text-white hover:ring-2 hover:ring-primary-500`
                        : "bg-neutral-700 hover:bg-neutral-600"
                    }`}
                    onClick={() => handleMoodSelect(mood.name)}
                  >
                    <span className="material-symbols-outlined text-3xl mb-2">{mood.icon}</span>
                    <span>{mood.name}</span>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">What's contributing to this feeling?</label>
                <div className="grid grid-cols-3 gap-3">
                  {triggers.map((trigger) => (
                    <button
                      key={trigger.name}
                      className={`bg-neutral-700 hover:bg-neutral-600 transition-all p-3 rounded-lg text-left ${
                        selectedTriggers.includes(trigger.name) ? "border-2 border-primary-500" : ""
                      }`}
                      onClick={() => handleTriggerSelect(trigger.name)}
                    >
                      <span className="material-symbols-outlined mb-1">{trigger.icon}</span>
                      <span className="block">{trigger.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Add a note (optional)</label>
                <textarea
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-4 resize-none focus:outline-none focus:border-primary-500 text-neutral-300"
                  placeholder="What's on your mind today?"
                  rows={4}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                ></textarea>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  moodSaved ? "bg-green-600 hover:bg-green-500" : "bg-primary-600 hover:bg-primary-500"
                }`}
                onClick={saveMoodEntry}
              >
                {moodSaved ? "Mood Entry Saved!" : "Save Mood Entry"}
              </button>
            </div>

            <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Weekly Mood Patterns</h2>
                <div className="flex gap-2">
                  <button className="bg-neutral-800 hover:bg-neutral-700 transition-all p-2 rounded-lg text-neutral-300">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="bg-neutral-800 hover:bg-neutral-700 transition-all p-2 rounded-lg text-neutral-300">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="h-[300px] bg-neutral-900 rounded-lg p-4 flex items-end justify-between">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                  const heights = ["h-1/3", "h-2/3", "h-1/2", "h-3/4", "h-2/5", "h-3/5", "h-1/2"]
                  const colors = [
                    "bg-red-500/70",
                    "bg-yellow-500/70",
                    "bg-blue-500/70",
                    "bg-green-500/70",
                    "bg-yellow-500/70",
                    "bg-blue-500/70",
                    "bg-green-500/70",
                  ]

                  return (
                    <div key={day} className="flex flex-col items-center w-1/7 gap-2">
                      <div className={`w-full ${heights[index]} ${colors[index]} rounded-t-sm`}></div>
                      <span className="text-neutral-400 text-sm">{day}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-4 flex justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-neutral-300">Happy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-neutral-300">Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                  <span className="text-sm text-neutral-300">Neutral</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="text-sm text-neutral-300">Anxious</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-sm text-neutral-300">Sad</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800">
              <h2 className="text-xl font-bold mb-4">AI Insights</h2>
              <div className="space-y-4">
                <div className="bg-primary-800/30 p-4 rounded-lg">
                  <h3 className="font-medium text-primary-400 mb-1">Pattern Detected</h3>
                  <p className="text-neutral-300 text-sm">
                    Your mood tends to improve on weekends and dip on Mondays. Consider implementing stress-reduction
                    techniques at the start of your work week.
                  </p>
                </div>
                <div className="bg-primary-800/30 p-4 rounded-lg">
                  <h3 className="font-medium text-primary-400 mb-1">Correlation Found</h3>
                  <p className="text-neutral-300 text-sm">
                    Your mood is positively correlated with physical activity. On days you exercise, your mood scores
                    are 40% higher.
                  </p>
                </div>
              </div>
              <button className="mt-4 text-primary-500 flex items-center">
                <span>View detailed analysis</span>
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </button>
            </div>

            <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800">
              <h2 className="text-xl font-bold mb-4">Mood Triggers</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-neutral-400">work</span>
                    <span>Work</span>
                  </div>
                  <div className="w-20 h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="w-7/12 h-full bg-red-500"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-neutral-400">self_improvement</span>
                    <span>Exercise</span>
                  </div>
                  <div className="w-20 h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-green-500"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-neutral-400">family_restroom</span>
                    <span>Social</span>
                  </div>
                  <div className="w-20 h-2 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/30 rounded-xl p-6 border border-neutral-800">
              <h2 className="text-xl font-bold mb-4">Recommended Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-neutral-700 hover:bg-neutral-600 transition-all p-3 rounded-lg text-left flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">self_improvement</span>
                  </div>
                  <div>
                    <h3 className="font-medium">5-min Breathing Exercise</h3>
                    <p className="text-neutral-400 text-sm">Reduce stress and anxiety</p>
                  </div>
                </button>
                <button className="w-full bg-neutral-700 hover:bg-neutral-600 transition-all p-3 rounded-lg text-left flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">edit_note</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Guided Journaling</h3>
                    <p className="text-neutral-400 text-sm">Process your thoughts</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

