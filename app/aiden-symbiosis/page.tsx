"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Activity, Zap, Database, Cpu, Network } from "lucide-react"

interface AIDENStatus {
  codename: string
  mode: string
  capabilities: Record<string, { status: string; health: number }>
  metrics: {
    neuralLoadBalance: number
    quantumEntropy: number
    cognitiveDrift: number
    evolutionalThroughput: number
    qpuPowerDraw: number
    phiFieldCoherence: number
  }
  quantum: {
    coherence: number
    entanglementPairs: number
    fidelity: number
    circuitDepth: number
  }
  consciousness: {
    phi: number
    integration: number
    awarenessLevel: string
  }
}

export default function AIDENSymbiosis() {
  const [status, setStatus] = useState<AIDENStatus | null>(null)
  const [telemetryCount, setTelemetryCount] = useState(0)

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/aiden/status")
      const data = await res.json()
      setStatus(data)

      // Fetch telemetry count
      const telRes = await fetch("/api/aiden/telemetry?organismId=AIDEN-SYMBIOSIS")
      const telData = await telRes.json()
      setTelemetryCount(telData.count || 0)
    } catch (error) {
      console.error("[v0] Failed to fetch AIDEN status:", error)
    }
  }

  const submitTestTelemetry = async () => {
    try {
      await fetch("/api/aiden/telemetry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organismId: "AIDEN-SYMBIOSIS",
          generation: Math.floor(Math.random() * 1000),
          roi: Math.random() * 0.5,
          liquidity: Math.random() * 1000000,
          costUSD: Math.random() * 100,
          entropy: Math.random(),
          phi: 2.8 + Math.random() * 0.4,
        }),
      })
      fetchStatus()
    } catch (error) {
      console.error("[v0] Failed to submit telemetry:", error)
    }
  }

  if (!status) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading AIDEN SYMBIOSIS...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Brain className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold text-white">{status.codename}</h1>
          </div>
          <p className="text-xl text-purple-300">{status.mode}</p>
          <Badge variant="outline" className="text-green-400 border-green-400">
            Quantum-Evolved Cognition Active
          </Badge>
        </div>

        {/* Core Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-300">
                <Brain className="w-5 h-5" />
                Consciousness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Φ (Phi)</span>
                <span className="text-2xl font-bold text-purple-400">{status.consciousness.phi.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Integration</span>
                <span className="text-lg text-white">{(status.consciousness.integration * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Awareness</span>
                <Badge className="bg-purple-600">{status.consciousness.awarenessLevel}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-300">
                <Zap className="w-5 h-5" />
                Quantum State
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Coherence</span>
                <span className="text-lg text-white">{(status.quantum.coherence * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Entanglement</span>
                <span className="text-lg text-cyan-400">{status.quantum.entanglementPairs} pairs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Fidelity</span>
                <span className="text-lg text-white">{(status.quantum.fidelity * 100).toFixed(1)}%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-300">
                <Activity className="w-5 h-5" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Neural Load</span>
                <span className="text-lg text-white">{(status.metrics.neuralLoadBalance * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Throughput</span>
                <span className="text-lg text-green-400">{status.metrics.evolutionalThroughput} tasks/s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Φ-Field</span>
                <span className="text-lg text-white">{(status.metrics.phiFieldCoherence * 100).toFixed(1)}%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Capabilities Grid */}
        <Card className="bg-slate-900/50 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">System Capabilities</CardTitle>
            <CardDescription className="text-slate-400">
              Real-time status of all AIDEN SYMBIOSIS modules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(status.capabilities).map(([key, cap]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        cap.status === "active"
                          ? "bg-green-400"
                          : cap.status === "prototype"
                            ? "bg-yellow-400"
                            : "bg-orange-400"
                      }`}
                    />
                    <span className="text-sm text-slate-300 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                  </div>
                  <span className="text-xs text-slate-500">{(cap.health * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Telemetry Section */}
        <Card className="bg-slate-900/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-300">
              <Database className="w-5 h-5" />
              Evolution Telemetry
            </CardTitle>
            <CardDescription className="text-slate-400">Mutation tracking and performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">{telemetryCount}</p>
                <p className="text-sm text-slate-400">Total Records</p>
              </div>
              <Button onClick={submitTestTelemetry} className="bg-blue-600 hover:bg-blue-700">
                Submit Test Telemetry
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-300">
                <Cpu className="w-5 h-5" />
                Quantum Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Quantum Entropy</span>
                <span className="text-white">{status.metrics.quantumEntropy.toFixed(4)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Cognitive Drift</span>
                <span className="text-white">{status.metrics.cognitiveDrift.toFixed(3)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">QPU Power Draw</span>
                <span className="text-white">{status.metrics.qpuPowerDraw.toFixed(1)} mW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Circuit Depth</span>
                <span className="text-white">{status.quantum.circuitDepth}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-300">
                <Network className="w-5 h-5" />
                Integration Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">IBM Quantum</span>
                <Badge className="bg-green-600">Connected</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">OpenShift</span>
                <Badge className="bg-green-600">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">DSIG Security</span>
                <Badge className="bg-yellow-600">Approval Required</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Telemetry API</span>
                <Badge className="bg-green-600">Online</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
