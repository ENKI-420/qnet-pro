"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dna, Play, RotateCcw } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    id: "hello-quantum",
    title: "Hello Quantum",
    description: "Your first quantum organism",
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
    id: "entanglement",
    title: "Quantum Entanglement",
    description: "Create entangled qubits",
    code: `ORGANISM EntanglementDemo
{
  DNA {
    domain: "quantum_computing"
    security_level: "medium"
  }

  GENOME {
    GENE EntangleGene {
      purpose: "Create Bell state"
      expression_level: 1.0
    }
  }

  AGENTS {
    entangler: QuantumAgent(
      backend: "simulator"
    )
  }
}`,
  },
  {
    id: "optimization",
    title: "Circuit Optimization",
    description: "Self-optimizing quantum circuit",
    code: `ORGANISM CircuitOptimizer
{
  DNA {
    domain: "quantum_computing"
    evolution_rate: "adaptive"
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
        }
      }
    }
  }
}`,
  },
]

export default function PlaygroundPage() {
  const [selectedExample, setSelectedExample] = useState(examples[0])
  const [output, setOutput] = useState("")

  const handleRun = () => {
    setOutput(
      `Running ${selectedExample.title}...\n\n✓ Organism initialized\n✓ Quantum state prepared\n✓ Execution complete\n\nResult: Success`,
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Playground</span>
          </Link>
          <Button asChild variant="outline">
            <Link href="/editor">Open Full Editor</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Examples Sidebar */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Examples</h2>
            {examples.map((example) => (
              <Card
                key={example.id}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedExample.id === example.id
                    ? "bg-primary/10 border-primary"
                    : "bg-card border-border hover:bg-accent/50"
                }`}
                onClick={() => setSelectedExample(example)}
              >
                <h3 className="font-semibold mb-1">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </Card>
            ))}
          </div>

          {/* Code and Output */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedExample.title}</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button size="sm" onClick={handleRun}>
                  <Play className="h-4 w-4 mr-2" />
                  Run
                </Button>
              </div>
            </div>

            <Card className="p-4 bg-card border-border">
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-foreground">{selectedExample.code}</code>
              </pre>
            </Card>

            <Card className="p-4 bg-card border-border">
              <h3 className="font-semibold mb-3">Output</h3>
              <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
                {output || 'Click "Run" to execute this example...'}
              </pre>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
