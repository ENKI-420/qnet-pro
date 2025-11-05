"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function DNAHelix() {
  const helixRef = useRef<THREE.Group>(null)

  // Generate DNA helix points
  const helixData = useMemo(() => {
    const points = []
    const numPairs = 30
    const radius = 2
    const height = 20

    for (let i = 0; i < numPairs; i++) {
      const t = (i / numPairs) * Math.PI * 4
      const y = (i / numPairs) * height - height / 2

      // Strand 1 (cyan)
      const x1 = Math.cos(t) * radius
      const z1 = Math.sin(t) * radius

      // Strand 2 (magenta) - opposite side
      const x2 = Math.cos(t + Math.PI) * radius
      const z2 = Math.sin(t + Math.PI) * radius

      points.push({
        strand1: new THREE.Vector3(x1, y, z1),
        strand2: new THREE.Vector3(x2, y, z2),
        basePair: [new THREE.Vector3(x1, y, z1), new THREE.Vector3(x2, y, z2)],
      })
    }

    return points
  }, [])

  // Rotate helix slowly
  useFrame((state) => {
    if (helixRef.current) {
      helixRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={helixRef}>
      {/* Strand 1 - Cyan */}
      {helixData.map((point, i) => (
        <mesh key={`strand1-${i}`} position={point.strand1}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Strand 2 - Magenta */}
      {helixData.map((point, i) => (
        <mesh key={`strand2-${i}`} position={point.strand2}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Base pairs - connecting lines */}
      {helixData.map((point, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(point.basePair)
        return (
          <line key={`pair-${i}`} geometry={geometry}>
            <lineBasicMaterial color={i % 2 === 0 ? "#6496ff" : "#00ff80"} transparent opacity={0.6} linewidth={2} />
          </line>
        )
      })}
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    const colors = new Float32Array(200 * 3)

    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      // Random DNA colors
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i * 3] = 0
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 1
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 1
        colors[i * 3 + 1] = 0
        colors[i * 3 + 2] = 1
      } else {
        colors[i * 3] = 0
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 0.5
      }
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export function DNABackground() {
  return (
    <div className="dna-background">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
        <DNAHelix />
        <FloatingParticles />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
