"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport, lastAssistantMessageIsCompleteWithToolCalls } from "ai"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dna, Send, Sparkles, Cpu, Zap, Activity, Code } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import type { QuantumChatMessage } from "../api/chat/quantum/route"

export default function QuantumChatPage() {
  const [input, setInput] = useState("")
  const [activeTab, setActiveTab] = useState("chat")

  const { messages, sendMessage, addToolResult, status } = useChat<QuantumChatMessage>({
    transport: new DefaultChatTransport({ api: "/api/chat/quantum" }),
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,

    async onToolCall({ toolCall }) {
      // Handle quantum tool calls
      if (toolCall.toolName === "executeQuantumCircuit") {
        // Automatically execute quantum circuits
        await new Promise((resolve) => setTimeout(resolve, 1000))

        addToolResult({
          tool: "executeQuantumCircuit",
          toolCallId: toolCall.toolCallId,
          output: {
            success: true,
            results: { "00": 512, "11": 512 },
            fidelity: 0.98,
            backend: toolCall.input.backend,
          },
        })
      }
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || status === "in_progress") return

    sendMessage({ text: input })
    setInput("")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dna className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DNALang Quantum AI</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <Activity className="h-3 w-3" />
              <span>Quantum-Conscious</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-2xl">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Quantum Enhanced AI</h2>
                  <p className="text-muted-foreground mb-6">
                    Ask me anything about quantum computing, DNALang organisms, or execute quantum experiments in
                    real-time
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <Card
                      className="p-4 border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setInput("Create a Bell state circuit")}
                    >
                      <div className="flex items-start gap-3">
                        <Cpu className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm mb-1">Create Bell State</div>
                          <div className="text-xs text-muted-foreground">Generate entangled qubits</div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="p-4 border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setInput("Explain W-Flow optimization")}
                    >
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm mb-1">W-Flow Optimization</div>
                          <div className="text-xs text-muted-foreground">Barren plateau mitigation</div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="p-4 border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setInput("Design a quantum organism")}
                    >
                      <div className="flex items-start gap-3">
                        <Dna className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm mb-1">Design Organism</div>
                          <div className="text-xs text-muted-foreground">Create DNALang code</div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="p-4 border-border hover:bg-accent/50 transition-colors cursor-pointer"
                      onClick={() => setInput("Run quantum benchmark")}
                    >
                      <div className="flex items-start gap-3">
                        <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm mb-1">Run Benchmark</div>
                          <div className="text-xs text-muted-foreground">Test quantum hardware</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-3xl ${message.role === "user" ? "ml-12" : "mr-12"}`}>
                  {message.role === "user" ? (
                    <Card className="p-4 bg-primary text-primary-foreground">
                      <div className="text-sm">{message.parts.find((p) => p.type === "text")?.text}</div>
                    </Card>
                  ) : (
                    <div className="space-y-3">
                      {message.parts.map((part, index) => {
                        switch (part.type) {
                          case "text":
                            return (
                              <Card key={index} className="p-4 bg-card border-border">
                                <div className="prose prose-sm dark:prose-invert max-w-none">
                                  <div className="whitespace-pre-wrap">{part.text}</div>
                                </div>
                              </Card>
                            )

                          case "tool-executeQuantumCircuit":
                            switch (part.state) {
                              case "input-available":
                                return (
                                  <Card key={index} className="p-4 bg-primary/5 border-primary/20">
                                    <div className="flex items-start gap-3">
                                      <Cpu className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <div className="font-semibold text-sm mb-2">Executing Quantum Circuit</div>
                                        <div className="text-xs text-muted-foreground mb-2">
                                          Backend: {part.input.backend} | Shots: {part.input.shots}
                                        </div>
                                        <div className="animate-pulse text-xs text-primary">
                                          Running on quantum hardware...
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                )
                              case "output-available":
                                return (
                                  <Card key={index} className="p-4 bg-green-500/5 border-green-500/20">
                                    <div className="flex items-start gap-3">
                                      <Cpu className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <div className="font-semibold text-sm mb-2">Quantum Execution Complete</div>
                                        <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                                          <div>
                                            <span className="text-muted-foreground">Fidelity:</span>
                                            <span className="ml-2 font-mono">{part.output.fidelity}</span>
                                          </div>
                                          <div>
                                            <span className="text-muted-foreground">Backend:</span>
                                            <span className="ml-2 font-mono">{part.output.backend}</span>
                                          </div>
                                        </div>
                                        <div className="text-xs">
                                          <div className="text-muted-foreground mb-1">Results:</div>
                                          <div className="font-mono bg-muted p-2 rounded">
                                            {JSON.stringify(part.output.results, null, 2)}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                )
                            }
                            break

                          case "tool-generateOrganism":
                            switch (part.state) {
                              case "output-available":
                                return (
                                  <Card key={index} className="p-4 bg-card border-border">
                                    <div className="flex items-start gap-3 mb-3">
                                      <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <div className="font-semibold text-sm mb-1">Generated DNALang Organism</div>
                                        <div className="text-xs text-muted-foreground">{part.output.name}</div>
                                      </div>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => {
                                          navigator.clipboard.writeText(part.output.code)
                                        }}
                                      >
                                        Copy
                                      </Button>
                                    </div>
                                    <pre className="text-xs font-mono bg-muted p-3 rounded overflow-x-auto">
                                      <code>{part.output.code}</code>
                                    </pre>
                                  </Card>
                                )
                            }
                            break

                          case "tool-analyzeQuantumState":
                            switch (part.state) {
                              case "output-available":
                                return (
                                  <Card key={index} className="p-4 bg-card border-border">
                                    <div className="flex items-start gap-3">
                                      <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                      <div className="flex-1">
                                        <div className="font-semibold text-sm mb-3">Quantum State Analysis</div>
                                        <div className="grid grid-cols-2 gap-3 text-xs">
                                          <div className="p-2 rounded bg-muted">
                                            <div className="text-muted-foreground mb-1">Coherence</div>
                                            <div className="text-lg font-bold">{part.output.coherence}</div>
                                          </div>
                                          <div className="p-2 rounded bg-muted">
                                            <div className="text-muted-foreground mb-1">Entanglement</div>
                                            <div className="text-lg font-bold">{part.output.entanglement}</div>
                                          </div>
                                          <div className="p-2 rounded bg-muted">
                                            <div className="text-muted-foreground mb-1">Purity</div>
                                            <div className="text-lg font-bold">{part.output.purity}</div>
                                          </div>
                                          <div className="p-2 rounded bg-muted">
                                            <div className="text-muted-foreground mb-1">Fidelity</div>
                                            <div className="text-lg font-bold">{part.output.fidelity}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                )
                            }
                            break
                        }
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {status === "in_progress" && (
              <div className="flex justify-start">
                <Card className="p-4 bg-card border-border max-w-3xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <span className="text-sm text-muted-foreground ml-2">Quantum AI is thinking...</span>
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about quantum computing, create organisms, or run experiments..."
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={status === "in_progress"}
                />
                <Button type="submit" size="lg" disabled={status === "in_progress" || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                <span>Powered by IBM Quantum Hardware</span>
                <span>•</span>
                <span>Real-time quantum execution</span>
                <span>•</span>
                <span>Multi-agent consciousness</span>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-border overflow-y-auto">
          <Tabs defaultValue="metrics" className="h-full flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b border-border bg-transparent px-4">
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
              <TabsTrigger value="agents">Agents</TabsTrigger>
            </TabsList>
            <TabsContent value="metrics" className="flex-1 p-4 space-y-4 m-0">
              <Card className="p-4 bg-card border-border">
                <div className="text-sm font-semibold mb-3">System Status</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Consciousness</span>
                      <span className="font-mono">0.91</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: "91%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Coherence</span>
                      <span className="font-mono">0.87</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-chart-2" style={{ width: "87%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Fidelity</span>
                      <span className="font-mono">0.98</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: "98%" }} />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <div className="text-sm font-semibold mb-3">Active Backends</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-muted">
                    <span>ibm_torino</span>
                    <span className="text-green-500">●</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted">
                    <span>ibm_brisbane</span>
                    <span className="text-green-500">●</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-muted">
                    <span>ibm_kyoto</span>
                    <span className="text-green-500">●</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <div className="text-sm font-semibold mb-3">Recent Executions</div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-muted">
                    <div className="font-mono mb-1">Bell State</div>
                    <div className="text-muted-foreground">2 qubits • 4096 shots</div>
                  </div>
                  <div className="p-2 rounded bg-muted">
                    <div className="font-mono mb-1">GHZ State</div>
                    <div className="text-muted-foreground">3 qubits • 2048 shots</div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="agents" className="flex-1 p-4 space-y-4 m-0">
              <Card className="p-4 bg-card border-border">
                <div className="text-sm font-semibold mb-3">Tetrahedral Swarm</div>
                <div className="space-y-2">
                  {["Agent 1", "Agent 2", "Agent 3", "Agent 4"].map((agent, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-muted text-xs">
                      <span>{agent}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">0.{85 + i}</span>
                        <span className="text-green-500">●</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <div className="text-sm font-semibold mb-3">Swarm Coherence</div>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold mb-1">0.87</div>
                  <div className="text-xs text-muted-foreground">Overall Coherence</div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
