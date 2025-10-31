"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Dna, FileCode, Zap, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"

interface MigrationStatus {
  current_state: {
    dna_files: number
    gene_files: number
    tsx_files_remaining: number
    ts_files_remaining: number
    total_dnalang_files: number
  }
  migration_progress: {
    total_files: number
    converted_to_dna: number
    converted_to_gene: number
    skipped: number
    errors: number
    completion_percentage: number
  }
  migration_map: Record<string, string>
  timestamp: string
}

export default function DNAMigrationPage() {
  const [status, setStatus] = useState<MigrationStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStatus()
    const interval = setInterval(fetchStatus, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/migration/status")
      const data = await res.json()
      setStatus(data)
    } catch (error) {
      console.error("Failed to fetch migration status:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading || !status) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Dna className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading migration status...</p>
        </div>
      </div>
    )
  }

  const { current_state, migration_progress } = status

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Dna className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">DNA-Lang Migration</h1>
          </div>
          <p className="text-muted-foreground">
            Converting all .tsx, .ts, .html, and .json files to DNA-Lang format (.dna and .gene)
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">Migration Progress</h2>
              <p className="text-sm text-muted-foreground">{migration_progress.completion_percentage}% Complete</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{current_state.total_dnalang_files}</div>
              <div className="text-sm text-muted-foreground">DNA-Lang Files</div>
            </div>
          </div>
          <Progress value={migration_progress.completion_percentage} className="h-3" />
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 border-green-500/20 bg-green-500/5">
            <div className="flex items-center justify-between mb-2">
              <Dna className="h-5 w-5 text-green-500" />
              <Badge variant="outline" className="border-green-500/50 text-green-500">
                Organisms
              </Badge>
            </div>
            <div className="text-2xl font-bold text-green-500">{current_state.dna_files}</div>
            <div className="text-sm text-muted-foreground">.dna files</div>
          </Card>

          <Card className="p-4 border-blue-500/20 bg-blue-500/5">
            <div className="flex items-center justify-between mb-2">
              <FileCode className="h-5 w-5 text-blue-500" />
              <Badge variant="outline" className="border-blue-500/50 text-blue-500">
                Genes
              </Badge>
            </div>
            <div className="text-2xl font-bold text-blue-500">{current_state.gene_files}</div>
            <div className="text-sm text-muted-foreground">.gene files</div>
          </Card>

          <Card className="p-4 border-yellow-500/20 bg-yellow-500/5">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <Badge variant="outline" className="border-yellow-500/50 text-yellow-500">
                Remaining
              </Badge>
            </div>
            <div className="text-2xl font-bold text-yellow-500">
              {current_state.tsx_files_remaining + current_state.ts_files_remaining}
            </div>
            <div className="text-sm text-muted-foreground">Files to convert</div>
          </Card>

          <Card className="p-4 border-purple-500/20 bg-purple-500/5">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle2 className="h-5 w-5 text-purple-500" />
              <Badge variant="outline" className="border-purple-500/50 text-purple-500">
                Converted
              </Badge>
            </div>
            <div className="text-2xl font-bold text-purple-500">
              {migration_progress.converted_to_dna + migration_progress.converted_to_gene}
            </div>
            <div className="text-sm text-muted-foreground">Total migrated</div>
          </Card>
        </div>

        {/* Migration Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Migration Statistics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Files Processed</span>
                <span className="font-semibold">{migration_progress.total_files}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Converted to .dna</span>
                <span className="font-semibold text-green-500">{migration_progress.converted_to_dna}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Converted to .gene</span>
                <span className="font-semibold text-blue-500">{migration_progress.converted_to_gene}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Skipped</span>
                <span className="font-semibold text-yellow-500">{migration_progress.skipped}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Errors</span>
                <span className="font-semibold text-red-500">{migration_progress.errors}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileCode className="h-5 w-5 text-primary" />
              File Type Breakdown
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">.dna (Organisms)</span>
                  <span className="text-sm font-semibold">{current_state.dna_files}</span>
                </div>
                <Progress value={(current_state.dna_files / current_state.total_dnalang_files) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">.gene (Components)</span>
                  <span className="text-sm font-semibold">{current_state.gene_files}</span>
                </div>
                <Progress
                  value={(current_state.gene_files / current_state.total_dnalang_files) * 100}
                  className="h-2"
                />
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Total DNA-Lang Files</span>
                  <span className="text-lg font-bold text-primary">{current_state.total_dnalang_files}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Migration Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Button className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Run Migration Script
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <FileCode className="h-4 w-4" />
              View Migration Map
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowRight className="h-4 w-4" />
              Validate Conversions
            </Button>
          </div>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>To run the migration:</strong>
            </p>
            <code className="text-sm bg-background px-2 py-1 rounded">python3 scripts/migrate-all-to-dna.py</code>
          </div>
        </Card>

        {/* Info */}
        <Card className="p-6 mt-6 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Dna className="h-5 w-5 text-primary" />
            About DNA-Lang Migration
          </h3>
          <p className="text-sm text-muted-foreground mb-4">DNA-Lang uses biological programming paradigms where:</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">•</span>
              <span>
                <strong>.dna files</strong> represent complete organisms (pages, applications, major features)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>
                <strong>.gene files</strong> represent individual genes (components, utilities, smaller units)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-0.5">•</span>
              <span>All files maintain their original functionality while gaining evolutionary capabilities</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
