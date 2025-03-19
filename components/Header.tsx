"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const isHomePage = pathname === "/"

  return (
    <header className="relative z-10 py-6 px-8 border-b border-neutral-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            className="w-10 h-10 text-fuchsia-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent"
          >
            MIND<span className="text-cyan-400">SYNC</span>
          </Link>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            <li className="relative group">
              <Link
                href="/"
                className={`font-medium tracking-wide px-1 py-2 transition-all duration-300 border-b-2 ${
                  isActive("/") ? "border-cyan-400" : "border-transparent hover:border-cyan-400"
                }`}
              >
                Home
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/ai-chat"
                className={`font-medium tracking-wide px-1 py-2 transition-all duration-300 border-b-2 ${
                  isActive("/ai-chat") ? "border-cyan-400" : "border-transparent hover:border-cyan-400"
                }`}
              >
                AI Chat
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 ${
                  isActive("/ai-chat") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/meditation"
                className={`font-medium tracking-wide px-1 py-2 transition-all duration-300 border-b-2 ${
                  isActive("/meditation") ? "border-cyan-400" : "border-transparent hover:border-cyan-400"
                }`}
              >
                Meditation
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 ${
                  isActive("/meditation") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/mood-tracker"
                className={`font-medium tracking-wide px-1 py-2 transition-all duration-300 border-b-2 ${
                  isActive("/mood-tracker") ? "border-cyan-400" : "border-transparent hover:border-cyan-400"
                }`}
              >
                Mood Tracker
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 ${
                  isActive("/mood-tracker") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
            <li className="relative group">
              <Link
                href="/journal"
                className={`font-medium tracking-wide px-1 py-2 transition-all duration-300 border-b-2 ${
                  isActive("/journal") ? "border-cyan-400" : "border-transparent hover:border-cyan-400"
                }`}
              >
                Journal
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 transition-all duration-300 ${
                  isActive("/journal") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {isHomePage && (
            <Link
              href="/meditation"
              className="relative overflow-hidden px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-medium transition-all duration-300 hover:from-fuchsia-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-fuchsia-500/30 group"
            >
              <span className="z-10 relative">Get Started</span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-white/10 to-white/10 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-md border-b border-neutral-800 z-50">
          <nav className="py-4 px-8">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className={`block py-2 transition-colors ${isActive("/") ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-chat"
                  className={`block py-2 transition-colors ${isActive("/ai-chat") ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/meditation"
                  className={`block py-2 transition-colors ${isActive("/meditation") ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Meditation
                </Link>
              </li>
              <li>
                <Link
                  href="/mood-tracker"
                  className={`block py-2 transition-colors ${isActive("/mood-tracker") ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mood Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className={`block py-2 transition-colors ${isActive("/journal") ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Journal
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

