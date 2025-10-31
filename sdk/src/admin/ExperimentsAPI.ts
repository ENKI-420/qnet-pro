export interface Experiment {
  id: string
  name: string
  status: "running" | "paused" | "completed"
  generation: number
  population_size: number
  created_at: string
  updated_at: string
}

export class ExperimentsAPI {
  constructor(private config: any) {
    this.baseUrl = config.baseUrl || "https://api.dnalang.io"
    this.apiKey = config.apiKey
  }

  private baseUrl: string
  private apiKey?: string

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = { "Content-Type": "application/json" }
    if (this.apiKey) {
      headers["Authorization"] = `Bearer ${this.apiKey}`
    }
    return headers
  }

  async listExperiments(): Promise<Experiment[]> {
    const response = await fetch(`${this.baseUrl}/experiments`, {
      headers: this.getHeaders(),
    })
    if (!response.ok) throw new Error("Failed to list experiments")
    return response.json()
  }

  async getExperiment(experimentId: string): Promise<Experiment> {
    const response = await fetch(`${this.baseUrl}/experiments/${experimentId}`, {
      headers: this.getHeaders(),
    })
    if (!response.ok) throw new Error("Failed to get experiment")
    return response.json()
  }

  async createExperiment(name: string, config: any): Promise<Experiment> {
    const response = await fetch(`${this.baseUrl}/experiments`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ name, config }),
    })
    if (!response.ok) throw new Error("Failed to create experiment")
    return response.json()
  }

  async deleteExperiment(experimentId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/experiments/${experimentId}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    })
    if (!response.ok) throw new Error("Failed to delete experiment")
  }
}
