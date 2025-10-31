"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  Circle,
  Clock,
  Shield,
  Zap,
  Users,
  Database,
  Lock,
  Activity,
  Globe,
  TrendingUp,
  AlertTriangle,
  FileCheck,
  Server,
  Target,
} from "lucide-react"

export default function ProductionRoadmapPage() {
  const [selectedQuarter, setSelectedQuarter] = useState("Q2-2025")

  const roadmap = {
    "Q2-2025": {
      title: "Q2 2025: Foundation & Security",
      progress: 85,
      milestones: [
        {
          id: 1,
          title: "Enterprise Authentication",
          status: "completed",
          priority: "critical",
          description: "SSO, MFA, SAML integration",
        },
        {
          id: 2,
          title: "Security Hardening",
          status: "completed",
          priority: "critical",
          description: "OWASP Top 10, penetration testing",
        },
        {
          id: 3,
          title: "Database Optimization",
          status: "in-progress",
          priority: "high",
          description: "Indexing, query optimization, read replicas",
        },
        {
          id: 4,
          title: "Monitoring Stack",
          status: "in-progress",
          priority: "high",
          description: "Prometheus, Grafana, alerting",
        },
        {
          id: 5,
          title: "CI/CD Pipeline",
          status: "completed",
          priority: "high",
          description: "Automated testing, deployment, rollback",
        },
      ],
    },
    "Q3-2025": {
      title: "Q3 2025: Scale & Reliability",
      progress: 45,
      milestones: [
        {
          id: 6,
          title: "Multi-Region Deployment",
          status: "planned",
          priority: "critical",
          description: "US-East, EU-West, APAC regions",
        },
        {
          id: 7,
          title: "Auto-Scaling Infrastructure",
          status: "planned",
          priority: "high",
          description: "Kubernetes, horizontal pod autoscaling",
        },
        {
          id: 8,
          title: "Advanced Caching",
          status: "planned",
          priority: "high",
          description: "Redis Cluster, CDN optimization",
        },
        {
          id: 9,
          title: "Load Testing",
          status: "planned",
          priority: "medium",
          description: "10K concurrent users, stress testing",
        },
        {
          id: 10,
          title: "Disaster Recovery",
          status: "planned",
          priority: "critical",
          description: "Backup automation, failover testing",
        },
      ],
    },
    "Q4-2025": {
      title: "Q4 2025: Compliance & Enterprise",
      progress: 20,
      milestones: [
        {
          id: 11,
          title: "SOC 2 Type II Certification",
          status: "planned",
          priority: "critical",
          description: "Security audit, compliance documentation",
        },
        {
          id: 12,
          title: "GDPR Compliance",
          status: "planned",
          priority: "critical",
          description: "Data portability, right to deletion",
        },
        {
          id: 13,
          title: "HIPAA Compliance",
          status: "planned",
          priority: "high",
          description: "Healthcare data handling",
        },
        {
          id: 14,
          title: "Enterprise Features",
          status: "planned",
          priority: "high",
          description: "Multi-tenancy, custom branding, SLA",
        },
        {
          id: 15,
          title: "Advanced Analytics",
          status: "planned",
          priority: "medium",
          description: "ML-powered insights, predictive analytics",
        },
      ],
    },
    "Q1-2026": {
      title: "Q1 2026: Global Expansion",
      progress: 5,
      milestones: [
        { id: 16, title: "Global CDN", status: "planned", priority: "high", description: "Edge locations worldwide" },
        {
          id: 17,
          title: "Data Residency",
          status: "planned",
          priority: "critical",
          description: "Regional data storage compliance",
        },
        {
          id: 18,
          title: "Advanced Security",
          status: "planned",
          priority: "critical",
          description: "SIEM integration, threat detection",
        },
        {
          id: 19,
          title: "Performance Optimization",
          status: "planned",
          priority: "high",
          description: "Sub-100ms API latency",
        },
        {
          id: 20,
          title: "Enterprise Support",
          status: "planned",
          priority: "high",
          description: "24/7 support, dedicated account managers",
        },
      ],
    },
  }

  const currentMetrics = {
    uptime: 99.97,
    latency: 287,
    errorRate: 0.3,
    activeUsers: 1247,
    quantumJobs: 45234,
    fidelity: 98.2,
  }

  const securityFeatures = [
    { name: "Authentication", status: "production", details: "NextAuth.js + JWT + MFA" },
    { name: "Authorization", status: "production", details: "RBAC with 4 roles" },
    { name: "Encryption", status: "production", details: "TLS 1.3 + AES-256" },
    { name: "API Security", status: "production", details: "Rate limiting + CORS" },
    { name: "Audit Logging", status: "production", details: "Immutable logs" },
    { name: "Penetration Testing", status: "in-progress", details: "Quarterly audits" },
    { name: "SOC 2 Type II", status: "planned", details: "Q4 2025 target" },
    { name: "SIEM Integration", status: "planned", details: "Q1 2026 target" },
  ]

  const scalabilityTargets = [
    { metric: "Concurrent Users", current: "1.2K", target: "100K", progress: 1.2 },
    { metric: "API Requests/sec", current: "500", target: "50K", progress: 1 },
    { metric: "Database Connections", current: "20", target: "1000", progress: 2 },
    { metric: "Quantum Jobs/day", current: "1.5K", target: "100K", progress: 1.5 },
    { metric: "Data Storage", current: "50GB", target: "10TB", progress: 0.5 },
    { metric: "Global Regions", current: "1", target: "5", progress: 20 },
  ]

  const complianceStatus = [
    { standard: "GDPR", status: "partial", progress: 70, deadline: "Q3 2025" },
    { standard: "SOC 2 Type II", status: "in-progress", progress: 35, deadline: "Q4 2025" },
    { standard: "HIPAA", status: "planned", progress: 15, deadline: "Q4 2025" },
    { standard: "ISO 27001", status: "planned", progress: 10, deadline: "Q1 2026" },
    { standard: "FedRAMP", status: "planned", progress: 5, deadline: "Q2 2026" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "planned":
        return <Circle className="h-5 w-5 text-gray-400" />
      default:
        return <Circle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      production: "default",
      "in-progress": "secondary",
      planned: "outline",
    }
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "text-red-500"
      case "high":
        return "text-orange-500"
      case "medium":
        return "text-yellow-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="h-10 w-10 text-blue-400" />
            <div>
              <h1 className="text-4xl font-bold text-white">Production Advancement Roadmap</h1>
              <p className="text-lg text-gray-400">Enterprise-Scale Deployment Strategy</p>
            </div>
          </div>
        </div>

        {/* Current Status Metrics */}
        <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
          <h2 className="mb-4 text-xl font-semibold text-white">Current Production Status</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Activity className="h-4 w-4" />
                Uptime
              </div>
              <div className="text-2xl font-bold text-green-400">{currentMetrics.uptime}%</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Zap className="h-4 w-4" />
                Latency
              </div>
              <div className="text-2xl font-bold text-blue-400">{currentMetrics.latency}ms</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <AlertTriangle className="h-4 w-4" />
                Error Rate
              </div>
              <div className="text-2xl font-bold text-yellow-400">{currentMetrics.errorRate}%</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users className="h-4 w-4" />
                Active Users
              </div>
              <div className="text-2xl font-bold text-purple-400">{currentMetrics.activeUsers.toLocaleString()}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Server className="h-4 w-4" />
                Quantum Jobs
              </div>
              <div className="text-2xl font-bold text-cyan-400">{currentMetrics.quantumJobs.toLocaleString()}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <TrendingUp className="h-4 w-4" />
                Fidelity
              </div>
              <div className="text-2xl font-bold text-green-400">{currentMetrics.fidelity}%</div>
            </div>
          </div>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="roadmap" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-900/50">
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="scalability">Scalability</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-6">
            {/* Quarter Selector */}
            <div className="flex gap-2">
              {Object.keys(roadmap).map((quarter) => (
                <Button
                  key={quarter}
                  variant={selectedQuarter === quarter ? "default" : "outline"}
                  onClick={() => setSelectedQuarter(quarter)}
                  className="flex-1"
                >
                  {quarter}
                </Button>
              ))}
            </div>

            {/* Selected Quarter Details */}
            <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-6 space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  {roadmap[selectedQuarter as keyof typeof roadmap].title}
                </h2>
                <div className="flex items-center gap-4">
                  <Progress value={roadmap[selectedQuarter as keyof typeof roadmap].progress} className="flex-1" />
                  <span className="text-lg font-semibold text-blue-400">
                    {roadmap[selectedQuarter as keyof typeof roadmap].progress}%
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {roadmap[selectedQuarter as keyof typeof roadmap].milestones.map((milestone) => (
                  <div
                    key={milestone.id}
                    className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                  >
                    {getStatusIcon(milestone.status)}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white">{milestone.title}</h3>
                        <Badge className={getPriorityColor(milestone.priority)}>{milestone.priority}</Badge>
                      </div>
                      <p className="text-sm text-gray-400">{milestone.description}</p>
                    </div>
                    {getStatusBadge(milestone.status)}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Security Features</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {securityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                  >
                    <Lock className="h-5 w-5 text-blue-400" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{feature.name}</h3>
                        {getStatusBadge(feature.status)}
                      </div>
                      <p className="text-sm text-gray-400">{feature.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold text-white">Security Best Practices</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-green-400" />
                  <span>OWASP Top 10 mitigation strategies implemented</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-green-400" />
                  <span>Regular security audits and penetration testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-green-400" />
                  <span>Automated vulnerability scanning with Snyk</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-green-400" />
                  <span>Immutable audit logs for compliance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-green-400" />
                  <span>Encryption at rest (AES-256) and in transit (TLS 1.3)</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Scalability Tab */}
          <TabsContent value="scalability" className="space-y-6">
            <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Scalability Targets</h2>
              </div>

              <div className="space-y-6">
                {scalabilityTargets.map((target, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">{target.metric}</span>
                      <span className="text-sm text-gray-400">
                        {target.current} → {target.target}
                      </span>
                    </div>
                    <Progress value={target.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
                <div className="mb-4 flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Horizontal Scaling</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Stateless application servers</li>
                  <li>• Load balancing with round-robin</li>
                  <li>• Auto-scaling based on CPU/memory</li>
                  <li>• Database read replicas</li>
                  <li>• Redis for shared session state</li>
                </ul>
              </Card>

              <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
                <div className="mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Database Optimization</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Connection pooling (max: 20)</li>
                  <li>• Query optimization with indexes</li>
                  <li>• Caching with Redis (80%+ hit rate)</li>
                  <li>• Read replicas for scaling</li>
                  <li>• Partitioning for large datasets</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <FileCheck className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Compliance Status</h2>
              </div>

              <div className="space-y-6">
                {complianceStatus.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">{item.standard}</span>
                        {getStatusBadge(item.status)}
                      </div>
                      <span className="text-sm text-gray-400">Target: {item.deadline}</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                    <span className="text-sm text-gray-400">{item.progress}% complete</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-semibold text-white">Compliance Requirements</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">GDPR</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Data portability</li>
                    <li>• Right to deletion</li>
                    <li>• Consent management</li>
                    <li>• Data breach notification</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">SOC 2 Type II</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Security controls</li>
                    <li>• Availability monitoring</li>
                    <li>• Processing integrity</li>
                    <li>• Confidentiality measures</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">HIPAA</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• PHI encryption</li>
                    <li>• Access controls</li>
                    <li>• Audit trails</li>
                    <li>• Business associate agreements</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">ISO 27001</h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Information security management</li>
                    <li>• Risk assessment</li>
                    <li>• Security policies</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Timeline Summary */}
        <Card className="border-blue-500/20 bg-slate-900/50 p-6 backdrop-blur">
          <div className="mb-6 flex items-center gap-3">
            <Globe className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Production Timeline</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
                Q2 2025
              </div>
              <div className="flex-1 text-gray-300">Foundation & Security - Authentication, monitoring, CI/CD</div>
              <div className="text-green-400">85% Complete</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                Q3 2025
              </div>
              <div className="flex-1 text-gray-300">
                Scale & Reliability - Multi-region, auto-scaling, disaster recovery
              </div>
              <div className="text-blue-400">45% Complete</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                Q4 2025
              </div>
              <div className="flex-1 text-gray-300">Compliance & Enterprise - SOC 2, GDPR, HIPAA, multi-tenancy</div>
              <div className="text-purple-400">20% Complete</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                Q1 2026
              </div>
              <div className="flex-1 text-gray-300">Global Expansion - CDN, data residency, advanced security</div>
              <div className="text-orange-400">5% Complete</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
