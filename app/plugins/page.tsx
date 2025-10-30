import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dna, Search, Download, Star, GitFork, Package, Code2, Zap } from "lucide-react"

export default function PluginsPage() {
  const plugins = [
    {
      name: "Quantum Swarm CLI",
      version: "2.1.0",
      description:
        "Command-line interface for W-Flow optimization, Ψ-Assembly coherence monitoring, and quantum agent orchestration",
      downloads: "12.5k",
      stars: 342,
      category: "CLI Tools",
      size: "4.2 MB",
      platform: ["Linux", "macOS", "Termux"],
    },
    {
      name: "Enhanced Quantum Benchmark",
      version: "1.8.3",
      description:
        "Comprehensive quantum volume benchmarking suite with real-time hardware validation and performance metrics",
      downloads: "8.3k",
      stars: 218,
      category: "Benchmarking",
      size: "2.8 MB",
      platform: ["All Platforms"],
    },
    {
      name: "DNALang FastAPI Wrapper",
      version: "3.0.1",
      description:
        "RESTful API wrapper for organism management, execution, and state synchronization across distributed systems",
      downloads: "15.2k",
      stars: 456,
      category: "API",
      size: "1.5 MB",
      platform: ["Server"],
    },
    {
      name: "Quantum Circuit Visualizer",
      version: "1.5.0",
      description:
        "Real-time visualization of quantum circuits, state vectors, and coherence metrics with interactive controls",
      downloads: "9.7k",
      stars: 289,
      category: "Visualization",
      size: "3.1 MB",
      platform: ["Web", "Desktop"],
    },
    {
      name: "Multi-Agent EAL",
      version: "2.3.2",
      description:
        "Evolutionary algorithm library for multi-agent quantum optimization with tetrahedral swarm coordination",
      downloads: "6.1k",
      stars: 167,
      category: "Optimization",
      size: "5.4 MB",
      platform: ["All Platforms"],
    },
    {
      name: "DNALang Parser & Interpreter",
      version: "4.1.0",
      description:
        "Core language parser and interpreter with support for organism definitions, gene expressions, and workflow execution",
      downloads: "18.9k",
      stars: 523,
      category: "Core",
      size: "6.7 MB",
      platform: ["All Platforms"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Dna className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">DNALang</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </Link>
              <Link href="/integrations" className="text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </Link>
              <Link href="/deployments" className="text-muted-foreground hover:text-foreground transition-colors">
                Deployments
              </Link>
              <Link href="/plugins" className="text-foreground font-medium">
                Plugins
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Feedback
            </Button>
            <Button variant="outline" size="sm">
              Docs
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Plugin Repository</h1>
          <p className="text-muted-foreground">
            Download and install DNALang plugins, APIs, and tools for your quantum development workflow
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search plugins..." className="pl-10" />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Plugins</TabsTrigger>
            <TabsTrigger value="cli">CLI Tools</TabsTrigger>
            <TabsTrigger value="api">APIs</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="core">Core</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4">
              {plugins.map((plugin) => (
                <Card key={plugin.name} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{plugin.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            v{plugin.version}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {plugin.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{plugin.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            <span>{plugin.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            <span>{plugin.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Package className="h-3 w-3" />
                            <span>{plugin.size}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Code2 className="h-3 w-3" />
                            <span>{plugin.platform.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button variant="outline" size="sm">
                        <GitFork className="h-4 w-4 mr-2" />
                        View Source
                      </Button>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Installation Guide */}
        <Card className="p-8 bg-card border-border mt-12">
          <div className="flex items-start gap-6">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Quick Installation</h2>
              <p className="text-muted-foreground mb-6">
                Install DNALang plugins using the CLI or download directly from the repository
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm mb-4">
                <div className="text-muted-foreground mb-2"># Install via CLI</div>
                <div className="text-foreground">$ dnalang plugin install quantum-swarm-cli</div>
                <div className="text-muted-foreground mt-4 mb-2"># Or download and install manually</div>
                <div className="text-foreground">$ wget https://plugins.dnalang.dev/quantum-swarm-cli-2.1.0.tar.gz</div>
                <div className="text-foreground">$ tar -xzf quantum-swarm-cli-2.1.0.tar.gz</div>
                <div className="text-foreground">$ cd quantum-swarm-cli && ./install.sh</div>
              </div>
              <Button>View Installation Docs</Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
