import React from 'react'
import { Video, Heart } from 'lucide-react'

const DriveVideoPlayer = ({ driveUrl = 'https://drive.google.com/file/d/1zORT6czV5qk4jx_HqcOz16ptqmyTEHgJ/view?usp=sharing' }) => {
  
  // Función para obtener la URL de preview sin importar qué formato de enlace reciba
  const getEmbedUrl = (url) => {
    // Si ya es solo un ID
    if (!url.includes('/')) {
      return `https://drive.google.com/file/d/${url}/preview`
    }
    // Si viene la URL completa
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
    const fileId = match ? match[1] : ''
    return `https://drive.google.com/file/d/${fileId}/preview`
  }

  return (
    <section className="w-full max-w-3xl mx-auto my-8 p-4 sm:p-6 bg-rose-950/90 backdrop-blur-md rounded-3xl border-2 border-pink-500/60 shadow-[0_0_30px_rgba(236,72,153,0.35)]">
      <div className="flex items-center justify-center gap-2 mb-4 text-pink-300">
        <Video className="w-6 h-6 text-pink-400" />
        <h3 className="text-2xl font-bold font-playwrite drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
          Un Video Especial
        </h3>
        <Heart className="w-5 h-5 text-pink-400 fill-pink-400/40" />
      </div>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-pink-500/30 bg-black/40 shadow-inner">
        <iframe
          src={getEmbedUrl(driveUrl)}
          className="w-full h-full border-0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Video de Cumpleaños Google Drive"
        ></iframe>
      </div>
    </section>
  )
}

export default DriveVideoPlayer