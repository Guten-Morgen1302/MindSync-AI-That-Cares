import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full animate-pulse blur-xl opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl">🤖</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
        404 - Neural Connection Lost
      </h1>
      <p className="text-neutral-300 max-w-md mb-8">
        The cybernetic pathway you're looking for doesn't exist or has been disconnected from the mainframe.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/30 hover:scale-105"
      >
        Return to Neural Hub
      </Link>
    </div>
  )
}

