"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Play, Pause, SkipForward, RotateCw, TrendingUp } from "lucide-react"

interface Organism {
  id: number
  fitness: number
  generation: number
  genes: number[]
}

export function EvolutionSimulator() {
  const [population, setPopulation] = useState<Organism[]>([])
  const [generation, setGeneration] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [populationSize, setPopulationSize] = useState(20)
  const [mutationRate, setMutationRate] = useState(0.1)
  const [elitism, setElitism] = useState(true)
  const [selectionPressure, setSelectionPressure] = useState(0.7)
  const [fitnessHistory, setFitnessHistory] = useState<number[]>([])

  const initializePopulation = () => {
    const newPop: Organism[] = []
    for (let i = 0; i < populationSize; i++) {
      newPop.push({
        id: i,
        fitness: Math.random() * 0.5 + 0.3,
        generation: 0,
        genes: Array.from({ length: 8 }, () => Math.random()),
      })
    }
    setPopulation(newPop)
    setGeneration(0)
    setFitnessHistory([])
  }

  const evolveGeneration = () => {
    if (population.length === 0) return

    const sorted = [...population].sort((a, b) => b.fitness - a.fitness)
    const avgFitness = sorted.reduce((sum, org) => sum + org.fitness, 0) / sorted.length
    setFitnessHistory((prev) => [...prev.slice(-19), avgFitness])

    const newPop: Organism[] = []
    const eliteCount = elitism ? Math.floor(populationSize * 0.1) : 0

    // Keep elite organisms
    for (let i = 0; i < eliteCount; i++) {
      newPop.push({ ...sorted[i], generation: generation + 1 })
    }

    // Generate offspring
    while (newPop.length < populationSize) {
      const parent1 = selectParent(sorted)
      const parent2 = selectParent(sorted)
      const child = crossover(parent1, parent2)
      const mutated = mutate(child)
      newPop.push({
        ...mutated,
        id: newPop.length,
        generation: generation + 1,
      })
    }

    setPopulation(newPop)
    setGeneration((prev) => prev + 1)
  }

  const selectParent = (sorted: Organism[]): Organism => {
    const tournamentSize = Math.max(2, Math.floor(sorted.length * selectionPressure))
    const tournament = []
    for (let i = 0; i < tournamentSize; i++) {
      tournament.push(sorted[Math.floor(Math.random() * sorted.length)])
    }
    return tournament.sort((a, b) => b.fitness - a.fitness)[0]
  }

  const crossover = (parent1: Organism, parent2: Organism): Organism => {
    const crossoverPoint = Math.floor(Math.random() * parent1.genes.length)
    const childGenes = [...parent1.genes.slice(0, crossoverPoint), ...parent2.genes.slice(crossoverPoint)]
    const childFitness = (parent1.fitness + parent2.fitness) / 2 + (Math.random() - 0.5) * 0.1
    return {
      id: 0,
      fitness: Math.max(0, Math.min(1, childFitness)),
      generation: 0,
      genes: childGenes,
    }
  }

  const mutate = (organism: Organism): Organism => {
    const mutatedGenes = organism.genes.map((gene) =>
      Math.random() < mutationRate ? Math.max(0, Math.min(1, gene + (Math.random() - 0.5) * 0.2)) : gene,
    )
    const mutatedFitness =
      Math.random() < mutationRate
        ? Math.max(0, Math.min(1, organism.fitness + (Math.random() - 0.5) * 0.1))
        : organism.fitness
    return { ...organism, genes: mutatedGenes, fitness: mutatedFitness }
  }

  useEffect(() => {
    if (population.length === 0) {
      initializePopulation()
    }
  }, [populationSize])

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(evolveGeneration, 500)
    return () => clearInterval(interval)
  }, [isRunning, population, generation, mutationRate, elitism, selectionPressure])

  const topOrganisms = [...population].sort((a, b) => b.fitness - a.fitness).slice(0, 5)
  const avgFitness =
    population.length > 0 ? population.reduce((sum, org) => sum + org.fitness, 0) / population.length : 0
  const maxFitness = population.length > 0 ? Math.max(...population.map((org) => org.fitness)) : 0

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      {/* Visualization */}
      <div className="space-y-6">
        <Card className="border-bio-green/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Fitness Landscape</CardTitle>
                <CardDescription>Population evolution across generations</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={() => setIsRunning(!isRunning)}>
                  {isRunning ? <Pause className="size-4" /> : <Play className="size-4" />}
                </Button>
                <Button variant="outline" size="icon" onClick={evolveGeneration} disabled={isRunning}>
                  <SkipForward className="size-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={initializePopulation}>
                  <RotateCw className="size-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end gap-1 bg-background/50 rounded-lg border p-4">
              {fitnessHistory.map((fitness, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-bio-green/30 rounded-t transition-all"
                    style={{ height: `${fitness * 100}%` }}
                  />
                  {idx % 5 === 0 && <div className="text-xs text-muted-foreground">{idx}</div>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-bio-green">{(maxFitness * 100).toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">Max Fitness</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-quantum-blue">{(avgFitness * 100).toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground">Avg Fitness</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neural-violet">{generation}</div>
                <div className="text-xs text-muted-foreground">Generation</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5 text-bio-green" />
              Top Organisms
            </CardTitle>
            <CardDescription>Highest fitness individuals in current generation</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-3">
                {topOrganisms.map((org, idx) => (
                  <div key={org.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                    <Badge className="bg-bio-green/20 text-bio-green border-bio-green/30">#{idx + 1}</Badge>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Organism {org.id}</span>
                        <span className="text-sm font-mono text-bio-green">{(org.fitness * 100).toFixed(1)}%</span>
                      </div>
                      <div className="flex gap-1">
                        {org.genes.map((gene, gIdx) => (
                          <div
                            key={gIdx}
                            className="h-2 flex-1 rounded"
                            style={{
                              backgroundColor: `oklch(${0.45 + gene * 0.3} 0.15 ${145 + gene * 50})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolution Parameters</CardTitle>
            <CardDescription>Configure genetic algorithm settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Population Size: {populationSize}</Label>
              <Slider
                min={10}
                max={100}
                step={10}
                value={[populationSize]}
                onValueChange={(v) => setPopulationSize(v[0])}
                disabled={isRunning}
              />
            </div>

            <div className="space-y-2">
              <Label>Mutation Rate: {mutationRate.toFixed(2)}</Label>
              <Slider
                min={0}
                max={0.5}
                step={0.01}
                value={[mutationRate]}
                onValueChange={(v) => setMutationRate(v[0])}
              />
            </div>

            <div className="space-y-2">
              <Label>Selection Pressure: {selectionPressure.toFixed(2)}</Label>
              <Slider
                min={0.1}
                max={1}
                step={0.05}
                value={[selectionPressure]}
                onValueChange={(v) => setSelectionPressure(v[0])}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <Label htmlFor="elitism">Enable Elitism</Label>
              <Switch id="elitism" checked={elitism} onCheckedChange={setElitism} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>Current population metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Population</span>
              <span className="font-mono">{population.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Generation</span>
              <span className="font-mono text-neural-violet">{generation}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Status</span>
              <Badge variant={isRunning ? "default" : "outline"}>{isRunning ? "Running" : "Paused"}</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Elitism</span>
              <Badge variant="outline" className={elitism ? "border-bio-green/30 text-bio-green" : ""}>
                {elitism ? "Enabled" : "Disabled"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
