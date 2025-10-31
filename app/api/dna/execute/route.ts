import { NextResponse } from "next/server"
import { dnaRuntime } from "@/lib/dna-runtime"

export async function POST(request: Request) {
  try {
    const { organism, operation, params } = await request.json()

    // Load organism if not already loaded
    const loadedOrganism = await dnaRuntime.loadOrganism(organism)

    let result
    switch (operation) {
      case "sense":
        result = await dnaRuntime.executeSense(loadedOrganism, params.senseName, params.input)
        break
      case "act":
        result = await dnaRuntime.executeAct(loadedOrganism, params.actName, params.params)
        break
      case "evolve":
        result = await dnaRuntime.evolve(loadedOrganism, params.trigger)
        break
      case "workflow":
        result = await dnaRuntime.executeWorkflow(loadedOrganism, params.workflowName)
        break
      case "metrics":
        result = dnaRuntime.getMetrics(loadedOrganism.name)
        break
      default:
        throw new Error(`Unknown operation: ${operation}`)
    }

    return NextResponse.json({
      success: true,
      organism: loadedOrganism.name,
      operation,
      result,
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

export async function GET() {
  const organisms = dnaRuntime.listOrganisms()
  return NextResponse.json({
    organisms,
    count: organisms.length,
  })
}
