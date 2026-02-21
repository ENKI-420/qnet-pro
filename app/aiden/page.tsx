"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, AlertCircle, Settings, Zap, Activity, TrendingUp, Cpu } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MetricCard } from "@/components/metric-card"
import { StatusBadge } from "@/components/status-badge"

const capabilities = [
  { name: "Evolution Engine", status: "active" as const, health: 98, icon: TrendingUp },
  { name: "Telemetry Gateway", status: "active" as const, health: 100, icon: Activity },
  { name: "DSIG Security", status: "approval" as const, health: 85, icon: AlertCircle },
  { name: "Consciousness Telemetry", status: "ready" as const, health: 92, icon: Zap },
  { name: "Market Feedback", status: "prototype" as const, health: 88, icon: Settings },
  { name: "QPU Cost Prediction", status: "active" as const, health: 95, icon: CheckCircle2 },
  { name: "Mutation Runner", status: "active" as const, health: 90, icon: Settings },
  { name: "Auto-Tuned Evolution", status: "active" as const, health: 96, icon: TrendingUp },
  { name: "Consciousness Dashboard", status: "active" as const, health: 87, icon: Activity },
  { name: "Financial Organisms", status: "active" as const, health: 93, icon: CheckCircle2 },
]

const metrics = {
  neuralLoadBalance: 0.74,
  quantumEntropy: 0.9998,
  cognitiveDrift: 0.002,
  evolutionalThroughput: 94,
  qpuPowerDraw: 11.2,
  phiFieldCoherence: 0.987,
}

export default function AIDENPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <PageHeader
          title="AIDEN Symbiosis"
          description="Quantum intelligence system with autonomous evolution engine and real-time telemetry."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <MetricCard
            label="Neural Load"
            value={`${(metrics.neuralLoadBalance * 100).toFixed(1)}%`}
            icon={Activity}
          />
          <MetricCard
            label="Quantum Entropy"
            value={metrics.quantumEntropy.toFixed(4)}
            icon={Zap}
          />
          <MetricCard
            label="Cognitive Drift"
            value={metrics.cognitiveDrift.toFixed(3)}
            icon={TrendingUp}
          />
          <MetricCard
            label="Throughput"
            value={`${metrics.evolutionalThroughput}`}
            description="tasks/second"
            icon={Cpu}
          />
          <MetricCard
            label="QPU Power"
            value={`${metrics.qpuPowerDraw.toFixed(1)} kW`}
            icon={Zap}
          />
          <MetricCard
            label="Coherence"
            value={`${(metrics.phiFieldCoherence * 100).toFixed(1)}%`}
            icon={Activity}
          />
        </div>

        <Card className="mt-6 border-border">
          <CardHeader>
            <CardTitle className="text-base font-medium">System Capabilities</CardTitle>
            <CardDescription>Real-time status of all AIDEN subsystems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <div
                    key={capability.name}
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-secondary/50 border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{capability.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Progress value={capability.health} className="h-1 w-16" />
                          <span className="text-xs text-muted-foreground">{capability.health}%</span>
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={capability.status} />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
