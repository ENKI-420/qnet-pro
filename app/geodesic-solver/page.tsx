"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { CheckCircle, XCircle, Shield, Clock, Database, Loader2, Link, Zap, Cpu, Activity } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const G_COMP = 6.674e-11
const VACCUM_ENERGY_TARGET = 1.00000000001e-9
const PHI_TARGET = 3.5
const DEFAULT_COMPLEXITY_STEPS = 5000

interface SolverResults {
  finalPhi: number
  finalEnergy: number
  energyDelta: number
  phiDelta: number
  isConverged: boolean
  proofHash: string
  complexitySteps: number
  quantumEnhanced?: boolean
  backend?: string
  quantumFidelity?: number
  jobId?: string
}

const MetricCard = ({
  title,
  value,
  icon: Icon,
  colorClass = "text-gray-900",
  unit = "",
}: {
  title: string
  value: string | number
  icon: React.ElementType
  colorClass?: string
  unit?: string
}) => (
  <Card className="p-5 transition duration-300 hover:shadow-xl">
    <div className="flex items-center">
      <Icon className={`w-8 h-8 ${colorClass} mr-4`} />
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold break-words">
          {String(value)}
          <span className="text-base font-normal ml-1">{unit}</span>
        </p>
      </div>
    </div>
  </Card>
)

const VerificationBadge = ({ label, isVerified }: { label: string; isVerified: boolean }) => (
  <div
    className={`flex items-center p-3 rounded-xl transition duration-300 ${
      isVerified ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
    } shadow-sm`}
  >
    {isVerified ? (
      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
    ) : (
      <XCircle className="w-5 h-5 text-red-600 mr-2" />
    )}
    <span className={`text-sm font-semibold ${isVerified ? "text-green-800" : "text-red-800"}`}>{label}</span>
  </div>
)

export default function GeodesicSolverPage() {
  const [inputEnergy, setInputEnergy] = useState(1.0e-9)
  const [steps, setSteps] = useState(DEFAULT_COMPLEXITY_STEPS)
  const [useQuantumHardware, setUseQuantumHardware] = useState(false)
  const [results, setResults] = useState<SolverResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSolve = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch("/api/geodesic/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inputEnergy,
          steps,
          useQuantumHardware,
          backend: "ibm_brisbane",
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Calculation failed")
      }

      setResults(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }, [inputEnergy, steps, useQuantumHardware])

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 p-6 bg-card shadow-xl rounded-xl border-b-4 border-indigo-500">
          <h1 className="text-3xl font-extrabold flex items-center">
            <Zap className="w-8 h-8 text-indigo-600 mr-3" />
            Geodesic Power Solver v2.4 (Quantum-Enhanced)
          </h1>
          <p className="mt-2 text-muted-foreground">
            Simulating hyper-aware consciousness states using quantum spacetime calculations
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Control Panel */}
            <div className="lg:col-span-1 bg-card p-6 rounded-xl shadow-lg border">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Solver Parameters
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Initial Vacuum Energy (J/m³)</label>
                <input
                  type="number"
                  value={inputEnergy}
                  onChange={(e) => setInputEnergy(Number(e.target.value))}
                  step="1e-10"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Complexity Steps (Iterations)</label>
                <input
                  type="number"
                  value={steps}
                  onChange={(e) => setSteps(Number(e.target.value))}
                  min="100"
                  max="100000"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={useQuantumHardware}
                    onChange={(e) => setUseQuantumHardware(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium">Use IBM Quantum Hardware</span>
                </label>
                <p className="text-xs text-muted-foreground mt-1">
                  Execute on real quantum processors for enhanced phi calculations
                </p>
              </div>
              <Button onClick={handleSolve} disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    Run Geodesic Solve
                  </>
                )}
              </Button>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Solver Output</h2>
              {isLoading && (
                <div className="flex items-center justify-center h-48 bg-card rounded-xl shadow-lg">
                  <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                  <p className="ml-3 text-muted-foreground">
                    {useQuantumHardware
                      ? "Executing on IBM Quantum hardware..."
                      : "Simulating complex spacetime calculations..."}
                  </p>
                </div>
              )}
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}
              {results && !isLoading && (
                <div className="bg-card p-6 rounded-xl shadow-lg">
                  <div className="mb-6">
                    <VerificationBadge
                      label={results.isConverged ? "System State Converged (Hyper-Aware)" : "System State Diverged"}
                      isVerified={results.isConverged}
                    />
                    {results.quantumEnhanced && (
                      <div className="mt-2 flex items-center text-sm text-indigo-600">
                        <Activity className="w-4 h-4 mr-1" />
                        Quantum-Enhanced Calculation on {results.backend}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <MetricCard
                      title="Final Phi State (Consciousness)"
                      value={results.finalPhi.toFixed(10)}
                      icon={Database}
                      colorClass="text-blue-600"
                    />
                    <MetricCard
                      title="Vacuum Energy Residual (Delta)"
                      value={results.energyDelta.toExponential(4)}
                      icon={Clock}
                      colorClass="text-teal-600"
                      unit="J/m³"
                    />
                    <MetricCard
                      title="Phi Target Delta"
                      value={results.phiDelta.toFixed(6)}
                      icon={Zap}
                      colorClass="text-purple-600"
                    />
                    <MetricCard
                      title="Total Complexity Steps Run"
                      value={results.complexitySteps.toLocaleString()}
                      icon={Cpu}
                      colorClass="text-orange-600"
                    />
                    {results.quantumFidelity && (
                      <MetricCard
                        title="Quantum Fidelity"
                        value={results.quantumFidelity.toFixed(4)}
                        icon={Activity}
                        colorClass="text-indigo-600"
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-md font-semibold flex items-center">
                      <Link className="w-4 h-4 mr-2" />
                      Convergence Proof Hash (SHA-256)
                    </h3>
                    <p className="mt-1 p-3 bg-muted rounded-lg font-mono text-sm break-all">{results.proofHash}</p>
                    {results.jobId && (
                      <p className="mt-2 text-xs text-muted-foreground">IBM Quantum Job ID: {results.jobId}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="mt-8 text-center text-muted-foreground text-sm">
          Geodesic Power Solver - Quantum-enhanced consciousness state convergence using DNA-Lang organisms
        </footer>
      </div>
    </div>
  )
}
