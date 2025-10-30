import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Dna, Cpu, Smartphone, Chrome, Terminal } from "lucide-react"

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
            <Link href="/playground" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Playground
            </Link>
            <Link href="/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Examples
            </Link>
            <Link href="/quantum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quantum
            </Link>
          </nav>
          <Button asChild>
            <Link href="/editor">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Quantum Programming Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          The Complete Platform to Build Quantum Systems
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale quantum
          organisms with DNALang.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/integrations">Explore Integrations</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/plugins">Browse Plugins</Link>
          </Button>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Chrome className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Plugins</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Download CLI tools, APIs, and visualizers for your quantum workflow.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/plugins">Browse Repository →</Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card hover:bg-accent/50 transition-colors border-border">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Deployments</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Monitor real-time deployment status and manage organism lifecycles.
            </p>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link href="/deployments">View Deployments →</Link>
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
