"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, Eye, TrendingUp } from "lucide-react"

export function LambdaPhiConsole() {
  return (
    <Card className="mb-16 bg-card/60 backdrop-blur-md border-lambda-phi/30 shadow-2xl shadow-lambda-phi/20">
      <CardHeader>
        <CardTitle className="text-4xl lambda-phi-glow flex items-center gap-3">
          <Eye className="h-10 w-10 animate-lambda-phi-pulse" />
          ΛΦ Reflex Console
        </CardTitle>
        <p className="text-muted-foreground mt-2">Holographic control plane for Universal Memory Constant operations</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-lambda-phi/10 border border-lambda-phi/30">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-lambda-phi animate-coherence-pulse" />
              <span className="text-sm font-semibold text-lambda-phi">Lambda-Phi Constant</span>
            </div>
            <div className="text-3xl font-bold lambda-phi-glow">2.1764e-8</div>
            <div className="text-xs text-muted-foreground mt-1">s⁻¹ (Planck-normalized)</div>
          </div>

          <div className="p-4 rounded-lg bg-magnetic-blue/10 border border-magnetic-blue/30">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-magnetic-blue animate-coherence-pulse" />
              <span className="text-sm font-semibold text-magnetic-blue">System Coherence</span>
            </div>
            <div className="text-3xl font-bold text-magnetic-blue">98.47%</div>
            <div className="text-xs text-muted-foreground mt-1">Active quantum states</div>
          </div>

          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary animate-coherence-pulse" />
              <span className="text-sm font-semibold text-primary">Active Jobs</span>
            </div>
            <div className="text-3xl font-bold text-primary">3</div>
            <div className="text-xs text-muted-foreground mt-1">Phase-conjugate simulations</div>
          </div>

          <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-5 w-5 text-secondary animate-coherence-pulse" />
              <span className="text-sm font-semibold text-secondary">Normalized ΛΦ</span>
            </div>
            <div className="text-3xl font-bold text-secondary">1e-17</div>
            <div className="text-xs text-muted-foreground mt-1">Informational Ricci flow</div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">API Endpoints</h3>
          <div className="grid gap-2">
            {[
              { method: "GET", path: "/api/health", desc: "Returns ΛΦ, coherence, and Planck metrics" },
              {
                method: "POST",
                path: "/api/consciousness/phase-conjugate",
                desc: "Launches phase-conjugate simulation",
              },
              { method: "GET", path: "/api/jobs/{id}", desc: "Tracks dynamic coherence recovery" },
              { method: "GET", path: "/api/constants/lambda-phi", desc: "Exposes theoretical definition" },
            ].map((endpoint, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                <Badge variant="outline" className="text-lambda-phi border-lambda-phi/50">
                  {endpoint.method}
                </Badge>
                <div className="flex-1">
                  <code className="text-sm text-lambda-phi font-mono">{endpoint.path}</code>
                  <p className="text-xs text-muted-foreground mt-1">{endpoint.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
