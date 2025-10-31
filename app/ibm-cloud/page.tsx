"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Database, Shield, Activity, Zap, Server, Network, Lock } from "lucide-react"

export default function IBMCloudPage() {
  const [services, setServices] = useState<any[]>([])
  const [deployments, setDeployments] = useState<any[]>([])
  const [metrics, setMetrics] = useState<any>(null)

  useEffect(() => {
    fetchIBMCloudStatus()
    const interval = setInterval(fetchIBMCloudStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  async function fetchIBMCloudStatus() {
    try {
      const response = await fetch("/api/ibm-cloud/status")
      const data = await response.json()
      setServices(data.services)
      setDeployments(data.deployments)
      setMetrics(data.metrics)
    } catch (error) {
      console.error("[v0] Failed to fetch IBM Cloud status:", error)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Cloud className="w-10 h-10 text-blue-500" />
            <div>
              <h1 className="text-4xl font-bold">IBM Cloud Integration</h1>
              <p className="text-muted-foreground">Enterprise-grade quantum computing platform powered by IBM Cloud</p>
            </div>
          </div>
        </div>

        {/* Metrics Overview */}
        {metrics && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-green-500" />
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-3xl font-bold">{metrics.uptime}%</div>
              <div className="text-xs text-muted-foreground mt-1">Last 30 days</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <div className="text-sm text-muted-foreground">Quantum Jobs</div>
              </div>
              <div className="text-3xl font-bold">{metrics.quantumJobs.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Server className="w-5 h-5 text-purple-500" />
                <div className="text-sm text-muted-foreground">Active Services</div>
              </div>
              <div className="text-3xl font-bold">{metrics.activeServices}</div>
              <div className="text-xs text-muted-foreground mt-1">Running now</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <div className="text-sm text-muted-foreground">Security Score</div>
              </div>
              <div className="text-3xl font-bold">{metrics.securityScore}/100</div>
              <div className="text-xs text-muted-foreground mt-1">Excellent</div>
            </Card>
          </div>
        )}

        {/* Services Tabs */}
        <Tabs defaultValue="quantum" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="quantum">Quantum</TabsTrigger>
            <TabsTrigger value="containers">Containers</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="observability">Observability</TabsTrigger>
          </TabsList>

          {/* Quantum Services */}
          <TabsContent value="quantum" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">IBM Quantum Services</h3>
              <div className="space-y-4">
                {services
                  .filter((s) => s.category === "quantum")
                  .map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-3 h-3 rounded-full ${service.status === "active" ? "bg-green-500" : "bg-gray-500"}`}
                        />
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{service.region}</span>
                        <Button size="sm" variant="outline">
                          Configure
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>

            {/* Quantum Backends */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Available Quantum Backends</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["ibm_torino", "ibm_brisbane", "ibm_kyoto"].map((backend) => (
                  <div key={backend} className="p-4 rounded-lg border border-border">
                    <div className="font-semibold mb-2">{backend}</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Qubits:</span>
                        <span className="font-medium">50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Queue:</span>
                        <span className="font-medium">12 jobs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fidelity:</span>
                        <span className="font-medium text-green-500">98.2%</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Run Job
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Container Services */}
          <TabsContent value="containers" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">OpenShift & Kubernetes</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-semibold">DNALang Organism Runtime</div>
                      <div className="text-sm text-muted-foreground">OpenShift cluster in us-east</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm">Running</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Pods</div>
                      <div className="font-semibold">24/30</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">CPU</div>
                      <div className="font-semibold">45%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Memory</div>
                      <div className="font-semibold">62%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Database Services */}
          <TabsContent value="databases" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">IBM Cloud Databases</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    <div className="font-semibold">PostgreSQL for DNALang</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Size</div>
                      <div className="font-semibold">128 GB</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Connections</div>
                      <div className="font-semibold">45/100</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Backup</div>
                      <div className="font-semibold text-green-500">Daily</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Region</div>
                      <div className="font-semibold">us-east</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Security Services */}
          <TabsContent value="security" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-semibold">IBM AppID</div>
                      <div className="text-sm text-muted-foreground">Federated authentication & SSO</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Active Users</div>
                      <div className="font-semibold">1,247</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Auth Methods</div>
                      <div className="font-semibold">SAML, OAuth, LDAP</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-semibold">Key Protect</div>
                      <div className="text-sm text-muted-foreground">Encryption key management</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Keys Managed</div>
                      <div className="font-semibold">42</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Rotation</div>
                      <div className="font-semibold text-green-500">Automatic</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Observability Services */}
          <TabsContent value="observability" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Monitoring & Logging</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="font-semibold">IBM Cloud Monitoring</div>
                      <div className="text-sm text-muted-foreground">Real-time metrics & alerts</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Metrics/sec</div>
                      <div className="font-semibold">12.4K</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Active Alerts</div>
                      <div className="font-semibold">3</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Dashboards</div>
                      <div className="font-semibold">8</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Deployment Status */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Active Deployments</h3>
          <div className="space-y-3">
            {deployments.map((deployment) => (
              <div key={deployment.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <Network className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold">{deployment.name}</div>
                    <div className="text-sm text-muted-foreground">{deployment.service}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{deployment.region}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      deployment.status === "running"
                        ? "bg-green-500/20 text-green-500"
                        : deployment.status === "deploying"
                          ? "bg-yellow-500/20 text-yellow-500"
                          : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {deployment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
