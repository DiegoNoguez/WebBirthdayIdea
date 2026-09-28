import React from 'react'
import Header from '../components/Header'
import Carrusel from '../components/Carrusel'
import DriveVideoPlayer from '../components/DriveVideoPlayer'
import { usePage } from '../context/PageContext'
import { Crown, Mail, ArrowLeft, Heart, Stars } from 'lucide-react'

const DetailsPage = () => {
  const { navigateTo } = usePage()

  //  REEMPLAZA ESTE ID con el ID real de tu video de Google Drive
  // Ejemplo: En https://drive.google.com/file/d/1A2B3C4D5E/view el ID es "1A2B3C4D5E"
  const googleDriveVideoId = "TU_GOOGLE_DRIVE_FILE_ID_AQUI"

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 space-y-8 relative z-10">
      {/* Encabezado */}
      <Header className="mb-4" />

      {/* Banner Personalizado de Nombre & Cumpleaños */}
      <div className="w-full max-w-2xl mx-auto p-6 bg-rose-950/90 backdrop-blur-md rounded-3xl border-2 border-pink-500/70 shadow-[0_0_30px_rgba(236,72,153,0.4)] text-center">
        <div className="flex justify-center items-center gap-2 text-pink-400 mb-2">
          <Crown className="w-7 h-7 text-yellow-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-pink-300">Celebración Especial</span>
          <Crown className="w-7 h-7 text-yellow-400" />
        </div>
        
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-pink-200 font-playwrite mb-3 drop-shadow-[0_0_15px_rgba(244,114,182,0.9)] tracking-wide">
          Anlly Fernanda Rueda Ruiz
        </h2>

        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-pink-500/20 border border-pink-400/50 text-pink-200 text-lg sm:text-xl font-bold">
          <Stars className="w-5 h-5 text-pink-300" />
          <span>¡Felices 21 Años!</span>
          <Stars className="w-5 h-5 text-pink-300" />
        </div>
      </div>

      {/* 1. ARRIBA: Carrusel de Poemas Autónomo */}
      <section>
        <Carrusel mode="poemas" />
      </section>

      {/* 2. EN MEDIO: Carta de Cumpleaños */}
      <section className="w-full max-w-2xl mx-auto p-6 sm:p-10 bg-rose-950/90 backdrop-blur-lg rounded-3xl border-2 border-pink-500/60 shadow-[0_0_30px_rgba(236,72,153,0.35)] text-left">
        <div className="flex items-center justify-between border-b border-pink-500/30 pb-4 mb-6">
          <div className="flex items-center gap-2 text-pink-300">
            <Mail className="w-6 h-6" />
            <h3 className="text-2xl sm:text-3xl font-bold font-playwrite drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
              Una Carta Para Ti
            </h3>
          </div>
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
        </div>
        
        <div className="space-y-4 text-pink-100 text-base sm:text-lg leading-relaxed font-serif">
          <p className="text-pink-300 font-bold text-lg sm:text-xl">
            ¡Holaaaa mi niña preciosa!
          </p>

          <p>
            Hoy 28 de septiembre, pero del año 2005, nació una flor hermosa. Una bella flor que a lo largo del tiempo ha pasado por incontables momentos amargos, dulces e incluso, en ocasiones, momentos muy oscuros. No obstante, son justo todas estas experiencias en conjunto lo que te convierte en la gran flor que eres hoy.
          </p>

          <p>
            El tener 21 años suena increíble, al pensar en todas las metas que a lo largo de los años te has propuesto. Desde que te tengo en mi vida llenas de alegría mis días y, aunque no pueda estar a tu lado de forma física, no hay momento en el que deje de pensar en ti.
          </p>

          <p>
            Tengo mucho amor que darte, profesarte y demostrarte, pero sin duda alguna solo quiero acompañarte a lo largo de tu vida como tu fiel compañero, donde mi objetivo —más allá de formar una familia y vivir contigo por el resto de mi vida— es mimarte, cuidarte, amarte y compartir los días malos y tristes contigo.
          </p>

          <p>
            Por último, puedo decir que viviré y moriré por ti, no solo de forma literal sino de forma poética, ya que mi corazón y alma solo te pertenecen a ti desde el momento en el cual cruzamos miradas por tercera vez con el propósito de conocernos.
          </p>

          <p>
            Siendo hoy tu día, debes festejarlo y vivirlo a lo grande de la manera más responsable posible, y permitirnos tanto a tu familia como a mí seguir disfrutando de tu energía tan brillante con la alegría constante que tanto te ha caracterizado. Si alguna vez necesitas de alguien a quien recurrir y no sea un miembro de tu familia, te confieso que estaré para ti siempre, no importa el día, la fecha o el lugar.
          </p>

          <p>
            Cuando dudes de mi amor, permíteme demostrarte que no es así, que te sigo amando con la misma intensidad y pureza que desde el principio.
          </p>

          <div className="pt-4 text-right">
            <p className="font-playwrite text-pink-300 text-xl sm:text-2xl">
              ¡Feliz cumpleaños, mi amor! Te amooo ✨
            </p>
            <p className="text-xs sm:text-sm text-pink-200/80 italic mt-1 font-sans">
              El tamaño de mi amor por ti es inequiparable.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ABAJO: Carrusel de Fotos/Recuerdos */}
      <section>
        <Carrusel mode="fotos" />
      </section>

      {/* 4. REPRODUCTOR DE VIDEO GOOGLE DRIVE */}
      <DriveVideoPlayer driveFileId={googleDriveVideoId} />

      {/* Botón para regresar al inicio */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigateTo('inicio')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-rose-950 hover:bg-rose-900 text-pink-300 border border-pink-500/60 rounded-full transition-all shadow-lg active:scale-95 text-sm font-semibold cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </button>
      </div>
    </div>
  )
}

export default DetailsPage