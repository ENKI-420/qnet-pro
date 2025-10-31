"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Eye, Activity, GitBranch, Database, Cloud, Cpu } from "lucide-react"

export function ArchitectureViewer() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>NQRE Architecture Overview</CardTitle>
          <CardDescription>Three-tier system with SENSE-ACT-EVOLVE cycles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Tier 1: Core Organism */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-quantum-blue/20 border border-quantum-blue/30">
                  <Cpu className="size-5 text-quantum-blue" />
                </div>
                <div>
                  <h3 className="font-semibold">Tier 1: Core Organism</h3>
                  <p className="text-sm text-muted-foreground">DNA-Lang living software with quantum state</p>
                </div>
              </div>

              <div className="ml-12 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                  <Eye className="size-5 text-entanglement-cyan mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">SENSE</div>
                    <p className="text-xs text-muted-foreground">
                      Environmental awareness through quantum measurements, fitness monitoring, and entanglement
                      detection
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        quantum_state
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        fitness
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        entanglement
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                  <Activity className="size-5 text-bio-green mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">ACT</div>
                    <p className="text-xs text-muted-foreground">
                      Quantum gate operations, state transformations, and behavioral responses based on sensed data
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        hadamard
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        cnot
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        phase
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border">
                  <GitBranch className="size-5 text-neural-violet mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">EVOLVE</div>
                    <p className="text-xs text-muted-foreground">
                      Genetic algorithm with mutation, crossover, and natural selection to improve fitness over
                      generations
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        mutation
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        selection
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        fitness_fn
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Tier 2: Backend Integration */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-entanglement-cyan/20 border border-entanglement-cyan/30">
                  <Database className="size-5 text-entanglement-cyan" />
                </div>
                <div>
                  <h3 className="font-semibold">Tier 2: Backend Integration</h3>
                  <p className="text-sm text-muted-foreground">Quantum hardware and data persistence</p>
                </div>
              </div>

              <div className="ml-12 grid gap-3 md:grid-cols-2">
                <div className="p-3 rounded-lg bg-muted/30 border">
                  <div className="font-medium text-sm mb-2">IBM Quantum Runtime</div>
                  <p className="text-xs text-muted-foreground mb-2">Execute circuits on real quantum hardware</p>
                  <Badge variant="outline" className="text-xs border-bio-green/30 text-bio-green">
                    4 Systems, 572 Qubits
                  </Badge>
                </div>

                <div className="p-3 rounded-lg bg-muted/30 border">
                  <div className="font-medium text-sm mb-2">PostgreSQL Database</div>
                  <p className="text-xs text-muted-foreground mb-2">Store organism DNA and evolution history</p>
                  <Badge variant="outline" className="text-xs border-quantum-blue/30 text-quantum-blue">
                    Neon Serverless
                  </Badge>
                </div>

                <div className="p-3 rounded-lg bg-muted/30 border">
                  <div className="font-medium text-sm mb-2">Redis Cache</div>
                  <p className="text-xs text-muted-foreground mb-2">Fast state management and job queuing</p>
                  <Badge variant="outline" className="text-xs border-entanglement-cyan/30 text-entanglement-cyan">
                    Upstash
                  </Badge>
                </div>

                <div className="p-3 rounded-lg bg-muted/30 border">
                  <div className="font-medium text-sm mb-2">Blob Storage</div>
                  <p className="text-xs text-muted-foreground mb-2">Circuit diagrams and visualization artifacts</p>
                  <Badge variant="outline" className="text-xs border-neural-violet/30 text-neural-violet">
                    Vercel Blob
                  </Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Tier 3: Auto-Advancement Loop */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-bio-green/20 border border-bio-green/30">
                  <Cloud className="size-5 text-bio-green" />
                </div>
                <div>
                  <h3 className="font-semibold">Tier 3: Auto-Advancement Loop</h3>
                  <p className="text-sm text-muted-foreground">Continuous improvement and deployment</p>
                </div>
              </div>

              <div className="ml-12 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">Monitoring & Telemetry</div>
                    <p className="text-xs text-muted-foreground">
                      Track Φ values, fitness metrics, coherence, and system health in real-time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">Autonomous Evolution</div>
                    <p className="text-xs text-muted-foreground">
                      Organisms self-improve through genetic algorithms without human intervention
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">Continuous Deployment</div>
                    <p className="text-xs text-muted-foreground">
                      Best organisms automatically deployed to production via Vercel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
