import { NextResponse } from "next/server"

// Mock data - in production this would connect to the FastAPI backend
const organisms = [
  {
    id: "org_001",
    name: "QuantumBenchmarkEngine",
    fitness: 0.91,
    consciousness: 0.87,
    stability: 0.95,
    transcendence: false,
    status: "running",
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "org_002",
    name: "CursorAgent",
    fitness: 0.88,
    consciousness: 0.92,
    stability: 0.89,
    transcendence: false,
    status: "running",
    lastUpdated: new Date().toISOString(),
  },
]

export async function GET() {
  return NextResponse.json({ organisms })
}

export async function POST(request: Request) {
  const body = await request.json()

  // In production, this would call the FastAPI backend
  // const response = await fetch('http://localhost:8000/api/parse', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', 'X-API-Key': process.env.DNALANG_API_KEY },
  //   body: JSON.stringify({ source: body.source })
  // })

  return NextResponse.json({
    success: true,
    organismId: "org_" + Math.random().toString(36).substring(7),
    message: "Organism created successfully",
  })
}
