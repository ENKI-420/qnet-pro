"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Shield, Cpu } from "lucide-react"

export function QuantumMetrics() {
  const metrics = [
    {
      icon: Zap,
      title: "Quantum Parallelism",
      value: "O(√n)",
      comparison: "vs O(n) traditional",
      color: "text-primary",
      bgColor: "bg-primary/20",
      borderColor: "border-primary/50",
    },
    {
      icon: TrendingUp,
      title: "Evolution Rate",
      value: "∞",
      comparison: "Continuous adaptation",
      color: "text-secondary",
      bgColor: "bg-secondary/20",
      borderColor: "border-secondary/50",
    },
    {
      icon: Shield,
      title: "Immune System",
      value: "100%",
      comparison: "Self-healing components",
      color: "text-accent",
      bgColor: "bg-accent/20",
      borderColor: "border-accent/50",
    },
    {
      icon: Cpu,
      title: "Quantum States",
      value: "2ⁿ",
      comparison: "Superposition power",
      color: "text-chart-4",
      bgColor: "bg-chart-4/20",
      borderColor: "border-chart-4/50",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, i) => (
        <Card
          key={i}
          className={`bg-card/50 backdrop-blur-sm ${metric.borderColor} animate-float hover:scale-105 transition-transform duration-300`}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${metric.bgColor} ${metric.borderColor} border animate-neural-pulse`}>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <Badge variant="outline" className={`${metric.color} ${metric.borderColor}`}>
                Superior
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <CardTitle className={`text-3xl font-bold ${metric.color} bio-glow`}>{metric.value}</CardTitle>
            <div className="text-sm font-semibold text-foreground">{metric.title}</div>
            <div className="text-xs text-muted-foreground">{metric.comparison}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
