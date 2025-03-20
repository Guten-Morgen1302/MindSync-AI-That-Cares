import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Initialize the Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "MindSync - AI Wellness Platform",
  description:
    "Experience the future of mental wellness with our cyberpunk-inspired AI that adapts to your emotions and guides your mindfulness journey.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-br from-black to-gray-900 min-h-screen font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'