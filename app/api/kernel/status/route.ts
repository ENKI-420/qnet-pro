import { NextResponse } from "next/server"
import { kernel } from "@/lib/dnalang-kernel"

export async function GET() {
  try {
    const status = kernel.getStatus()
    return NextResponse.json(status)
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
