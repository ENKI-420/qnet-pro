"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Zap, Activity, CheckCircle2, Clock, TrendingUp } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export default function QuantumPage() {
  const [backends] = useState([
    { name: "ibm_brisbane", qubits: 127, topology: "Heavy-hex", clops: 15000, status: "available" as const },
    { name: "ibm_kyoto", qubits: 127, topology: "Heavy-hex", clops: 14500, status: "available" as const },
    { name: "ibm_torino", qubits: 133, topology: "Heavy-hex", clops: 16200, status: "available" as const },
    { name: "ibm_sherbrooke", qubits: 127, topology: "Heavy-hex", clops: 14800, status: "busy" as const },
  ])

  const [jobs] = useState([
    { id: "job-001", circuit: "Bell State Creation", backend: "ibm_brisbane", shots: 4096, status: "completed" as const, fidelity: 0.95, time: "2.3s" },
    { id: "job-002", circuit: "GHZ State (8 qubits)", backend: "ibm_kyoto", shots: 8192, status: "running" as const, fidelity: null, time: "5.1s" },
    { id: "job-003", circuit: "Quantum Teleportation", backend: "ibm_torino", shots: 4096, status: "queued" as const, fidelity: null, time: null },
  ])

  return (
    <main className="min-h-screen">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">Quantum Computing</h1>
            <p className="text-muted-foreground">IBM Quantum Runtime v2 — Real hardware integration</p>
          </div>

          <Tabs defaultValue="backends" className="space-y-6">
            <TabsList>
              <TabsTrigger value="backends">Backends</TabsTrigger>
              <TabsTrigger value="jobs">Job Queue</TabsTrigger>
              <TabsTrigger value="circuits">Circuit Builder</TabsTrigger>
            </TabsList>

            <TabsContent value="backends" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {backends.map((backend) => (
                  <Card key={backend.name} className="bg-card border-border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-secondary">
                          <Cpu className="h-5 w-5 text-foreground" />
                        </div>
                        <StatusBadge status={backend.status === "available" ? "active" : "busy"} />
                      </div>
                      <CardTitle className="text-lg mt-3">{backend.name}</CardTitle>
                      <CardDescription>{backend.topology} topology</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Qubits</span>
                        <span className="font-semibold">{backend.qubits}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">CLOPS</span>
                        <span className="font-semibold">{backend.clops.toLocaleString()}</span>
                      </div>
                      <Button className="w-full mt-2" size="sm" disabled={backend.status !== "available"}>
                        <Zap className="h-4 w-4 mr-2" />
                        Execute Circuit
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base font-medium">Job Queue</CardTitle>
                  <CardDescription>Monitor quantum circuit execution status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {jobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                      <div className="flex items-center gap-3">
                        {job.status === "completed" && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                        {job.status === "running" && <Activity className="h-4 w-4 text-blue-500 animate-spin" />}
                        {job.status === "queued" && <Clock className="h-4 w-4 text-yellow-500" />}
                        <div>
                          <p className="text-sm font-medium">{job.circuit}</p>
                          <p className="text-xs text-muted-foreground">{job.backend} - {job.shots.toLocaleString()} shots</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        {job.fidelity && <p className="text-sm font-medium">Fidelity: {job.fidelity.toFixed(2)}</p>}
                        {job.time && <p className="text-xs text-muted-foreground">{job.time}</p>}
                        <Badge variant="secondary" className="text-xs">{job.status}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="circuits">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-base font-medium">Circuit Builder</CardTitle>
                  <CardDescription>Design and test quantum circuits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <div className="p-3 rounded-lg bg-secondary inline-block mb-4">
                      <TrendingUp className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Coming Soon</h3>
                    <p className="text-sm text-muted-foreground">Visual quantum circuit designer with drag-and-drop gates</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
