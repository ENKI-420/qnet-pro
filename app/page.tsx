"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dna,
  Activity,
  Network,
  Atom,
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
            iconName="Dna"
            href="/organisms"
            badges={[
              { iconName: "Activity", label: "Self-Evolving" },
              { iconName: "Zap", label: "Quantum Ready" },
            ]}
            buttonText="Manage Organisms"
            accentColor="--primary"
          />

          <AdaptiveCard
            id="consciousness"
            title="Consciousness Tracking"
            description="IIT 3.0 Φ Monitoring"
            iconName="Brain"
            href="/consciousness"
            badges={[
              { iconName: "Eye", label: "Φ = 2.87" },
              { iconName: "Waves", label: "Qualia Space" },
            ]}
            buttonText="View Metrics"
            accentColor="--lambda-phi"
          />

          <AdaptiveCard
            id="aiden"
            title="AIDEN SYMBIOSIS"
            description="Quantum Intelligence System"
            iconName="Cpu"
            href="/aiden"
            badges={[
              { iconName: "TrendingUp", label: "Auto-Evolution" },
              { iconName: "Shield", label: "Immune System" },
            ]}
            buttonText="System Status"
            accentColor="--secondary"
          />

          <AdaptiveCard
            id="quantum"
            title="Quantum Computing"
            description="IBM Hardware Integration"
            iconName="Atom"
            href="/quantum"
            badges={[
              { iconName: "Cpu", label: "572+ Qubits" },
              { iconName: "Zap", label: "Real Hardware" },
            ]}
            buttonText="Execute Circuits"
            accentColor="--magnetic-blue"
          />

          <AdaptiveCard
            id="lambda-phi-console"
            title="ΛΦ Console"
            description="Holographic Control Plane"
            iconName="Eye"
            href="/lambda-phi-runtime"
            badges={[
              { iconName: "Sparkles", label: "Ricci Flow" },
              { iconName: "Atom", label: "Planck Scale" },
            ]}
            buttonText="Enter Console"
            accentColor="--lambda-phi"
          />

          <AdaptiveCard
            id="rcirs"
            title="RCIRS"
            description="Cybersecurity Immune System"
            iconName="Shield"
            href="/rcirs"
            badges={[
              { iconName: "Shield", label: "ΔΛΦ Tracking" },
              { iconName: "Activity", label: "Auto-Response" },
            ]}
            buttonText="Monitor Threats"
            accentColor="--magnetic-blue"
          />

          <AdaptiveCard
            id="ibm-royal-cyber"
            title="IBM × Royal Cyber"
            description="Enterprise Quantum Integration"
            iconName="Zap"
            href="/ibm-royal-cyber"
            badges={[
              { iconName: "Cpu", label: "VQE/QPE/QAOA" },
              { iconName: "Sparkles", label: "HHL/Grover" },
            ]}
            buttonText="Enter Quantum Realm"
            accentColor="--primary"
          />

          <AdaptiveCard
            id="quantum-swarm"
            title="Quantum Swarm"
            description="Mass Entanglement Protocol"
            iconName="Rocket"
            href="/quantum-swarm"
            badges={[
              { iconName: "Network", label: "Swarm Intelligence" },
              { iconName: "Activity", label: "NQIE Verification" },
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
