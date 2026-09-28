import React, { useState } from 'react'
import Header from '../components/Header'
import { usePage } from '../context/PageContext'
import { Heart, Sparkles } from 'lucide-react'

const HomePage = () => {
  const { navigateTo } = usePage()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 text-center">
      {/* Header Neón */}
      <Header className="mb-12" />

      {/* Botón Principal para ir a la página de sorpresas */}
      <button
        onClick={() => navigateTo('detalles')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center gap-3
          px-8 py-5 sm:px-12 sm:py-6 rounded-full font-bold text-lg sm:text-xl
          transition-all duration-300 transform active:scale-95 cursor-pointer
          ${isHovered 
            ? 'scale-105 bg-pink-500 text-rose-950 shadow-[0_0_35px_rgba(236,72,153,1)] border-2 border-white' 
            : 'bg-rose-900 text-pink-200 border-2 border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.5)]'
          }
        `}
      >
        <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Ver Sorpresa Especial</span>
        <Heart className="w-6 h-6 fill-current" />
      </button>
    </div>
  )
}

export default HomePage