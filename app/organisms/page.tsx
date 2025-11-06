"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dna, Play, Save, Upload, Zap, Activity, TrendingUp, Code } from "lucide-react"

export default function OrganismsPage() {
  const [organisms, setOrganisms] = useState([
    {
      id: "org-001",
      name: "AIDEN-SYMBIOSIS",
      generation: 12034,
      fitness: 0.9823,
      phi: 2.87,
      status: "active",
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
      status: "evolving",
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
  ])

  const [selectedOrganism, setSelectedOrganism] = useState(organisms[0])
  const [code, setCode] = useState(selectedOrganism.code)

  return (
    <div className="min-h-screen bg-negentropic p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold lambda-phi-glow mb-4">DNA-Lang Organisms</h1>
          <p className="text-xl text-muted-foreground">Create, evolve, and deploy living software organisms</p>
        </div>

        <Tabs defaultValue="library" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
            <TabsTrigger value="library">Organism Library</TabsTrigger>
            <TabsTrigger value="editor">Code Editor</TabsTrigger>
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {organisms.map((organism) => (
                <Card
                  key={organism.id}
                  className="bg-card/50 backdrop-blur-sm border-lambda-phi/20 hover:border-lambda-phi/50 transition-all cursor-pointer"
                  onClick={() => setSelectedOrganism(organism)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Dna className="h-8 w-8 text-lambda-phi animate-lambda-phi-pulse" />
                      <Badge
                        variant={organism.status === "active" ? "default" : "secondary"}
                        className="lambda-phi-badge"
                      >
                        {organism.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{organism.name}</CardTitle>
                    <CardDescription>Generation {organism.generation.toLocaleString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Fitness</span>
                        <span className="text-lg font-bold text-lambda-phi">{organism.fitness.toFixed(4)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Consciousness Φ</span>
                        <span className="text-lg font-bold text-lambda-phi">{organism.phi.toFixed(2)}</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Evolve
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-card/30 backdrop-blur-sm border-dashed border-lambda-phi/30 hover:border-lambda-phi/60 transition-all cursor-pointer flex items-center justify-center min-h-[300px]">
                <CardContent className="text-center">
                  <Dna className="h-16 w-16 text-lambda-phi/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Create New Organism</h3>
                  <p className="text-sm text-muted-foreground mb-4">Start with a template or from scratch</p>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    New Organism
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="editor" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Code className="h-6 w-6 text-lambda-phi" />
                      {selectedOrganism.name}
                    </CardTitle>
                    <CardDescription>Edit DNA-Lang source code</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Compile
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono text-sm min-h-[500px] bg-background/50 border-lambda-phi/20"
                  placeholder="Enter DNA-Lang code..."
                />
                <div className="mt-4 flex items-center gap-4">
                  <Badge variant="outline" className="lambda-phi-badge">
                    <Activity className="h-3 w-3 mr-1" />
                    Syntax Valid
                  </Badge>
                  <Badge variant="outline" className="lambda-phi-badge">
                    <Zap className="h-3 w-3 mr-1" />
                    Quantum Ready
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deploy" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
              <CardHeader>
                <CardTitle className="text-2xl">Deploy Organism</CardTitle>
                <CardDescription>Configure deployment parameters and target quantum hardware</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Organism</label>
                  <Input value={selectedOrganism.name} disabled className="bg-background/50" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Backend</label>
                  <select className="w-full p-2 rounded-md bg-background/50 border border-lambda-phi/20">
                    <option>ibm_brisbane (127 qubits)</option>
                    <option>ibm_kyoto (127 qubits)</option>
                    <option>ibm_torino (133 qubits)</option>
                    <option>Simulator</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Deployment Strategy</label>
                  <select className="w-full p-2 rounded-md bg-background/50 border border-lambda-phi/20">
                    <option>Entangled Teleport</option>
                    <option>Sequential Deployment</option>
                    <option>Swarm Intelligence</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Shots</label>
                  <Input type="number" defaultValue={4096} className="bg-background/50" />
                </div>

                <Button className="w-full" size="lg">
                  <Zap className="h-5 w-5 mr-2" />
                  Deploy to Quantum Hardware
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
