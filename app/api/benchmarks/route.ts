import { NextResponse } from "next/server"

// Mock benchmark data
const benchmarks = [
  {
    backend: "ibm_torino",
    qubits: 50,
    depth: 25,
    hop: 0.712,
    pass: true,
    timestamp: new Date().toISOString(),
  },
  {
    backend: "ibm_brisbane",
    qubits: 50,
    depth: 25,
    hop: 0.689,
    pass: true,
    timestamp: new Date().toISOString(),
  },
  {
    backend: "ibm_kyoto",
    qubits: 50,
    depth: 25,
    hop: 0.701,
    pass: true,
    timestamp: new Date().toISOString(),
  },
]

export async function GET() {
  return NextResponse.json({ benchmarks })
}

export async function POST(request: Request) {
  const body = await request.json()

  // In production, this would trigger the quantum benchmark suite
  return NextResponse.json({
    success: true,
    runId: "bench_" + Math.random().toString(36).substring(7),
    message: "Benchmark started",
    estimatedTime: "5-10 minutes",
  })
}
