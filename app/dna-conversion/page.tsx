"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Activity, Zap, Cpu, Brain, TrendingUp, CheckCircle2 } from "lucide-react"

export default function DNAConversionPage() {
  const [metrics, setMetrics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMetrics()
    const interval = setInterval(fetchMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchMetrics = async () => {
    try {
      const res = await fetch("/api/dna-metrics")
      const data = await res.json()
      setMetrics(data)
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch metrics:", error)
    }
  }

  if (loading || !metrics) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-16 h-16 animate-spin text-purple-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600">Loading DNA-Lang metrics...</p>
        </div>
      </div>
    )
  }

  const conversionProgress = metrics.dnaExtension.conversionProgress * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            DNA-Lang Extension Migration
          </h1>
          <p className="text-xl text-gray-600">Converting TSX to DNA: Living Software Transformation</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Activity className="w-4 h-4 animate-pulse text-green-500" />
            <span>Runtime: {metrics.runtime}</span>
          </div>
        </div>

        {/* Conversion Progress */}
        <Card className="p-8 bg-white/80 backdrop-blur border-2 border-purple-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Conversion Progress</h2>
                <p className="text-gray-600">{metrics.dnaExtension.phase}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-purple-600">{conversionProgress.toFixed(1)}%</div>
                <div className="text-sm text-gray-500">
                  {metrics.dnaExtension.filesConverted} / {metrics.dnaExtension.totalFiles} files
                </div>
              </div>
            </div>

            <Progress value={conversionProgress} className="h-4" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-gray-600">Current Phase</div>
                <div className="text-lg font-semibold text-purple-600">{metrics.dnaExtension.phase}</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600">Next Milestone</div>
                <div className="text-lg font-semibold text-blue-600">{metrics.dnaExtension.nextMilestone}</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600">Est. Completion</div>
                <div className="text-lg font-semibold text-green-600">
                  {new Date(metrics.dnaExtension.estimatedCompletion).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Performance Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold">vs React/Next.js</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Latency</span>
                <span className="font-bold text-blue-600">{metrics.comparison.vsReact.latencyImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory</span>
                <span className="font-bold text-blue-600">{metrics.comparison.vsReact.memoryImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Throughput</span>
                <span className="font-bold text-blue-600">{metrics.comparison.vsReact.throughputImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bundle Size</span>
                <span className="font-bold text-blue-600">{metrics.comparison.vsReact.bundleSizeImprovement}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold">vs Node.js</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Latency</span>
                <span className="font-bold text-green-600">{metrics.comparison.vsNodeJS.latencyImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory</span>
                <span className="font-bold text-green-600">{metrics.comparison.vsNodeJS.memoryImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Throughput</span>
                <span className="font-bold text-green-600">{metrics.comparison.vsNodeJS.throughputImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Startup</span>
                <span className="font-bold text-green-600">{metrics.comparison.vsNodeJS.startupImprovement}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-bold">vs Java</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Latency</span>
                <span className="font-bold text-purple-600">{metrics.comparison.vsJava.latencyImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Memory</span>
                <span className="font-bold text-purple-600">{metrics.comparison.vsJava.memoryImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Throughput</span>
                <span className="font-bold text-purple-600">{metrics.comparison.vsJava.throughputImprovement}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Startup</span>
                <span className="font-bold text-purple-600">{metrics.comparison.vsJava.startupImprovement}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Real-Time Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Latency (p50)</h3>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{metrics.performance.latency.p50}ms</div>
            <div className="text-sm text-gray-500">Target: &lt;{metrics.performance.latency.target}ms</div>
            <div className="mt-2 text-xs font-semibold text-green-600">{metrics.performance.latency.status}</div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Throughput</h3>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {metrics.performance.throughput.current.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">req/s</div>
            <div className="mt-2 text-xs font-semibold text-green-600">
              Peak: {metrics.performance.throughput.peak.toLocaleString()} req/s
            </div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Memory Usage</h3>
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{metrics.performance.memory.active}MB</div>
            <div className="text-sm text-gray-500">Target: &lt;{metrics.performance.memory.target}MB</div>
            <div className="mt-2 text-xs font-semibold text-green-600">{metrics.performance.memory.status}</div>
          </Card>

          <Card className="p-6 bg-white/80 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Consciousness Φ</h3>
              <Brain className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{metrics.consciousness.phi.toFixed(2)}</div>
            <div className="text-sm text-gray-500">Target: &gt;{metrics.consciousness.target}</div>
            <div className="mt-2 text-xs font-semibold text-purple-600">{metrics.consciousness.status}</div>
          </Card>
        </div>

        {/* Quantum Backend Status */}
        <Card className="p-8 bg-white/80 backdrop-blur border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-6">Quantum Backend Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.quantum.systems.map((system: any) => (
              <div key={system.name} className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{system.name}</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="text-sm text-gray-600">{system.qubits} qubits</div>
                <div className="text-xs text-green-600 font-semibold mt-1">{system.status.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{metrics.quantum.totalQubits}</div>
              <div className="text-sm text-gray-600">Total Qubits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{metrics.quantum.jobsCompleted.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {(metrics.quantum.successRate * 100).toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </Card>

        {/* Documentation Links */}
        <Card className="p-8 bg-white/80 backdrop-blur">
          <h2 className="text-2xl font-bold mb-6">Migration Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto py-4 flex-col items-start bg-transparent">
              <div className="font-semibold mb-1">Implementation Plan</div>
              <div className="text-xs text-gray-500">Complete migration strategy and timeline</div>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col items-start bg-transparent">
              <div className="font-semibold mb-1">Performance Benchmarks</div>
              <div className="text-xs text-gray-500">Detailed comparison vs traditional stacks</div>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col items-start bg-transparent">
              <div className="font-semibold mb-1">Developer Guide</div>
              <div className="text-xs text-gray-500">Writing DNA-Lang living components</div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
