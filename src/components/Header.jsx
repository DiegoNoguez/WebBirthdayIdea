import React from 'react'
import { Sparkles } from 'lucide-react'

const Header = ({ className = '' }) => {
  return (
    <header className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="
        px-6 py-4 sm:px-10 sm:py-6
        rounded-3xl text-center
        bg-rose-950/85 backdrop-blur-md
        border-2 border-pink-500
        shadow-[0_0_25px_rgba(236,72,153,0.6),_0_0_50px_rgba(159,18,57,0.4)]
        transition-all duration-300
        flex items-center justify-center gap-3
      ">
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-pulse" />
        <h1 className="font-playwrite text-3xl sm:text-5xl font-bold text-pink-200 drop-shadow-[0_0_12px_rgba(244,114,182,0.9)]">
          Happy Birthday
        </h1>
        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-pulse" />
      </div>
    </header>
  )
}

export default Header