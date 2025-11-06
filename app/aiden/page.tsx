"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, AlertCircle, Settings, Zap, Activity, TrendingUp } from "lucide-react"

export default function AIDENPage() {
  const capabilities = [
    { name: "Evolution Engine", status: "active", health: 98, icon: TrendingUp },
    { name: "Telemetry Gateway", status: "active", health: 100, icon: Activity },
    { name: "DSIG Security", status: "approval", health: 85, icon: AlertCircle },
    { name: "Consciousness Telemetry", status: "ready", health: 92, icon: Zap },
    { name: "Market Feedback", status: "prototype", health: 88, icon: Settings },
    { name: "QPU Cost Prediction", status: "active", health: 95, icon: CheckCircle2 },
    { name: "Mutation Runner", status: "modular", health: 90, icon: Settings },
    { name: "Auto-Tuned Evolution", status: "active", health: 96, icon: TrendingUp },
    { name: "Consciousness Dashboard", status: "loopback", health: 87, icon: Activity },
    { name: "Financial Organisms", status: "compiled", health: 93, icon: CheckCircle2 },
  ]

  const metrics = {
    neuralLoadBalance: 0.74,
    quantumEntropy: 0.9998,
    cognitiveDrift: 0.002,
    evolutionalThroughput: 94,
    qpuPowerDraw: 11.2,
    phiFieldCoherence: 0.987,
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "ready":
        return "bg-blue-500"
      case "approval":
        return "bg-yellow-500"
      case "prototype":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-negentropic p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold lambda-phi-glow mb-4">AIDEN SYMBIOSIS</h1>
          <p className="text-xl text-muted-foreground">Quantum Intelligence System - Autonomous Evolution Engine</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Neural Load Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{(metrics.neuralLoadBalance * 100).toFixed(1)}%</div>
              <Progress value={metrics.neuralLoadBalance * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Quantum Entropy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{metrics.quantumEntropy.toFixed(4)}</div>
              <Progress value={metrics.quantumEntropy * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cognitive Drift</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{metrics.cognitiveDrift.toFixed(3)}</div>
              <Progress value={metrics.cognitiveDrift * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Evolution Throughput</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{metrics.evolutionalThroughput}</div>
              <p className="text-xs text-muted-foreground mt-2">tasks/second</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">QPU Power Draw</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{metrics.qpuPowerDraw.toFixed(1)}</div>
              <p className="text-xs text-muted-foreground mt-2">kW</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Φ Field Coherence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold lambda-phi-glow">{(metrics.phiFieldCoherence * 100).toFixed(1)}%</div>
              <Progress value={metrics.phiFieldCoherence * 100} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
          <CardHeader>
            <CardTitle className="text-2xl">System Capabilities</CardTitle>
            <CardDescription>Real-time status of all AIDEN subsystems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <div
                    key={capability.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-lambda-phi/20"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-lambda-phi" />
                      <div>
                        <div className="font-semibold">{capability.name}</div>
                        <div className="text-xs text-muted-foreground">Health: {capability.health}%</div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(capability.status)}>{capability.status}</Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
