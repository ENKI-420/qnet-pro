import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dna, CheckCircle2, Clock, AlertCircle, Loader2, ExternalLink, GitBranch } from "lucide-react"

export default function DeploymentsPage() {
  const deployments = [
    {
      id: "dpl_7x9k2m",
      organism: "QuantumOptimizer",
      status: "ready",
      environment: "Production",
      branch: "main",
      commit: "a3f8c2d",
      duration: "2m 34s",
      timestamp: "2 minutes ago",
      url: "https://quantum-optimizer.dnalang.app",
    },
    {
      id: "dpl_5n3p1q",
      organism: "SwarmCoordinator",
      status: "building",
      environment: "Preview",
      branch: "feature/coherence",
      commit: "b7e1f9a",
      duration: "1m 12s",
      timestamp: "5 minutes ago",
      url: null,
    },
    {
      id: "dpl_8k4m2r",
      organism: "BenchmarkEngine",
      status: "ready",
      environment: "Production",
      branch: "main",
      commit: "c9d2a4b",
      duration: "3m 45s",
      timestamp: "1 hour ago",
      url: "https://benchmark.dnalang.app",
    },
    {
      id: "dpl_2j7n5t",
      organism: "QuantumVisualizer",
      status: "error",
      environment: "Preview",
      branch: "dev",
      commit: "d1e3b8c",
      duration: "45s",
      timestamp: "3 hours ago",
      url: null,
    },
    {
      id: "dpl_9m1k6p",
      organism: "OrganismExecutor",
      status: "ready",
      environment: "Production",
      branch: "main",
      commit: "e5f7c2a",
      duration: "2m 18s",
      timestamp: "1 day ago",
      url: "https://executor.dnalang.app",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ready":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "building":
        return <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      ready: "default",
      building: "secondary",
      error: "destructive",
    }
    return (
      <Badge variant={variants[status] || "outline"} className="capitalize">
        {status}
      </Badge>
    )
  }

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
              <Link href="/deployments" className="text-foreground font-medium">
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
          <div>
            <h1 className="text-4xl font-bold mb-2">Deployments</h1>
            <p className="text-muted-foreground">Monitor and manage your DNALang organism deployments in real-time</p>
          </div>
          <Button>
            <GitBranch className="h-4 w-4 mr-2" />
            New Deployment
          </Button>
        </div>

        {/* Deployments List */}
        <div className="space-y-3">
          {deployments.map((deployment) => (
            <Card key={deployment.id} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">{getStatusIcon(deployment.status)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{deployment.organism}</h3>
                      {getStatusBadge(deployment.status)}
                      <Badge variant="outline" className="text-xs">
                        {deployment.environment}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <GitBranch className="h-3 w-3" />
                        <span>{deployment.branch}</span>
                      </div>
                      <div>
                        <span className="font-mono">{deployment.commit}</span>
                      </div>
                      <div>
                        <Clock className="h-3 w-3 inline mr-1" />
                        {deployment.duration}
                      </div>
                      <div>{deployment.timestamp}</div>
                    </div>
                    {deployment.url && (
                      <a
                        href={deployment.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {deployment.url}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {deployment.status === "error" && (
                      <div className="mt-2 text-sm text-red-500">
                        Build failed: Module not found - Cannot resolve '@radix-ui/react-tabs'
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    View Logs
                  </Button>
                  {deployment.status === "ready" && (
                    <Button variant="outline" size="sm">
                      Visit
                    </Button>
                  )}
                  {deployment.status === "error" && (
                    <Button size="sm" variant="destructive">
                      Retry
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Deployment Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 bg-card border-border">
            <div className="text-3xl font-bold mb-1">24</div>
            <div className="text-sm text-muted-foreground">Total Deployments</div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="text-3xl font-bold mb-1 text-green-500">18</div>
            <div className="text-sm text-muted-foreground">Successful</div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="text-3xl font-bold mb-1 text-blue-500">3</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </Card>
          <Card className="p-6 bg-card border-border">
            <div className="text-3xl font-bold mb-1 text-red-500">3</div>
            <div className="text-sm text-muted-foreground">Failed</div>
          </Card>
        </div>
      </main>
    </div>
  )
}
