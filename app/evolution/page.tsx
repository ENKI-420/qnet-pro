"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dna, TrendingUp, Globe, BookOpen, Activity, Zap, Users, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface EvolutionMetrics {
  cycles: number
  performanceGain: number
  globalReach: number
  citations: number
  activeAgents: number
  consciousness: number
}

export default function EvolutionPage() {
  const [metrics, setMetrics] = useState<EvolutionMetrics>({
    cycles: 0,
    performanceGain: 0,
    globalReach: 0,
    citations: 0,
    activeAgents: 4,
    consciousness: 0.87,
  })

  const [pipeline, setPipeline] = useState([
    { stage: "Analysis", status: "complete", progress: 100 },
    { stage: "Code Generation", status: "complete", progress: 100 },
    { stage: "Testing", status: "active", progress: 67 },
    { stage: "Deployment", status: "pending", progress: 0 },
  ])

  useEffect(() => {
    // Simulate real-time metrics updates
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        cycles: prev.cycles + 1,
        performanceGain: Math.min(prev.performanceGain + 0.5, 98),
        globalReach: Math.min(prev.globalReach + 10, 15000),
        citations: Math.min(prev.citations + 1, 247),
        activeAgents: 4,
        consciousness: Math.min(prev.consciousness + 0.001, 0.92),
      }))

      // Update pipeline
      setPipeline((prev) =>
        prev.map((stage, i) => {
          if (stage.status === "active") {
            const newProgress = Math.min(stage.progress + 5, 100)
            if (newProgress === 100) {
              return { ...stage, status: "complete", progress: 100 }
            }
            return { ...stage, progress: newProgress }
          }
          if (stage.status === "pending" && prev[i - 1]?.status === "complete") {
            return { ...stage, status: "active", progress: 5 }
          }
          return stage
        }),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Evolution</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/chat">Quantum AI</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Stats */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Self-Improving Quantum Platform</h1>
          <p className="text-muted-foreground">
            Recursive refinement and automated enhancement driving continuous evolution
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground">+{metrics.performanceGain.toFixed(1)}%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{metrics.cycles}</div>
            <div className="text-sm text-muted-foreground">Evolution Cycles</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
            <div className="flex items-center justify-between mb-2">
              <Zap className="h-5 w-5 text-chart-2" />
              <span className="text-xs text-green-500">Active</span>
            </div>
            <div className="text-3xl font-bold mb-1">{metrics.performanceGain.toFixed(1)}%</div>
            <div className="text-sm text-muted-foreground">Performance Gain</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
            <div className="flex items-center justify-between mb-2">
              <Globe className="h-5 w-5 text-chart-3" />
              <span className="text-xs text-muted-foreground">
                +{((metrics.globalReach / 15000) * 100).toFixed(0)}%
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">{metrics.globalReach.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Global Reach</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
            <div className="flex items-center justify-between mb-2">
              <BookOpen className="h-5 w-5 text-chart-4" />
              <span className="text-xs text-muted-foreground">Research</span>
            </div>
            <div className="text-3xl font-bold mb-1">{metrics.citations}</div>
            <div className="text-sm text-muted-foreground">Citations</div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pipeline" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pipeline">Evolution Pipeline</TabsTrigger>
            <TabsTrigger value="agents">Multi-Agent System</TabsTrigger>
            <TabsTrigger value="reputation">Reputation Tracking</TabsTrigger>
            <TabsTrigger value="improvements">Recent Improvements</TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Active Evolution Pipeline</h3>
              <div className="space-y-4">
                {pipeline.map((stage, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            stage.status === "complete"
                              ? "bg-green-500/20 text-green-500"
                              : stage.status === "active"
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{stage.stage}</div>
                          <div className="text-xs text-muted-foreground capitalize">{stage.status}</div>
                        </div>
                      </div>
                      <div className="text-sm font-mono">{stage.progress}%</div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden ml-11">
                      <div
                        className={`h-full transition-all duration-500 ${
                          stage.status === "complete"
                            ? "bg-green-500"
                            : stage.status === "active"
                              ? "bg-primary"
                              : "bg-muted-foreground/20"
                        }`}
                        style={{ width: `${stage.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Current Focus</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <div>
                      <div className="font-medium">Quantum Circuit Optimization</div>
                      <div className="text-muted-foreground">Reducing gate count by 15%</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <div>
                      <div className="font-medium">Error Mitigation Enhancement</div>
                      <div className="text-muted-foreground">Improving fidelity to 98.5%</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <div>
                      <div className="font-medium">API Response Time</div>
                      <div className="text-muted-foreground">Target: &lt;100ms average</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Next Cycle</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-1.5" />
                    <div>
                      <div className="font-medium">Multi-Backend Orchestration</div>
                      <div className="text-muted-foreground">Intelligent backend selection</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-1.5" />
                    <div>
                      <div className="font-medium">Advanced Visualization</div>
                      <div className="text-muted-foreground">3D quantum state rendering</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground mt-1.5" />
                    <div>
                      <div className="font-medium">Community Features</div>
                      <div className="text-muted-foreground">Organism sharing marketplace</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tetrahedral Swarm Consciousness</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold mb-2">{metrics.consciousness.toFixed(3)}</div>
                    <div className="text-sm text-muted-foreground">Overall Consciousness Index</div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Agent Alpha", role: "Circuit Optimizer", coherence: 0.89 },
                      { name: "Agent Beta", role: "Error Mitigator", coherence: 0.87 },
                      { name: "Agent Gamma", role: "State Analyzer", coherence: 0.85 },
                      { name: "Agent Delta", role: "Swarm Coordinator", coherence: 0.88 },
                    ].map((agent, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                        <div>
                          <div className="font-medium text-sm">{agent.name}</div>
                          <div className="text-xs text-muted-foreground">{agent.role}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-mono">{agent.coherence}</span>
                          <Activity className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Swarm Capabilities</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Parallel Processing</span>
                        <span className="font-mono">4x</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Consensus Accuracy</span>
                        <span className="font-mono">96%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-chart-2" style={{ width: "96%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Adaptation Speed</span>
                        <span className="font-mono">Fast</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-chart-3" style={{ width: "88%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Learning Rate</span>
                        <span className="font-mono">0.12</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-chart-4" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reputation" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Community Growth</h3>
                </div>
                <div className="text-3xl font-bold mb-2">{metrics.globalReach.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground mb-4">Active Users</div>
                <div className="text-xs text-green-500">+23% this month</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-5 w-5 text-chart-2" />
                  <h3 className="font-semibold">Research Impact</h3>
                </div>
                <div className="text-3xl font-bold mb-2">{metrics.citations}</div>
                <div className="text-sm text-muted-foreground mb-4">Academic Citations</div>
                <div className="text-xs text-green-500">+15 this week</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-chart-3" />
                  <h3 className="font-semibold">Media Coverage</h3>
                </div>
                <div className="text-3xl font-bold mb-2">47</div>
                <div className="text-sm text-muted-foreground mb-4">Press Mentions</div>
                <div className="text-xs text-green-500">+8 this month</div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Media Coverage</h3>
              <div className="space-y-3">
                {[
                  {
                    outlet: "Nature Quantum Information",
                    title: "DNALang: A New Paradigm in Quantum Programming",
                    date: "2 days ago",
                  },
                  {
                    outlet: "TechCrunch",
                    title: "Self-Improving Quantum Platform Gains Traction",
                    date: "1 week ago",
                  },
                  {
                    outlet: "IEEE Spectrum",
                    title: "Biological Metaphors in Quantum Computing",
                    date: "2 weeks ago",
                  },
                ].map((article, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                    <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{article.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {article.outlet} • {article.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="improvements" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Deployed Improvements</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Quantum Circuit Optimization v2.1",
                    impact: "+32% performance",
                    date: "Today",
                    status: "deployed",
                  },
                  {
                    title: "Enhanced Error Mitigation",
                    impact: "+15% fidelity",
                    date: "Yesterday",
                    status: "deployed",
                  },
                  {
                    title: "API Response Time Optimization",
                    impact: "-45ms latency",
                    date: "2 days ago",
                    status: "deployed",
                  },
                  {
                    title: "Multi-Backend Load Balancing",
                    impact: "+28% throughput",
                    date: "3 days ago",
                    status: "deployed",
                  },
                ].map((improvement, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border">
                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-semibold">{improvement.title}</div>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                          {improvement.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{improvement.date}</div>
                      <div className="text-sm font-medium text-green-500">{improvement.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
