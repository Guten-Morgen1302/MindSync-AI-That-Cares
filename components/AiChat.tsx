export default function AiChat() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl p-6 relative font-sans">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-900/20 to-neutral-950/70 z-0"></div>
        <div className="relative z-10 flex flex-col h-[600px]">
          <header className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary-700 border-2 border-primary-500 shadow-lg shadow-primary-500/30 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-neutral-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 8.1 19.33 6.66 18.12C6.25 17.78 6 17.28 6 16.75C6 14.57 7.75 12.75 10 12.75H14C16.25 12.75 18 14.57 18 16.75C18 17.28 17.75 17.78 17.34 18.12C15.9 19.33 14.03 20 12 20Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-400 tracking-wide">NEXUS-9</h1>
                <p className="text-sm text-neutral-400">Cybernetic Emotional Support AI</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 p-2 rounded-full text-neutral-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 p-2 rounded-full text-neutral-300">
                <span className="material-symbols-outlined">help</span>
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 p-2 rounded-full text-neutral-300">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </header>

          <div className="flex gap-4 flex-1 overflow-hidden">
            <div className="w-1/3 flex flex-col">
              <div className="relative h-full rounded-xl border border-primary-700/50 bg-neutral-800/70 p-4 flex flex-col items-center overflow-hidden">
                <div className="absolute -inset-0 bg-gradient-to-b from-primary-700/10 to-neutral-900/40 z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-primary-600/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 rounded-full border-2 border-primary-500 overflow-hidden relative mb-6 shadow-lg shadow-primary-500/30">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-800 to-primary-600"></div>
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-neutral-200/90"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5C8.5 7.57 10.07 6 12 6ZM12 20C9.97 20 8.1 19.33 6.66 18.12C6.25 17.78 6 17.28 6 16.75C6 14.57 7.75 12.75 10 12.75H14C16.25 12.75 18 14.57 18 16.75C18 17.28 17.75 17.78 17.34 18.12C15.9 19.33 14.03 20 12 20Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="absolute inset-0 border-4 border-primary-400/30 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-primary-400 mb-1">ANALYZING MOOD</h2>
                    <div className="w-full h-1.5 bg-neutral-700 rounded-full mb-3 overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-primary-600 to-primary-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-neutral-400 text-sm">Current emotional state detected:</p>
                    <p className="text-primary-300 font-semibold">Mild Anxiety</p>
                  </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-2 mt-4">
                  <button className="bg-neutral-700 hover:bg-neutral-600 transition-all rounded p-2 flex items-center justify-center text-neutral-300">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 transition-all rounded p-2 flex items-center justify-center text-neutral-300">
                    <span className="material-symbols-outlined text-sm">psychology</span>
                  </button>
                  <button className="bg-neutral-700 hover:bg-neutral-600 transition-all rounded p-2 flex items-center justify-center text-neutral-300">
                    <span className="material-symbols-outlined text-sm">self_improvement</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-2/3 flex flex-col">
              <div className="flex-1 bg-neutral-800/70 rounded-xl border border-primary-700/50 p-4 mb-4 overflow-hidden relative">
                <div className="absolute -inset-0 bg-gradient-to-b from-primary-700/10 to-neutral-900/40 z-0"></div>
                <div className="h-full overflow-y-auto relative z-10 flex flex-col">
                  <div className="flex justify-start mb-4">
                    <div className="bg-primary-800/80 rounded-lg rounded-tl-none max-w-[80%] p-3 border border-primary-600/30">
                      <p className="text-neutral-200">
                        Hello NEXUS, I've been feeling anxious about my upcoming presentation at work.
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">10:23 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="bg-neutral-700/80 rounded-lg rounded-tr-none max-w-[80%] p-3 border border-neutral-600/30">
                      <p className="text-neutral-200">
                        I understand your concern about the presentation. Public speaking anxiety is common. Would you
                        like to explore some coping strategies specifically for presentation anxiety?
                      </p>
                      <div className="flex items-center justify-end mt-1 gap-1 text-xs text-neutral-400">
                        <span>10:24 AM</span>
                        <span className="material-symbols-outlined text-xs">done_all</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start mb-4">
                    <div className="bg-primary-800/80 rounded-lg rounded-tl-none max-w-[80%] p-3 border border-primary-600/30">
                      <p className="text-neutral-200">
                        Yes, that would be helpful. I keep worrying that I'll forget what to say or that people will
                        judge me negatively.
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">10:26 AM</p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="bg-neutral-700/80 rounded-lg rounded-tr-none max-w-[80%] p-3 border border-neutral-600/30">
                      <p className="text-neutral-200">
                        I'm detecting signs of anxiety in your messages. Let's work through this together with some
                        evidence-based techniques:
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-neutral-200">
                        <li>Try deep breathing exercises before your presentation</li>
                        <li>Visualize yourself succeeding with confidence</li>
                        <li>Prepare thoroughly but avoid over-rehearsing</li>
                        <li>Remember that audience members are usually supportive</li>
                      </ul>
                      <p className="mt-2 text-neutral-200">
                        Would you like me to guide you through a quick anxiety-reduction exercise right now?
                      </p>
                      <div className="flex items-center justify-end mt-1 gap-1 text-xs text-neutral-400">
                        <span>10:27 AM</span>
                        <span className="material-symbols-outlined text-xs">done_all</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm my-2 justify-center">
                    <div className="h-px bg-neutral-700 flex-1"></div>
                    <span>Today</span>
                    <div className="h-px bg-neutral-700 flex-1"></div>
                  </div>
                  <div className="bg-neutral-700/40 rounded-lg p-3 mt-2 border border-primary-600/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary-400">tips_and_updates</span>
                      <h3 className="font-semibold text-primary-400">Recommended Activity</h3>
                    </div>
                    <p className="text-neutral-300 text-sm">
                      5-minute guided breathing exercise specifically designed for pre-presentation anxiety
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button className="bg-primary-600 hover:bg-primary-500 transition-all duration-300 text-neutral-100 rounded px-3 py-1.5 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">play_arrow</span> Start Now
                      </button>
                      <button className="bg-neutral-600 hover:bg-neutral-500 transition-all duration-300 text-neutral-200 rounded px-3 py-1.5 text-sm">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-neutral-700/80 border border-primary-700/50 rounded-xl py-3 px-4 pr-14 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 placeholder:text-neutral-500"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                  <button className="bg-neutral-600 hover:bg-neutral-500 transition-all p-1.5 rounded-full text-neutral-300">
                    <span className="material-symbols-outlined text-sm">mic</span>
                  </button>
                  <button className="bg-primary-600 hover:bg-primary-500 transition-all p-1.5 rounded-full text-neutral-100">
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 pt-3 border-t border-neutral-700">
            <div className="flex items-center gap-3">
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all px-3 py-1.5 rounded text-sm text-neutral-300 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">history</span> Chat History
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 transition-all px-3 py-1.5 rounded text-sm text-neutral-300 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">download</span> Export
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-neutral-500">Mood Detection Active</div>
              <div className="w-12 h-6 bg-primary-900/50 rounded-full p-1 flex">
                <div className="w-4 h-4 bg-primary-400 rounded-full transform translate-x-6 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

