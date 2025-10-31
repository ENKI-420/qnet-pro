import { type NextRequest, NextResponse } from "next/server"

interface TelemetryRecord {
  organismId: string
  generation: number
  roi: number
  liquidity: number
  costUSD: number
  entropy: number
  phi: number
  submittedAt: string
}

// In-memory telemetry store (replace with database in production)
const telemetryStore: TelemetryRecord[] = []

export async function POST(request: NextRequest) {
  try {
    const record: TelemetryRecord = await request.json()

    // Add timestamp if not provided
    if (!record.submittedAt) {
      record.submittedAt = new Date().toISOString()
    }

    // Store telemetry
    telemetryStore.push(record)

    console.log("[v0] AIDEN telemetry submitted:", record)

    return NextResponse.json({
      success: true,
      message: "Telemetry submitted successfully",
      recordId: telemetryStore.length - 1,
    })
  } catch (error) {
    console.error("[v0] Telemetry submission error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit telemetry" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const organismId = searchParams.get("organismId")
    const since = searchParams.get("since")

    let filtered = telemetryStore

    // Filter by organism ID
    if (organismId) {
      filtered = filtered.filter((r) => r.organismId === organismId)
    }

    // Filter by date
    if (since) {
      const sinceDate = new Date(since)
      filtered = filtered.filter((r) => new Date(r.submittedAt) >= sinceDate)
    }

    return NextResponse.json({
      success: true,
      count: filtered.length,
      records: filtered,
    })
  } catch (error) {
    console.error("[v0] Telemetry query error:", error)
    return NextResponse.json({ success: false, error: "Failed to query telemetry" }, { status: 500 })
  }
}
