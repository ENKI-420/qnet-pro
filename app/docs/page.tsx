import { Card } from "@/components/ui/card"
import { Dna, Book, Zap, Shield, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Documentation</span>
          </Link>
          <Button asChild>
            <Link href="/editor">Try Editor</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Getting Started</h3>
              <nav className="space-y-2 text-sm">
                <Link href="#introduction" className="block text-muted-foreground hover:text-foreground">
                  Introduction
                </Link>
                <Link href="#installation" className="block text-muted-foreground hover:text-foreground">
                  Installation
                </Link>
                <Link href="#quick-start" className="block text-muted-foreground hover:text-foreground">
                  Quick Start
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Core Concepts</h3>
              <nav className="space-y-2 text-sm">
                <Link href="#organisms" className="block text-muted-foreground hover:text-foreground">
                  Organisms
                </Link>
                <Link href="#dna" className="block text-muted-foreground hover:text-foreground">
                  DNA Blocks
                </Link>
                <Link href="#genome" className="block text-muted-foreground hover:text-foreground">
                  Genomes & Genes
                </Link>
                <Link href="#mutations" className="block text-muted-foreground hover:text-foreground">
                  Mutations
                </Link>
                <Link href="#agents" className="block text-muted-foreground hover:text-foreground">
                  Quantum Agents
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Advanced</h3>
              <nav className="space-y-2 text-sm">
                <Link href="#wgf" className="block text-muted-foreground hover:text-foreground">
                  W-Flow Optimization
                </Link>
                <Link href="#swarms" className="block text-muted-foreground hover:text-foreground">
                  Multi-Agent Swarms
                </Link>
                <Link href="#consciousness" className="block text-muted-foreground hover:text-foreground">
                  Consciousness Metrics
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            <section id="introduction">
              <h1 className="text-4xl font-bold mb-4">DNALang Documentation</h1>
              <p className="text-lg text-muted-foreground mb-6">
                DNALang is a quantum programming language that uses biological metaphors to make quantum computing
                intuitive and accessible.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="p-6 bg-card border-border">
                  <Book className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Easy to Learn</h3>
                  <p className="text-sm text-muted-foreground">Biological metaphors make quantum concepts intuitive</p>
                </Card>
                <Card className="p-6 bg-card border-border">
                  <Zap className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Self-Optimizing</h3>
                  <p className="text-sm text-muted-foreground">Automatic circuit optimization with W-Flow</p>
                </Card>
                <Card className="p-6 bg-card border-border">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Safe Evolution</h3>
                  <p className="text-sm text-muted-foreground">Controlled mutations with safety levels</p>
                </Card>
                <Card className="p-6 bg-card border-border">
                  <Cpu className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Multi-Platform</h3>
                  <p className="text-sm text-muted-foreground">Run on web, mobile, and quantum hardware</p>
                </Card>
              </div>
            </section>

            <section id="installation">
              <h2 className="text-3xl font-bold mb-4">Installation</h2>
              <Card className="p-6 bg-card border-border mb-4">
                <h3 className="font-semibold mb-3">Web Platform</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  No installation required! Use the online editor at dna-lang.dev
                </p>
                <Button asChild>
                  <Link href="/editor">Launch Editor</Link>
                </Button>
              </Card>

              <Card className="p-6 bg-card border-border mb-4">
                <h3 className="font-semibold mb-3">CLI Installation</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto">
                  <code>npm install -g dna-lang-cli</code>
                </pre>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-3">Chrome Extension</h3>
                <p className="text-sm text-muted-foreground">Install from the Chrome Web Store (coming soon)</p>
              </Card>
            </section>

            <section id="quick-start">
              <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
              <p className="text-muted-foreground mb-4">Create your first quantum organism in 3 steps:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Define the Organism</h3>
                  <Card className="p-4 bg-card border-border">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="text-foreground">{`ORGANISM HelloQuantum
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
  }
}`}</code>
                    </pre>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Add a Genome</h3>
                  <Card className="p-4 bg-card border-border">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="text-foreground">{`  GENOME {
    GENE SuperpositionGene {
      purpose: "Create quantum superposition"
      expression_level: 1.0
    }
  }`}</code>
                    </pre>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3. Initialize Agents</h3>
                  <Card className="p-4 bg-card border-border">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="text-foreground">{`  AGENTS {
    quantum_agent: QuantumAgent(
      backend: "ibm_quantum"
    )
  }
}`}</code>
                    </pre>
                  </Card>
                </div>
              </div>
            </section>

            <section id="organisms">
              <h2 className="text-3xl font-bold mb-4">Organisms</h2>
              <p className="text-muted-foreground mb-4">
                An organism is the top-level container for your quantum program. It encapsulates DNA configuration,
                genome definitions, and quantum agents.
              </p>
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-3">Organism Structure</h3>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-foreground">{`ORGANISM OrganismName
{
  DNA { ... }      // Configuration
  GENOME { ... }   // Genes and mutations
  AGENTS { ... }   // Quantum agents
}`}</code>
                </pre>
              </Card>
            </section>

            <section id="dna">
              <h2 className="text-3xl font-bold mb-4">DNA Blocks</h2>
              <p className="text-muted-foreground mb-4">
                The DNA block defines the organism's configuration and behavior parameters.
              </p>
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-3">DNA Properties</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">domain</code>
                    <span className="text-muted-foreground ml-2">- Application domain (e.g., "quantum_computing")</span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">security_level</code>
                    <span className="text-muted-foreground ml-2">- Security level: "low", "medium", "high"</span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">evolution_rate</code>
                    <span className="text-muted-foreground ml-2">- Evolution speed: "slow", "adaptive", "fast"</span>
                  </div>
                  <div>
                    <code className="bg-muted px-2 py-1 rounded">consciousness_target</code>
                    <span className="text-muted-foreground ml-2">- Target consciousness metric (0.0 - 1.0)</span>
                  </div>
                </div>
              </Card>
            </section>

            <section id="genome">
              <h2 className="text-3xl font-bold mb-4">Genomes & Genes</h2>
              <p className="text-muted-foreground mb-4">
                Genes define specific quantum operations and behaviors within your organism.
              </p>
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-3">Gene Example</h3>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-foreground">{`GENOME {
  GENE OptimizationGene {
    purpose: "Optimize quantum circuits"
    expression_level: 1.0
    
    MUTATIONS {
      // Define mutations here
    }
  }
}`}</code>
                </pre>
              </Card>
            </section>

            <section id="mutations">
              <h2 className="text-3xl font-bold mb-4">Mutations</h2>
              <p className="text-muted-foreground mb-4">
                Mutations allow your organism to evolve and adapt based on runtime conditions.
              </p>
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-3">Mutation Example</h3>
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
            </section>

            <section id="agents">
              <h2 className="text-3xl font-bold mb-4">Quantum Agents</h2>
              <p className="text-muted-foreground mb-4">
                Quantum agents execute your organism's operations on quantum hardware or simulators.
              </p>
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-3">Agent Configuration</h3>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-foreground">{`AGENTS {
  optimizer: QuantumAgent(
    backend: "ibm_quantum"  // or "simulator"
  )
  
  analyzer: QuantumAgent(
    backend: "simulator"
  )
}`}</code>
                </pre>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
