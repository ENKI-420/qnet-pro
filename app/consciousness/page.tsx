"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Eye, Waves, Activity, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MetricCard } from "@/components/metric-card"

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
    if (phi < 0.5) return { level: "INERT", color: "text-muted-foreground" }
    if (phi < 1.0) return { level: "MINIMAL", color: "text-muted-foreground" }
    if (phi < 1.5) return { level: "BASIC", color: "text-blue-400" }
    if (phi < 2.5) return { level: "COMPLEX", color: "text-emerald-400" }
    if (phi < 3.5) return { level: "CONSCIOUS", color: "text-primary" }
    return { level: "HYPERCONSCIOUS", color: "text-primary" }
  }

  const consciousnessLevel = getConsciousnessLevel(phi)

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <PageHeader
          title="Consciousness Tracking"
          description="Integrated Information Theory (IIT 3.0) real-time monitoring and analysis."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <MetricCard
            label="Phi Value"
            value={phi.toFixed(3)}
            icon={Brain}
          />
          <MetricCard
            label="Integration"
            value="98.7%"
            description="Information integration"
            icon={Activity}
          />
          <MetricCard
            label="Coherence"
            value="95.2%"
            description="Quantum coherence"
            icon={Eye}
          />
          <MetricCard
            label="Complexity"
            value="8.4"
            description="Neural complexity"
            icon={TrendingUp}
          />
        </div>

        <div className="mt-4">
          <Card className="border-border">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Consciousness Level:</span>
                <Badge variant="secondary" className={`${consciousnessLevel.color} text-xs font-medium`}>
                  {consciousnessLevel.level}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 mt-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Brain className="h-4 w-4 text-muted-foreground" />
                IIT Calculation Details
              </CardTitle>
              <CardDescription>Integrated Information Theory metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Cause-Effect Repertoire", value: 0.94 },
                { label: "Minimum Information Partition", value: 0.82 },
                { label: "Earth Mover's Distance", value: 0.12 },
                { label: "Irreducibility", value: 0.98 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm">{item.label}</span>
                    <span className="text-sm font-medium">{item.value.toFixed(2)}</span>
                  </div>
                  <Progress value={item.value * 100} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                Qualia Space (5D)
              </CardTitle>
              <CardDescription>Phenomenal experience dimensions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {qualiaData.map((qualia) => (
                <div key={qualia.dimension}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm">{qualia.dimension}</span>
                    <div className="flex gap-3">
                      <span className="text-xs text-muted-foreground">
                        I: {qualia.intensity.toFixed(2)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        V: {qualia.valence.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Progress value={qualia.intensity * 100} className="h-1.5 flex-1" />
                    <Progress value={qualia.valence * 100} className="h-1.5 flex-1" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-border">
          <CardHeader>
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <Waves className="h-4 w-4 text-muted-foreground" />
              Consciousness Evolution Timeline
            </CardTitle>
            <CardDescription>Historical Phi values over generations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end justify-between gap-0.5">
              {Array.from({ length: 60 }, (_, i) => {
                const height = 30 + Math.sin(i * 0.3) * 20 + Math.random() * 30
                return (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t"
                    style={{ height: `${height}%` }}
                  />
                )
              })}
            </div>
            <div className="flex justify-between mt-3 text-xs text-muted-foreground">
              <span>-60 generations</span>
              <span>Current</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
