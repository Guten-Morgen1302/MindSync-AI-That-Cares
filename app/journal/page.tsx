"use client"

import { useState, useCallback } from "react"

export default function Journal() {
  const [journalEntry, setJournalEntry] = useState("")
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [entrySaved, setEntrySaved] = useState(false)
  const [entries, setEntries] = useState([
    {
      title: "Project Breakthrough",
      date: "Yesterday",
      content: "Finally made progress on the quantum algorithm. The team was impressed with...",
    },
    {
      title: "Neon City Thoughts",
      date: "3 days ago",
      content: "Walking through downtown at night, the city lights reflecting in the rain...",
    },
    {
      title: "Memory Upload",
      date: "May 10",
      content: "Today I tried the new MindSync device. The experience was unlike anything I've...",
    },
  ])

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
  }

  const saveEntry = () => {
    if (journalEntry.trim() === "") {
      alert("Please write something in your journal entry")
      return
    }

    // Add new entry to the list
    const newEntry = {
      title: selectedMood ? `Feeling ${selectedMood}` : "New Entry",
      date: "Just now",
      content: journalEntry.substring(0, 100) + (journalEntry.length > 100 ? "..." : ""),
    }

    setEntries([newEntry, ...entries])
    setEntrySaved(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setEntrySaved(false)
    }, 3000)
  }

  const usePrompt = useCallback(
    (prompt: string) => {
      setJournalEntry(prompt)
    },
    [setJournalEntry],
  )

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl shadow-2xl p-8 text-neutral-50 font-sans">
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center shadow-[0_0_15px] shadow-primary-500/50">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                NEURAL <span className="opacity-80">JOURNAL</span>
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-neutral-300 hover:text-primary-400 transition-colors duration-300">
                <span className="material-symbols-outlined">notifications</span>
                <div className="h-2 w-2 bg-primary-500 rounded-full absolute top-0 right-0 animate-pulse"></div>
              </button>
              <button className="flex items-center gap-2 text-neutral-300 hover:text-primary-400 transition-colors duration-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div className="flex items-center gap-2 border border-neutral-700 px-4 py-2 rounded-full bg-neutral-800/50 backdrop-blur-sm hover:border-primary-600 transition-all duration-300">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-700"></div>
                <span>Alex Nero</span>
                <span className="material-symbols-outlined text-neutral-400">expand_more</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="backdrop-blur-md bg-neutral-800/30 rounded-xl border border-neutral-700 p-6 mb-6 hover:border-primary-600/50 transition-all duration-500 group shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-primary-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute h-1 w-0 bg-gradient-to-r from-primary-500 to-primary-700 bottom-0 left-0 group-hover:w-full transition-all duration-1000"></div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-500">edit</span> Today's Entry
                <span className="ml-auto text-sm text-neutral-400 font-normal">
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} •{" "}
                  {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                </span>
              </h2>
              <div className="mb-4 flex gap-3">
                <button
                  onClick={() => handleMoodSelect("Happy")}
                  className={`p-2 rounded-lg transition-all ${
                    selectedMood === "Happy" ? "bg-green-500 text-white" : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  <span className="material-symbols-outlined">sentiment_very_satisfied</span>
                </button>
                <button
                  onClick={() => handleMoodSelect("Content")}
                  className={`p-2 rounded-lg transition-all ${
                    selectedMood === "Content" ? "bg-blue-500 text-white" : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  <span className="material-symbols-outlined">sentiment_satisfied</span>
                </button>
                <button
                  onClick={() => handleMoodSelect("Neutral")}
                  className={`p-2 rounded-lg transition-all ${
                    selectedMood === "Neutral" ? "bg-gray-500 text-white" : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  <span className="material-symbols-outlined">sentiment_neutral</span>
                </button>
                <button
                  onClick={() => handleMoodSelect("Anxious")}
                  className={`p-2 rounded-lg transition-all ${
                    selectedMood === "Anxious" ? "bg-yellow-500 text-white" : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  <span className="material-symbols-outlined">sentiment_dissatisfied</span>
                </button>
                <button
                  onClick={() => handleMoodSelect("Sad")}
                  className={`p-2 rounded-lg transition-all ${
                    selectedMood === "Sad" ? "bg-red-500 text-white" : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  <span className="material-symbols-outlined">sentiment_very_dissatisfied</span>
                </button>
              </div>
              <textarea
                className="w-full h-64 bg-neutral-900/50 border border-neutral-700 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-lg"
                placeholder="Begin your journal entry here... AI will analyze your thoughts and provide insights."
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
              ></textarea>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-300 flex items-center gap-2">
                    <span className="material-symbols-outlined">attach_file</span> Attach
                  </button>
                  <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-300 flex items-center gap-2">
                    <span className="material-symbols-outlined">mood</span> Mood
                  </button>
                  <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors duration-300 flex items-center gap-2">
                    <span className="material-symbols-outlined">tag</span> Tags
                  </button>
                </div>
                <button
                  className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-primary-900/20 group transition-all duration-300 ${
                    entrySaved
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600"
                  }`}
                  onClick={saveEntry}
                >
                  <span>{entrySaved ? "Saved!" : "Save Entry"}</span>
                  {!entrySaved && (
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="backdrop-blur-md bg-neutral-800/30 rounded-xl border border-neutral-700 p-6 shadow-lg hover:border-primary-600/50 transition-all duration-500">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-500">psychology</span> AI Analysis &amp;
                Insights
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-primary-600/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-700/20">
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-400">Emotional Pattern</h3>
                    <p className="text-neutral-300">
                      Your entries this week show an overall positive trend. You've mentioned achievements more
                      frequently.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-primary-600/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-700/20">
                    <span className="material-symbols-outlined">confirmation_number</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-400">Personal Insight</h3>
                    <p className="text-neutral-300">
                      Your focus on work-life balance has improved. Consider maintaining this new routine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-primary-600/30 transition-all duration-300">
                  <div className="h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-700/20">
                    <span className="material-symbols-outlined">lightbulb</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-400">Suggested Prompt</h3>
                    <p className="text-neutral-300">
                      Describe a challenge you anticipate this week and how you might prepare for it.
                    </p>
                    <button
                      className="mt-2 text-primary-500 hover:text-primary-400 transition-colors"
                      onClick={() => usePrompt("A challenge I anticipate this week is...")}
                    >
                      Use this prompt →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-md bg-neutral-800/30 rounded-xl border border-neutral-700 p-6 shadow-lg hover:border-primary-600/50 transition-all duration-500">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-500">insights</span> Emotional Trends
              </h2>
              <div className="h-48 w-full bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute bottom-0 left-0 h-1/3 w-1/6 bg-primary-700/70 rounded-t-sm"></div>
                  <div className="absolute bottom-0 left-[calc(1/6*100%)] h-2/3 w-1/6 bg-primary-600/70 rounded-t-sm"></div>
                  <div className="absolute bottom-0 left-[calc(2/6*100%)] h-1/2 w-1/6 bg-primary-500/70 rounded-t-sm"></div>
                  <div className="absolute bottom-0 left-[calc(3/6*100%)] h-3/4 w-1/6 bg-primary-400/70 rounded-t-sm"></div>
                  <div className="absolute bottom-0 left-[calc(4/6*100%)] h-2/5 w-1/6 bg-primary-500/70 rounded-t-sm"></div>
                  <div className="absolute bottom-0 left-[calc(5/6*100%)] h-3/5 w-1/6 bg-primary-600/70 rounded-t-sm"></div>
                  <div className="absolute bottom-[-20px] left-[8%] text-xs text-neutral-400">Mon</div>
                  <div className="absolute bottom-[-20px] left-[calc(1/6*100%+8%)] text-xs text-neutral-400">Tue</div>
                  <div className="absolute bottom-[-20px] left-[calc(2/6*100%+8%)] text-xs text-neutral-400">Wed</div>
                  <div className="absolute bottom-[-20px] left-[calc(3/6*100%+8%)] text-xs text-neutral-400">Thu</div>
                  <div className="absolute bottom-[-20px] left-[calc(4/6*100%+8%)] text-xs text-neutral-400">Fri</div>
                  <div className="absolute bottom-[-20px] left-[calc(5/6*100%+8%)] text-xs text-neutral-400">Sat</div>
                </div>
              </div>
              <div className="mt-8 text-neutral-300 text-sm">
                <p>Your emotional balance has been trending positively since mid-week.</p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-neutral-800/30 rounded-xl border border-neutral-700 p-6 shadow-lg hover:border-primary-600/50 transition-all duration-500">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-500">history</span> Recent Entries
                </h2>
                <button className="text-neutral-400 hover:text-primary-400 transition-colors">View All</button>
              </div>
              <div className="space-y-3">
                {entries.map((entry, index) => (
                  <div
                    key={index}
                    className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-primary-600/30 transition-all duration-300 hover:bg-neutral-800/50 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{entry.title}</h3>
                      <span className="text-xs text-neutral-400">{entry.date}</span>
                    </div>
                    <p className="text-sm text-neutral-300 mt-1 line-clamp-2">{entry.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-md bg-neutral-800/30 rounded-xl border border-neutral-700 p-6 shadow-lg hover:border-primary-600/50 transition-all duration-500">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-500">verified_user</span> Security Status
              </h2>
              <div className="flex items-center justify-between p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-700/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-500">lock</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-400">End-to-End Encrypted</h3>
                    <p className="text-xs text-neutral-400">Your journal is secure and private</p>
                  </div>
                </div>
                <div>
                  <span className="material-symbols-outlined text-neutral-400 hover:text-primary-400 cursor-pointer transition-colors">
                    info
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-50">
          <button className="h-14 w-14 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-900/30 hover:shadow-primary-900/50 hover:scale-105 transition-all duration-300 group">
            <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">help</span>
          </button>
        </div>
      </div>
    </div>
  )
}

