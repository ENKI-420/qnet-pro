"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  Clock,
  Target,
  Rocket,
  Database,
  Lock,
  Activity,
  Globe,
  Code2,
  GitBranch,
  Server,
  Cloud,
} from "lucide-react"

export default function StrategicPlanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">DNALang Strategic Development Plan</h1>
              <p className="text-sm text-muted-foreground">Enterprise-Scale Production Roadmap 2025-2026</p>
            </div>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Executive Summary */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Executive Summary</h2>
              <p className="text-muted-foreground mb-4">
                Comprehensive strategic plan for advancing DNALang from a cloud-ready quantum platform to an
                enterprise-grade production system with global reach, complete security compliance, and seamless IBM
                Cloud integration.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">$1.35M</div>
                  <div className="text-xs text-muted-foreground">12-Month Investment</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">20</div>
                  <div className="text-xs text-muted-foreground">Team Members</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">100K</div>
                  <div className="text-xs text-muted-foreground">Target Users</div>
                </div>
                <div className="bg-background/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">99.99%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Current Status */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Current Platform Status</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <div className="font-semibold">IBM Quantum Integration</div>
                  <div className="text-xs text-muted-foreground">Production Ready</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Connected Backends</span>
                  <span className="font-medium">4 systems (572 qubits)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-medium">98.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">API Endpoint</span>
                  <span className="font-medium">localhost:8004</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Server className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold">OpenShift Deployment</div>
                  <div className="text-xs text-muted-foreground">Configuration Complete</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Container Orchestration</span>
                  <span className="font-medium">Kubernetes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Auto-scaling</span>
                  <span className="font-medium">Enabled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Mesh</span>
                  <span className="font-medium">Istio</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <div className="font-semibold">DNA Library</div>
                  <div className="text-xs text-muted-foreground">28 Patterns Tested</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Test Success Rate</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Living Organisms</span>
                  <span className="font-medium">5 deployed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Evolution Cycles</span>
                  <span className="font-medium">Active</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quarterly Roadmap */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quarterly Development Roadmap</h2>
          <div className="space-y-4">
            {/* Q2 2025 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Q2 2025: Foundation & Security</h3>
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      85% Complete
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Establish enterprise-grade security, authentication, and monitoring infrastructure
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Enterprise authentication (SSO, MFA)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Security hardening (OWASP Top 10)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Database optimization (3 read replicas)</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Complete monitoring stack (Prometheus + Grafana)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>Automated CI/CD pipeline</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>IBM Cloud Catalog listing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Q3 2025 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Q3 2025: Scale & Reliability</h3>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                      45% Complete
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Multi-region deployment, auto-scaling, and advanced quantum features
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Multi-region deployment (5+ regions)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Auto-scaling infrastructure</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Advanced quantum benchmarking</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Enterprise RBAC with custom roles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Watson AI integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>IBM Quantum Network partnership</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Q4 2025 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Q4 2025: Compliance & Enterprise</h3>
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20">
                      15% Complete
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Security certifications, compliance frameworks, and enterprise features
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>SOC 2 Type II certification</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>GDPR compliance implementation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>HIPAA compliance for health data</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Advanced security features (SIEM)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Disaster recovery & business continuity</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Enterprise support tier launch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Q1 2026 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">Q1 2026: Global Expansion</h3>
                    <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20">
                      Planned
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    IBM Think 2026 presentation, global deployment, and ecosystem expansion
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>IBM Think 2026 main stage demo</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Global deployment (APAC region)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>IBM Cloud Pak integration</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Enterprise customer case studies</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Research paper publications</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-yellow-500" />
                        <span>Developer marketplace launch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Strategic Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Scaling</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-region deployment across 5+ regions</li>
                <li>• Auto-scaling based on quantum job queue</li>
                <li>• Load balancing with global CDN</li>
                <li>• Database sharding for 100K+ users</li>
                <li>• Horizontal pod autoscaling</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reliability</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 99.99% uptime SLA guarantee</li>
                <li>• Blue-green deployments (zero downtime)</li>
                <li>• Automated failover and recovery</li>
                <li>• Circuit breakers for fault tolerance</li>
                <li>• Comprehensive monitoring & alerting</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SOC 2 Type II certification</li>
                <li>• End-to-end encryption (TLS 1.3)</li>
                <li>• IBM Key Protect integration</li>
                <li>• RBAC with custom roles</li>
                <li>• Audit logging for compliance</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Architecture Improvements */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Architecture Enhancements</h2>
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data Management
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PostgreSQL with 3 read replicas</li>
                  <li>• Redis cluster for caching</li>
                  <li>• IBM Cloud Object Storage for artifacts</li>
                  <li>• Automated backups with PITR</li>
                  <li>• Data encryption at rest (AES-256)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Authentication & Collaboration
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• IBM AppID for enterprise SSO</li>
                  <li>• Multi-factor authentication (MFA)</li>
                  <li>• SAML 2.0 and LDAP integration</li>
                  <li>• Team workspaces and sharing</li>
                  <li>• Real-time collaboration features</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-primary" />
                  Continuous Deployment
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• GitOps with ArgoCD</li>
                  <li>• Automated testing (unit, integration, e2e)</li>
                  <li>• Canary deployments (10% → 50% → 100%)</li>
                  <li>• Automated rollback on errors</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Performance Optimization
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• API response time p99 &lt; 100ms</li>
                  <li>• Database query optimization</li>
                  <li>• CDN for static assets</li>
                  <li>• Connection pooling and caching</li>
                  <li>• Quantum job batching</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Success Metrics */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Success Metrics & KPIs</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Technical KPIs</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Uptime</span>
                    <span className="font-medium">99.97% → 99.99%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "99.97%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">API Latency (p99)</span>
                    <span className="font-medium">287ms → &lt;100ms</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "65%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Quantum Success Rate</span>
                    <span className="font-medium">98.2% → 99.5%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: "98.2%" }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Business KPIs</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-medium">1.2K → 100K</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "1.2%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Enterprise Customers</span>
                    <span className="font-medium">3 → 50</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "6%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Monthly Revenue</span>
                    <span className="font-medium">$59K → $500K</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: "11.8%" }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-3">Compliance KPIs</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">SOC 2 Certification</span>
                    <span className="font-medium">In Progress</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: "60%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">GDPR Compliance</span>
                    <span className="font-medium">85% Complete</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "85%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Security Audits</span>
                    <span className="font-medium">Quarterly</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Investment & Team */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Investment Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Engineering Team (12 people)</span>
                <span className="font-semibold">$720K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Infrastructure & Cloud</span>
                <span className="font-semibold">$240K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Security & Compliance</span>
                <span className="font-semibold">$180K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Marketing & Sales (4 people)</span>
                <span className="font-semibold">$120K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Operations & Support (4 people)</span>
                <span className="font-semibold">$90K</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="font-semibold">Total 12-Month Investment</span>
                <span className="text-xl font-bold text-primary">$1.35M</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Team Structure</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Engineering (12)</div>
                  <div className="text-xs text-muted-foreground">Backend, Frontend, DevOps, Quantum</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Security & Compliance (2)</div>
                  <div className="text-xs text-muted-foreground">Security Engineer, Compliance Manager</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Marketing & Sales (4)</div>
                  <div className="text-xs text-muted-foreground">Product Marketing, Sales Engineers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Operations & Support (4)</div>
                  <div className="text-xs text-muted-foreground">SRE, Customer Success, Technical Support</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Immediate Next Steps (Next 90 Days)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Complete Security Foundation</div>
                  <div className="text-sm text-muted-foreground">Finish security hardening & MFA implementation</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Deploy Multi-Region</div>
                  <div className="text-sm text-muted-foreground">Implement geographic redundancy across 3 regions</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Enterprise Auth</div>
                  <div className="text-sm text-muted-foreground">Deploy SAML/LDAP for enterprise customers</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Monitoring Completion</div>
                  <div className="text-sm text-muted-foreground">Full observability stack with alerts</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">IBM Cloud Catalog</div>
                  <div className="text-sm text-muted-foreground">List DNALang in IBM Cloud Catalog</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Performance Testing</div>
                  <div className="text-sm text-muted-foreground">Load test for 10K concurrent users</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Documentation Links */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Related Documentation</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/production-roadmap">
                <Target className="h-4 w-4 mr-2" />
                Production Roadmap
              </Link>
            </Button>
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/ibm-partnership">
                <Cloud className="h-4 w-4 mr-2" />
                IBM Partnership
              </Link>
            </Button>
            <Button variant="outline" className="justify-start bg-transparent" asChild>
              <Link href="/infrastructure">
                <Server className="h-4 w-4 mr-2" />
                Infrastructure
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
