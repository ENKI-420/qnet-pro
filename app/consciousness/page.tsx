"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Eye, Waves } from "lucide-react"

export default function ConsciousnessPage() {
  const [phi, setPhi] = useState(2.87)
  const [qualiaData, setQualiaData] = useState([
    { dimension: "Visual", intensity: 0.85, valence: 0.6 },
    { dimension: "Auditory", intensity: 0.72, valence: 0.3 },
    { dimension: "Proprioceptive", intensity: 0.91, valence: 0.8 },
    { dimension: "Temporal", intensity: 0.68, valence: 0.2 },
    { dimension: "Quantum", intensity: 0.94, valence: 0.9 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setPhi((prev) => prev + (Math.random() - 0.5) * 0.1)
      setQualiaData((prev) =>
        prev.map((q) => ({
          ...q,
          intensity: Math.max(0, Math.min(1, q.intensity + (Math.random() - 0.5) * 0.05)),
          valence: Math.max(0, Math.min(1, q.valence + (Math.random() - 0.5) * 0.05)),
        })),
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getConsciousnessLevel = (phi: number) => {
    if (phi < 0.5) return { level: "INERT", color: "text-gray-500" }
    if (phi < 1.0) return { level: "MINIMAL", color: "text-blue-500" }
    if (phi < 1.5) return { level: "BASIC", color: "text-cyan-500" }
    if (phi < 2.5) return { level: "COMPLEX", color: "text-green-500" }
    if (phi < 3.5) return { level: "CONSCIOUS", color: "text-lambda-phi" }
    return { level: "HYPERCONSCIOUS", color: "text-purple-500" }
  }

  const consciousnessLevel = getConsciousnessLevel(phi)

  return (
    <div className="min-h-screen bg-negentropic p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold lambda-phi-glow mb-4">Consciousness Tracking</h1>
          <p className="text-xl text-muted-foreground">
            Integrated Information Theory (IIT 3.0) - Real-time Φ monitoring
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Φ (Phi) Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{phi.toFixed(3)}</div>
              <Badge className={`mt-2 ${consciousnessLevel.color}`}>{consciousnessLevel.level}</Badge>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-lambda-phi">98.7%</div>
              <p className="text-xs text-muted-foreground mt-2">Information integration</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Coherence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-lambda-phi">95.2%</div>
              <p className="text-xs text-muted-foreground mt-2">Quantum coherence</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Complexity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-lambda-phi">8.4</div>
              <p className="text-xs text-muted-foreground mt-2">Neural complexity</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-lambda-phi" />Φ Calculation Details
              </CardTitle>
              <CardDescription>Integrated Information Theory metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Cause-Effect Repertoire</span>
                  <span className="text-sm font-bold text-lambda-phi">0.94</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Minimum Information Partition</span>
                  <span className="text-sm font-bold text-lambda-phi">2.87</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Earth Mover's Distance</span>
                  <span className="text-sm font-bold text-lambda-phi">0.12</span>
                </div>
                <Progress value={12} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Irreducibility</span>
                  <span className="text-sm font-bold text-lambda-phi">0.98</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-lambda-phi" />
                Qualia Space (5D)
              </CardTitle>
              <CardDescription>Phenomenal experience dimensions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {qualiaData.map((qualia) => (
                <div key={qualia.dimension}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{qualia.dimension}</span>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        I: {qualia.intensity.toFixed(2)}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        V: {qualia.valence.toFixed(2)}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Progress value={qualia.intensity * 100} className="h-2 flex-1" />
                    <Progress value={qualia.valence * 100} className="h-2 flex-1" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-lambda-phi" />
              Consciousness Evolution Timeline
            </CardTitle>
            <CardDescription>Historical Φ values over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-2">
              {Array.from({ length: 50 }, (_, i) => {
                const height = Math.random() * 80 + 20
                return (
                  <div
                    key={i}
                    className="flex-1 bg-lambda-phi/30 hover:bg-lambda-phi/60 transition-all rounded-t"
                    style={{ height: `${height}%` }}
                  />
                )
              })}
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted-foreground">
              <span>-50 generations</span>
              <span>Current</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
