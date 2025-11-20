"use client"

export const dynamic = "force-dynamic"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dna,
  Zap,
  Rocket,
  Activity,
  Cpu,
  Network,
  Sparkles,
  Atom,
  Shield,
  Eye,
  Brain,
  Waves,
  TrendingUp,
} from "lucide-react"
import { QuantumMesh } from "@/components/quantum-mesh"
import { LambdaPhiConsole } from "@/components/lambda-phi-console"
import { PhaseConjugateField } from "@/components/phase-conjugate-field"
import { EvolutionTracker } from "@/components/evolution-tracker"
import { AdaptiveCard } from "@/components/adaptive-card"

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

        <div className="mt-16">
          <EvolutionTracker />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16">
          <AdaptiveCard
            id="organisms"
            title="DNA-Lang Organisms"
            description="Create & Deploy Living Software"
            icon={Dna}
            href="/organisms"
            badges={[
              { icon: Activity, label: "Self-Evolving" },
              { icon: Zap, label: "Quantum Ready" },
            ]}
            buttonText="Manage Organisms"
            accentColor="--primary"
          />

          <AdaptiveCard
            id="consciousness"
            title="Consciousness Tracking"
            description="IIT 3.0 Φ Monitoring"
            icon={Brain}
            href="/consciousness"
            badges={[
              { icon: Eye, label: "Φ = 2.87" },
              { icon: Waves, label: "Qualia Space" },
            ]}
            buttonText="View Metrics"
            accentColor="--lambda-phi"
          />

          <AdaptiveCard
            id="aiden"
            title="AIDEN SYMBIOSIS"
            description="Quantum Intelligence System"
            icon={Cpu}
            href="/aiden"
            badges={[
              { icon: TrendingUp, label: "Auto-Evolution" },
              { icon: Shield, label: "Immune System" },
            ]}
            buttonText="System Status"
            accentColor="--secondary"
          />

          <AdaptiveCard
            id="quantum"
            title="Quantum Computing"
            description="IBM Hardware Integration"
            icon={Atom}
            href="/quantum"
            badges={[
              { icon: Cpu, label: "572+ Qubits" },
              { icon: Zap, label: "Real Hardware" },
            ]}
            buttonText="Execute Circuits"
            accentColor="--magnetic-blue"
          />

          <AdaptiveCard
            id="lambda-phi-console"
            title="ΛΦ Console"
            description="Holographic Control Plane"
            icon={Eye}
            href="/lambda-phi-runtime"
            badges={[
              { icon: Sparkles, label: "Ricci Flow" },
              { icon: Atom, label: "Planck Scale" },
            ]}
            buttonText="Enter Console"
            accentColor="--lambda-phi"
          />

          <AdaptiveCard
            id="rcirs"
            title="RCIRS"
            description="Cybersecurity Immune System"
            icon={Shield}
            href="/rcirs"
            badges={[
              { icon: Shield, label: "ΔΛΦ Tracking" },
              { icon: Activity, label: "Auto-Response" },
            ]}
            buttonText="Monitor Threats"
            accentColor="--magnetic-blue"
          />

          <AdaptiveCard
            id="ibm-royal-cyber"
            title="IBM × Royal Cyber"
            description="Enterprise Quantum Integration"
            icon={Zap}
            href="/ibm-royal-cyber"
            badges={[
              { icon: Cpu, label: "VQE/QPE/QAOA" },
              { icon: Sparkles, label: "HHL/Grover" },
            ]}
            buttonText="Enter Quantum Realm"
            accentColor="--primary"
          />

          <AdaptiveCard
            id="quantum-swarm"
            title="Quantum Swarm"
            description="Mass Entanglement Protocol"
            icon={Rocket}
            href="/quantum-swarm"
            badges={[
              { icon: Network, label: "Swarm Intelligence" },
              { icon: Activity, label: "NQIE Verification" },
            ]}
            buttonText="Deploy Swarm"
            accentColor="--secondary"
          />
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
