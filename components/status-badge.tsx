"use client"

interface StatusBadgeProps {
  status: "active" | "ready" | "evolving" | "busy" | "queued" | "completed" | "running" | "prototype" | "approval"
  className?: string
}

const statusConfig: Record<string, { label: string; dotColor: string; textColor: string }> = {
  active: { label: "Active", dotColor: "bg-emerald-500", textColor: "text-emerald-400" },
  ready: { label: "Ready", dotColor: "bg-blue-500", textColor: "text-blue-400" },
  evolving: { label: "Evolving", dotColor: "bg-amber-500", textColor: "text-amber-400" },
  busy: { label: "Busy", dotColor: "bg-orange-500", textColor: "text-orange-400" },
  queued: { label: "Queued", dotColor: "bg-yellow-500", textColor: "text-yellow-400" },
  completed: { label: "Completed", dotColor: "bg-emerald-500", textColor: "text-emerald-400" },
  running: { label: "Running", dotColor: "bg-blue-500", textColor: "text-blue-400" },
  prototype: { label: "Prototype", dotColor: "bg-orange-500", textColor: "text-orange-400" },
  approval: { label: "Pending", dotColor: "bg-yellow-500", textColor: "text-yellow-400" },
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.active

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${config.textColor} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dotColor} animate-status-pulse`} />
      {config.label}
    </span>
  )
}
