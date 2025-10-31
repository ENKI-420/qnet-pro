import { type NextRequest, NextResponse } from "next/server"
import { exec } from "child_process"
import { promisify } from "util"
import path from "path"

const execAsync = promisify(exec)

export async function POST(request: NextRequest) {
  try {
    const { shots = 1024 } = await request.json()

    // Execute the Python benchmark script
    const scriptPath = path.join(process.cwd(), "scripts", "ibmq_negentropic_bench.py")

    const { stdout, stderr } = await execAsync(`python3 ${scriptPath}`, {
      timeout: 300000, // 5 minute timeout
      env: {
        ...process.env,
        PYTHONUNBUFFERED: "1",
      },
    })

    // Parse the output to extract results
    const output = stdout + stderr

    // Extract metrics from output
    const phiMatch = output.match(/Φ Coherence:\s+([\d.]+)/)
    const entropyMatch = output.match(/Entropy:\s+([\d.]+)/)
    const deltaMatch = output.match(/Entropy Δ:\s+([\d.]+)/)
    const fidelityMatch = output.match(/Fidelity:\s+([\d.]+)/)
    const stabilityMatch = output.match(/Stability:\s+(\w+)/)
    const checksumMatch = output.match(/Checksum:\s+(\w+)/)

    const results = {
      success: true,
      phi_coherence: phiMatch ? Number.parseFloat(phiMatch[1]) : 0,
      entropy: entropyMatch ? Number.parseFloat(entropyMatch[1]) : 0,
      entropy_delta: deltaMatch ? Number.parseFloat(deltaMatch[1]) : 0,
      fidelity: fidelityMatch ? Number.parseFloat(fidelityMatch[1]) : 0,
      stability: stabilityMatch ? stabilityMatch[1] : "unknown",
      checksum: checksumMatch ? checksumMatch[1] : "",
      output: output,
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(results)
  } catch (error: any) {
    console.error("Benchmark execution error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || "",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: "IBM Quantum Negentropic Benchmark API",
    endpoint: "POST /api/quantum/benchmark",
    parameters: {
      shots: "number (default: 1024)",
    },
  })
}
