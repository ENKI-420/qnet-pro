import { NextResponse } from "next/server"
import { spawn } from "child_process"

export async function POST(req: Request) {
  const { numQubits = 2, backend = "ibm_brisbane", shots = 4096 } = await req.json()

  if (!process.env.IBM_QUANTUM_API_KEY) {
    return NextResponse.json({ success: false, error: "IBM Quantum API key not configured" }, { status: 500 })
  }

  try {
    const pythonProcess = spawn("python3", [
      "lib/quantum-engine.py",
      "entangle",
      "--num-qubits",
      numQubits.toString(),
      "--backend",
      backend,
      "--shots",
      shots.toString(),
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
      console.log("[v0] Quantum Engine:", data.toString())
    })

    await new Promise((resolve, reject) => {
      pythonProcess.on("close", (code) => {
        if (code === 0) resolve(output)
        else reject(new Error(error))
      })
    })

    const result = JSON.parse(output)
    return NextResponse.json(result)
  } catch (err: any) {
    console.error("[v0] Entanglement creation failed:", err)
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
