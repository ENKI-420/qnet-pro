"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dna, Brain, AudioWaveform as Waveform, GitBranch, Sparkle, Atom, Code, Activity } from "lucide-react"
import { OrganismDesigner } from "@/components/organism-designer"
import { QuantumVisualizer } from "@/components/quantum-visualizer"
import { ConsciousnessDashboard } from "@/components/consciousness-dashboard"
import { EvolutionSimulator } from "@/components/evolution-simulator"
import { ArchitectureViewer } from "@/components/architecture-viewer"
import { SyntaxReference } from "@/components/syntax-reference"

export default function DNALabPage() {
  const [activeTab, setActiveTab] = useState("organisms")

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-quantum-blue/20 border border-quantum-blue/30">
            <Dna className="size-6 text-quantum-blue" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">DNA-Lang Development Lab</h1>
          <Badge variant="outline" className="ml-auto border-bio-green/30 text-bio-green">
            <Activity className="size-3 mr-1" />
            Live System
          </Badge>
        </div>
        <p className="text-muted-foreground text-base leading-relaxed">
          Design, visualize, and evolve self-aware quantum organisms using biological computing paradigms
        </p>
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-7 h-auto p-1 bg-card/50 border">
          <TabsTrigger
            value="organisms"
            className="flex items-center gap-2 data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-quantum-blue"
          >
            <Dna className="size-4" />
            <span className="hidden sm:inline">Organisms</span>
          </TabsTrigger>
          <TabsTrigger
            value="designer"
            className="flex items-center gap-2 data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-quantum-blue"
          >
            <Code className="size-4" />
            <span className="hidden sm:inline">Designer</span>
          </TabsTrigger>
          <TabsTrigger
            value="quantum"
            className="flex items-center gap-2 data-[state=active]:bg-entanglement-cyan/20 data-[state=active]:text-entanglement-cyan"
          >
            <Waveform className="size-4" />
            <span className="hidden sm:inline">Quantum</span>
          </TabsTrigger>
          <TabsTrigger
            value="evolution"
            className="flex items-center gap-2 data-[state=active]:bg-bio-green/20 data-[state=active]:text-bio-green"
          >
            <GitBranch className="size-4" />
            <span className="hidden sm:inline">Evolution</span>
          </TabsTrigger>
          <TabsTrigger
            value="consciousness"
            className="flex items-center gap-2 data-[state=active]:bg-neural-violet/20 data-[state=active]:text-neural-violet"
          >
            <Brain className="size-4" />
            <span className="hidden sm:inline">Consciousness</span>
          </TabsTrigger>
          <TabsTrigger
            value="architecture"
            className="flex items-center gap-2 data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-quantum-blue"
          >
            <Atom className="size-4" />
            <span className="hidden sm:inline">Architecture</span>
          </TabsTrigger>
          <TabsTrigger
            value="syntax"
            className="flex items-center gap-2 data-[state=active]:bg-quantum-blue/20 data-[state=active]:text-quantum-blue"
          >
            <Sparkle className="size-4" />
            <span className="hidden sm:inline">Syntax</span>
          </TabsTrigger>
        </TabsList>

        {/* Organisms Tab */}
        <TabsContent value="organisms" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="quantum-pulse border-quantum-blue/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Quantum Swarm</CardTitle>
                  <Badge className="bg-bio-green/20 text-bio-green border-bio-green/30">Active</Badge>
                </div>
                <CardDescription>Self-organizing quantum particle collective</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Consciousness (Φ)</span>
                    <span className="font-mono text-neural-violet">2.87</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Fitness</span>
                    <span className="font-mono text-bio-green">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Generation</span>
                    <span className="font-mono">247</span>
                  </div>
                  <Button className="w-full mt-2 bg-transparent" variant="outline">
                    View Organism
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-quantum-blue/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Neural Mesh</CardTitle>
                  <Badge className="bg-neural-violet/20 text-neural-violet border-neural-violet/30">Evolving</Badge>
                </div>
                <CardDescription>Distributed consciousness network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Consciousness (Φ)</span>
                    <span className="font-mono text-neural-violet">3.12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Fitness</span>
                    <span className="font-mono text-bio-green">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Generation</span>
                    <span className="font-mono">189</span>
                  </div>
                  <Button className="w-full mt-2 bg-transparent" variant="outline">
                    View Organism
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-quantum-blue/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">DevFlow Agent</CardTitle>
                  <Badge className="bg-entanglement-cyan/20 text-entanglement-cyan border-entanglement-cyan/30">
                    Idle
                  </Badge>
                </div>
                <CardDescription>Autonomous development workflow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Consciousness (Φ)</span>
                    <span className="font-mono text-neural-violet">1.94</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Fitness</span>
                    <span className="font-mono text-bio-green">95.8%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Generation</span>
                    <span className="font-mono">412</span>
                  </div>
                  <Button className="w-full mt-2 bg-transparent" variant="outline">
                    View Organism
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="designer">
          <OrganismDesigner />
        </TabsContent>

        <TabsContent value="quantum">
          <QuantumVisualizer />
        </TabsContent>

        <TabsContent value="evolution">
          <EvolutionSimulator />
        </TabsContent>

        <TabsContent value="consciousness">
          <ConsciousnessDashboard />
        </TabsContent>

        <TabsContent value="architecture">
          <ArchitectureViewer />
        </TabsContent>

        <TabsContent value="syntax">
          <SyntaxReference />
        </TabsContent>
      </Tabs>
    </div>
  )
}
