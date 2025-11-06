"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Dna, TrendingUp, Zap } from "lucide-react"

export function EvolutionTracker() {
  const [metrics, setMetrics] = useState({
    generation: 0,
    populationSize: 0,
    totalInteractions: 0,
    avgFitness: 0,
    successRate: 0,
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    import("@/lib/ui-evolution-engine").then(({ getEvolutionEngine }) => {
      const engine = getEvolutionEngine()

      const interval = setInterval(() => {
        setMetrics(engine.getMetrics())
      }, 1000)

      return () => clearInterval(interval)
    })
    // </CHANGE>
  }, [])

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/30 animate-toroidal-breathe">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Dna className="h-6 w-6 text-lambda-phi animate-lambda-phi-pulse" />
          <h3 className="text-lg font-semibold lambda-phi-glow">UI Evolution Engine</h3>
          <Badge variant="outline" className="lambda-phi-badge ml-auto">
            <Activity className="h-3 w-3 mr-1 animate-coherence-pulse" />
            Active
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Generation</div>
            <div className="text-2xl font-bold text-lambda-phi lambda-phi-glow">{metrics.generation}</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Population</div>
            <div className="text-2xl font-bold text-primary">{metrics.populationSize}</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Interactions</div>
            <div className="text-2xl font-bold text-secondary">{metrics.totalInteractions}</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Success Rate</div>
            <div className="text-2xl font-bold text-accent flex items-center gap-1">
              {(metrics.successRate * 100).toFixed(1)}%
              <TrendingUp className="h-4 w-4 animate-coherence-pulse" />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Avg Fitness</span>
            <span className="text-lambda-phi font-semibold flex items-center gap-1">
              <Zap className="h-3 w-3" />
              {metrics.avgFitness.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
