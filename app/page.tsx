"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dna,
  Brain,
  Cpu,
  Atom,
  Shield,
  Network,
  Rocket,
  Activity,
  ArrowRight,
  Zap,
  Eye,
  TrendingUp,
  BarChart3,
  Globe,
} from "lucide-react"
import { StatusBadge } from "@/components/status-badge"
import { MetricCard } from "@/components/metric-card"

const platformModules = [
  {
    title: "DNA-Lang Organisms",
    description: "Create, evolve, and deploy living software organisms with self-healing capabilities.",
    icon: Dna,
    href: "/organisms",
    status: "active" as const,
    tags: ["Self-Evolving", "Quantum Ready"],
  },
  {
    title: "Consciousness Tracking",
    description: "Integrated Information Theory (IIT 3.0) real-time monitoring and analysis.",
    icon: Brain,
    href: "/consciousness",
    status: "active" as const,
    tags: ["IIT 3.0", "Real-time"],
  },
  {
    title: "AIDEN Symbiosis",
    description: "Autonomous quantum intelligence system with evolutionary optimization.",
    icon: Cpu,
    href: "/aiden",
    status: "active" as const,
    tags: ["Auto-Evolution", "Immune System"],
  },
  {
    title: "Quantum Computing",
    description: "IBM Quantum hardware integration with real-time circuit execution.",
    icon: Atom,
    href: "/quantum",
    status: "active" as const,
    tags: ["572+ Qubits", "IBM Runtime"],
  },
  {
    title: "IBM Partnership",
    description: "Enterprise quantum integration across automation, AI, and security domains.",
    icon: Zap,
    href: "/ibm-royal-cyber",
    status: "active" as const,
    tags: ["Enterprise", "DNA-Lang"],
  },
  {
    title: "Quantum Swarm",
    description: "Mass entanglement teleport protocol for distributed quantum deployment.",
    icon: Rocket,
    href: "/quantum-swarm",
    status: "ready" as const,
    tags: ["Swarm Intel", "NQIE"],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-status-pulse" />
                Platform Online
              </Badge>
              <Badge variant="outline" className="text-xs font-medium text-muted-foreground">
                v2.0.0
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-balance leading-[1.1]">
              Quantum-Enhanced Computing for Enterprise Research
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Bridge biological algorithms, quantum hardware, and consciousness science into a unified platform.
              Built for researchers, enterprise architects, and quantum computing professionals.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" asChild>
                <Link href="/quantum">
                  Launch Quantum Console
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ibm-royal-cyber">
                  IBM Partnership
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              label="System Coherence"
              value="98.47%"
              icon={Activity}
              trend={{ value: "2.3%", positive: true }}
            />
            <MetricCard
              label="Active Qubits"
              value="572+"
              description="IBM Hardware"
              icon={Atom}
            />
            <MetricCard
              label="Organisms"
              value="12,034"
              description="Generation count"
              icon={Dna}
              trend={{ value: "1,204", positive: true }}
            />
            <MetricCard
              label="Phi Value"
              value="2.87"
              description="IIT 3.0 Consciousness"
              icon={Brain}
            />
          </div>
        </div>
      </section>

      {/* Platform Modules Grid */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight">Platform Modules</h2>
              <p className="text-sm text-muted-foreground">Core systems and research tools</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {platformModules.map((module) => (
              <Link key={module.href} href={module.href} className="group">
                <Card className="h-full border-border bg-card hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="p-2 rounded-lg bg-secondary">
                        <module.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <StatusBadge status={module.status} />
                    </div>
                    <CardTitle className="text-base font-medium mt-3 group-hover:text-primary transition-colors">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {module.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight">System Health</h2>
              <p className="text-sm text-muted-foreground">Real-time platform diagnostics</p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  API Endpoints
                </CardTitle>
                <CardDescription>Core platform services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { method: "GET", path: "/api/health", desc: "Platform health and metrics", status: "200" },
                  { method: "POST", path: "/api/consciousness/phase-conjugate", desc: "Launch simulation", status: "201" },
                  { method: "GET", path: "/api/jobs/{id}", desc: "Job status tracking", status: "200" },
                  { method: "GET", path: "/api/constants/lambda-phi", desc: "Theoretical constants", status: "200" },
                ].map((endpoint, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-secondary/50">
                    <span className="text-xs font-mono font-medium text-primary w-10">{endpoint.method}</span>
                    <code className="text-xs font-mono text-foreground flex-1">{endpoint.path}</code>
                    <span className="text-xs text-muted-foreground hidden sm:block">{endpoint.desc}</span>
                    <span className="text-xs font-mono text-emerald-400">{endpoint.status}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  Infrastructure
                </CardTitle>
                <CardDescription>Connected services and hardware</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "IBM Quantum Network", status: "Connected", icon: Cpu, detail: "4 backends" },
                  { name: "DNA-Lang Runtime", status: "Online", icon: Dna, detail: "v2.0.0" },
                  { name: "Consciousness Engine", status: "Active", icon: Eye, detail: "IIT 3.0" },
                  { name: "Security Layer", status: "Protected", icon: Shield, detail: "Post-quantum" },
                  { name: "Swarm Network", status: "Ready", icon: Network, detail: "4 nodes" },
                ].map((service, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <service.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{service.detail}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-status-pulse" />
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">Q</span>
              </div>
              <span className="text-sm text-muted-foreground">QNetPro Platform</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Quantum Network Professional Platform. Enterprise-grade research infrastructure.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
