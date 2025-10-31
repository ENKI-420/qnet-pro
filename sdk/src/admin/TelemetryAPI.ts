export class TelemetryAPI {
  constructor(private config: any) {
    this.baseUrl = config.baseUrl || "https://api.dnalang.io"
  }

  private baseUrl: string

  async submitTelemetry(data: {
    experimentId: string
    generation: number
    fitness: number
    phi: number
    entropy: number
    genome?: any
  }): Promise<void> {
    const response = await fetch(`${this.baseUrl}/telemetry/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error("Failed to submit telemetry")
  }

  async getHistory(experimentId: string, includeGenomes = false): Promise<Array<Record<string, any>>> {
    const params = new URLSearchParams({
      experiment_id: experimentId,
      include_genomes: includeGenomes.toString(),
    })
    const response = await fetch(`${this.baseUrl}/telemetry/history?${params}`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to get telemetry history")
    return response.json()
  }

  async getLatest(experimentId: string): Promise<Record<string, any>> {
    const response = await fetch(`${this.baseUrl}/telemetry/${experimentId}/latest`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to get latest telemetry")
    return response.json()
  }

  async getConvergenceMetrics(experimentId: string): Promise<Record<string, any>> {
    const response = await fetch(`${this.baseUrl}/telemetry/${experimentId}/convergence`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to get convergence metrics")
    return response.json()
  }

  async getMutationStats(experimentId: string): Promise<Record<string, any>> {
    const response = await fetch(`${this.baseUrl}/telemetry/${experimentId}/mutations`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to get mutation stats")
    return response.json()
  }

  async exportData(experimentId: string, format: "json" | "csv" = "json"): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/telemetry/${experimentId}/export?format=${format}`, {
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to export data")
    return response.blob()
  }

  async *stream(experimentId: string): AsyncGenerator<Record<string, any>> {
    const ws = new WebSocket(`wss://api.dnalang.io/telemetry/${experimentId}/stream`)

    const queue: Record<string, any>[] = []
    let resolver: ((value: IteratorResult<Record<string, any>>) => void) | null = null
    let done = false

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (resolver) {
        resolver({ value: data, done: false })
        resolver = null
      } else {
        queue.push(data)
      }
    }

    ws.onclose = () => {
      done = true
      if (resolver) {
        resolver({ value: undefined, done: true })
        resolver = null
      }
    }

    while (!done || queue.length > 0) {
      if (queue.length > 0) {
        yield queue.shift()!
      } else {
        await new Promise<IteratorResult<Record<string, any>>>((resolve) => {
          resolver = resolve
        })
      }
    }

    ws.close()
  }
}
