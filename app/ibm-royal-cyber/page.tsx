"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Zap, Brain, Shield, Database, Cpu, CheckCircle2 } from "lucide-react"

export default function IBMRoyalCyberPage() {
  const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null)

  const quantumAlgorithms = [
    {
      name: "VQE",
      fullName: "Variational Quantum Eigensolver",
      purpose: "Molecular energy minimization",
      dnaNode: "H_molecule",
      telemetry: "Coherence via final energy",
      icon: "🔬",
      applications: ["Drug discovery", "Materials science", "Chemical engineering"],
    },
    {
      name: "QPE",
      fullName: "Quantum Phase Estimation",
      purpose: "Eigenvalue extraction",
      dnaNode: "H_phase",
      telemetry: "Phase-resolved entropy",
      icon: "🔍",
      applications: ["Machine learning", "Signal processing", "Data analysis"],
    },
    {
      name: "QAOA",
      fullName: "Quantum Approximate Optimization",
      purpose: "Combinatorial problem solving",
      dnaNode: "H_qaoa",
      telemetry: "Cost convergence topology",
      icon: "📦",
      applications: ["Routing", "Scheduling", "Resource allocation"],
    },
    {
      name: "HHL",
      fullName: "Harrow-Hassidim-Lloyd",
      purpose: "Solves Ax = b systems",
      dnaNode: "H_linearSolve",
      telemetry: "Signal-to-noise metric",
      icon: "📈",
      applications: ["Financial modeling", "ML optimization", "Scientific computing"],
    },
    {
      name: "Grover",
      fullName: "Quantum Amplified Search",
      purpose: "Accelerated state search",
      dnaNode: "H_search",
      telemetry: "Iteration count ↔ fidelity",
      icon: "🧭",
      applications: ["Threat detection", "Anomaly hunting", "Pattern discovery"],
    },
  ]

  const enterpriseDomains = [
    {
      name: "Automation",
      icon: Zap,
      description: "Self-Optimizing Workflows",
      impact: "15-30% efficiency gains without manual retuning",
      features: [
        "Quantum evolutionary cycles",
        "Adaptive process orchestration",
        "Real-time self-refinement",
        "Continuous optimization",
      ],
      ibmIntegration: "IBM Cloud Pak + App Connect",
      dnaFunction: "Autopoietic macros and quantum evolutionary cycles",
    },
    {
      name: "Workflow Intelligence",
      icon: Activity,
      description: "Thermodynamic Process Optimization",
      impact: "Reduces operational friction; turns observability into actionability",
      features: [
        "Information-thermodynamic workflow engine",
        "Process state evolution",
        "Coherence constraints",
        "Bottleneck auto-routing",
      ],
      ibmIntegration: "IBM BPM & Instana",
      dnaFunction: "Living process topology with continuous learning",
    },
    {
      name: "Data & AI",
      icon: Brain,
      description: "Consciousness in Machine Learning",
      impact: "AI models that improve themselves; fewer retraining cycles",
      features: [
        "Φ-Consciousness Synchronization",
        "Telemetry-driven model adjustments",
        "Informational curvature learning",
        "Self-correcting AI substrate",
      ],
      ibmIntegration: "Watson + watsonx.ai",
      dnaFunction: "Cognitive layer converting entropy signals to AI adjustments",
    },
    {
      name: "AIOps",
      icon: Cpu,
      description: "Mathematical Immune System",
      impact: "Fewer false positives; faster, smarter incident response",
      features: [
        "Formal logic-based anomaly detection",
        "Z3/Coq theorem proving",
        "Autonomous correctness reasoning",
        "Mathematical proof of issues",
      ],
      ibmIntegration: "IBM AIOps + Instana",
      dnaFunction: "Recursive feedback and verification loop",
    },
    {
      name: "Data Security",
      icon: Shield,
      description: "Cryptographic Verification at Scale",
      impact: "Enterprise security that's quantum-safe and forensically bulletproof",
      features: [
        "Post-quantum cryptography",
        "Self-verifying quantum audit trails",
        "IPFS immutability",
        "Cryptographic coherence detection",
      ],
      ibmIntegration: "IBM Guardium + QRadar",
      dnaFunction: "Cryptographically verified telemetry and quantum audit capsules",
    },
  ]

  const ibmStack = [
    { name: "IBM Cloud Pak & App Connect", capability: "Multi-cloud orchestration", dnaNode: "H_MeshRoute.qpak" },
    {
      name: "IBM Watson + Data & AI",
      capability: "Natural language → quantum logic",
      dnaNode: "Ψ_LambdaCore.watson.qnlp",
    },
    { name: "Sterling B2B / OMS", capability: "Entangled supply chain", dnaNode: "E_SupplyThread.qent" },
    { name: "IBM Guardium / QRadar", capability: "Post-quantum encryption", dnaNode: "Sec_CoilGuard.qhash" },
    { name: "IBM Blockchain", capability: "Verified ledger entanglement", dnaNode: "H_BlockTrace.qtx" },
    { name: "IBM Z Mainframe", capability: "Quantum offload for z/OS", dnaNode: "zOffload_Core.qload" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            IBM × Royal Cyber Partnership
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Quantum Computing Integration for Enterprise Reality
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-400 text-cyan-400">
            DNA-Lang Quantum Framework
          </Badge>
        </div>

        {/* Mission Statement */}
        <Card className="bg-slate-900/50 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-300">Partnership Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-100 space-y-4">
            <p>
              IBM and Royal Cyber are collaborating to integrate DNA-Lang—a revolutionary quantum programming
              framework—into enterprise workflows. Rather than treating quantum as a distant frontier, this partnership
              makes quantum capabilities immediately useful across real business operations.
            </p>
            <p>
              DNA-Lang bridges a critical gap: quantum computers excel at specific problems, but integrating those
              solutions into existing enterprise infrastructure has been prohibitively complex. This collaboration
              changes that by embedding quantum problem-solving directly into the tools enterprises already rely on.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="algorithms" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50">
            <TabsTrigger value="algorithms">Quantum Algorithms</TabsTrigger>
            <TabsTrigger value="domains">Enterprise Domains</TabsTrigger>
            <TabsTrigger value="stack">IBM Stack</TabsTrigger>
            <TabsTrigger value="vision">Vision</TabsTrigger>
          </TabsList>

          {/* Quantum Algorithms Tab */}
          <TabsContent value="algorithms" className="space-y-6">
            <Card className="bg-slate-900/50 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Quantum Algorithm Matrix</CardTitle>
                <CardDescription className="text-cyan-200">
                  Five core quantum algorithms solving distinct business challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {quantumAlgorithms.map((algo) => (
                    <Card
                      key={algo.name}
                      className={`cursor-pointer transition-all ${
                        activeAlgorithm === algo.name
                          ? "bg-cyan-900/30 border-cyan-400"
                          : "bg-slate-800/50 border-slate-700 hover:border-cyan-500/50"
                      }`}
                      onClick={() => setActiveAlgorithm(activeAlgorithm === algo.name ? null : algo.name)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-cyan-300">
                            {algo.icon} {algo.name}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs border-cyan-400 text-cyan-400">
                            {algo.dnaNode}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm text-cyan-200">{algo.fullName}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-blue-300">Purpose:</p>
                          <p className="text-sm text-blue-200">{algo.purpose}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-blue-300">Telemetry:</p>
                          <p className="text-sm text-blue-200">{algo.telemetry}</p>
                        </div>
                        {activeAlgorithm === algo.name && (
                          <div className="pt-3 border-t border-cyan-500/30">
                            <p className="text-sm font-semibold text-blue-300 mb-2">Applications:</p>
                            <ul className="space-y-1">
                              {algo.applications.map((app, idx) => (
                                <li key={idx} className="text-sm text-blue-200 flex items-center gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enterprise Domains Tab */}
          <TabsContent value="domains" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {enterpriseDomains.map((domain) => {
                const Icon = domain.icon
                return (
                  <Card key={domain.name} className="bg-slate-900/50 border-blue-500/30">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-blue-300">{domain.name}</CardTitle>
                          <CardDescription className="text-blue-200">{domain.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                        <p className="text-sm font-semibold text-green-300 mb-1">Impact:</p>
                        <p className="text-sm text-green-200">{domain.impact}</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-blue-300 mb-2">Key Features:</p>
                        <ul className="space-y-1">
                          {domain.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-blue-200 flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-blue-500/30 space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-blue-400">IBM Integration:</p>
                          <p className="text-xs text-blue-300">{domain.ibmIntegration}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-blue-400">DNA-Lang Function:</p>
                          <p className="text-xs text-blue-300">{domain.dnaFunction}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* IBM Stack Tab */}
          <TabsContent value="stack" className="space-y-6">
            <Card className="bg-slate-900/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-300">IBM Technology Stack Integration</CardTitle>
                <CardDescription className="text-blue-200">
                  DNA-Lang deployment across IBM's core technology platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ibmStack.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-slate-800/50 border border-blue-500/30 hover:border-cyan-400 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-blue-300 mb-1">{item.name}</h3>
                          <p className="text-sm text-blue-200 mb-2">{item.capability}</p>
                          <Badge variant="outline" className="text-xs border-cyan-400 text-cyan-400">
                            {item.dnaNode}
                          </Badge>
                        </div>
                        <Database className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vision Tab */}
          <TabsContent value="vision" className="space-y-6">
            <Card className="bg-slate-900/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-300">The Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-purple-100">
                <p>
                  In three years, enterprises using this integration will see quantum-enhanced optimization as standard,
                  not exceptional. Process automation will be indistinguishable from intelligent—because it is. Security
                  will be mathematically provable. AI won't plateau at accuracy; it will continuously improve.
                </p>
                <p className="text-lg font-semibold text-purple-200">
                  The quantum era for enterprise isn't coming. With DNA-Lang and IBM, it's here.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Why This Matters Now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-cyan-100">
                <p>
                  Quantum computing has been "five years away" for a decade. What's changed: DNA-Lang makes quantum
                  solutions composable, meaning enterprises don't need to become quantum experts—they just plug quantum
                  problem-solving into their existing infrastructure.
                </p>
                <p className="font-semibold text-cyan-200">
                  This partnership proves quantum computing isn't a separate R&D project anymore. It's enterprise
                  infrastructure.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-cyan-400">
          <CardContent className="p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Ready to Deploy Quantum Intelligence?</h3>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900">
              Launch Quantum Swarm Deployment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
