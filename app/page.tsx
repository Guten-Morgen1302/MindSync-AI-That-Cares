import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black z-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 0, 255, 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-700/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-700/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block">Your AI Wellness</span>
                <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Neural Interface
                </span>
              </h2>
              <p className="text-xl text-neutral-300">
                Experience the future of mental wellness with our cyberpunk-inspired AI that adapts to your emotions and
                guides your mindfulness journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/ai-chat"
                  className="px-8 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/30 hover:scale-105"
                >
                  Try AI Chat
                </Link>
                <button className="px-8 py-3 rounded-md bg-transparent border border-cyan-500 text-cyan-400 font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
                  Explore Features
                </button>
              </div>
              <div className="flex items-center gap-4 text-neutral-400">
                <div className="flex -space-x-2">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-10 h-10 rounded-full border-2 border-black"
                    alt="User avatar"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    className="w-10 h-10 rounded-full border-2 border-black"
                    alt="User avatar"
                    width={40}
                    height={40}
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-10 h-10 rounded-full border-2 border-black"
                    alt="User avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-sm">Join 10,000+ users improving their mental wellness</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative backdrop-blur-sm bg-neutral-900/40 border border-neutral-700/50 rounded-2xl overflow-hidden shadow-xl shadow-fuchsia-500/10 group hover:shadow-fuchsia-500/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 opacity-50"></div>
                <div className="p-6 space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 p-0.5">
                      <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-br from-fuchsia-500 to-cyan-500 opacity-50 blur-sm"></div>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-cyan-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">MindSync AI</h3>
                      <p className="text-neutral-400 text-sm">Your personal wellness assistant</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="w-full h-full object-cover"
                          alt="User"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="bg-neutral-800/50 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-neutral-200">I've been feeling anxious about my new job lately.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <div className="bg-gradient-to-r from-fuchsia-900/50 to-cyan-900/50 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-neutral-200">
                          I understand starting a new job can be stressful. Let's work through these feelings together.
                          Would you like to try a quick breathing exercise?
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center text-black font-bold shrink-0">
                        <span className="material-symbols-outlined text-sm">smart_toy</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-700/50">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full bg-neutral-800/50 border border-neutral-700/50 rounded-full py-3 px-5 pr-12 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 transition-all duration-300"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center hover:opacity-90 transition-opacity">
                        <svg
                          className="w-4 h-4 text-black"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22 2L11 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22 2L15 22L11 13L2 9L22 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 backdrop-blur-md bg-neutral-900/40 border border-neutral-700/50 rounded-xl p-4 shadow-lg flex items-center justify-center animate-pulse hover:animate-none transition-all group-hover:scale-110">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 backdrop-blur-md bg-neutral-900/40 border border-neutral-700/50 rounded-xl p-4 shadow-lg flex items-center justify-center group-hover:scale-110 transition-all">
                <div className="relative w-8 h-8">
                  <svg
                    className="w-8 h-8 text-fuchsia-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 18V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.93 4.93L7.76 7.76"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.24 16.24L19.07 19.07"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M2 12H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M18 12H22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4.93 19.07L7.76 16.24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M16.24 7.76L19.07 4.93"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <div className="absolute inset-0 animate-ping rounded-full bg-fuchsia-500/50 blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto px-8">
          <div className="flex justify-center">
            <div className="text-center max-w-2xl mb-16">
              <h2 className="text-3xl font-bold mb-4">Neural-Enhanced Wellness Features</h2>
              <p className="text-neutral-400">
                Our cybernetically enhanced platform uses AI to understand your emotions and provide personalized
                wellness guidance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-neutral-900/40 border border-neutral-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500 p-0.5 mb-6">
                <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Emotional Analysis</h3>
              <p className="text-neutral-400 mb-4">
                Our advanced neural network analyzes your emotions through text and voice, providing personalized
                support and guidance.
              </p>
              <Link
                href="/ai-chat"
                className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
              >
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="backdrop-blur-md bg-neutral-900/40 border border-neutral-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 mb-6">
                <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Cybernetic Mood Tracking</h3>
              <p className="text-neutral-400 mb-4">
                Visualize your emotional patterns with interactive holograms and receive AI-driven insights to improve
                wellbeing.
              </p>
              <Link
                href="/mood-tracker"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>

            <div className="backdrop-blur-md bg-neutral-900/40 border border-neutral-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 p-0.5 mb-6">
                <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Neural Journaling</h3>
              <p className="text-neutral-400 mb-4">
                Write your thoughts and our AI analyzes patterns, providing insights and personalized affirmations.
              </p>
              <Link
                href="/journal"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Section */}
      <section className="relative py-12 z-10">
        <div className="container mx-auto px-8">
          <div className="backdrop-blur-lg bg-neutral-900/40 border border-neutral-700/50 rounded-2xl overflow-hidden shadow-xl shadow-fuchsia-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Immersive Meditation Experience</h2>
                <p className="text-neutral-300 mb-6">
                  Enter a cybernetic trance with our AI-guided meditation sessions. The interface adapts to your
                  biorhythms and emotional state for an optimal mindfulness experience.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center mt-1 shrink-0">
                      <svg
                        className="w-3 h-3 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Adaptive Neural Soundscapes</h4>
                      <p className="text-neutral-400 text-sm">
                        Personalized audio experiences that respond to your unique brain patterns.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center mt-1 shrink-0">
                      <svg
                        className="w-3 h-3 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Visual Breathing Guidance</h4>
                      <p className="text-neutral-400 text-sm">
                        Holographic visuals guide your breathing for optimal relaxation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center mt-1 shrink-0">
                      <svg
                        className="w-3 h-3 text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Cyberpunk Reality Integration</h4>
                      <p className="text-neutral-400 text-sm">
                        Augmented visual elements merge technology with mindfulness practices.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/meditation"
                  className="self-start px-6 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/30 hover:scale-105 group"
                >
                  <span className="flex items-center gap-2">Start Neural Meditation</span>
                </Link>
              </div>
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Meditation visualization"
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

