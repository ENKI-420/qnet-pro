"use client"

import { useEffect, useRef } from "react"

export function QuantumMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Quantum mesh nodes
    const nodes: Array<{ x: number; y: number; z: number; vx: number; vy: number; vz: number }> = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.2,
      })
    }

    let animationId: number

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(5, 5, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy
        node.z += node.vz

        // Boundary wrapping
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0
        if (node.z < 0) node.z = 100
        if (node.z > 100) node.z = 0

        // Draw node with depth-based size and opacity
        const size = 2 + (node.z / 100) * 4
        const opacity = 0.3 + (node.z / 100) * 0.7

        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 140, 80, ${opacity})`
        ctx.shadowBlur = 20
        ctx.shadowColor = "rgba(180, 140, 80, 0.8)"
        ctx.fill()

        // Draw entanglement links
        nodes.forEach((otherNode, j) => {
          if (i >= j) return

          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const dz = node.z - otherNode.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 150) {
            const linkOpacity = (1 - distance / 150) * 0.3
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = `rgba(100, 150, 220, ${linkOpacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

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

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />
}
