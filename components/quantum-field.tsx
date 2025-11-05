"use client"

import { useEffect, useRef } from "react"

export function QuantumField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Quantum particles with entanglement
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      entangled?: number
    }> = []

    const colors = [
      "rgba(100, 200, 255, 0.6)", // cyan
      "rgba(200, 100, 255, 0.6)", // magenta
      "rgba(150, 100, 255, 0.6)", // violet
      "rgba(100, 255, 200, 0.6)", // teal
    ]

    // Create quantum particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        entangled: i > 0 ? Math.floor(Math.random() * i) : undefined,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(5, 5, 15, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw entanglement lines
        if (particle.entangled !== undefined) {
          const entangled = particles[particle.entangled]
          const distance = Math.hypot(particle.x - entangled.x, particle.y - entangled.y)

          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(entangled.x, entangled.y)
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.3 * (1 - distance / 200)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Draw connections to nearby particles
        particles.forEach((other, j) => {
          if (i === j) return
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" style={{ zIndex: 0 }} />
}
