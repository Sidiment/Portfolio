import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuheng Zhao - Portfolio',
  description: 'Personal portfolio website showcasing my projects and work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold">ZHAO</a>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/work/project" className="hover:text-gray-600">Projects</a>
                <a href="/photos" className="hover:text-gray-600">Photos</a>
                <a href="/resume" className="hover:text-gray-600">Resume</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 