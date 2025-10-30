"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Save, Download, Settings, Dna } from "lucide-react"
import Link from "next/link"

const defaultCode = `ORGANISM QuantumExample
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.85
  }

  GENOME {
    GENE EntanglementGene {
      purpose: "Create and measure entangled states"
      expression_level: 1.0

      MUTATIONS {
        optimize_fidelity {
          trigger_conditions: [
            {metric: "fidelity", operator: "<", value: 0.9}
          ]
          methods: ["apply_error_mitigation"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    quantum_executor: QuantumAgent(
      backend: "ibm_quantum",
      shots: 4096
    )
  }
}`

export default function EditorPage() {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = async () => {
    setIsRunning(true)
    setOutput(
      "Compiling DNALang organism...\nConnecting to quantum backend...\nExecuting quantum circuit...\n\nResults:\n- Coherence: 0.87\n- Fidelity: 0.92\n- Entanglement: Bell state achieved\n- Mutations triggered: 0\n\nExecution complete.",
    )
    setTimeout(() => setIsRunning(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Editor</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Editor Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col border-r border-border">
          <div className="border-b border-border px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-medium">organism.dna</span>
            <Button size="sm" onClick={handleRun} disabled={isRunning}>
              <Play className="h-4 w-4 mr-2" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent text-foreground font-mono text-sm resize-none focus:outline-none"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="w-96 flex flex-col">
          <Tabs defaultValue="output" className="flex-1 flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent px-4">
              <TabsTrigger value="output">Output</TabsTrigger>
              <TabsTrigger value="visualization">Visualization</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            <TabsContent value="output" className="flex-1 overflow-auto p-4 m-0">
              <pre className="text-sm text-muted-foreground font-mono whitespace-pre-wrap">
                {output || "Run your code to see output..."}
              </pre>
            </TabsContent>
            <TabsContent value="visualization" className="flex-1 overflow-auto p-4 m-0">
              <div className="space-y-4">
                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-2">Quantum Circuit</h4>
                  <div className="h-32 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                    Circuit visualization
                  </div>
                </Card>
                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-2">State Vector</h4>
                  <div className="h-32 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                    State vector plot
                  </div>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="metrics" className="flex-1 overflow-auto p-4 m-0">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Coherence</span>
                  <span className="text-sm font-semibold">0.87</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Fidelity</span>
                  <span className="text-sm font-semibold">0.92</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expression Level</span>
                  <span className="text-sm font-semibold">1.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Mutations</span>
                  <span className="text-sm font-semibold">0</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
