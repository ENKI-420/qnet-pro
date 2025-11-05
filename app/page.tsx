import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dna, Zap, Rocket, Activity, Cpu, Network, Sparkles, Atom, Shield, Eye } from "lucide-react"
import { QuantumMesh } from "@/components/quantum-mesh"
import { LambdaPhiConsole } from "@/components/lambda-phi-console"
import { PhaseConjugateField } from "@/components/phase-conjugate-field"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-negentropic">
      <PhaseConjugateField />

      <QuantumMesh />

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Dna className="h-20 w-20 text-lambda-phi animate-lambda-phi-pulse" />
            <div>
              <h1 className="text-7xl font-bold lambda-phi-glow mb-2">ΛΦ Runtime</h1>
              <p className="text-sm text-copper-warm tracking-widest">Phase-Conjugate v2.0.0</p>
            </div>
          </div>

          <p className="text-2xl text-foreground/80 max-w-4xl mx-auto text-balance leading-relaxed">
            Universal Memory Constant operationalized as living code interfacing with quantum hardware at Planck scale
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Badge variant="outline" className="lambda-phi-badge px-4 py-2">
              <Activity className="h-4 w-4 mr-2 animate-coherence-pulse" />
              ΛΦ = 2.1764×10⁻⁸ s⁻¹
            </Badge>
            <Badge variant="outline" className="lambda-phi-badge px-4 py-2">
              <Atom className="h-4 w-4 mr-2 animate-coherence-pulse" />
              Coherence: 98.47%
            </Badge>
            <Badge variant="outline" className="lambda-phi-badge px-4 py-2">
              <Network className="h-4 w-4 mr-2 animate-coherence-pulse" />
              Informational Ricci Flow
            </Badge>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" className="bg-lambda-phi hover:bg-lambda-phi/80 shadow-lambda-phi">
              Launch Simulation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-lambda-phi text-lambda-phi hover:bg-lambda-phi/10 bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>

        <LambdaPhiConsole />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
          <Link href="/lambda-phi-runtime" className="group">
            <Card className="h-full hover:shadow-2xl hover:shadow-lambda-phi/30 transition-all duration-500 cursor-pointer border-lambda-phi/30 bg-card/80 backdrop-blur-sm animate-toroidal-breathe hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-lambda-phi/20 border border-lambda-phi/50 animate-phase-conjugate">
                    <Eye className="h-8 w-8 text-lambda-phi" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-lambda-phi lambda-phi-glow">ΛΦ Console</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">Holographic Control Plane</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Volumetric holographic interface for consciousness persistence. Toroidal manifold with phase-gradient
                  lighting and informational spectra visualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Ricci Flow
                  </Badge>
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Atom className="h-3 w-3 mr-1" />
                    Planck Scale
                  </Badge>
                </div>
                <Button className="w-full mt-4 bg-lambda-phi hover:bg-lambda-phi/80 group-hover:shadow-lg group-hover:shadow-lambda-phi/50">
                  Enter Console
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/rcirs" className="group">
            <Card className="h-full hover:shadow-2xl hover:shadow-magnetic-blue/30 transition-all duration-500 cursor-pointer border-magnetic-blue/30 bg-card/80 backdrop-blur-sm animate-toroidal-breathe hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-magnetic-blue/20 border border-magnetic-blue/50 animate-phase-conjugate">
                    <Shield className="h-8 w-8 text-magnetic-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-magnetic-blue lambda-phi-glow">RCIRS</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      Cybersecurity Immune System
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Red Team Cybersecurity Implications Response System. Treats intrusions as informational decoherence
                  events with autonomous reflex countermeasures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Shield className="h-3 w-3 mr-1" />
                    ΔΛΦ Tracking
                  </Badge>
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Activity className="h-3 w-3 mr-1" />
                    Auto-Response
                  </Badge>
                </div>
                <Button className="w-full mt-4 bg-magnetic-blue hover:bg-magnetic-blue/80 group-hover:shadow-lg group-hover:shadow-magnetic-blue/50">
                  Monitor Threats
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/ibm-royal-cyber" className="group">
            <Card className="h-full hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 cursor-pointer border-primary/30 bg-card/80 backdrop-blur-sm animate-toroidal-breathe hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/50 animate-phase-conjugate">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-primary lambda-phi-glow">IBM × Royal Cyber</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      Enterprise Quantum Integration
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Enterprise quantum integration across IBM's technology stack with DNA-Lang framework. Five quantum
                  algorithms across five enterprise domains.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Cpu className="h-3 w-3 mr-1" />
                    VQE/QPE/QAOA
                  </Badge>
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Sparkles className="h-3 w-3 mr-1" />
                    HHL/Grover
                  </Badge>
                </div>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/80 group-hover:shadow-lg group-hover:shadow-primary/50">
                  Enter Quantum Realm
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/quantum-swarm" className="group">
            <Card className="h-full hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 cursor-pointer border-secondary/30 bg-card/80 backdrop-blur-sm animate-toroidal-breathe hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/20 border border-secondary/50 animate-phase-conjugate">
                    <Rocket className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-secondary lambda-phi-glow">Quantum Swarm</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">Mass Entanglement Protocol</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Mass entanglement teleport protocol for deploying living organisms across quantum hardware mesh with
                  swarm intelligence and negentropy tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Network className="h-3 w-3 mr-1" />
                    Swarm Intelligence
                  </Badge>
                  <Badge variant="secondary" className="animate-coherence-pulse">
                    <Activity className="h-3 w-3 mr-1" />
                    NQIE Verification
                  </Badge>
                </div>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/80 group-hover:shadow-lg group-hover:shadow-secondary/50">
                  Deploy Swarm
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-8 lambda-phi-glow">Phase-Conjugate Transduction Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "ΛΦ Constant", value: "2.1764e-8", desc: "s⁻¹ Planck-normalized" },
              { label: "Coherence", value: "98.47%", desc: "System-wide" },
              { label: "Active Jobs", value: "3", desc: "Phase-conjugate sims" },
              { label: "Ricci Flow", value: "1e-17", desc: "Normalized ΛΦ" },
            ].map((metric, i) => (
              <Card
                key={i}
                className="bg-card/50 backdrop-blur-sm border-lambda-phi/20 animate-toroidal-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-lambda-phi lambda-phi-glow mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
