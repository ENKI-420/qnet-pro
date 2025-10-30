"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Smartphone, Terminal, Chrome, Shield, CheckCircle2, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function DownloadPage() {
  const [email, setEmail] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [downloadToken, setDownloadToken] = useState("")

  const handleAuthenticate = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    setAuthenticated(true)
    setDownloadToken("dnalang_" + Math.random().toString(36).substring(7))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Download DNALang Platform</h1>
            <p className="text-lg text-muted-foreground">
              Secure access to Android app, CLI tools, and browser extensions
            </p>
          </div>

          {!authenticated ? (
            <Card className="p-8 border-border max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-xl font-bold">Secure Authentication</h2>
                  <p className="text-sm text-muted-foreground">Verify your identity to download</p>
                </div>
              </div>
              <form onSubmit={handleAuthenticate} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Authenticate & Download
                </Button>
              </form>
              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Downloads are secured with time-limited tokens and checksum verification to ensure integrity.
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="p-6 border-border bg-green-500/5 border-green-500/20">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold">Authentication Successful</div>
                    <div className="text-sm text-muted-foreground">
                      Download token: <code className="text-xs bg-muted px-2 py-0.5 rounded">{downloadToken}</code>
                    </div>
                  </div>
                </div>
              </Card>

              <Tabs defaultValue="android" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="android">Android App</TabsTrigger>
                  <TabsTrigger value="cli">CLI Tools</TabsTrigger>
                  <TabsTrigger value="extension">Extensions</TabsTrigger>
                </TabsList>

                <TabsContent value="android" className="space-y-4">
                  <Card className="p-6 border-border">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Smartphone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">DNALang Android App</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Full-featured mobile quantum development environment with Termux integration
                        </p>
                        <div className="flex items-center gap-3">
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Download APK (v1.3.1)
                          </Button>
                          <span className="text-sm text-muted-foreground">42.3 MB</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Installation Instructions</div>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Download the APK file to your Android device</li>
                        <li>Enable "Install from Unknown Sources" in Settings</li>
                        <li>Open the APK file and follow installation prompts</li>
                        <li>Launch DNALang and grant required permissions</li>
                        <li>Connect to Termux for full CLI functionality</li>
                      </ol>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">System Requirements</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Android 8.0 (API 26) or higher</li>
                        <li>• 4GB RAM minimum (8GB recommended)</li>
                        <li>• 500MB free storage</li>
                        <li>• ARM64 processor</li>
                      </ul>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Security Verification</div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SHA-256:</span>
                          <span>a3f2...8b9c</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Signature:</span>
                          <span className="text-green-500">Verified ✓</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="cli" className="space-y-4">
                  <Card className="p-6 border-border">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Terminal className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">DNALang CLI Tools</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Command-line interface for quantum operations, organism management, and benchmarking
                        </p>
                        <div className="flex items-center gap-3">
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Download CLI (v1.3.1)
                          </Button>
                          <span className="text-sm text-muted-foreground">15.7 MB</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Installation (Linux/macOS)</div>
                      <div className="space-y-2 font-mono text-xs">
                        <div className="text-muted-foreground">$ curl -fsSL https://dnalang.dev/install.sh | bash</div>
                        <div className="text-muted-foreground">$ dna --version</div>
                        <div className="text-muted-foreground">$ dna init --backend ibm_quantum</div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Termux Installation</div>
                      <div className="space-y-2 font-mono text-xs">
                        <div className="text-muted-foreground">$ pkg install python qiskit numpy scipy</div>
                        <div className="text-muted-foreground">$ pip install dnalang-cli</div>
                        <div className="text-muted-foreground">$ dna organism deploy example.dna</div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Available Commands</div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <li>
                          • <code className="text-xs bg-background px-1.5 py-0.5 rounded">dna organism</code> - Manage
                          organisms
                        </li>
                        <li>
                          • <code className="text-xs bg-background px-1.5 py-0.5 rounded">dna benchmark</code> - Run
                          quantum benchmarks
                        </li>
                        <li>
                          • <code className="text-xs bg-background px-1.5 py-0.5 rounded">dna swarm</code> - Tetrahedral
                          swarm operations
                        </li>
                        <li>
                          • <code className="text-xs bg-background px-1.5 py-0.5 rounded">dna wgf</code> - Wasserstein
                          gradient flow optimization
                        </li>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="extension" className="space-y-4">
                  <Card className="p-6 border-border">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Chrome className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">DNALang Chrome Extension</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Execute DNALang code directly from your browser with quantum state inspection
                        </p>
                        <div className="flex items-center gap-3">
                          <Button>
                            <Download className="h-4 w-4 mr-2" />
                            Download Extension
                          </Button>
                          <Button variant="outline" asChild>
                            <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
                              Chrome Web Store
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Manual Installation</div>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Download and extract the extension ZIP file</li>
                        <li>Open Chrome and navigate to chrome://extensions</li>
                        <li>Enable "Developer mode" in the top right</li>
                        <li>Click "Load unpacked" and select the extracted folder</li>
                        <li>Pin the extension to your toolbar for easy access</li>
                      </ol>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-muted/50">
                      <div className="text-sm font-semibold mb-2">Features</div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Execute DNALang organisms from any webpage</li>
                        <li>• Real-time quantum state visualization</li>
                        <li>• Integrated code editor with syntax highlighting</li>
                        <li>• Organism metrics dashboard</li>
                        <li>• Sync with web platform and mobile app</li>
                      </ul>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="p-6 border-border">
                <h3 className="text-lg font-bold mb-4">Post-Installation Setup</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold mb-2 text-sm">1. Configure API Keys</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Set up your IBM Quantum and Cursor API keys for full functionality
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      $ export IBM_QUANTUM_API_KEY="your_key_here"
                      <br />$ export CURSOR_API_KEY="your_key_here"
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold mb-2 text-sm">2. Verify Installation</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Run the verification script to ensure all components are working
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">$ dna verify --full</div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold mb-2 text-sm">3. Deploy Your First Organism</div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Try deploying an example organism to test the platform
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      $ dna organism deploy examples/hello-quantum.dna
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link href="/docs">View Documentation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
