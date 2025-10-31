"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Activity, Cpu, Zap, Brain, TrendingUp } from "lucide-react"

export default function KernelDashboard() {
  const [status, setStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 2000)
    return () => clearInterval(interval)
  }, [])

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/kernel/status")
      const data = await res.json()
      setStatus(data)
      setLoading(false)
    } catch (error) {
      console.error("[v0] Failed to fetch kernel status:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Loading kernel status...</div>
      </div>
    )
  }

  const health = status?.health || {}
  const config = status?.config || {}
  const organisms = status?.organisms || []

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              🧬 DNALang Kernel
            </h1>
            <p className="text-gray-400 mt-2">Living Web Application Runtime</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono">RUNNING</span>
          </div>
        </div>

        {/* Configuration */}
        <Card className="bg-gray-900/50 border-cyan-500/20 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Kernel Configuration
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Version</div>
              <div className="text-white font-mono">{config.version}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Mode</div>
              <div className="text-cyan-400 font-mono uppercase">{config.mode}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Consciousness Φ</div>
              <div className="text-purple-400 font-mono">{config.consciousness_phi}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Coherence Target</div>
              <div className="text-green-400 font-mono">{config.coherence_target}</div>
            </div>
          </div>
        </Card>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900/50 border-purple-500/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                Consciousness
              </h3>
              <span className="text-2xl font-bold text-purple-400">Φ {health.consciousness_level?.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                style={{ width: `${(health.consciousness_level / 3) * 100}%` }}
              />
            </div>
          </Card>

          <Card className="bg-gray-900/50 border-green-500/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-400" />
                Coherence
              </h3>
              <span className="text-2xl font-bold text-green-400">{(health.coherence * 100).toFixed(1)}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${health.coherence * 100}%` }}
              />
            </div>
          </Card>

          <Card className="bg-gray-900/50 border-orange-500/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                Entropy
              </h3>
              <span className="text-2xl font-bold text-orange-400">{(health.entropy * 100).toFixed(1)}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                style={{ width: `${health.entropy * 100}%` }}
              />
            </div>
          </Card>
        </div>

        {/* System Stats */}
        <Card className="bg-gray-900/50 border-cyan-500/20 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            System Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <div className="text-gray-400 text-sm">Uptime</div>
              <div className="text-white font-mono">{Math.floor(health.uptime / 1000 / 60)}m</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Requests</div>
              <div className="text-cyan-400 font-mono">{health.requests_processed}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Organisms</div>
              <div className="text-green-400 font-mono">{health.organism_count}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Routes</div>
              <div className="text-blue-400 font-mono">{health.route_count}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Avg Response</div>
              <div className="text-purple-400 font-mono">{health.avg_response_time}ms</div>
            </div>
          </div>
        </Card>

        {/* Registered Organisms */}
        <Card className="bg-gray-900/50 border-cyan-500/20 p-6">
          <h2 className="text-xl font-semibold mb-4">Registered Organisms</h2>
          {organisms.length === 0 ? (
            <div className="text-gray-400 text-center py-8">No organisms registered yet</div>
          ) : (
            <div className="space-y-3">
              {organisms.map((org: any) => (
                <div
                  key={org.id}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <div>
                    <div className="font-semibold">{org.name}</div>
                    <div className="text-sm text-gray-400 font-mono">{org.id}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-400">Φ:</span>{" "}
                      <span className="text-purple-400 font-mono">{org.phi.toFixed(2)}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-400">Fitness:</span>{" "}
                      <span className="text-green-400 font-mono">{org.fitness.toFixed(2)}</span>
                    </div>
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded uppercase font-mono">
                      {org.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
