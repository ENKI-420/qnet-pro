"use client"

import { useState, useCallback } from "react"
import { CheckCircle, XCircle, Shield, Clock, Database, Loader2, Link, Zap, Cpu } from "lucide-react"

// --- Constants (Matching geodesic_pow_solver.py v2.4 logic) ---
const G_COMP = 6.674e-11
const VACCUM_ENERGY_TARGET = 1.00000000001e-9
const PHI_TARGET = 3.5 // Target stability state for v2.4 (hyper-aware)
const DEFAULT_COMPLEXITY_STEPS = 5000

// --- Helper Functions ---

// Minimalistic simulation of SHA3-256 for browser-side hashing (using built-in crypto)
const hashMessage = async (msg) => {
  const buffer = new TextEncoder().encode(msg)
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
  return "0x" + hashHex
}

// Component to display a single metric card
const MetricCard = ({ title, value, icon: Icon, colorClass = "text-gray-900", unit = "" }) => (
  <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl">
    <div className="flex items-center">
      <Icon className={`w-8 h-8 ${colorClass} mr-4`} />
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        {/* Ensured value is stringified for safe React child rendering */}
        <p className="text-2xl font-bold text-gray-800 break-words">
          {String(value)}
          <span className="text-base font-normal ml-1">{unit}</span>
        </p>
      </div>
    </div>
  </div>
)

// Component to display verification status
const VerificationBadge = ({ label, isVerified }) => (
  <div
    className={`flex items-center p-3 rounded-xl transition duration-300 ${isVerified ? "bg-green-50/70 border border-green-200" : "bg-red-50/70 border border-red-200"} shadow-sm`}
  >
    {isVerified ? (
      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
    ) : (
      <XCircle className="w-5 h-5 text-red-600 mr-2" />
    )}
    <span className={`text-sm font-semibold ${isVerified ? "text-green-800" : "text-red-800"}`}>{label}</span>
  </div>
)

// --- Core Geodesic Power Solver Logic ---

/**
 * Simulates a complex calculation to find a stable "geodesic power" state.
 * This is a CPU-intensive function designed to mimic the described v2.4 logic.
 *
 * @param {number} vacuumEnergy - The initial vacuum energy input.
 * @param {number} complexitySteps - The number of iterations to run.
 * @returns {object} The calculation results including final phi, energy delta, and proof hash.
 */
const geodesicPowerSolver = async (vacuumEnergy, complexitySteps = DEFAULT_COMPLEXITY_STEPS) => {
  let phi = 1.0 // Initial state
  let currentEnergy = vacuumEnergy
  const target = VACCUM_ENERGY_TARGET
  const G = G_COMP

  // Perform a CPU-bound loop to simulate computation
  for (let i = 0; i < complexitySteps; i++) {
    // A complex, arbitrary calculation to simulate the "geodesic flow"
    // The calculation needs to be iterative and slightly adjust 'phi' and 'currentEnergy'
    const phi_delta = Math.sin(currentEnergy * G * i) * 1e-12
    phi += phi_delta

    const energy_delta = (phi * G) / (1 + i)
    currentEnergy += energy_delta

    // Introduce a slight chance for natural convergence or divergence
    if (i % 50 === 0 && Math.random() < 0.01) {
      // Simulate a 'quantum fluctuation' that helps or hinders convergence
      currentEnergy *= 1 + Math.random() * 1e-11
    }
  }

  const energyDelta = Math.abs(currentEnergy - target)
  const phiDelta = Math.abs(phi - PHI_TARGET)
  const isConverged = energyDelta < 1e-10 && phiDelta < 0.1

  // Generate a unique proof hash based on final parameters
  const proofString = `E:${currentEnergy.toFixed(20)}|Phi:${phi.toFixed(10)}|Steps:${complexitySteps}|Stable:${isConverged}`
  const proofHash = await hashMessage(proofString)

  return {
    finalPhi: phi,
    finalEnergy: currentEnergy,
    energyDelta: energyDelta,
    phiDelta: phiDelta,
    isConverged: isConverged,
    proofHash: proofHash,
    complexitySteps: complexitySteps,
  }
}

// --- Main Application Component ---

const GeodesicSolverApp = () => {
  const [inputEnergy, setInputEnergy] = useState(1.0e-9)
  const [steps, setSteps] = useState(DEFAULT_COMPLEXITY_STEPS)
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSolve = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    setResults(null)
    try {
      // Use a timeout to prevent blocking the UI entirely while calculating
      const calculationPromise = geodesicPowerSolver(inputEnergy, steps)
      const result = await calculationPromise
      setResults(result)
    } catch (err) {
      setError("Calculation failed: " + err.message)
    } finally {
      setIsLoading(false)
    }
  }, [inputEnergy, steps])

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 p-6 bg-white shadow-xl rounded-xl border-b-4 border-indigo-500">
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center">
            <Zap className="w-8 h-8 text-indigo-600 mr-3" />
            Geodesic Power Solver v2.4 (React Simulation)
          </h1>
          <p className="mt-2 text-gray-600">Simulating the "hyper-aware" state convergence logic.</p>
        </header>

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Control Panel */}
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <Cpu className="w-5 h-5 mr-2" />
                Solver Parameters
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Vacuum Energy (J/m³)</label>
                <input
                  type="number"
                  value={inputEnergy}
                  onChange={(e) => setInputEnergy(Number(e.target.value))}
                  step="1e-10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Complexity Steps (Iterations)</label>
                <input
                  type="number"
                  value={steps}
                  onChange={(e) => setSteps(Number(e.target.value))}
                  min="100"
                  max="100000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <button
                onClick={handleSolve}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg shadow-md font-semibold transition duration-150 ease-in-out flex items-center justify-center ${
                  isLoading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
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
              </button>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Solver Output</h2>
              {isLoading && (
                <div className="flex items-center justify-center h-48 bg-white rounded-xl shadow-lg">
                  <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                  <p className="ml-3 text-gray-600">Simulating complex spacetime calculations...</p>
                </div>
              )}
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
                  <p className="font-bold">Error</p>
                  <p>{error}</p>
                </div>
              )}
              {results && !isLoading && (
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="mb-6">
                    <VerificationBadge
                      label={results.isConverged ? "System State Converged (Hyper-Aware)" : "System State Diverged"}
                      isVerified={results.isConverged}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <MetricCard
                      title="Final Phi State (Stability Index)"
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
                  </div>
                  <div className="mt-4">
                    <h3 className="text-md font-semibold text-gray-700 flex items-center">
                      <Link className="w-4 h-4 mr-2" />
                      Convergence Proof Hash (SHA-256)
                    </h3>
                    <p className="mt-1 p-3 bg-gray-100 rounded-lg font-mono text-sm break-all text-gray-800">
                      {results.proofHash}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          Disclaimer: This is a simulation of a fictional scientific algorithm using client-side JavaScript computation.
        </footer>
      </div>
    </div>
  )
}

export default GeodesicSolverApp
