"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy } from "lucide-react"

const syntaxExamples = [
  {
    category: "Organism Definition",
    keyword: "ORGANISM",
    description: "Define a new quantum organism with DNA configuration",
    example: `ORGANISM QuantumSwarm {
  DNA {
    qubits: 8
    coherence_time: 100us
    entanglement_capacity: 4
  }
}`,
  },
  {
    category: "Sensing",
    keyword: "SENSE",
    description: "Define environmental awareness and input sources",
    example: `SENSE {
  measurement(quantum_state)
  observation(fitness)
  sampling(entanglement)
}`,
  },
  {
    category: "Actions",
    keyword: "ACT",
    description: "Specify quantum operations and behaviors",
    example: `ACT {
  hadamard(qubit_0)
  cnot(qubit_0, qubit_1)
  phase(qubit_2, pi/4)
}`,
  },
  {
    category: "Evolution",
    keyword: "EVOLVE",
    description: "Configure genetic algorithm parameters",
    example: `EVOLVE {
  mutation_rate: 0.1
  selection_pressure: 0.7
  fitness_function: quantum_fidelity
}`,
  },
  {
    category: "Quantum States",
    keyword: "SUPERPOSITION",
    description: "Create quantum superposition states",
    example: `SUPERPOSITION {
  alpha: 0.707
  beta: 0.707
  phase: 0
}`,
  },
  {
    category: "Entanglement",
    keyword: "ENTANGLE",
    description: "Create quantum entanglement between qubits",
    example: `ENTANGLE {
  qubits: [0, 1]
  strength: 0.95
  type: bell_state
}`,
  },
]

export function SyntaxReference() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {syntaxExamples.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{item.category}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <Badge variant="outline" className="font-mono">
                {item.keyword}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[150px] w-full rounded-md border bg-muted/30 p-3">
              <pre className="text-xs font-mono">
                <code>{item.example}</code>
              </pre>
            </ScrollArea>
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-3 bg-transparent"
              onClick={() => copyToClipboard(item.example)}
            >
              <Copy className="size-3 mr-2" />
              Copy Example
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
