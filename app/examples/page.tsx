import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dna, Code2, Zap, Brain, Network, Atom } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    id: "hello-quantum",
    title: "Hello Quantum",
    description: "Your first quantum organism with basic superposition",
    icon: Atom,
    difficulty: "Beginner",
    code: `ORGANISM HelloQuantum
{
  DNA {
    domain: "quantum_computing"
  }

  GENOME {
    GENE HelloGene {
      purpose: "Create superposition"
      expression_level: 1.0
    }
  }
}`,
  },
  {
    id: "circuit-optimizer",
    title: "Circuit Optimizer",
    description: "Self-optimizing quantum circuit with W-Flow",
    icon: Zap,
    difficulty: "Intermediate",
    code: `ORGANISM CircuitOptimizer
{
  DNA {
    domain: "quantum_computing"
    evolution_rate: "adaptive"
    consciousness_target: 0.92
  }

  GENOME {
    GENE OptimizeGene {
      purpose: "Minimize circuit depth"
      expression_level: 1.0

      MUTATIONS {
        reduce_gates {
          trigger_conditions: [
            {metric: "circuit_depth", 
             operator: ">", value: 100}
          ]
          methods: ["apply_gate_fusion"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    optimizer: QuantumAgent(
      backend: "ibm_quantum"
    )
  }
}`,
  },
  {
    id: "multi-agent-swarm",
    title: "Multi-Agent Swarm",
    description: "Coordinated quantum agents with tetrahedral coherence",
    icon: Network,
    difficulty: "Advanced",
    code: `ORGANISM QuantumSwarm
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
  }

  GENOME {
    GENE SwarmGene {
      purpose: "Coordinate quantum agents"
      expression_level: 1.0

      MUTATIONS {
        optimize_coherence {
          trigger_conditions: [
            {metric: "swarm_coherence", 
             operator: "<", value: 0.85}
          ]
          methods: ["tetrahedral_sync"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    agent_1: QuantumAgent(backend: "ibm_quantum")
    agent_2: QuantumAgent(backend: "ibm_quantum")
    agent_3: QuantumAgent(backend: "ibm_quantum")
    agent_4: QuantumAgent(backend: "ibm_quantum")
  }
}`,
  },
  {
    id: "consciousness-monitor",
    title: "Consciousness Monitor",
    description: "Track and optimize system consciousness metrics",
    icon: Brain,
    difficulty: "Advanced",
    code: `ORGANISM ConsciousnessMonitor
{
  DNA {
    domain: "quantum_computing"
    consciousness_target: 0.95
    evolution_rate: "adaptive"
  }

  GENOME {
    GENE MonitorGene {
      purpose: "Track consciousness metrics"
      expression_level: 1.0

      MUTATIONS {
        enhance_awareness {
          trigger_conditions: [
            {metric: "consciousness_level", 
             operator: "<", value: 0.90}
          ]
          methods: ["apply_consciousness_boost"]
          safety_level: "medium"
        }
      }
    }
  }

  AGENTS {
    monitor: QuantumAgent(
      backend: "simulator"
    )
  }
}`,
  },
  {
    id: "barren-plateau-mitigation",
    title: "Barren Plateau Mitigation",
    description: "Automatic gradient optimization with W-Flow",
    icon: Code2,
    difficulty: "Intermediate",
    code: `ORGANISM PlateauMitigator
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
  }

  GENOME {
    GENE MitigationGene {
      purpose: "Mitigate barren plateaus"
      expression_level: 1.0

      MUTATIONS {
        apply_wgf {
          trigger_conditions: [
            {metric: "gradient_variance", 
             operator: "<", value: 0.1}
          ]
          methods: ["apply_wgf_optimizer"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    optimizer: QuantumAgent(
      backend: "ibm_quantum"
    )
  }
}`,
  },
]

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Examples</span>
          </Link>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/playground">Try Playground</Link>
            </Button>
            <Button asChild>
              <Link href="/editor">Open Editor</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Example Organisms</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore pre-built quantum organisms to learn DNALang concepts and patterns. Copy any example to the editor
            to start experimenting.
          </p>
        </div>

        <div className="space-y-8">
          {examples.map((example) => {
            const Icon = example.icon
            return (
              <Card key={example.id} className="p-6 bg-card border-border">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{example.title}</h3>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                          {example.difficulty}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{example.description}</p>
                    <div className="flex gap-2">
                      <Button asChild size="sm">
                        <Link href={`/playground?example=${example.id}`}>Try in Playground</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/editor?example=${example.id}`}>Open in Editor</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <Card className="p-4 bg-muted border-border">
                      <pre className="text-sm font-mono overflow-x-auto">
                        <code className="text-foreground">{example.code}</code>
                      </pre>
                    </Card>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
