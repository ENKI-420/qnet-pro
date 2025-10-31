"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Trash2, Download, Sparkle, Eye, Activity, GitBranch } from "lucide-react"

interface SenseBlock {
  id: string
  source: string
  type: string
}

interface ActBlock {
  id: string
  operation: string
  target: string
}

interface EvolvePolicy {
  enabled: boolean
  mutationRate: number
  selectionPressure: number
}

export function OrganismDesigner() {
  const [organismName, setOrganismName] = useState("MyOrganism")
  const [qubits, setQubits] = useState(4)
  const [coherenceTime, setCoherenceTime] = useState(100)
  const [senseBlocks, setSenseBlocks] = useState<SenseBlock[]>([])
  const [actBlocks, setActBlocks] = useState<ActBlock[]>([])
  const [evolvePolicy, setEvolvePolicy] = useState<EvolvePolicy>({
    enabled: true,
    mutationRate: 0.1,
    selectionPressure: 0.7,
  })

  const addSenseBlock = () => {
    setSenseBlocks([
      ...senseBlocks,
      {
        id: `sense-${Date.now()}`,
        source: "quantum_state",
        type: "measurement",
      },
    ])
  }

  const removeSenseBlock = (id: string) => {
    setSenseBlocks(senseBlocks.filter((b) => b.id !== id))
  }

  const addActBlock = () => {
    setActBlocks([
      ...actBlocks,
      {
        id: `act-${Date.now()}`,
        operation: "hadamard",
        target: "qubit_0",
      },
    ])
  }

  const removeActBlock = (id: string) => {
    setActBlocks(actBlocks.filter((b) => b.id !== id))
  }

  const generateCode = () => {
    let code = `ORGANISM ${organismName} {\n`
    code += `  DNA {\n`
    code += `    qubits: ${qubits}\n`
    code += `    coherence_time: ${coherenceTime}us\n`
    code += `    entanglement_capacity: ${Math.floor(qubits / 2)}\n`
    code += `  }\n\n`

    if (senseBlocks.length > 0) {
      code += `  SENSE {\n`
      senseBlocks.forEach((block) => {
        code += `    ${block.type}(${block.source})\n`
      })
      code += `  }\n\n`
    }

    if (actBlocks.length > 0) {
      code += `  ACT {\n`
      actBlocks.forEach((block) => {
        code += `    ${block.operation}(${block.target})\n`
      })
      code += `  }\n\n`
    }

    if (evolvePolicy.enabled) {
      code += `  EVOLVE {\n`
      code += `    mutation_rate: ${evolvePolicy.mutationRate}\n`
      code += `    selection_pressure: ${evolvePolicy.selectionPressure}\n`
      code += `    fitness_function: quantum_fidelity\n`
      code += `  }\n`
    }

    code += `}`
    return code
  }

  const downloadOrganism = () => {
    const code = generateCode()
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${organismName}.dna`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Configuration Panel */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="size-5 text-quantum-blue" />
              DNA Configuration
            </CardTitle>
            <CardDescription>Define the core parameters of your quantum organism</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="organism-name">Organism Name</Label>
              <Input
                id="organism-name"
                value={organismName}
                onChange={(e) => setOrganismName(e.target.value)}
                placeholder="MyOrganism"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qubits">Qubits: {qubits}</Label>
              <Slider id="qubits" min={2} max={16} step={1} value={[qubits]} onValueChange={(v) => setQubits(v[0])} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coherence">Coherence Time: {coherenceTime}μs</Label>
              <Slider
                id="coherence"
                min={10}
                max={500}
                step={10}
                value={[coherenceTime]}
                onValueChange={(v) => setCoherenceTime(v[0])}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="size-5 text-entanglement-cyan" />
              SENSE Blocks
            </CardTitle>
            <CardDescription>Add inputs for environmental awareness</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {senseBlocks.map((block, idx) => (
              <div key={block.id} className="flex gap-2 items-end">
                <div className="flex-1 space-y-2">
                  <Label>Source</Label>
                  <Select
                    value={block.source}
                    onValueChange={(v) => {
                      const updated = [...senseBlocks]
                      updated[idx].source = v
                      setSenseBlocks(updated)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quantum_state">Quantum State</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="fitness">Fitness</SelectItem>
                      <SelectItem value="entanglement">Entanglement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 space-y-2">
                  <Label>Type</Label>
                  <Select
                    value={block.type}
                    onValueChange={(v) => {
                      const updated = [...senseBlocks]
                      updated[idx].type = v
                      setSenseBlocks(updated)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="measurement">Measurement</SelectItem>
                      <SelectItem value="observation">Observation</SelectItem>
                      <SelectItem value="sampling">Sampling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon" onClick={() => removeSenseBlock(block.id)}>
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
            <Button onClick={addSenseBlock} variant="outline" className="w-full bg-transparent">
              <Plus className="size-4 mr-2" />
              Add SENSE Block
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="size-5 text-bio-green" />
              ACT Blocks
            </CardTitle>
            <CardDescription>Define quantum operations and behaviors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {actBlocks.map((block, idx) => (
              <div key={block.id} className="flex gap-2 items-end">
                <div className="flex-1 space-y-2">
                  <Label>Operation</Label>
                  <Select
                    value={block.operation}
                    onValueChange={(v) => {
                      const updated = [...actBlocks]
                      updated[idx].operation = v
                      setActBlocks(updated)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hadamard">Hadamard</SelectItem>
                      <SelectItem value="pauli_x">Pauli-X</SelectItem>
                      <SelectItem value="pauli_y">Pauli-Y</SelectItem>
                      <SelectItem value="pauli_z">Pauli-Z</SelectItem>
                      <SelectItem value="cnot">CNOT</SelectItem>
                      <SelectItem value="phase">Phase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 space-y-2">
                  <Label>Target</Label>
                  <Select
                    value={block.target}
                    onValueChange={(v) => {
                      const updated = [...actBlocks]
                      updated[idx].target = v
                      setActBlocks(updated)
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: qubits }, (_, i) => (
                        <SelectItem key={i} value={`qubit_${i}`}>
                          Qubit {i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon" onClick={() => removeActBlock(block.id)}>
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
            <Button onClick={addActBlock} variant="outline" className="w-full bg-transparent">
              <Plus className="size-4 mr-2" />
              Add ACT Block
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="size-5 text-neural-violet" />
              EVOLVE Policy
            </CardTitle>
            <CardDescription>Configure evolutionary parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="evolve-enabled">Enable Evolution</Label>
              <Switch
                id="evolve-enabled"
                checked={evolvePolicy.enabled}
                onCheckedChange={(checked) => setEvolvePolicy({ ...evolvePolicy, enabled: checked })}
              />
            </div>

            {evolvePolicy.enabled && (
              <>
                <div className="space-y-2">
                  <Label>Mutation Rate: {evolvePolicy.mutationRate.toFixed(2)}</Label>
                  <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={[evolvePolicy.mutationRate]}
                    onValueChange={(v) => setEvolvePolicy({ ...evolvePolicy, mutationRate: v[0] })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Selection Pressure: {evolvePolicy.selectionPressure.toFixed(2)}</Label>
                  <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={[evolvePolicy.selectionPressure]}
                    onValueChange={(v) => setEvolvePolicy({ ...evolvePolicy, selectionPressure: v[0] })}
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Code Preview Panel */}
      <div className="space-y-6">
        <Card className="lg:sticky lg:top-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Generated DNA-Lang Code</CardTitle>
                <CardDescription>Real-time preview with syntax highlighting</CardDescription>
              </div>
              <Badge variant="outline" className="border-bio-green/30 text-bio-green">
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-[600px] w-full rounded-md border bg-muted/30 p-4">
              <pre className="text-sm font-mono">
                <code className="text-foreground/90">{generateCode()}</code>
              </pre>
            </ScrollArea>

            <Separator />

            <div className="flex gap-2">
              <Button onClick={downloadOrganism} className="flex-1">
                <Download className="size-4 mr-2" />
                Download .dna File
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Sparkle className="size-4 mr-2" />
                AI Enhance
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-quantum-blue">{qubits}</div>
                <div className="text-xs text-muted-foreground">Qubits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bio-green">{senseBlocks.length + actBlocks.length}</div>
                <div className="text-xs text-muted-foreground">Blocks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neural-violet">{evolvePolicy.enabled ? "ON" : "OFF"}</div>
                <div className="text-xs text-muted-foreground">Evolution</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
