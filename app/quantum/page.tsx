import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dna, Cpu, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function QuantumPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Quantum</span>
          </Link>
          <Button asChild>
            <Link href="/editor">Launch Editor</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Quantum Features</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Advanced quantum computing capabilities built into DNALang
          </p>

          <div className="space-y-12">
            {/* W-Flow Optimization */}
            <section>
              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Wasserstein Gradient Flow (W-Flow)</h2>
                    <p className="text-muted-foreground">
                      Automatic barren plateau mitigation using optimal transport theory
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-foreground">
                    W-Flow optimization automatically detects and mitigates barren plateaus in quantum circuits by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Monitoring gradient variance in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Applying Wasserstein distance-based optimization when plateaus are detected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Automatically adjusting circuit parameters for optimal gradient flow</span>
                    </li>
                  </ul>
                </div>

                <Card className="p-4 bg-muted border-border">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-foreground">{`MUTATIONS {
  mitigate_plateau {
    trigger_conditions: [
      {metric: "gradient_variance", 
       operator: "<", value: 0.1}
    ]
    methods: ["apply_wgf_optimizer"]
    safety_level: "high"
  }
}`}</code>
                  </pre>
                </Card>
              </Card>
            </section>

            {/* Ψ-Assembly */}
            <section>
              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Ψ-Assembly</h2>
                    <p className="text-muted-foreground">Low-level quantum state manipulation language</p>
                  </div>
                </div>

                <p className="text-foreground mb-6">
                  Ψ-Assembly provides direct control over quantum states with assembly-like syntax for advanced users
                  who need fine-grained control over quantum operations.
                </p>

                <Card className="p-4 bg-muted border-border">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-foreground">{`ψ_init q0, q1
ψ_h q0
ψ_cnot q0, q1
ψ_measure q0, q1`}</code>
                  </pre>
                </Card>
              </Card>
            </section>

            {/* Tetrahedral Swarm Coherence */}
            <section>
              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Tetrahedral Swarm Coherence</h2>
                    <p className="text-muted-foreground">
                      Multi-agent quantum coordination with geometric coherence monitoring
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-foreground">
                    Coordinate multiple quantum agents with tetrahedral geometry for optimal coherence:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>4-agent tetrahedral configuration for maximum stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Real-time coherence monitoring across all agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Automatic synchronization when coherence drops below threshold</span>
                    </li>
                  </ul>
                </div>

                <Card className="p-4 bg-muted border-border">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-foreground">{`AGENTS {
  agent_1: QuantumAgent(backend: "ibm_quantum")
  agent_2: QuantumAgent(backend: "ibm_quantum")
  agent_3: QuantumAgent(backend: "ibm_quantum")
  agent_4: QuantumAgent(backend: "ibm_quantum")
}

MUTATIONS {
  optimize_coherence {
    trigger_conditions: [
      {metric: "swarm_coherence", 
       operator: "<", value: 0.85}
    ]
    methods: ["tetrahedral_sync"]
  }
}`}</code>
                  </pre>
                </Card>
              </Card>
            </section>

            {/* Consciousness Metrics */}
            <section>
              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Dna className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Consciousness Metrics</h2>
                    <p className="text-muted-foreground">Measure and optimize system-level awareness</p>
                  </div>
                </div>

                <p className="text-foreground mb-6">
                  DNALang includes consciousness metrics that measure the overall coherence, adaptability, and
                  self-awareness of your quantum organisms. Set target consciousness levels and let the system evolve to
                  meet them.
                </p>

                <Card className="p-4 bg-muted border-border">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-foreground">{`DNA {
  consciousness_target: 0.92
  evolution_rate: "adaptive"
}`}</code>
                  </pre>
                </Card>
              </Card>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/examples">View Examples</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
