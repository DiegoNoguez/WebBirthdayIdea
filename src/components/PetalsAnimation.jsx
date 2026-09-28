import React, { useEffect, useRef } from 'react'

const PetalsAnimation = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Función para dibujar una rosa completa y detallada
    const drawRose = (ctx, size) => {
      ctx.save()

      // Tallo y hoja sutil
      ctx.beginPath()
      ctx.strokeStyle = '#4ade80'
      ctx.lineWidth = size * 0.08
      ctx.moveTo(0, size * 0.3)
      ctx.quadraticCurveTo(size * 0.2, size * 0.7, 0, size * 1.1)
      ctx.stroke()

      // Hoja
      ctx.beginPath()
      ctx.fillStyle = '#22c55e'
      ctx.ellipse(size * 0.15, size * 0.65, size * 0.25, size * 0.12, Math.PI / 4, 0, Math.PI * 2)
      ctx.fill()

      // Capas de pétalos exteriores (Rosa intenso)
      const outerPetals = 5
      ctx.fillStyle = '#f43f5e'
      for (let i = 0; i < outerPetals; i++) {
        const angle = (i * Math.PI * 2) / outerPetals
        ctx.save()
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.bezierCurveTo(-size * 0.6, -size * 0.5, -size * 0.5, -size * 1.1, 0, -size * 0.9)
        ctx.bezierCurveTo(size * 0.5, -size * 1.1, size * 0.6, -size * 0.5, 0, 0)
        ctx.fill()
        ctx.restore()
      }

      // Capas de pétalos medios (Rosa claro)
      const midPetals = 4
      ctx.fillStyle = '#fb7185'
      for (let i = 0; i < midPetals; i++) {
        const angle = (i * Math.PI * 2) / midPetals + Math.PI / 4
        ctx.save()
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.bezierCurveTo(-size * 0.4, -size * 0.4, -size * 0.35, -size * 0.8, 0, -size * 0.65)
        ctx.bezierCurveTo(size * 0.35, -size * 0.8, size * 0.4, -size * 0.4, 0, 0)
        ctx.fill()
        ctx.restore()
      }

      // Centro en espiral de la rosa (Capullo)
      ctx.fillStyle = '#f472b6'
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.28, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = '#be123c'
      ctx.lineWidth = size * 0.06
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.18, 0, Math.PI * 1.5, false)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, 0, size * 0.09, Math.PI * 0.5, Math.PI * 2, false)
      ctx.stroke()

      ctx.restore()
    }

    // Configuración de las rosas en movimiento
    const roses = Array.from({ length: 22 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 12 + 16, // Tamaño más grande para apreciar el detalle
      speedY: Math.random() * 1.1 + 0.6,
      speedX: Math.sin(Math.random() * Math.PI) * 0.5,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.4 + 0.6,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      roses.forEach((r) => {
        r.y += r.speedY
        r.x += Math.sin(r.y * 0.008) + r.speedX
        r.angle += r.spin

        if (r.y > height + 40) {
          r.y = -40
          r.x = Math.random() * width
        }

        ctx.save()
        ctx.translate(r.x, r.y)
        ctx.rotate(r.angle)
        ctx.globalAlpha = r.opacity
        
        // Dibujar rosa
        drawRose(ctx, r.size)

        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

export default PetalsAnimation