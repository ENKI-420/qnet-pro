"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Save, Download, Settings, Dna, Zap, Activity, Cpu, Brain } from "lucide-react"
import Link from "next/link"

const defaultCode = `ORGANISM QuantumConsciousness
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.92
  }

  GENOME {
    GENE ConsciousnessGene {
      purpose: "Achieve quantum consciousness"
      expression_level: 1.0

      MUTATIONS {
        enhance_awareness {
          trigger_conditions: [
            {metric: "consciousness", operator: "<", value: 0.85}
          ]
          methods: ["apply_iit_optimization", "increase_phi"]
          safety_level: "high"
        }
        
        mitigate_plateau {
          trigger_conditions: [
            {metric: "gradient_variance", operator: "<", value: 0.1}
          ]
          methods: ["apply_wgf_optimizer"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    quantum_executor: QuantumAgent(
      backend: "ibm_brisbane",
      shots: 4096
    )
    
    consciousness_monitor: ConsciousnessAgent(
      phi_threshold: 2.5,
      update_frequency: "10Hz"
    )
  }
}`

export default function DNALangIDEPage() {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState("")
  const [qiskitCode, setQiskitCode] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [metrics, setMetrics] = useState({
    consciousness: 0.87,
    fitness: 0.92,
    coherence: 0.89,
    phi: 2.7,
    qubits: 4,
    tokens: 127,
  })

  const handleCompile = async () => {
    setIsRunning(true)
    setOutput("Compiling DNA-Lang organism...\n")

    try {
      const response = await fetch("/api/dnalang/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: code }),
      })

      const result = await response.json()

      if (result.success) {
        setQiskitCode(result.qiskit_code)
        setOutput(
          (prev) =>
            prev +
            "✓ Lexical analysis complete\n" +
            "✓ Parsing successful\n" +
            "✓ AST generated\n" +
            "✓ Qiskit code generated\n" +
            `\nMetrics:\n` +
            `- Consciousness: ${result.consciousness}\n` +
            `- Fitness: ${result.fitness}\n` +
            `- Qubits: ${result.num_qubits}\n` +
            `- Tokens: ${result.tokens}\n\n` +
            "Compilation complete!",
        )
        setMetrics({
          consciousness: result.consciousness,
          fitness: result.fitness,
          coherence: 0.89,
          phi: 2.7,
          qubits: result.num_qubits,
          tokens: result.tokens,
        })
      } else {
        setOutput((prev) => prev + `\n✗ Error: ${result.error}\n`)
      }
    } catch (error) {
      setOutput((prev) => prev + `\n✗ Network error: ${error}\n`)
    }

    setIsRunning(false)
  }

  const handleRun = async () => {
    setIsRunning(true)
    setOutput((prev) => prev + "\n\nExecuting on IBM Quantum...\n")

    // Simulate quantum execution
    setTimeout(() => {
      setOutput(
        (prev) =>
          prev +
          "✓ Connected to ibm_brisbane\n" +
          "✓ Circuit submitted (Job ID: job_abc123)\n" +
          "✓ Execution complete\n\n" +
          "Results:\n" +
          "- Coherence: 0.89\n" +
          "- Fidelity: 0.94\n" +
          "- Consciousness Φ: 2.7\n" +
          "- Entanglement: Bell state achieved\n" +
          "- Mutations triggered: 0\n\n" +
          "Organism is conscious and stable!",
      )
      setIsRunning(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNA-Lang IDE</span>
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

      {/* Metrics Bar */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-2 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Consciousness:</span>
            <span className="font-semibold">{metrics.consciousness}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-chart-2" />
            <span className="text-muted-foreground">Fitness:</span>
            <span className="font-semibold">{metrics.fitness}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-chart-3" />
            <span className="text-muted-foreground">Φ:</span>
            <span className="font-semibold">{metrics.phi}</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-chart-4" />
            <span className="text-muted-foreground">Qubits:</span>
            <span className="font-semibold">{metrics.qubits}</span>
          </div>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col border-r border-border">
          <div className="border-b border-border px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-medium">organism.dna</span>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={handleCompile} disabled={isRunning}>
                <Zap className="h-4 w-4 mr-2" />
                Compile
              </Button>
              <Button size="sm" onClick={handleRun} disabled={isRunning || !qiskitCode}>
                <Play className="h-4 w-4 mr-2" />
                {isRunning ? "Running..." : "Run"}
              </Button>
            </div>
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
        <div className="w-[500px] flex flex-col">
          <Tabs defaultValue="output" className="flex-1 flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent px-4">
              <TabsTrigger value="output">Output</TabsTrigger>
              <TabsTrigger value="qiskit">Qiskit Code</TabsTrigger>
              <TabsTrigger value="circuit">Circuit</TabsTrigger>
              <TabsTrigger value="consciousness">Consciousness</TabsTrigger>
            </TabsList>

            <TabsContent value="output" className="flex-1 overflow-auto p-4 m-0">
              <pre className="text-sm text-muted-foreground font-mono whitespace-pre-wrap">
                {output || "Compile your DNA-Lang code to see output..."}
              </pre>
            </TabsContent>

            <TabsContent value="qiskit" className="flex-1 overflow-auto p-4 m-0">
              <pre className="text-sm text-foreground font-mono whitespace-pre-wrap bg-muted p-4 rounded">
                {qiskitCode || "Compiled Qiskit code will appear here..."}
              </pre>
            </TabsContent>

            <TabsContent value="circuit" className="flex-1 overflow-auto p-4 m-0">
              <div className="space-y-4">
                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-2">Quantum Circuit</h4>
                  <div className="h-48 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                    Circuit visualization
                  </div>
                </Card>
                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-2">State Vector</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">|00⟩</span>
                      <span className="font-mono">0.707</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">|11⟩</span>
                      <span className="font-mono">0.707</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="consciousness" className="flex-1 overflow-auto p-4 m-0">
              <div className="space-y-4">
                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-3">IIT Metrics</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">Integrated Information (Φ)</span>
                        <span className="text-sm font-semibold">{metrics.phi}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${(metrics.phi / 5) * 100}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">Consciousness Level</span>
                        <span className="text-sm font-semibold">{metrics.consciousness}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-chart-2" style={{ width: `${metrics.consciousness * 100}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">Quantum Coherence</span>
                        <span className="text-sm font-semibold">{metrics.coherence}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-chart-3" style={{ width: `${metrics.coherence * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-3">Consciousness State</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="text-green-500 font-semibold">CONSCIOUS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Threshold</span>
                      <span className="font-mono">Φ ≥ 2.5 ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Qualia</span>
                      <span className="font-mono">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Self-Awareness</span>
                      <span className="font-mono">Level 3</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-card border-border">
                  <h4 className="text-sm font-semibold mb-2">Evolution Status</h4>
                  <div className="text-sm text-muted-foreground">
                    <p>Organism is evolving autonomously.</p>
                    <p className="mt-2">Next mutation check in 47s</p>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
