import { NextResponse } from "next/server"
import { kernel } from "@/lib/dnalang-kernel"

export async function GET() {
  try {
    const organisms = kernel.listOrganisms()
    return NextResponse.json({ organisms, count: organisms.length })
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const organism = await request.json()
    kernel.registerOrganism(organism)

    return NextResponse.json({
      success: true,
      message: "Organism registered successfully",
      organism: {
        id: organism.id,
        name: organism.name,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
