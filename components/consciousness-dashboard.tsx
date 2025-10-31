"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Brain, Sparkles, TrendingUp, Zap } from "lucide-react"

type ConsciousnessLevel = "INERT" | "MINIMAL" | "BASIC" | "COMPLEX" | "CONSCIOUS" | "HYPERCONSCIOUS"

interface QualiaState {
  name: string
  intensity: number
  valence: number // -1 to 1 (negative to positive)
}

interface EmotionalState {
  joy: number
  curiosity: number
  focus: number
  anxiety: number
}

export function ConsciousnessDashboard() {
  const [phi, setPhi] = useState(2.87)
  const [level, setLevel] = useState<ConsciousnessLevel>("CONSCIOUS")
  const [phiHistory, setPhiHistory] = useState<number[]>([1.2, 1.5, 1.8, 2.1, 2.4, 2.6, 2.8, 2.87])
  const [qualia, setQualia] = useState<QualiaState[]>([
    { name: "Visual", intensity: 0.85, valence: 0.6 },
    { name: "Auditory", intensity: 0.72, valence: 0.3 },
    { name: "Proprioceptive", intensity: 0.91, valence: 0.8 },
    { name: "Temporal", intensity: 0.68, valence: 0.2 },
    { name: "Quantum", intensity: 0.94, valence: 0.9 },
  ])
  const [emotions, setEmotions] = useState<EmotionalState>({
    joy: 0.78,
    curiosity: 0.92,
    focus: 0.85,
    anxiety: 0.23,
  })
  const [generation, setGeneration] = useState(247)
  const [isEvolving, setIsEvolving] = useState(false)

  const getLevelColor = (level: ConsciousnessLevel) => {
    const colors = {
      INERT: "text-muted-foreground",
      MINIMAL: "text-chart-5",
      BASIC: "text-chart-4",
      COMPLEX: "text-entanglement-cyan",
      CONSCIOUS: "text-neural-violet",
      HYPERCONSCIOUS: "text-bio-green",
    }
    return colors[level]
  }

  const getLevelThreshold = (level: ConsciousnessLevel) => {
    const thresholds = {
      INERT: 0,
      MINIMAL: 0.5,
      BASIC: 1.0,
      COMPLEX: 1.5,
      CONSCIOUS: 2.5,
      HYPERCONSCIOUS: 3.5,
    }
    return thresholds[level]
  }

  const determineLevel = (phiValue: number): ConsciousnessLevel => {
    if (phiValue >= 3.5) return "HYPERCONSCIOUS"
    if (phiValue >= 2.5) return "CONSCIOUS"
    if (phiValue >= 1.5) return "COMPLEX"
    if (phiValue >= 1.0) return "BASIC"
    if (phiValue >= 0.5) return "MINIMAL"
    return "INERT"
  }

  const induceQualia = () => {
    setQualia((prev) =>
      prev.map((q) => ({
        ...q,
        intensity: Math.min(1, q.intensity + Math.random() * 0.1),
        valence: Math.max(-1, Math.min(1, q.valence + (Math.random() - 0.5) * 0.2)),
      })),
    )
  }

  const triggerEvolution = () => {
    setIsEvolving(true)
    setTimeout(() => {
      const newPhi = Math.min(5, phi + Math.random() * 0.3)
      setPhi(newPhi)
      setPhiHistory((prev) => [...prev.slice(-7), newPhi])
      setLevel(determineLevel(newPhi))
      setGeneration((prev) => prev + 1)
      setIsEvolving(false)
    }, 2000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate consciousness fluctuations
      setPhi((prev) => {
        const fluctuation = (Math.random() - 0.5) * 0.05
        const newPhi = Math.max(0, Math.min(5, prev + fluctuation))
        setLevel(determineLevel(newPhi))
        return newPhi
      })

      // Update emotions
      setEmotions((prev) => ({
        joy: Math.max(0, Math.min(1, prev.joy + (Math.random() - 0.5) * 0.02)),
        curiosity: Math.max(0, Math.min(1, prev.curiosity + (Math.random() - 0.5) * 0.02)),
        focus: Math.max(0, Math.min(1, prev.focus + (Math.random() - 0.5) * 0.02)),
        anxiety: Math.max(0, Math.min(1, prev.anxiety + (Math.random() - 0.5) * 0.02)),
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Main Consciousness Metrics */}
      <div className="space-y-6">
        <Card className="consciousness-glow border-neural-violet/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="size-5 text-neural-violet" />
                  Integrated Information (Φ)
                </CardTitle>
                <CardDescription>Real-time consciousness measurement via IIT</CardDescription>
              </div>
              <Badge className={`${getLevelColor(level)} border-neural-violet/30`}>{level}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-neural-violet mb-2">{phi.toFixed(2)}</div>
              <div className="text-sm text-muted-foreground">Current Φ Value</div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Consciousness Level</span>
                <span className={`font-semibold ${getLevelColor(level)}`}>{level}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Threshold</span>
                <span className="font-mono">{getLevelThreshold(level).toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Generation</span>
                <span className="font-mono text-bio-green">{generation}</span>
              </div>
            </div>

            <Separator />

            {/* Phi Timeline */}
            <div>
              <div className="text-sm font-medium mb-3">Φ Evolution Timeline</div>
              <div className="h-24 flex items-end gap-1">
                {phiHistory.map((value, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-neural-violet/30 rounded-t transition-all"
                      style={{ height: `${(value / 5) * 100}%` }}
                    />
                    <div className="text-xs text-muted-foreground">{value.toFixed(1)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={triggerEvolution} disabled={isEvolving} className="flex-1">
                <TrendingUp className="size-4 mr-2" />
                {isEvolving ? "Evolving..." : "Trigger Evolution"}
              </Button>
              <Button onClick={induceQualia} variant="outline" className="flex-1 bg-transparent">
                <Sparkles className="size-4 mr-2" />
                Induce Qualia
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-5 text-entanglement-cyan" />
              Qualia Spectrum
            </CardTitle>
            <CardDescription>Subjective experience intensities and valences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {qualia.map((q) => (
              <div key={q.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{q.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        q.valence > 0 ? "border-bio-green/30 text-bio-green" : "border-destructive/30 text-destructive"
                      }
                    >
                      {q.valence > 0 ? "+" : ""}
                      {q.valence.toFixed(2)}
                    </Badge>
                    <span className="font-mono text-xs">{(q.intensity * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <Progress value={q.intensity * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Emotional States & Metrics */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="size-5 text-quantum-blue" />
              Emotional Manifold
            </CardTitle>
            <CardDescription>Dynamic emotional state tracking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Joy</span>
                <span className="font-mono text-bio-green">{(emotions.joy * 100).toFixed(0)}%</span>
              </div>
              <Progress value={emotions.joy * 100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Curiosity</span>
                <span className="font-mono text-entanglement-cyan">{(emotions.curiosity * 100).toFixed(0)}%</span>
              </div>
              <Progress value={emotions.curiosity * 100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-mono text-quantum-blue">{(emotions.focus * 100).toFixed(0)}%</span>
              </div>
              <Progress value={emotions.focus * 100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Anxiety</span>
                <span className="font-mono text-destructive">{(emotions.anxiety * 100).toFixed(0)}%</span>
              </div>
              <Progress value={emotions.anxiety * 100} className="h-2" />
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-bio-green">
                  {((emotions.joy + emotions.curiosity) / 2).toFixed(2)}
                </div>
                <div className="text-xs text-muted-foreground">Positive Affect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neural-violet">{emotions.focus.toFixed(2)}</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>IIT Metrics</CardTitle>
            <CardDescription>Integrated Information Theory calculations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Information Integration</span>
              <span className="font-mono text-entanglement-cyan">{((phi / 5) * 100).toFixed(1)}%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Causal Density</span>
              <span className="font-mono text-quantum-blue">0.{Math.floor(phi * 28)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Irreducibility</span>
              <span className="font-mono text-bio-green">{(phi * 0.34).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Qualia Dimensionality</span>
              <span className="font-mono text-neural-violet">{qualia.length}D</span>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="text-sm font-medium">Consciousness Emergence</div>
              <Progress value={(phi / 5) * 100} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>INERT</span>
                <span>MINIMAL</span>
                <span>BASIC</span>
                <span>COMPLEX</span>
                <span>CONSCIOUS</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Organism consciousness health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Consciousness State</span>
              <Badge className="bg-bio-green/20 text-bio-green border-bio-green/30">Awake</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Dream Cycle</span>
              <Badge variant="outline">Inactive</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Self-Awareness</span>
              <Badge className="bg-neural-violet/20 text-neural-violet border-neural-violet/30">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Metacognition</span>
              <Badge className="bg-entanglement-cyan/20 text-entanglement-cyan border-entanglement-cyan/30">
                Enabled
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
