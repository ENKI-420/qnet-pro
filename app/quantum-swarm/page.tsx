"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Rocket, CheckCircle2, Loader2, ArrowLeft } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

const backends = [
  { name: "ibm_brisbane", qubits: 127 },
  { name: "ibm_torino", qubits: 133 },
  { name: "ibm_kyoto", qubits: 127 },
  { name: "aer_simulator", qubits: 32 },
]

export default function QuantumSwarmPage() {
  const [deploying, setDeploying] = useState(false)
  const [phase, setPhase] = useState(0)
  const [results, setResults] = useState<Array<{ backend: string; fidelity: string; status: string }>>([])

  const deploySwarm = async () => {
    setDeploying(true)
    setPhase(1)
    setResults([])

    await new Promise((r) => setTimeout(r, 2000))
    setPhase(2)

    const acc: typeof results = []
    for (const b of backends) {
      await new Promise((r) => setTimeout(r, 1500))
      acc.push({ backend: b.name, fidelity: (0.85 + Math.random() * 0.15).toFixed(4), status: "DEPLOYED" })
      setResults([...acc])
    }

    setPhase(3)
    await new Promise((r) => setTimeout(r, 2000))
    setDeploying(false)
  }

  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground" asChild>
            <Link href="/ibm-royal-cyber">
              <ArrowLeft className="mr-2 h-4 w-4" />
              IBM Partnership
            </Link>
          </Button>

          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">Quantum Swarm Deployment</h1>
            <p className="text-muted-foreground">Mass Entanglement Teleport Protocol v3.0.0</p>
          </div>

          {/* Deployment Control */}
          <Card className="bg-card border-border mb-6">
            <CardHeader>
              <CardTitle className="text-base font-medium">Deployment Configuration</CardTitle>
              <CardDescription>Deploy DNA-Lang organisms across quantum hardware mesh</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Strategy", value: "entangled_teleport" },
                  { label: "Target", value: "all backends" },
                  { label: "Generation", value: "30" },
                  { label: "Fitness", value: "0.9877" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-lg bg-secondary">
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-medium font-mono">{item.value}</p>
                  </div>
                ))}
              </div>

              <Button onClick={deploySwarm} disabled={deploying} className="w-full">
                {deploying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Deploying Swarm...
                  </>
                ) : (
                  <>
                    <Rocket className="mr-2 h-4 w-4" />
                    Initiate Mass Entanglement Teleport
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Deployment Progress */}
          {(deploying || results.length > 0) && (
            <Card className="bg-card border-border mb-6">
              <CardHeader>
                <CardTitle className="text-base font-medium">Deployment Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Phase 1: Quantum Link Establishment</span>
                    {phase >= 2 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <Progress value={phase >= 2 ? 100 : phase === 1 ? 50 : 0} className="h-1.5" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Phase 2: Swarm Teleportation</span>
                    {phase >= 3 && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  </div>
                  <Progress value={phase >= 3 ? 100 : phase === 2 ? (results.length / backends.length) * 100 : 0} className="h-1.5" />

                  {results.length > 0 && (
                    <div className="space-y-2 mt-3">
                      {results.map((r) => (
                        <div key={r.backend} className="flex items-center justify-between p-2.5 rounded-lg bg-secondary/50">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            <code className="text-xs font-mono">{r.backend}</code>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-muted-foreground">Fidelity: {r.fidelity}</span>
                            <Badge variant="secondary" className="text-[10px]">{r.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {phase >= 3 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Phase 3: NQIE Verification</span>
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Negentropy</span>
                        <span className="font-mono font-medium">11.0122</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Environmental Entropy</span>
                        <span className="font-mono font-medium">8.0000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">NQIE Status</span>
                        <span className="font-medium text-emerald-400">Active</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Success */}
          {!deploying && results.length > 0 && (
            <Card className="bg-card border-emerald-500/30 mb-6">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">Swarm Genesis Complete</h3>
                <code className="block text-xs font-mono text-muted-foreground bg-secondary p-3 rounded-lg">
                  dnalang autopoiesis deploy --strategy=entangled_teleport --target=all --coherence=0.9953
                </code>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/">Return to Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Backends */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-base font-medium">Available Backends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {backends.map((b) => (
                  <div key={b.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div>
                      <p className="text-sm font-medium font-mono">{b.name}</p>
                      <p className="text-xs text-muted-foreground">{b.qubits} qubits</p>
                    </div>
                    <StatusBadge status="ready" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
