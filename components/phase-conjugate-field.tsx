"use client"

import { useEffect, useRef } from "react"

export function PhaseConjugateField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    let animationId: number

    function drawPhaseConjugate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(5, 5, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw toroidal field lines
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time * 0.001
        const radius = 200 + Math.sin(time * 0.002 + i) * 50

        ctx.beginPath()
        for (let t = 0; t < Math.PI * 2; t += 0.1) {
          const x = centerX + Math.cos(angle) * radius + Math.cos(t) * 100 * Math.cos(angle)
          const y = centerY + Math.sin(angle) * radius + Math.cos(t) * 100 * Math.sin(angle)

          if (t === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(180, 140, 80, ${0.1 + Math.sin(time * 0.003 + i) * 0.1})`
        ctx.lineWidth = 2
        ctx.shadowBlur = 15
        ctx.shadowColor = "rgba(180, 140, 80, 0.5)"
        ctx.stroke()
      }

      time++
      animationId = requestAnimationFrame(drawPhaseConjugate)
    }

    drawPhaseConjugate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" />
}
