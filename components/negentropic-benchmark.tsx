"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, TrendingDown, Shield } from "lucide-react"

export function NegentropicBenchmark() {
  const [running, setRunning] = useState(false)
  const [results, setResults] = useState<any>(null)

  const runBenchmark = async () => {
    setRunning(true)
    setResults(null)

    try {
      const response = await fetch("/api/quantum/benchmark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shots: 1024 }),
      })

      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error("Benchmark failed:", error)
      setResults({ success: false, error: String(error) })
    } finally {
      setRunning(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-cyan-500" />
            Negentropic Quantum Benchmark
          </CardTitle>
          <CardDescription>Measure entropy reduction through quantum coherence on IBM hardware</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={runBenchmark} disabled={running} className="w-full">
            {running ? "Running Benchmark..." : "Start Benchmark"}
          </Button>
        </CardContent>
      </Card>

      {results && results.success && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Φ Coherence</CardTitle>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{results.phi_coherence.toFixed(6)}</div>
              <p className="text-xs text-muted-foreground">Integrated information</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entropy Δ</CardTitle>
              <TrendingDown className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{results.entropy_delta.toFixed(6)}</div>
              <p className="text-xs text-muted-foreground">Entropy reduction</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fidelity</CardTitle>
              <Shield className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(results.fidelity * 100).toFixed(2)}%</div>
              <p className="text-xs text-muted-foreground">Coherence quality</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stability</CardTitle>
              <Activity className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <Badge variant={results.stability === "optimal" ? "default" : "secondary"}>{results.stability}</Badge>
              <p className="text-xs text-muted-foreground mt-2">System state</p>
            </CardContent>
          </Card>
        </div>
      )}

      {results && !results.success && (
        <Card className="border-red-500">
          <CardHeader>
            <CardTitle className="text-red-500">Benchmark Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{results.error}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
