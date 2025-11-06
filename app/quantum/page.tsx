"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Zap, Activity, CheckCircle2, Clock, TrendingUp } from "lucide-react"

export default function QuantumPage() {
  const [backends] = useState([
    { name: "ibm_brisbane", qubits: 127, topology: "Heavy-hex", clops: 15000, status: "available" },
    { name: "ibm_kyoto", qubits: 127, topology: "Heavy-hex", clops: 14500, status: "available" },
    { name: "ibm_torino", qubits: 133, topology: "Heavy-hex", clops: 16200, status: "available" },
    { name: "ibm_sherbrooke", qubits: 127, topology: "Heavy-hex", clops: 14800, status: "busy" },
  ])

  const [jobs] = useState([
    {
      id: "job-001",
      circuit: "Bell State Creation",
      backend: "ibm_brisbane",
      shots: 4096,
      status: "completed",
      fidelity: 0.95,
      time: "2.3s",
    },
    {
      id: "job-002",
      circuit: "GHZ State (8 qubits)",
      backend: "ibm_kyoto",
      shots: 8192,
      status: "running",
      fidelity: null,
      time: "5.1s",
    },
    {
      id: "job-003",
      circuit: "Quantum Teleportation",
      backend: "ibm_torino",
      shots: 4096,
      status: "queued",
      fidelity: null,
      time: null,
    },
  ])

  return (
    <div className="min-h-screen bg-negentropic p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold lambda-phi-glow mb-4">Quantum Computing</h1>
          <p className="text-xl text-muted-foreground">IBM Quantum Runtime v2 - Real hardware integration</p>
        </div>

        <Tabs defaultValue="backends" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
            <TabsTrigger value="backends">Quantum Backends</TabsTrigger>
            <TabsTrigger value="jobs">Job Queue</TabsTrigger>
            <TabsTrigger value="circuits">Circuit Builder</TabsTrigger>
          </TabsList>

          <TabsContent value="backends" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {backends.map((backend) => (
                <Card
                  key={backend.name}
                  className="bg-card/50 backdrop-blur-sm border-lambda-phi/20 hover:border-lambda-phi/50 transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Cpu className="h-8 w-8 text-lambda-phi animate-lambda-phi-pulse" />
                      <Badge variant={backend.status === "available" ? "default" : "secondary"}>{backend.status}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{backend.name}</CardTitle>
                    <CardDescription>{backend.topology} topology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Qubits</span>
                        <span className="text-lg font-bold text-lambda-phi">{backend.qubits}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">CLOPS</span>
                        <span className="text-lg font-bold text-lambda-phi">{backend.clops.toLocaleString()}</span>
                      </div>
                      <Button className="w-full mt-4" disabled={backend.status !== "available"}>
                        <Zap className="h-4 w-4 mr-2" />
                        Execute Circuit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
              <CardHeader>
                <CardTitle className="text-2xl">Job Queue</CardTitle>
                <CardDescription>Monitor quantum circuit execution status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-lambda-phi/20"
                    >
                      <div className="flex items-center gap-4">
                        {job.status === "completed" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                        {job.status === "running" && <Activity className="h-5 w-5 text-lambda-phi animate-spin" />}
                        {job.status === "queued" && <Clock className="h-5 w-5 text-yellow-500" />}
                        <div>
                          <div className="font-semibold">{job.circuit}</div>
                          <div className="text-xs text-muted-foreground">
                            {job.backend} • {job.shots.toLocaleString()} shots
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {job.fidelity && (
                          <div className="text-sm font-bold text-lambda-phi">Fidelity: {job.fidelity.toFixed(2)}</div>
                        )}
                        {job.time && <div className="text-xs text-muted-foreground">{job.time}</div>}
                        <Badge className="mt-1">{job.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="circuits" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-lambda-phi/20">
              <CardHeader>
                <CardTitle className="text-2xl">Circuit Builder</CardTitle>
                <CardDescription>Design and test quantum circuits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <TrendingUp className="h-16 w-16 text-lambda-phi/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Circuit Builder Coming Soon</h3>
                  <p className="text-sm text-muted-foreground">
                    Visual quantum circuit designer with drag-and-drop gates
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
