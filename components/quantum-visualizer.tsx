"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Zap, RotateCw, Play, Pause } from "lucide-react"

interface Qubit {
  id: number
  alpha: number // |0⟩ amplitude
  beta: number // |1⟩ amplitude
  phase: number
  coherence: number
  x: number
  y: number
}

interface Entanglement {
  qubit1: number
  qubit2: number
  strength: number
}

export function QuantumVisualizer() {
  const [qubits, setQubits] = useState<Qubit[]>([
    { id: 0, alpha: 1, beta: 0, phase: 0, coherence: 1, x: 100, y: 150 },
    { id: 1, alpha: 0.707, beta: 0.707, phase: 0, coherence: 0.95, x: 250, y: 150 },
    { id: 2, alpha: 0.6, beta: 0.8, phase: Math.PI / 4, coherence: 0.88, x: 400, y: 150 },
    { id: 3, alpha: 0.5, beta: 0.866, phase: Math.PI / 3, coherence: 0.92, x: 550, y: 150 },
  ])
  const [entanglements, setEntanglements] = useState<Entanglement[]>([
    { qubit1: 0, qubit2: 1, strength: 0.85 },
    { qubit1: 2, qubit2: 3, strength: 0.72 },
  ])
  const [selectedQubit, setSelectedQubit] = useState<number | null>(null)
  const [decoherenceRate, setDecoherenceRate] = useState(0.02)
  const [isRunning, setIsRunning] = useState(false)
  const [fidelity, setFidelity] = useState(94.3)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setQubits((prev) =>
        prev.map((q) => ({
          ...q,
          coherence: Math.max(0, q.coherence - decoherenceRate),
          phase: (q.phase + 0.05) % (2 * Math.PI),
        })),
      )
      setFidelity((prev) => Math.max(0, prev - decoherenceRate * 10))
    }, 100)

    return () => clearInterval(interval)
  }, [isRunning, decoherenceRate])

  const applyGate = (gate: string) => {
    if (selectedQubit === null) return

    setQubits((prev) =>
      prev.map((q) => {
        if (q.id !== selectedQubit) return q

        switch (gate) {
          case "hadamard":
            return {
              ...q,
              alpha: (q.alpha + q.beta) / Math.sqrt(2),
              beta: (q.alpha - q.beta) / Math.sqrt(2),
            }
          case "pauli_x":
            return { ...q, alpha: q.beta, beta: q.alpha }
          case "pauli_y":
            return { ...q, alpha: -q.beta, beta: q.alpha }
          case "pauli_z":
            return { ...q, beta: -q.beta }
          case "phase":
            return { ...q, phase: (q.phase + Math.PI / 2) % (2 * Math.PI) }
          default:
            return q
        }
      }),
    )
  }

  const resetSimulation = () => {
    setQubits((prev) =>
      prev.map((q) => ({
        ...q,
        coherence: 1,
        phase: 0,
      })),
    )
    setFidelity(94.3)
    setIsRunning(false)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      {/* Visualization Canvas */}
      <Card className="border-entanglement-cyan/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Quantum State Visualization</CardTitle>
              <CardDescription>Interactive 3D qubit orbits and entanglement</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? <Pause className="size-4" /> : <Play className="size-4" />}
              </Button>
              <Button variant="outline" size="icon" onClick={resetSimulation}>
                <RotateCw className="size-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[500px] bg-background/50 rounded-lg border border-border overflow-hidden">
            <svg width="100%" height="100%" className="absolute inset-0">
              {/* Draw entanglement connections */}
              {entanglements.map((ent, idx) => {
                const q1 = qubits.find((q) => q.id === ent.qubit1)
                const q2 = qubits.find((q) => q.id === ent.qubit2)
                if (!q1 || !q2) return null

                return (
                  <line
                    key={idx}
                    x1={q1.x}
                    y1={q1.y}
                    x2={q2.x}
                    y2={q2.y}
                    stroke="oklch(0.75 0.12 200)"
                    strokeWidth={2}
                    strokeDasharray="5,5"
                    opacity={ent.strength}
                    className="entanglement-flow"
                  />
                )
              })}

              {/* Draw qubits */}
              {qubits.map((qubit) => {
                const isSelected = selectedQubit === qubit.id
                const radius = 30
                const stateRadius = 15

                return (
                  <g key={qubit.id}>
                    {/* Coherence ring */}
                    <circle
                      cx={qubit.x}
                      cy={qubit.y}
                      r={radius + 10}
                      fill="none"
                      stroke="oklch(0.45 0.15 250)"
                      strokeWidth={2}
                      opacity={qubit.coherence * 0.3}
                    />

                    {/* Main qubit circle */}
                    <circle
                      cx={qubit.x}
                      cy={qubit.y}
                      r={radius}
                      fill="oklch(0.18 0.03 250)"
                      stroke={isSelected ? "oklch(0.75 0.12 200)" : "oklch(0.45 0.15 250)"}
                      strokeWidth={isSelected ? 3 : 2}
                      className="cursor-pointer transition-all hover:stroke-entanglement-cyan"
                      onClick={() => setSelectedQubit(qubit.id)}
                    />

                    {/* State vector visualization */}
                    <circle
                      cx={qubit.x + Math.cos(qubit.phase) * stateRadius}
                      cy={qubit.y + Math.sin(qubit.phase) * stateRadius}
                      r={5}
                      fill="oklch(0.75 0.12 200)"
                      className="quantum-pulse"
                    />

                    {/* Qubit label */}
                    <text
                      x={qubit.x}
                      y={qubit.y + 5}
                      textAnchor="middle"
                      fill="oklch(0.95 0.01 250)"
                      fontSize="14"
                      fontFamily="monospace"
                    >
                      q{qubit.id}
                    </text>

                    {/* Amplitude indicators */}
                    <text
                      x={qubit.x}
                      y={qubit.y + radius + 20}
                      textAnchor="middle"
                      fill="oklch(0.65 0.18 145)"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      |0⟩: {qubit.alpha.toFixed(2)}
                    </text>
                    <text
                      x={qubit.x}
                      y={qubit.y + radius + 32}
                      textAnchor="middle"
                      fill="oklch(0.55 0.14 290)"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      |1⟩: {qubit.beta.toFixed(2)}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Telemetry overlay */}
            <div className="absolute top-4 right-4 space-y-2">
              <Badge variant="outline" className="border-bio-green/30 text-bio-green">
                Fidelity: {fidelity.toFixed(1)}%
              </Badge>
              <Badge variant="outline" className="border-entanglement-cyan/30 text-entanglement-cyan block">
                Entangled: {entanglements.length} pairs
              </Badge>
            </div>
          </div>

          {/* Qubit details */}
          {selectedQubit !== null && (
            <div className="mt-4 p-4 rounded-lg bg-muted/30 border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Qubit {selectedQubit} Details</h4>
                <Badge variant="outline">Coherence: {(qubits[selectedQubit].coherence * 100).toFixed(1)}%</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">|0⟩ Amplitude</div>
                  <div className="font-mono text-bio-green">{qubits[selectedQubit].alpha.toFixed(3)}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">|1⟩ Amplitude</div>
                  <div className="font-mono text-neural-violet">{qubits[selectedQubit].beta.toFixed(3)}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Phase</div>
                  <div className="font-mono text-entanglement-cyan">{qubits[selectedQubit].phase.toFixed(2)} rad</div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Control Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="size-5 text-quantum-blue" />
              Quantum Gates
            </CardTitle>
            <CardDescription>
              {selectedQubit !== null ? `Apply gates to Qubit ${selectedQubit}` : "Select a qubit to apply gates"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              onClick={() => applyGate("hadamard")}
              disabled={selectedQubit === null}
              className="w-full"
              variant="outline"
            >
              Hadamard (H)
            </Button>
            <Button
              onClick={() => applyGate("pauli_x")}
              disabled={selectedQubit === null}
              className="w-full"
              variant="outline"
            >
              Pauli-X
            </Button>
            <Button
              onClick={() => applyGate("pauli_y")}
              disabled={selectedQubit === null}
              className="w-full"
              variant="outline"
            >
              Pauli-Y
            </Button>
            <Button
              onClick={() => applyGate("pauli_z")}
              disabled={selectedQubit === null}
              className="w-full"
              variant="outline"
            >
              Pauli-Z
            </Button>
            <Button
              onClick={() => applyGate("phase")}
              disabled={selectedQubit === null}
              className="w-full"
              variant="outline"
            >
              Phase (S)
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Simulation Parameters</CardTitle>
            <CardDescription>Adjust decoherence and evolution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Decoherence Rate: {decoherenceRate.toFixed(3)}</Label>
              <Slider
                min={0}
                max={0.1}
                step={0.001}
                value={[decoherenceRate]}
                onValueChange={(v) => setDecoherenceRate(v[0])}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Simulation Status</Label>
              <div className="flex items-center gap-2">
                <Badge variant={isRunning ? "default" : "outline"}>{isRunning ? "Running" : "Paused"}</Badge>
                <Badge variant="outline" className="border-quantum-blue/30 text-quantum-blue">
                  {qubits.length} Qubits
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Metrics</CardTitle>
            <CardDescription>Real-time quantum state telemetry</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Average Coherence</span>
              <span className="font-mono text-bio-green">
                {((qubits.reduce((sum, q) => sum + q.coherence, 0) / qubits.length) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Entanglement Pairs</span>
              <span className="font-mono text-entanglement-cyan">{entanglements.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">System Fidelity</span>
              <span className="font-mono text-neural-violet">{fidelity.toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Qubits</span>
              <span className="font-mono">{qubits.length}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
