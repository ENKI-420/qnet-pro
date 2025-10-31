import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Server, HardDrive, Cloud, Zap, Shield } from "lucide-react"

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Enterprise Infrastructure
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DNALang on RHEL AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready quantum computing infrastructure powered by Red Hat Enterprise Linux AI across IBM Cloud,
            AWS, Azure, and GCP
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Server className="h-8 w-8 mb-2 text-blue-600" />
              <CardTitle>Enterprise Hardware</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                NVIDIA H100/H200, AMD MI300X, Intel Gaudi 3 support with up to 1.5TB GPU memory
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="h-8 w-8 mb-2 text-purple-600" />
              <CardTitle>Multi-Cloud Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Deploy on IBM Cloud, AWS, Azure, or GCP with consistent performance
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 mb-2 text-green-600" />
              <CardTitle>Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">RHEL AI security hardening with quantum-safe cryptography</p>
            </CardContent>
          </Card>
        </div>

        {/* Hardware Configurations */}
        <Tabs defaultValue="ibm-cloud" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ibm-cloud">IBM Cloud</TabsTrigger>
            <TabsTrigger value="aws">AWS</TabsTrigger>
            <TabsTrigger value="azure">Azure</TabsTrigger>
            <TabsTrigger value="gcp">GCP</TabsTrigger>
          </TabsList>

          <TabsContent value="ibm-cloud">
            <Card>
              <CardHeader>
                <CardTitle>IBM Cloud Infrastructure</CardTitle>
                <CardDescription>DNALang quantum workloads on IBM Cloud with RHEL AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <HardwareConfig
                    name="Quantum Development"
                    instance="gx3d-48x240x2a100p"
                    gpu="2x NVIDIA A100"
                    memory="160 GB"
                    storage="3 TB"
                    workload="Organism development, testing"
                    price="$4.50/hour"
                  />
                  <HardwareConfig
                    name="Production Inference"
                    instance="gx3d-160x1792x8h100"
                    gpu="8x NVIDIA H100"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Large-scale quantum simulations"
                    price="$32.77/hour"
                  />
                  <HardwareConfig
                    name="Enterprise Training"
                    instance="gx3d-160x1792x8h200"
                    gpu="8x NVIDIA H200"
                    memory="1128 GB"
                    storage="3 TB"
                    workload="Multi-organism training, SDG"
                    price="$42.00/hour"
                  />
                  <HardwareConfig
                    name="Maximum Performance"
                    instance="gx3d-208x1792x8mi300x"
                    gpu="8x AMD MI300X"
                    memory="1536 GB"
                    storage="3 TB"
                    workload="Tetrahedral swarm coordination"
                    price="$38.50/hour"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aws">
            <Card>
              <CardHeader>
                <CardTitle>AWS Infrastructure</CardTitle>
                <CardDescription>DNALang quantum workloads on Amazon Web Services with RHEL AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <HardwareConfig
                    name="Quantum Development"
                    instance="p4d.24xlarge"
                    gpu="8x NVIDIA A100 (40GB)"
                    memory="320 GB"
                    storage="3 TB"
                    workload="Organism development, testing"
                    price="$32.77/hour"
                  />
                  <HardwareConfig
                    name="Production Inference"
                    instance="p4de.24xlarge"
                    gpu="8x NVIDIA A100 (80GB)"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Large-scale quantum simulations"
                    price="$40.97/hour"
                  />
                  <HardwareConfig
                    name="Enterprise Training"
                    instance="p5.48xlarge"
                    gpu="8x NVIDIA H100"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Multi-organism training, SDG"
                    price="$98.32/hour"
                  />
                  <HardwareConfig
                    name="Cost-Optimized"
                    instance="g6e.48xlarge"
                    gpu="8x NVIDIA L40S"
                    memory="384 GB"
                    storage="3 TB"
                    workload="Development and testing"
                    price="$21.12/hour"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="azure">
            <Card>
              <CardHeader>
                <CardTitle>Azure Infrastructure</CardTitle>
                <CardDescription>DNALang quantum workloads on Microsoft Azure with RHEL AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <HardwareConfig
                    name="Quantum Development"
                    instance="Standard_ND96asr_A100_v4"
                    gpu="4x NVIDIA A100"
                    memory="320 GB"
                    storage="3 TB"
                    workload="Organism development, testing"
                    price="$27.20/hour"
                  />
                  <HardwareConfig
                    name="Production Inference"
                    instance="Standard_ND96amsr_A100_v4"
                    gpu="8x NVIDIA A100"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Large-scale quantum simulations"
                    price="$54.40/hour"
                  />
                  <HardwareConfig
                    name="Enterprise Training"
                    instance="Standard_ND96isr_H100_v5"
                    gpu="8x NVIDIA H100"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Multi-organism training, SDG"
                    price="$89.60/hour"
                  />
                  <HardwareConfig
                    name="Maximum Performance"
                    instance="Standard_ND96is_MI300X_v5"
                    gpu="8x AMD MI300X"
                    memory="1535 GB"
                    storage="3 TB"
                    workload="Tetrahedral swarm coordination"
                    price="$76.80/hour"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gcp">
            <Card>
              <CardHeader>
                <CardTitle>GCP Infrastructure</CardTitle>
                <CardDescription>DNALang quantum workloads on Google Cloud Platform with RHEL AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <HardwareConfig
                    name="Quantum Development"
                    instance="a2-highgpu-8g"
                    gpu="8x NVIDIA A100"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Organism development, testing"
                    price="$29.39/hour"
                  />
                  <HardwareConfig
                    name="Production Inference"
                    instance="a3-highgpu-8g"
                    gpu="8x NVIDIA H100"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Large-scale quantum simulations"
                    price="$68.40/hour"
                  />
                  <HardwareConfig
                    name="Enterprise Training"
                    instance="a3-megagpu-8g"
                    gpu="8x NVIDIA H100 (NVLink)"
                    memory="640 GB"
                    storage="3 TB"
                    workload="Multi-organism training, SDG"
                    price="$82.08/hour"
                  />
                  <HardwareConfig
                    name="Cost-Optimized"
                    instance="g2-standard-96"
                    gpu="4x NVIDIA L4"
                    memory="96 GB"
                    storage="3 TB"
                    workload="Development and testing"
                    price="$8.52/hour"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Performance Benchmarks */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>DNALang Performance Benchmarks</CardTitle>
            <CardDescription>
              Quantum organism execution performance across different hardware configurations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Hardware</th>
                    <th className="text-left p-3">Organisms/Hour</th>
                    <th className="text-left p-3">Avg Fidelity</th>
                    <th className="text-left p-3">Coherence Time</th>
                    <th className="text-left p-3">Cost/Organism</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">8x NVIDIA H200</td>
                    <td className="p-3">2,847</td>
                    <td className="p-3">98.7%</td>
                    <td className="p-3">127μs</td>
                    <td className="p-3">$0.015</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">8x AMD MI300X</td>
                    <td className="p-3">3,124</td>
                    <td className="p-3">98.5%</td>
                    <td className="p-3">132μs</td>
                    <td className="p-3">$0.012</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">8x NVIDIA H100</td>
                    <td className="p-3">2,456</td>
                    <td className="p-3">98.3%</td>
                    <td className="p-3">118μs</td>
                    <td className="p-3">$0.018</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">8x NVIDIA A100</td>
                    <td className="p-3">1,892</td>
                    <td className="p-3">97.9%</td>
                    <td className="p-3">105μs</td>
                    <td className="p-3">$0.022</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">8x NVIDIA L40S</td>
                    <td className="p-3">1,234</td>
                    <td className="p-3">97.2%</td>
                    <td className="p-3">89μs</td>
                    <td className="p-3">$0.017</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Deployment Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Quick Deploy</CardTitle>
              <CardDescription>One-click deployment to your cloud provider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-transparent" variant="outline">
                <Cloud className="mr-2 h-4 w-4" />
                Deploy to IBM Cloud
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <Cloud className="mr-2 h-4 w-4" />
                Deploy to AWS
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <Cloud className="mr-2 h-4 w-4" />
                Deploy to Azure
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <Cloud className="mr-2 h-4 w-4" />
                Deploy to GCP
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure as Code</CardTitle>
              <CardDescription>Terraform and Ansible configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-transparent" variant="outline">
                <HardDrive className="mr-2 h-4 w-4" />
                Download Terraform Modules
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <HardDrive className="mr-2 h-4 w-4" />
                Download Ansible Playbooks
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <HardDrive className="mr-2 h-4 w-4" />
                Download Kubernetes Manifests
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                <HardDrive className="mr-2 h-4 w-4" />
                Download Docker Compose
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Features */}
        <Card>
          <CardHeader>
            <CardTitle>Enterprise Features on RHEL AI</CardTitle>
            <CardDescription>Production-ready capabilities for quantum computing at scale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <FeatureItem icon={<CheckCircle2 />} text="99.99% SLA with multi-region failover" />
                <FeatureItem icon={<CheckCircle2 />} text="Auto-scaling based on quantum workload" />
                <FeatureItem icon={<CheckCircle2 />} text="Real-time performance monitoring" />
                <FeatureItem icon={<CheckCircle2 />} text="Integrated logging and alerting" />
                <FeatureItem icon={<CheckCircle2 />} text="Quantum job queue management" />
              </div>
              <div className="space-y-3">
                <FeatureItem icon={<CheckCircle2 />} text="Enterprise SSO integration" />
                <FeatureItem icon={<CheckCircle2 />} text="Role-based access control (RBAC)" />
                <FeatureItem icon={<CheckCircle2 />} text="Audit logging and compliance" />
                <FeatureItem icon={<CheckCircle2 />} text="Quantum-safe encryption" />
                <FeatureItem icon={<CheckCircle2 />} text="24/7 enterprise support" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function HardwareConfig({
  name,
  instance,
  gpu,
  memory,
  storage,
  workload,
  price,
}: {
  name: string
  instance: string
  gpu: string
  memory: string
  storage: string
  workload: string
  price: string
}) {
  return (
    <div className="border rounded-lg p-4 hover:border-primary transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{instance}</p>
        </div>
        <Badge variant="secondary">{price}</Badge>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
        <div>
          <span className="text-muted-foreground">GPU:</span> {gpu}
        </div>
        <div>
          <span className="text-muted-foreground">Memory:</span> {memory}
        </div>
        <div>
          <span className="text-muted-foreground">Storage:</span> {storage}
        </div>
        <div>
          <span className="text-muted-foreground">Workload:</span> {workload}
        </div>
      </div>
      <Button size="sm" className="w-full">
        <Zap className="mr-2 h-3 w-3" />
        Deploy Configuration
      </Button>
    </div>
  )
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-green-600">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  )
}
