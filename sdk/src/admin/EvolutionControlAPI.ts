export class EvolutionControlAPI {
  constructor(private config: any) {
    this.baseUrl = config.baseUrl || "https://api.dnalang.io"
  }

  private baseUrl: string

  async pauseEvolution(experimentId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/evolution/${experimentId}/pause`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to pause evolution")
  }

  async resumeEvolution(experimentId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/evolution/${experimentId}/resume`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to resume evolution")
  }

  async setMutationRate(experimentId: string, rate: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/evolution/${experimentId}/mutation-rate`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rate }),
    })
    if (!response.ok) throw new Error("Failed to set mutation rate")
  }

  async triggerSelection(experimentId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/evolution/${experimentId}/select`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    if (!response.ok) throw new Error("Failed to trigger selection")
  }
}
