"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  label: string
  value: string
  description?: string
  icon: LucideIcon
  trend?: { value: string; positive: boolean }
}

export function MetricCard({ label, value, description, icon: Icon, trend }: MetricCardProps) {
  return (
    <Card className="bg-card border-border">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold tracking-tight">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          <div className="p-2 rounded-lg bg-secondary">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        {trend && (
          <div className="mt-3 pt-3 border-t border-border">
            <span className={`text-xs font-medium ${trend.positive ? "text-emerald-400" : "text-red-400"}`}>
              {trend.positive ? "+" : ""}{trend.value}
            </span>
            <span className="text-xs text-muted-foreground ml-1">from last cycle</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
