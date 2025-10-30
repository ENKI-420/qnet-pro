"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dna, Plus, Search, Folder, Clock, Users } from "lucide-react"

export default function ProjectsPage() {
  const [projects] = useState([
    {
      id: "1",
      name: "Quantum Chemistry Simulator",
      description: "VQE-based molecular optimization with DNALang organisms",
      organisms: 5,
      lastModified: "2 hours ago",
      collaborators: 3,
    },
    {
      id: "2",
      name: "Multi-Agent Swarm Research",
      description: "Tetrahedral coherence monitoring and optimization",
      organisms: 12,
      lastModified: "1 day ago",
      collaborators: 2,
    },
    {
      id: "3",
      name: "Quantum Benchmark Suite",
      description: "Automated quantum volume and fidelity testing",
      organisms: 8,
      lastModified: "3 days ago",
      collaborators: 5,
    },
  ])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Dna className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">DNALang</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/projects" className="text-sm font-medium text-foreground">
              Projects
            </Link>
            <Link href="/integrations" className="text-sm text-muted-foreground hover:text-foreground">
              Integrations
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Projects</h1>
            <p className="text-muted-foreground">Manage your quantum organism projects</p>
          </div>
          <Button asChild>
            <Link href="/projects/new">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Link>
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-6 bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 truncate">{project.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Dna className="h-4 w-4" />
                    <span>{project.organisms} organisms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{project.collaborators}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                  <Clock className="h-3 w-3" />
                  <span>Updated {project.lastModified}</span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
