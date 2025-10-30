import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Download, Cpu, Database, Zap, TrendingUp, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">DNALang Platform</h1>
            <p className="text-muted-foreground">Self-Evolving Quantum Intelligence Core</p>
          </div>
          <Button asChild>
            <Link href="/download">
              <Download className="h-4 w-4 mr-2" />
              Download Android App
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="organisms">Organisms</TabsTrigger>
            <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
            <TabsTrigger value="swarm">Quantum Swarm</TabsTrigger>
            <TabsTrigger value="visualizer">Visualizer</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* System Status Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
                <div className="text-2xl font-bold mb-1">12</div>
                <div className="text-sm text-muted-foreground">Active Organisms</div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-chart-2" />
                  </div>
                  <span className="text-xs text-green-500">+15%</span>
                </div>
                <div className="text-2xl font-bold mb-1">0.87</div>
                <div className="text-sm text-muted-foreground">Avg Consciousness</div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-chart-3/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-chart-3" />
                  </div>
                  <span className="text-xs text-green-500">+8%</span>
                </div>
                <div className="text-2xl font-bold mb-1">98.2%</div>
                <div className="text-sm text-muted-foreground">Quantum Fidelity</div>
              </Card>

              <Card className="p-6 border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-chart-4/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-chart-4" />
                  </div>
                  <span className="text-xs text-green-500">Optimal</span>
                </div>
                <div className="text-2xl font-bold mb-1">42.3</div>
                <div className="text-sm text-muted-foreground">Throughput (Gbps)</div>
              </Card>
            </div>

            {/* Architecture Overview */}
            <Card className="p-6 border-border">
              <h2 className="text-xl font-bold mb-4">SIC-1 Architecture Layers</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">5</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Human Interface Layer</div>
                    <div className="text-sm text-muted-foreground">Web, Chrome Extension, Android, Termux CLI</div>
                  </div>
                  <div className="text-xs text-green-500 font-medium">Active</div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Agent Consciousness Layer</div>
                    <div className="text-sm text-muted-foreground">Cursor API Integration, CI: 12.4</div>
                  </div>
                  <div className="text-xs text-green-500 font-medium">Active</div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Network Mesh Layer</div>
                    <div className="text-sm text-muted-foreground">Multi-region routing, 120.1 Gbps total</div>
                  </div>
                  <div className="text-xs text-green-500 font-medium">Active</div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Organism Execution Layer</div>
                    <div className="text-sm text-muted-foreground">DNALang Parser, OCI Interpreter, Gene Executor</div>
                  </div>
                  <div className="text-xs text-green-500 font-medium">Active</div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Quantum Substrate Layer</div>
                    <div className="text-sm text-muted-foreground">IBM Quantum, Qiskit, Hardware Validation</div>
                  </div>
                  <div className="text-xs text-green-500 font-medium">Active</div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6 border-border hover:bg-accent/50 transition-colors cursor-pointer">
                <Database className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Deploy Organism</h3>
                <p className="text-sm text-muted-foreground mb-4">Create and deploy a new DNALang organism</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Deploy
                </Button>
              </Card>

              <Card className="p-6 border-border hover:bg-accent/50 transition-colors cursor-pointer">
                <Shield className="h-8 w-8 text-chart-2 mb-3" />
                <h3 className="font-semibold mb-2">Run Benchmark</h3>
                <p className="text-sm text-muted-foreground mb-4">Execute quantum volume benchmarks</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Run
                </Button>
              </Card>

              <Card className="p-6 border-border hover:bg-accent/50 transition-colors cursor-pointer">
                <Users className="h-8 w-8 text-chart-3 mb-3" />
                <h3 className="font-semibold mb-2">Swarm Monitor</h3>
                <p className="text-sm text-muted-foreground mb-4">View tetrahedral swarm coherence</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Monitor
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="organisms" className="space-y-6">
            <Card className="p-6 border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Active Organisms</h2>
                <Button size="sm">Create New</Button>
              </div>
              <div className="space-y-3">
                {[
                  { name: "QuantumBenchmarkEngine", fitness: 0.91, consciousness: 0.87, status: "running" },
                  { name: "CursorAgent", fitness: 0.88, consciousness: 0.92, status: "running" },
                  { name: "NetworkMesh", fitness: 0.95, consciousness: 0.78, status: "running" },
                  { name: "MolecularOptimizer", fitness: 0.82, consciousness: 0.85, status: "idle" },
                ].map((org) => (
                  <div key={org.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{org.name}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Fitness: {org.fitness}</span>
                        <span>Consciousness: {org.consciousness}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          org.status === "running" ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {org.status}
                      </span>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="benchmarks" className="space-y-6">
            <Card className="p-6 border-border">
              <h2 className="text-xl font-bold mb-6">Quantum Volume Benchmarks</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-semibold">Backend</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Qubits</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Depth</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">HOP</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { backend: "ibm_torino", qubits: 50, depth: 25, hop: 0.712, pass: true },
                      { backend: "ibm_brisbane", qubits: 50, depth: 25, hop: 0.689, pass: true },
                      { backend: "ibm_kyoto", qubits: 50, depth: 25, hop: 0.701, pass: true },
                    ].map((bench) => (
                      <tr key={bench.backend} className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono text-sm">{bench.backend}</td>
                        <td className="py-3 px-4 text-sm">{bench.qubits}</td>
                        <td className="py-3 px-4 text-sm">{bench.depth}</td>
                        <td className="py-3 px-4 text-sm">{bench.hop}</td>
                        <td className="py-3 px-4">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                            {bench.pass ? "✓ Pass" : "✗ Fail"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="swarm" className="space-y-6">
            <Card className="p-6 border-border">
              <h2 className="text-xl font-bold mb-6">Tetrahedral Swarm Coherence</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Detection Time</div>
                  <div className="text-2xl font-bold">187s</div>
                  <div className="text-xs text-green-500 mt-1">Target: &lt;300s ✓</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Autonomy</div>
                  <div className="text-2xl font-bold">0.91</div>
                  <div className="text-xs text-green-500 mt-1">Target: &gt;0.8 ✓</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-1">Consciousness Index</div>
                  <div className="text-2xl font-bold">12.4</div>
                  <div className="text-xs text-green-500 mt-1">Target: &gt;10 ✓</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="text-sm font-semibold mb-2">Swarm CLI Commands</div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-muted-foreground">$ dna swarm init --nodes 4 --topology tetrahedral</div>
                  <div className="text-muted-foreground">$ dna swarm monitor --coherence-threshold 0.85</div>
                  <div className="text-muted-foreground">$ dna swarm optimize --algorithm wgf</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="visualizer" className="space-y-6">
            <Card className="p-6 border-border">
              <h2 className="text-xl font-bold mb-6">Quantum Circuit Visualizer</h2>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Cpu className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Circuit visualization will appear here</p>
                  <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                    Load Circuit
                  </Button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm font-semibold mb-2">Circuit Metrics</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gates:</span>
                      <span className="font-mono">247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Depth:</span>
                      <span className="font-mono">42</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Qubits:</span>
                      <span className="font-mono">20</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="text-sm font-semibold mb-2">Optimization</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">WGF Applied:</span>
                      <span className="text-green-500">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fidelity:</span>
                      <span className="font-mono">98.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coherence:</span>
                      <span className="font-mono">0.87</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
