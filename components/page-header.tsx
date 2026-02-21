interface PageHeaderProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">{title}</h1>
        <p className="text-sm text-muted-foreground max-w-2xl text-pretty leading-relaxed">{description}</p>
      </div>
      {children && <div className="flex items-center gap-3">{children}</div>}
    </div>
  )
}
