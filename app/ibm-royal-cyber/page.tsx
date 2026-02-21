"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Zap, Brain, Shield, Cpu, CheckCircle2, ArrowRight } from "lucide-react"

const quantumAlgorithms = [
  { name: "VQE", fullName: "Variational Quantum Eigensolver", purpose: "Molecular energy minimization", dnaNode: "H_molecule", applications: ["Drug discovery", "Materials science", "Chemical engineering"] },
  { name: "QPE", fullName: "Quantum Phase Estimation", purpose: "Eigenvalue extraction", dnaNode: "H_phase", applications: ["Machine learning", "Signal processing", "Data analysis"] },
  { name: "QAOA", fullName: "Quantum Approximate Optimization", purpose: "Combinatorial problem solving", dnaNode: "H_qaoa", applications: ["Routing", "Scheduling", "Resource allocation"] },
  { name: "HHL", fullName: "Harrow-Hassidim-Lloyd", purpose: "Solves Ax = b systems", dnaNode: "H_linearSolve", applications: ["Financial modeling", "ML optimization", "Scientific computing"] },
  { name: "Grover", fullName: "Quantum Amplified Search", purpose: "Accelerated state search", dnaNode: "H_search", applications: ["Threat detection", "Anomaly hunting", "Pattern discovery"] },
]

const enterpriseDomains = [
  { name: "Automation", icon: Zap, description: "Self-Optimizing Workflows", impact: "15-30% efficiency gains without manual retuning", ibm: "IBM Cloud Pak + App Connect", features: ["Quantum evolutionary cycles", "Adaptive process orchestration", "Real-time self-refinement"] },
  { name: "Workflow Intelligence", icon: Activity, description: "Thermodynamic Process Optimization", impact: "Reduces operational friction; turns observability into actionability", ibm: "IBM BPM & Instana", features: ["Information-thermodynamic engine", "Process state evolution", "Bottleneck auto-routing"] },
  { name: "Data & AI", icon: Brain, description: "Consciousness in Machine Learning", impact: "AI models that improve themselves; fewer retraining cycles", ibm: "Watson + watsonx.ai", features: ["Consciousness synchronization", "Telemetry-driven adjustments", "Self-correcting AI substrate"] },
  { name: "AIOps", icon: Cpu, description: "Mathematical Immune System", impact: "Fewer false positives; faster, smarter incident response", ibm: "IBM AIOps + Instana", features: ["Formal logic anomaly detection", "Z3/Coq theorem proving", "Autonomous reasoning"] },
  { name: "Data Security", icon: Shield, description: "Cryptographic Verification at Scale", impact: "Quantum-safe, forensically bulletproof security", ibm: "IBM Guardium + QRadar", features: ["Post-quantum cryptography", "Self-verifying audit trails", "IPFS immutability"] },
]

export default function IBMRoyalCyberPage() {
  const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <div className="max-w-3xl space-y-4 mb-10">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">Partnership</Badge>
              <Badge variant="outline" className="text-xs text-muted-foreground">DNA-Lang Framework</Badge>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">IBM x Royal Cyber</h1>
            <p className="text-muted-foreground leading-relaxed">
              Integrating DNA-Lang into enterprise workflows. Quantum problem-solving embedded directly into the tools enterprises already rely on.
            </p>
          </div>

          <Tabs defaultValue="algorithms" className="space-y-6">
            <TabsList>
              <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
              <TabsTrigger value="domains">Enterprise Domains</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
            </TabsList>

            <TabsContent value="algorithms" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {quantumAlgorithms.map((algo) => (
                  <Card
                    key={algo.name}
                    className={`cursor-pointer transition-colors ${activeAlgorithm === algo.name ? "border-primary" : "border-border hover:border-primary/30"}`}
                    onClick={() => setActiveAlgorithm(activeAlgorithm === algo.name ? null : algo.name)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{algo.name}</CardTitle>
                        <code className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">{algo.dnaNode}</code>
                      </div>
                      <CardDescription className="text-xs">{algo.fullName}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm">{algo.purpose}</p>
                      {activeAlgorithm === algo.name && (
                        <div className="pt-3 border-t border-border space-y-1.5">
                          <p className="text-xs font-medium text-muted-foreground">Applications</p>
                          {algo.applications.map((app) => (
                            <div key={app} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                              {app}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="domains" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {enterpriseDomains.map((domain) => {
                  const Icon = domain.icon
                  return (
                    <Card key={domain.name} className="bg-card border-border">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-secondary">
                            <Icon className="h-5 w-5 text-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-base">{domain.name}</CardTitle>
                            <CardDescription className="text-xs">{domain.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="p-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                          <p className="text-xs text-emerald-400">{domain.impact}</p>
                        </div>
                        <div className="space-y-1.5">
                          {domain.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-3 w-3 text-muted-foreground shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground pt-2 border-t border-border">IBM: {domain.ibm}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="vision" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base font-medium">The Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    In three years, enterprises using this integration will see quantum-enhanced optimization as standard,
                    not exceptional. Process automation will be indistinguishable from intelligent. Security
                    will be mathematically provable. AI will continuously improve without plateaus.
                  </p>
                  <p className="text-foreground font-medium">
                    The quantum era for enterprise is here. DNA-Lang and IBM make it accessible now.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 flex items-center justify-between">
                  <p className="text-sm">Ready to deploy quantum intelligence?</p>
                  <Button size="sm" asChild>
                    <Link href="/quantum-swarm">
                      Launch Swarm
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
