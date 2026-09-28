import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, Image as ImageIcon, Pause, Play, Sparkles } from 'lucide-react'

const Carrusel = ({ mode = 'poemas', items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Array de poemas
  const poems = [
    `El mirarte es besarte 
Mas sin encambio mi suerte 
Es brillante 
Con el hecho de observarte`,

    `A la luz de luna 
Te regalo mi fortuna 
Que guardo con locura 
Y en ella vive mi ternura`,

    `Dentro de la rosa
Habita mi alma dichosa
Que se encuentra deseosa 
De compartir una vida amorosa`,

    `Al ver al sol 
Encuentro tu calor 
Que mi alma extraño
Como en la primavera de antaño 
Donde todo tenia color con gran fulgor 
El cual solo el crisol
Es capaz de aguantar tanto calor 
Que no se compara con mi amor`,

    `En el tiempo finito
Mi amor por ti ha sido descrito 
Dentro de un manuscrito 
Como la historia de un gran mito`,

    `Con el pesar de los días 
Sobrevivo con gran ironía 
Deseando encontrar armonía 
En la gran cercanía 
De tu compañía`,

    `A la cercanía de tu alma 
Descubro un panorama 
Que mi alma reclama 
La añoranza de una eterna flama`,

    `Con gran esfuerzo 
Te amo como fiel caballero 
En las noches de acero
Me acerco mas al eterno
Acuerdo de un gran comienzo`,

    `El ver las estrellas 
Me recuerda a ti querida doncella 
Ya que destellas
De una forma tan bella`,

    `En la calidez de la noche 
Busco el derroche 
De tu amor con gran goce
Y en mi alma conoce`,

    `En el sol de verano 
Busco tu mano 
Como un romano 
Para obtener tu amor dulce como el manzano`,

    `No hay día en el que no te ame
Por que mi alma infame,
Añora el momento de estar
Contigo y con ello bailar
Y por fin viajar
Al compás del año lunar`,

    `Al pasar de los años
El amor por ti es más fuerte que los contradaños
Y si bien te he provocado arraños
Mi sentir es más profundo
Ya que mi rumbo
Es estar en tu mundo
Por un segundo
Y con ello dejar de estar moribundo`,

    `Al buscar tu mirada 
Mi corazon lo interpreta
Como la llamada 
Acerca de la temporada 
En la que nos amemos en una velada`,

    `A través del recorrido del tiempo 
No existe ningún solo momento 
En el que no extrañe tu recuerdo 
Que añoro con tanto fervor 
Debido a que mi alma se encuentra 
Deseosa de tu amor 
Que tanto proclama de forma siniestra`,

    `Habitas en cada momento 
Como el viento en la tierra 
Donde mi cuerpo se destierra 
Y durante el paso de mis días 
Mi alma es la que mas se enfría 
No obstante aunque estoy en agonía 
He de entregar alma y cuerpo en total alegría`,

    `La fuente de mi alegría 
Eres tu mi querida dama 
Siendo lo que mi alma mas quería 
Siendo el paronama 
Dónde necesito habitar 
Al igual que un músico con su última sinfonía 
Anhelo despertar 
Con magna sincronía`,

    `Eres la digna representación de Afrodita 
Por consiguiente mi cuerpo mortal solicita 
Compartir mi tiempo finito 
E con ello puedas escuchar el grito 
Mi amor por ti cono evento fortuito`,

    `Tu mi dulce sueño
Donde pongo enorme empeño 
Dentro mi carisma risueño 
Para ello lograr estar a tu lado
Con mi alma y corazón congelado`,

    `Soy el causante de tu dolor 
Y al saberlo a mi alma causa gigantesco temor 
Que para enmendar 
Tendré que matar 
Lo que carece de color 
Aunque mi corazón 
Te lo doy sin ser justa e con toda razón 
Prefiero morir antes de ser tu horror`,

    `Aunque mi alma este quebrada 
Es lo único que puedo ofrecer 
Para ti mi gran amada 
Y con ello satisfacer 
Tus mas grandes deseos`,

    `Con ver el mar 
Mi ser se llena de gratitud al informar 
Que deseo estar 
Contigo y proclamar 
No obstante me he de esfumar
Para así poder apaciguar 
Tus mas profundos horrores 
Y convertirlos en las mas bellas flores`,

    `Soy como el mas grande roble 
Que carece de ser innoble
Pero mi amor por ti 
No es mas interesante ya que admití
Mi forma mas vulnerable 
En la manera mas improbable`,

    `En la gran agonía 
Tu risa es mi única medicina 
Que mi alma revitaliza 
Ya que eres la digna representación de antonia`,

    `Al ver las estrellas
Pienso en ti gran doncella 
Ya que destellas 
Como único astro 
De la gran galaxia en desabasto 
Por lo tanto al final mi amor embotellas`,

    `Tu amor es igual al sol de primavera 
La cual marca el inicio de una era 
Donde la espera 
No es mas que la compañera 
De una entrega sincera`,

    `No hay mayor temor
Que entregar el alma al amor 
Sin ninguna pizca de color 
Que conlleve al hito de un emperador`,

    `En el día más frio de invierno 
Mi amor no se apaga 
Por que se encuentra hirviendo 
Mas sin embargo me corta como una daga 
Y en el mas helado frio 
Es cuando mas Sonrió`
  ]

  // Mapeo automático de poemas a objetos
  const defaultPoemas = poems.map((poema, index) => ({
    id: index + 1,
    titulo: `Poema ${index + 1}`,
    verso: poema
  }))

  const defaultFotos = [
    {
      id: 1,
      titulo: "Recuerdo",
      url: "https://lh3.googleusercontent.com/d/1bCWyMA0OKFaOlqKzqH81n5xxus89XxTy"
    },
    {
      id: 2,
      titulo: "30 de octubre de 2025",
      url: "https://lh3.googleusercontent.com/d/1Q5KoDos4rTrgeULlwtOscXmym-z8TQoG"
    },
    {
      id: 3,
      titulo: "7 de abril 2024",
      url: "https://lh3.googleusercontent.com/d/1t26_eb-K6-QPnuTeSvWCdudBYLuvDdNY"
    },
    {
      id: 4,
      titulo: "23 de abril 2024",
      url: "https://lh3.googleusercontent.com/d/1YobGx2hfOMnjlUZDyIrI-_A83oi6HYxV"
    },
    {
      id: 5,
      titulo: "31 de abril de 2024",
      url: "https://lh3.googleusercontent.com/d/15A0ckTNkUD6sWaPglY3a6tmR-Wj1gkOH"
    },
    {
      id: 6,
      titulo: "31 de octubre 2025",
      url: "https://lh3.googleusercontent.com/d/1pCJj7Ix7VpjfWakFjBooJTR9MrLYjd51"
    },
    {
      id: 7,
      titulo: "31 de octubre 2025",
      url: "https://lh3.googleusercontent.com/d/1EXKyMoZ5C8bop_WpFxE4Rkpz7hO6LA9D"
    },
    {
      id: 8,
      titulo: "20 de julio 2025",
      url: "https://lh3.googleusercontent.com/d/1-Q8JxY8xCL5M3F7KssKBlTbjVhIHtYl3"
    }
  ]

  const list = items.length > 0 ? items : (mode === 'poemas' ? defaultPoemas : defaultFotos)

  // Transición automática
  useEffect(() => {
    if (!isAutoPlaying || list.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % list.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, list.length])

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % list.length)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + list.length) % list.length)

  // Porcentaje de lectura para la barra de progreso
  const progressPercentage = ((currentIndex + 1) / list.length) * 100

  if (mode === 'poemas') {
    const item = list[currentIndex]
    return (
      <div className="w-full max-w-xl mx-auto my-4 p-6 sm:p-8 bg-rose-950/90 backdrop-blur-md rounded-3xl border border-pink-500/50 shadow-[0_0_25px_rgba(236,72,153,0.35)] text-center relative">
        {/* Cabecera superior */}
        <div className="flex items-center justify-between text-pink-400 mb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">
              Poema {currentIndex + 1} / {list.length}
            </span>
          </div>
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-1.5 rounded-full hover:bg-pink-500/20 text-pink-300 transition-colors"
            title={isAutoPlaying ? "Pausar reproducción automática" : "Iniciar reproducción automática"}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Título del poema */}
        <h3 className="text-2xl sm:text-3xl font-bold text-pink-200 mt-2 mb-4 font-playwrite drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
          {item.titulo}
        </h3>
        
        {/* Verso del poema */}
        <p className="text-pink-100 italic text-base sm:text-lg whitespace-pre-line leading-relaxed min-h-[110px] flex items-center justify-center font-serif">
          "{item.verso}"
        </p>

        {/* --- BARRA DE PROGRESO PERSONALIZADA --- */}
        <div className="mt-6 px-2">
          <div className="w-full h-2 bg-rose-900/60 rounded-full overflow-hidden border border-pink-500/30 p-0.5 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-300 rounded-full transition-all duration-500 ease-out shadow-[0_0_12px_rgba(244,114,182,0.9)]"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Controles del Carrusel (Anterior / Siguiente) */}
        <div className="flex justify-between items-center mt-5">
          <button 
            onClick={handlePrev}
            className="px-4 py-2 bg-rose-900/80 hover:bg-rose-800 text-pink-200 rounded-full border border-pink-500/40 text-sm transition-all shadow-md active:scale-95 flex items-center gap-1.5 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <div className="flex items-center gap-1 text-xs text-pink-300/80 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>{Math.round(progressPercentage)}%</span>
          </div>

          <button 
            onClick={handleNext}
            className="px-4 py-2 bg-rose-900/80 hover:bg-rose-800 text-pink-200 rounded-full border border-pink-500/40 text-sm transition-all shadow-md active:scale-95 flex items-center gap-1.5 font-medium"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }
  
  // Modo Galería de Fotos
  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 sm:p-6 bg-rose-950/85 backdrop-blur-md rounded-3xl border border-pink-500/40 shadow-xl">
      <div className="flex items-center justify-center gap-2 mb-4">
        <ImageIcon className="w-6 h-6 text-pink-400" />
        <h3 className="text-xl sm:text-2xl font-bold text-center text-pink-200 font-playwrite">
          Galería de Recuerdos
        </h3>
      </div>

      {/* Se amplió la altura del visor a h-80 sm:h-[480px] */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-pink-500/30 h-80 sm:h-[480px] bg-rose-950/90 flex items-center justify-center">
        <img 
          src={list[currentIndex]?.url} 
          alt={list[currentIndex]?.titulo}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 hover:scale-105"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-rose-950 via-rose-950/70 to-transparent p-4 text-center">
          <p className="font-bold text-pink-200 text-base sm:text-xl font-playwrite drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]">
            {list[currentIndex]?.titulo}
          </p>
        </div>

        <button 
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-rose-950/70 hover:bg-rose-900 text-pink-200 rounded-full border border-pink-500/50 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-rose-950/70 hover:bg-rose-900 text-pink-200 rounded-full border border-pink-500/50 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Miniaturas más amplias (w-20 h-14) con scroll horizontal suave */}
      <div className="flex justify-start sm:justify-center gap-3 mt-4 overflow-x-auto pb-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {list.map((foto, idx) => (
          <button
            key={foto.id || idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-20 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
              idx === currentIndex 
                ? 'border-pink-400 scale-105 shadow-[0_0_12px_rgba(236,72,153,0.9)]' 
                : 'border-pink-500/20 opacity-50 hover:opacity-100'
            }`}
          >
            <img src={foto.url} alt={foto.titulo} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carrusel