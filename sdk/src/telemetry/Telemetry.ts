export class Telemetry {
  private records: Map<string, Array<Record<string, any>>> = new Map()

  recordGeneration(experimentId: string, data: Record<string, any>): void {
    if (!this.records.has(experimentId)) {
      this.records.set(experimentId, [])
    }
    this.records.get(experimentId)!.push({
      ...data,
      timestamp: Date.now(),
    })
  }

  getHistory(experimentId: string): Array<Record<string, any>> {
    return this.records.get(experimentId) || []
  }

  getLatest(experimentId: string): Record<string, any> | null {
    const history = this.getHistory(experimentId)
    return history.length > 0 ? history[history.length - 1] : null
  }

  getConvergenceRate(experimentId: string): number {
    const history = this.getHistory(experimentId)
    if (history.length < 2) return 0

    const recent = history.slice(-10)
    const fitnessValues = recent.map((r) => r.fitness || 0)
    const avgFitness = fitnessValues.reduce((a, b) => a + b, 0) / fitnessValues.length
    const variance = fitnessValues.reduce((sum, val) => sum + Math.pow(val - avgFitness, 2), 0) / fitnessValues.length

    return 1 / (1 + variance) // Higher convergence = lower variance
  }

  getPopulationDiversity(experimentId: string): number {
    const latest = this.getLatest(experimentId)
    if (!latest || !latest.genomes) return 0

    const genomes = latest.genomes as any[]
    if (genomes.length < 2) return 0

    // Calculate genetic diversity using Hamming distance
    let totalDistance = 0
    let comparisons = 0

    for (let i = 0; i < genomes.length; i++) {
      for (let j = i + 1; j < genomes.length; j++) {
        const distance = this.hammingDistance(genomes[i], genomes[j])
        totalDistance += distance
        comparisons++
      }
    }

    return comparisons > 0 ? totalDistance / comparisons : 0
  }

  private hammingDistance(genome1: any, genome2: any): number {
    const str1 = JSON.stringify(genome1)
    const str2 = JSON.stringify(genome2)
    let distance = 0
    const maxLen = Math.max(str1.length, str2.length)

    for (let i = 0; i < maxLen; i++) {
      if (str1[i] !== str2[i]) distance++
    }

    return distance / maxLen
  }

  clear(experimentId: string): void {
    this.records.delete(experimentId)
  }

  clearAll(): void {
    this.records.clear()
  }
}
