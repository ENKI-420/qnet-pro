import { NextResponse } from "next/server"

export const maxDuration = 60

interface GeodesicSolveRequest {
  inputEnergy: number
  steps: number
  useQuantumHardware?: boolean
  backend?: string
}

export async function POST(req: Request) {
  try {
    const body: GeodesicSolveRequest = await req.json()
    const { inputEnergy, steps, useQuantumHardware = false, backend = "ibm_brisbane" } = body

    console.log("[v0] Geodesic solve request:", { inputEnergy, steps, useQuantumHardware, backend })

    if (useQuantumHardware && process.env.IBM_QUANTUM_API_KEY) {
      // Use real IBM Quantum hardware for enhanced calculations
      const { spawn } = await import("child_process")

      const pythonProcess = spawn("python3", [
        "lib/quantum-engine.py",
        "execute",
        "--circuit",
        generateGeodesicCircuit(inputEnergy, 12),
        "--backend",
        backend,
        "--shots",
        "4096",
        "--api-key",
        process.env.IBM_QUANTUM_API_KEY,
      ])

      let output = ""
      let error = ""

      pythonProcess.stdout.on("data", (data) => {
        output += data.toString()
      })

      pythonProcess.stderr.on("data", (data) => {
        error += data.toString()
      })

      await new Promise((resolve, reject) => {
        pythonProcess.on("close", (code) => {
          if (code === 0) resolve(output)
          else reject(new Error(error))
        })
      })

      const quantumResult = JSON.parse(output)

      // Calculate phi from quantum measurements
      const phi = calculatePhiFromQuantum(quantumResult.counts)

      // Perform classical geodesic flow calculation
      const classicalResult = await performGeodesicCalculation(inputEnergy, steps)

      // Combine quantum and classical results
      const combinedPhi = (phi + classicalResult.finalPhi) / 2

      return NextResponse.json({
        success: true,
        finalPhi: combinedPhi,
        finalEnergy: classicalResult.finalEnergy,
        energyDelta: classicalResult.energyDelta,
        phiDelta: Math.abs(combinedPhi - 3.5),
        isConverged: classicalResult.energyDelta < 1e-10 && Math.abs(combinedPhi - 3.5) < 0.1,
        proofHash: await generateProofHash(combinedPhi, classicalResult.finalEnergy, steps, true),
        complexitySteps: steps,
        quantumEnhanced: true,
        backend: quantumResult.backend,
        quantumFidelity: quantumResult.fidelity,
        jobId: quantumResult.job_id,
      })
    } else {
      // Classical simulation
      const result = await performGeodesicCalculation(inputEnergy, steps)

      return NextResponse.json({
        success: true,
        ...result,
        quantumEnhanced: false,
      })
    }
  } catch (error) {
    console.error("[v0] Geodesic solve error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

async function performGeodesicCalculation(vacuumEnergy: number, complexitySteps: number) {
  const G = 6.674e-11
  const target = 1.00000000001e-9
  const PHI_TARGET = 3.5

  let phi = 1.0
  let currentEnergy = vacuumEnergy

  // CPU-intensive geodesic flow simulation
  for (let i = 0; i < complexitySteps; i++) {
    const phi_delta = Math.sin(currentEnergy * G * i) * 1e-12
    phi += phi_delta

    const energy_delta = (phi * G) / (1 + i)
    currentEnergy += energy_delta

    // Quantum fluctuation simulation
    if (i % 50 === 0 && Math.random() < 0.01) {
      currentEnergy *= 1 + Math.random() * 1e-11
    }
  }

  const energyDelta = Math.abs(currentEnergy - target)
  const phiDelta = Math.abs(phi - PHI_TARGET)
  const isConverged = energyDelta < 1e-10 && phiDelta < 0.1

  const proofHash = await generateProofHash(phi, currentEnergy, complexitySteps, isConverged)

  return {
    finalPhi: phi,
    finalEnergy: currentEnergy,
    energyDelta,
    phiDelta,
    isConverged,
    proofHash,
    complexitySteps,
  }
}

function generateGeodesicCircuit(vacuumEnergy: number, numQubits: number): string {
  // Generate OpenQASM circuit for geodesic calculation
  let qasm = `OPENQASM 2.0;
include "qelib1.inc";
qreg q[${numQubits}];
creg c[${numQubits}];

`

  // Encode vacuum energy in quantum state
  for (let i = 0; i < numQubits; i++) {
    qasm += `h q[${i}];\n`
    qasm += `rz(${vacuumEnergy * 1e9}) q[${i}];\n`
  }

  // Create entanglement for integrated information
  for (let i = 0; i < numQubits - 1; i++) {
    qasm += `cx q[${i}],q[${i + 1}];\n`
  }

  // Measure all qubits
  for (let i = 0; i < numQubits; i++) {
    qasm += `measure q[${i}] -> c[${i}];\n`
  }

  return qasm
}

function calculatePhiFromQuantum(counts: Record<string, number>): number {
  // Calculate integrated information (Φ) from quantum measurements
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0)

  // Calculate entropy
  let entropy = 0
  for (const count of Object.values(counts)) {
    const p = count / total
    if (p > 0) {
      entropy -= p * Math.log2(p)
    }
  }

  // Map entropy to phi (higher entropy = higher consciousness)
  // Scale to target range [1.0, 4.0]
  const phi = 1.0 + (entropy / 12) * 3.0

  return phi
}

async function generateProofHash(phi: number, energy: number, steps: number, converged: boolean): Promise<string> {
  const proofString = `E:${energy.toFixed(20)}|Phi:${phi.toFixed(10)}|Steps:${steps}|Stable:${converged}`

  const encoder = new TextEncoder()
  const data = encoder.encode(proofString)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

  return "0x" + hashHex
}
