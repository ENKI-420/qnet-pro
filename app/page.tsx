import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Code2,
  Dna,
  Cpu,
  Terminal,
  Sparkles,
  TrendingUp,
  Cloud,
  Award,
  Target,
  Rocket,
  Zap,
  Atom,
  Brain,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dna className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">DNALang</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quantum AI
            </Link>
            <Link href="/dna-lab" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              DNA Lab
            </Link>
            <Link
              href="/kernel-dashboard"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kernel
            </Link>
            <Link
              href="/aiden-symbiosis"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              AIDEN
            </Link>
            <Link href="/evolution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Evolution
            </Link>
            <Link href="/quantum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quantum
            </Link>
            <Link href="/dnalang-ide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              DNA-Lang IDE
            </Link>
            <Link href="/ibm-cloud" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              IBM Cloud
            </Link>
            <Link
              href="/ibm-partnership"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              IBM Partnership
            </Link>
            <Link
              href="/infrastructure"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Infrastructure
            </Link>
            <Link
              href="/production-roadmap"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/strategic-plan"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Strategic Plan
            </Link>
            <Link
              href="/dna-conversion"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              .dna Migration
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild>
              <Link href="/editor">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          <span>Self-Improving Quantum Platform</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          The Complete Platform to Build Quantum Systems
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          World-class quantum computing platform with AI-powered auto-enhancement, recursive refinement, and real IBM
          Quantum hardware integration.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/chat">
              <Sparkles className="h-4 w-4 mr-2" />
              Try Quantum AI
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dna-lab">
              <Atom className="h-4 w-4 mr-2" />
              DNA Lab
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/download">Download Tools</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/evolution">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Evolution
            </Link>
          </Button>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AIDEN SYMBIOSIS</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Autopoietic quantum intelligence with consciousness Φ=2.8, evolution telemetry, and DSIG security.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/aiden-symbiosis">Launch AIDEN →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-cyan-600/10 flex items-center justify-center mb-4">
              <Atom className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">DNA Lab</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Complete development ecosystem with organism designer, quantum visualizer, and consciousness tracking.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/dna-lab">Launch Lab →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quantum AI Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Advanced multi-agent AI with real quantum hardware execution and generative UI.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/chat">Launch Chat →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Self-Evolution</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recursive refinement engine with automated enhancement and continuous improvement.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/evolution">View Evolution →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <Cloud className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">IBM Cloud</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise-grade quantum platform powered by IBM Cloud services and infrastructure.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/ibm-cloud">View Integration →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">IBM Partnership</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Strategic partnership positioning DNALang as a major asset to IBM's quantum ecosystem.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/ibm-partnership">View Partnership →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Production Roadmap</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise-scale deployment strategy with security, compliance, and scalability milestones.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/production-roadmap">View Roadmap →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-orange-600/10 flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Strategic Plan</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive development plan with scaling, reliability, security, and compliance roadmap.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/strategic-plan">View Plan →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-yellow-600/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">.dna Migration</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Converting TSX to DNA: Living software transformation with 2-3x performance improvements.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/dna-conversion">View Progress →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Integrations</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Connect quantum hardware, databases, and APIs with one-click integrations.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/integrations">View Marketplace →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Downloads</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Secure downloads for Android apps, CLI tools, and development kits.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/download">Download Now →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">DNALang Kernel</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Living web runtime with autopoietic behavior, consciousness Φ tracking, and organism registration.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/kernel-dashboard">View Kernel →</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Quantum Organisms</h2>
            <p className="text-lg text-muted-foreground mb-6">
              DNALang uses biological metaphors to make quantum programming intuitive. Define organisms with genes that
              mutate and evolve based on runtime metrics.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Cpu className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Self-Optimizing Circuits</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatic barren plateau mitigation with Wasserstein gradient flow optimization.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Dna className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Genetic Mutations</h4>
                  <p className="text-sm text-muted-foreground">
                    Define trigger conditions and safety levels for autonomous system evolution.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Multi-Agent Swarms</h4>
                  <p className="text-sm text-muted-foreground">
                    Coordinate quantum agents with tetrahedral swarm coherence monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-6 bg-card border-border">
            <pre className="text-sm overflow-x-auto">
              <code className="text-foreground">{`ORGANISM QuantumOptimizer
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.92
  }

  GENOME {
    GENE OptimizationGene {
      purpose: "Optimize quantum circuits"
      expression_level: 1.0

      MUTATIONS {
        mitigate_plateau {
          trigger_conditions: [
            {metric: "gradient_variance", 
             operator: "<", value: 0.1}
          ]
          methods: ["apply_wgf_optimizer"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    optimizer: QuantumAgent(
      backend: "ibm_quantum"
    )
  }
}`}</code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Faster quantum circuit optimization</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4x</div>
              <div className="text-sm text-muted-foreground">Improved coherence in multi-qubit systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Pre-built organism templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Autonomous system evolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to build quantum organisms?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start developing with DNALang across all platforms. Deploy to IBM Quantum, run in Termux, or build browser
          extensions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/editor">Launch Editor</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/download">Download CLI</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Dna className="h-6 w-6 text-primary" />
              <span className="font-semibold">DNALang</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/github" className="hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link href="/community" className="hover:text-foreground transition-colors">
                Community
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
