"use client"

export interface UIGene {
  id: string
  type: "layout" | "color" | "typography" | "spacing" | "animation"
  value: any
  fitness: number
  generation: number
}

export interface UserInteraction {
  timestamp: number
  elementId: string
  action: "click" | "hover" | "scroll" | "focus"
  duration: number
  success: boolean
}

export class UIEvolutionEngine {
  private genes: UIGene[] = []
  private interactions: UserInteraction[] = []
  private generation = 0
  private mutationRate = 0.1
  private populationSize = 20

  constructor() {
    this.initializePopulation()
  }

  // Initialize first generation of UI genes
  private initializePopulation() {
    const geneTypes: UIGene["type"][] = ["layout", "color", "typography", "spacing", "animation"]

    for (let i = 0; i < this.populationSize; i++) {
      geneTypes.forEach((type) => {
        this.genes.push({
          id: `${type}-${i}-${Date.now()}`,
          type,
          value: this.generateRandomGene(type),
          fitness: 0,
          generation: 0,
        })
      })
    }
  }

  // Generate random gene values based on type
  private generateRandomGene(type: UIGene["type"]): any {
    switch (type) {
      case "layout":
        return {
          gridCols: Math.floor(Math.random() * 3) + 2, // 2-4 columns
          gap: Math.floor(Math.random() * 4) + 2, // gap-2 to gap-6
          padding: Math.floor(Math.random() * 4) + 4, // p-4 to p-8
        }
      case "color":
        return {
          hue: Math.floor(Math.random() * 360),
          saturation: Math.random() * 0.3 + 0.15, // 0.15-0.45
          lightness: Math.random() * 0.2 + 0.5, // 0.5-0.7
        }
      case "typography":
        return {
          size: Math.floor(Math.random() * 3) + 2, // text-2xl to text-4xl
          weight: ["normal", "medium", "semibold", "bold"][Math.floor(Math.random() * 4)],
          tracking: ["tight", "normal", "wide"][Math.floor(Math.random() * 3)],
        }
      case "spacing":
        return {
          marginTop: Math.floor(Math.random() * 8) + 4, // mt-4 to mt-12
          marginBottom: Math.floor(Math.random() * 8) + 4,
        }
      case "animation":
        return {
          duration: Math.random() * 2 + 1, // 1-3 seconds
          easing: ["ease-in", "ease-out", "ease-in-out", "linear"][Math.floor(Math.random() * 4)],
          delay: Math.random() * 0.5, // 0-0.5s delay
        }
    }
  }

  // Track user interaction
  trackInteraction(interaction: UserInteraction) {
    this.interactions.push(interaction)

    // Calculate fitness based on interaction success
    const relatedGenes = this.genes.filter((g) => g.generation === this.generation)

    relatedGenes.forEach((gene) => {
      if (interaction.success) {
        gene.fitness += 1
      } else {
        gene.fitness -= 0.5
      }
    })

    // Trigger evolution after 50 interactions
    if (this.interactions.length % 50 === 0) {
      this.evolve()
    }
  }

  // Evolutionary algorithm: selection, crossover, mutation
  private evolve() {
    this.generation++

    // Group genes by type
    const genesByType = this.genes.reduce(
      (acc, gene) => {
        if (!acc[gene.type]) acc[gene.type] = []
        acc[gene.type].push(gene)
        return acc
      },
      {} as Record<string, UIGene[]>,
    )

    const newGenes: UIGene[] = []

    // Evolve each gene type separately
    Object.entries(genesByType).forEach(([type, genes]) => {
      // Sort by fitness
      genes.sort((a, b) => b.fitness - a.fitness)

      // Keep top 50% (elitism)
      const survivors = genes.slice(0, Math.floor(genes.length / 2))

      // Create offspring through crossover
      for (let i = 0; i < survivors.length; i += 2) {
        if (i + 1 < survivors.length) {
          const offspring = this.crossover(survivors[i], survivors[i + 1])
          newGenes.push(...offspring)
        }
      }

      // Add survivors
      newGenes.push(...survivors)
    })

    // Mutation
    newGenes.forEach((gene) => {
      if (Math.random() < this.mutationRate) {
        gene.value = this.mutate(gene.type, gene.value)
      }
      gene.generation = this.generation
    })

    this.genes = newGenes

    console.log(`[v0] UI Evolution: Generation ${this.generation}, Population: ${this.genes.length}`)
  }

  // Crossover two genes
  private crossover(parent1: UIGene, parent2: UIGene): UIGene[] {
    const child1: UIGene = {
      id: `${parent1.type}-${this.generation}-${Date.now()}-1`,
      type: parent1.type,
      value: { ...parent1.value },
      fitness: 0,
      generation: this.generation,
    }

    const child2: UIGene = {
      id: `${parent2.type}-${this.generation}-${Date.now()}-2`,
      type: parent2.type,
      value: { ...parent2.value },
      fitness: 0,
      generation: this.generation,
    }

    // Mix properties from both parents
    Object.keys(parent1.value).forEach((key, index) => {
      if (index % 2 === 0) {
        child1.value[key] = parent2.value[key]
        child2.value[key] = parent1.value[key]
      }
    })

    return [child1, child2]
  }

  // Mutate a gene value
  private mutate(type: UIGene["type"], value: any): any {
    const mutated = { ...value }

    switch (type) {
      case "layout":
        mutated.gridCols = Math.max(2, Math.min(4, mutated.gridCols + (Math.random() > 0.5 ? 1 : -1)))
        break
      case "color":
        mutated.hue = (mutated.hue + Math.random() * 60 - 30) % 360
        break
      case "typography":
        mutated.size = Math.max(2, Math.min(5, mutated.size + (Math.random() > 0.5 ? 1 : -1)))
        break
      case "spacing":
        mutated.marginTop = Math.max(2, Math.min(16, mutated.marginTop + (Math.random() > 0.5 ? 2 : -2)))
        break
      case "animation":
        mutated.duration = Math.max(0.5, Math.min(4, mutated.duration + Math.random() * 0.5 - 0.25))
        break
    }

    return mutated
  }

  // Get best genes for current generation
  getBestGenes(): Record<string, UIGene> {
    const best: Record<string, UIGene> = {}

    const genesByType = this.genes.reduce(
      (acc, gene) => {
        if (!acc[gene.type]) acc[gene.type] = []
        acc[gene.type].push(gene)
        return acc
      },
      {} as Record<string, UIGene[]>,
    )

    Object.entries(genesByType).forEach(([type, genes]) => {
      genes.sort((a, b) => b.fitness - a.fitness)
      best[type] = genes[0]
    })

    return best
  }

  getGeneration() {
    return this.generation
  }

  getMetrics() {
    return {
      generation: this.generation,
      populationSize: this.genes.length,
      totalInteractions: this.interactions.length,
      avgFitness: this.genes.reduce((sum, g) => sum + g.fitness, 0) / this.genes.length,
      successRate: this.interactions.filter((i) => i.success).length / Math.max(1, this.interactions.length),
    }
  }
}

// Singleton instance
let evolutionEngine: UIEvolutionEngine | null = null

export function getEvolutionEngine(): UIEvolutionEngine {
  if (!evolutionEngine) {
    evolutionEngine = new UIEvolutionEngine()
  }
  return evolutionEngine
}
