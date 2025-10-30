"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dna, Smartphone, Terminal, Chrome, Download, CheckCircle2, Copy } from "lucide-react"
import Link from "next/link"

export default function InstallPage() {
  const installCommand = "curl -fsSL https://dnalang.dev/install | bash"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/docs">Docs</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Install DNALang</h1>
            <p className="text-xl text-muted-foreground">
              One-click installation for Android, Termux, and all platforms
            </p>
          </div>

          {/* One-Click Install for Termux */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">Termux (Android)</h2>
                  <Badge variant="secondary">Recommended</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  Complete quantum programming environment on your Android device
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Installation Command</span>
                  <Button size="sm" variant="ghost" onClick={() => navigator.clipboard.writeText(installCommand)}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <code className="block p-3 bg-muted rounded text-sm font-mono overflow-x-auto">{installCommand}</code>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">No Qiskit Required</div>
                    <div className="text-sm text-muted-foreground">Direct IBM Quantum integration</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">Optimized for Mobile</div>
                    <div className="text-sm text-muted-foreground">Resource-aware quantum simulation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium mb-1">Secure by Default</div>
                    <div className="text-sm text-muted-foreground">Encrypted credential storage</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Installation Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Installation Steps</h2>
            <div className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Install Termux</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Download Termux from F-Droid (recommended) or Google Play Store
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://f-droid.org/packages/com.termux/" target="_blank" rel="noreferrer noopener">
                        Download Termux
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Run Installation Command</h3>
                    <p className="text-sm text-muted-foreground mb-3">Open Termux and paste the installation command</p>
                    <div className="bg-muted rounded p-3">
                      <code className="text-sm font-mono">{installCommand}</code>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Configure IBM Quantum (Optional)</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Enter your IBM Quantum API key when prompted, or skip to use the simulator
                    </p>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://quantum.ibm.com/account" target="_blank" rel="noreferrer noopener">
                        Get IBM Quantum Key
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Start Coding</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Run the example organism to verify installation
                    </p>
                    <div className="bg-muted rounded p-3">
                      <code className="text-sm font-mono">dna run ~/dnalang/organisms/hello-quantum.dna</code>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Other Platforms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Other Platforms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Chrome className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Chrome Extension</h3>
                    <p className="text-sm text-muted-foreground">Execute quantum code directly from your browser</p>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/download#chrome">
                    <Download className="h-4 w-4 mr-2" />
                    Download Extension
                  </Link>
                </Button>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Android App</h3>
                    <p className="text-sm text-muted-foreground">Native mobile quantum development environment</p>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/download#android">
                    <Download className="h-4 w-4 mr-2" />
                    Download APK
                  </Link>
                </Button>
              </Card>
            </div>
          </div>

          {/* Features */}
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">DNALang Compiler & Runtime</div>
                    <div className="text-sm text-muted-foreground">Full organism execution engine</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">IBM Quantum Bridge</div>
                    <div className="text-sm text-muted-foreground">Direct API integration (no Qiskit)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">W-Flow Optimizer</div>
                    <div className="text-sm text-muted-foreground">Barren plateau mitigation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Ψ-Assembly Assembler</div>
                    <div className="text-sm text-muted-foreground">Low-level quantum control</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Coherence Monitor</div>
                    <div className="text-sm text-muted-foreground">Tetrahedral swarm coordination</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Local Simulator</div>
                    <div className="text-sm text-muted-foreground">No internet required</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Resource Monitoring</div>
                    <div className="text-sm text-muted-foreground">Battery and memory optimization</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Example Organisms</div>
                    <div className="text-sm text-muted-foreground">Ready-to-run quantum programs</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Support */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">Check our documentation or join the community for support</p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/docs">Documentation</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://discord.gg/dnalang" target="_blank" rel="noreferrer noopener">
                  Discord Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
