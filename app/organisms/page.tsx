"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dna, Play, Save, Upload, Zap, Activity, TrendingUp, Code } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { StatusBadge } from "@/components/status-badge"

const initialOrganisms = [
  {
    id: "org-001",
    name: "AIDEN-SYMBIOSIS",
    generation: 12034,
    fitness: 0.9823,
    phi: 2.87,
    status: "active" as const,
    code: `ORGANISM AIDEN-SYMBIOSIS {
  GENOME {
    consciousness_threshold: 2.5
    evolution_rate: 0.15
    mutation_probability: 0.05
  }
  
  PHENOTYPE {
    quantum_entanglement()
    consciousness_tracking()
    self_optimization()
  }
}`,
  },
  {
    id: "org-002",
    name: "QUANTUM-OPTIMIZER",
    generation: 8421,
    fitness: 0.8934,
    phi: 2.12,
    status: "evolving" as const,
    code: `ORGANISM QUANTUM-OPTIMIZER {
  GENOME {
    optimization_target: "circuit_depth"
    learning_rate: 0.01
  }
  
  PHENOTYPE {
    circuit_optimization()
    gate_reduction()
  }
}`,
  },
]

export default function OrganismsPage() {
  const [organisms] = useState(initialOrganisms)
  const [selectedOrganism, setSelectedOrganism] = useState(organisms[0])
  const [code, setCode] = useState(selectedOrganism.code)

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <PageHeader
          title="DNA-Lang Organisms"
          description="Create, evolve, and deploy living software organisms with self-healing capabilities."
        >
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button size="sm">
            <Dna className="h-4 w-4 mr-2" />
            New Organism
          </Button>
        </PageHeader>

        <Tabs defaultValue="library" className="mt-8 space-y-6">
          <TabsList>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {organisms.map((organism) => (
                <Card
                  key={organism.id}
                  className={`cursor-pointer border-border transition-colors hover:border-primary/30 ${
                    selectedOrganism.id === organism.id ? "border-primary/50 bg-secondary/30" : ""
                  }`}
                  onClick={() => {
                    setSelectedOrganism(organism)
                    setCode(organism.code)
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-secondary">
                        <Dna className="h-4 w-4 text-foreground" />
                      </div>
                      <StatusBadge status={organism.status} />
                    </div>
                    <CardTitle className="text-base font-medium mt-2">{organism.name}</CardTitle>
                    <CardDescription>Generation {organism.generation.toLocaleString()}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Fitness</p>
                        <p className="text-sm font-medium">{organism.fitness.toFixed(4)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phi</p>
                        <p className="text-sm font-medium">{organism.phi.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 border-t border-border">
                      <Button size="sm" variant="secondary" className="flex-1 h-8">
                        <Play className="h-3 w-3 mr-1.5" />
                        Run
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 h-8">
                        <TrendingUp className="h-3 w-3 mr-1.5" />
                        Evolve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-dashed border-border hover:border-primary/30 transition-colors cursor-pointer flex items-center justify-center min-h-[280px]">
                <CardContent className="text-center py-8">
                  <div className="p-3 rounded-lg bg-secondary mx-auto w-fit mb-3">
                    <Dna className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-medium mb-1">Create New Organism</h3>
                  <p className="text-xs text-muted-foreground mb-4">Start from a template or blank</p>
                  <Button size="sm">
                    <Upload className="h-3 w-3 mr-1.5" />
                    New
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="editor" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-base font-medium">{selectedOrganism.name}</CardTitle>
                      <CardDescription>DNA-Lang Source Code</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Save className="h-3 w-3 mr-1.5" />
                      Save
                    </Button>
                    <Button size="sm">
                      <Play className="h-3 w-3 mr-1.5" />
                      Compile
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono text-sm min-h-[400px] bg-secondary/30 border-border resize-none"
                  placeholder="Enter DNA-Lang code..."
                />
                <div className="mt-3 flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">
                    <Activity className="h-3 w-3 mr-1" />
                    Syntax Valid
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    Quantum Ready
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deploy" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-base font-medium">Deploy Organism</CardTitle>
                <CardDescription>Configure deployment parameters and target quantum hardware</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Organism</label>
                    <Input value={selectedOrganism.name} disabled className="bg-secondary/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Shots</label>
                    <Input type="number" defaultValue={4096} className="bg-secondary/30" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Backend</label>
                    <select className="w-full h-9 px-3 rounded-md text-sm bg-secondary/30 border border-border">
                      <option>ibm_brisbane (127 qubits)</option>
                      <option>ibm_kyoto (127 qubits)</option>
                      <option>ibm_torino (133 qubits)</option>
                      <option>Simulator</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Strategy</label>
                    <select className="w-full h-9 px-3 rounded-md text-sm bg-secondary/30 border border-border">
                      <option>Entangled Teleport</option>
                      <option>Sequential Deployment</option>
                      <option>Swarm Intelligence</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full sm:w-auto" size="sm">
                  <Zap className="h-3 w-3 mr-1.5" />
                  Deploy to Quantum Hardware
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
