import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dna, Search, Cpu, Database, Zap, GitBranch, Activity, Package } from "lucide-react"

export default function IntegrationsPage() {
  const categories = [
    "All Categories",
    "Quantum Computing",
    "Analytics",
    "Authentication",
    "Deployment",
    "Monitoring",
    "Storage",
    "AI/ML",
  ]

  const nativeIntegrations = [
    {
      name: "Quantum Swarm CLI",
      description: "Execute W-Flow, Ψ-Assembly, and coherence monitoring",
      icon: Cpu,
      status: "installed",
      category: "Quantum Computing",
    },
    {
      name: "Benchmark Suite",
      description: "Quantum volume and hardware validation benchmarks",
      icon: Activity,
      status: "installed",
      category: "Quantum Computing",
    },
    {
      name: "FastAPI Wrapper",
      description: "RESTful API for organism management and execution",
      icon: Zap,
      status: "available",
      category: "Deployment",
    },
    {
      name: "DNALang Visualizer",
      description: "Real-time quantum circuit and state visualization",
      icon: GitBranch,
      status: "available",
      category: "Analytics",
    },
  ]

  const connectableAccounts = [
    {
      name: "IBM Quantum",
      description: "Access real quantum hardware and cloud simulators",
      icon: Database,
      status: "manage",
      badge: "Pro / Enterprise",
    },
    {
      name: "Qiskit Runtime",
      description: "Optimized quantum circuit execution service",
      icon: Zap,
      status: "add",
      badge: "Pro / Enterprise",
    },
    {
      name: "Supabase",
      description: "Store organism state and execution results",
      icon: Database,
      status: "manage",
      badge: "Pro / Enterprise",
    },
    {
      name: "Vercel Blob",
      description: "Store quantum circuit artifacts and logs",
      icon: Package,
      status: "add",
      badge: "Pro / Enterprise",
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
              <Link href="/integrations" className="text-foreground font-medium">
                Integrations
              </Link>
              <Link href="/deployments" className="text-muted-foreground hover:text-foreground transition-colors">
                Deployments
              </Link>
              <Link href="/plugins" className="text-muted-foreground hover:text-foreground transition-colors">
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Marketplace</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline">Installed Integrations</Button>
            <Button variant="outline">Integrations Console</Button>
          </div>
        </div>

        {/* Search and Categories */}
        <div className="flex gap-8 mb-12">
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                    index === 0
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </aside>

          <div className="flex-1">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search integration..." className="pl-10" />
            </div>

            {/* Native Integrations */}
            <section className="mb-12">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Native Integrations</h2>
                <p className="text-sm text-muted-foreground">
                  A collection of first-party services you can easily add to your DNALang project.{" "}
                  <Link href="/docs/integrations" className="text-primary hover:underline">
                    Learn more →
                  </Link>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {nativeIntegrations.map((integration) => (
                  <Card
                    key={integration.name}
                    className="p-6 bg-card border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <integration.icon className="h-6 w-6 text-primary" />
                      </div>
                      {integration.status === "installed" ? (
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      ) : (
                        <Button size="sm">Install</Button>
                      )}
                    </div>
                    <h3 className="font-semibold mb-1">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{integration.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {integration.category}
                    </Badge>
                  </Card>
                ))}
              </div>
            </section>

            {/* Connectable Accounts */}
            <section>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Connectable Accounts</h2>
                <p className="text-sm text-muted-foreground">
                  A collection of third-party services you can add to your DNALang project.{" "}
                  <Link href="/docs/connectable" className="text-primary hover:underline">
                    Learn more →
                  </Link>
                </p>
              </div>

              <div className="space-y-3">
                {connectableAccounts.map((account) => (
                  <Card
                    key={account.name}
                    className="p-4 bg-card border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <account.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{account.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {account.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{account.description}</p>
                        </div>
                      </div>
                      {account.status === "manage" ? (
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      ) : (
                        <Button size="sm">Add</Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Become a Provider */}
            <Card className="mt-12 p-8 bg-card border-border text-center">
              <Database className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Join the DNALang Marketplace</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Reach developers in the DNALang ecosystem, and offer your solution to millions of users.
              </p>
              <Button>Become a Provider</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
