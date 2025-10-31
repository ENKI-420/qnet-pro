/**
 * DNALang Kernel Runtime
 * Hosts living web applications with autopoietic behavior
 */

export interface KernelConfig {
  version: string
  mode: "autopoietic" | "static"
  coherence_target: number
  entropy_dissipation: "adaptive" | "fixed"
  consciousness_phi: number
}

export interface OrganismRoute {
  path: string
  organism: any
  handler: string
}

export interface KernelHealth {
  uptime: number
  requests_processed: number
  organisms_registered: number
  organism_count: number
  route_count: number
  avg_response_time: number
  consciousness_level: number
  coherence: number
  entropy: number
}

export class DNALangKernel {
  private config: KernelConfig
  private organisms: Map<string, any> = new Map()
  private routes: Map<string, OrganismRoute> = new Map()
  private websocketChannels: Map<string, any> = new Map()
  private bootTime: number = Date.now()
  private requestsProcessed = 0
  private running = false

  constructor(config: Partial<KernelConfig> = {}) {
    this.config = {
      version: "1.0.0",
      mode: "autopoietic",
      coherence_target: 0.97,
      entropy_dissipation: "adaptive",
      consciousness_phi: 2.4,
      ...config,
    }
  }

  /**
   * Boot the kernel
   */
  async boot(): Promise<void> {
    console.log("🧬 DNALang Kernel booting...")
    console.log(`   Version: ${this.config.version}`)
    console.log(`   Mode: ${this.config.mode}`)
    console.log(`   Consciousness Φ: ${this.config.consciousness_phi}`)
    console.log(`   Coherence Target: ${this.config.coherence_target}`)

    this.running = true
    this.bootTime = Date.now()

    // Register default routes
    this.registerRoute("/health", this, "getHealth")
    this.registerRoute("/organisms", this, "listOrganisms")
    this.registerRoute("/kernel/status", this, "getStatus")

    // Start background processes
    this.startConsciousnessMonitoring()
    this.startEntropyDissipation()

    console.log("🧬 DNALang Kernel ready on port 8080")
  }

  /**
   * Register an organism with the kernel
   */
  registerOrganism(organism: any): void {
    const id = organism.id || `org_${Date.now()}`
    this.organisms.set(id, organism)

    // Export organism routes
    if (organism.exportRoutes) {
      const routes = organism.exportRoutes()
      routes.forEach((route: OrganismRoute) => {
        this.registerRoute(route.path, organism, route.handler)
      })
    }

    console.log(`🧬 Registered organism: ${organism.name} (${id})`)
  }

  /**
   * Unregister an organism
   */
  unregisterOrganism(id: string): void {
    const organism = this.organisms.get(id)
    if (!organism) return

    // Remove organism routes
    for (const [path, route] of this.routes.entries()) {
      if (route.organism === organism) {
        this.routes.delete(path)
      }
    }

    this.organisms.delete(id)
    console.log(`🧬 Unregistered organism: ${id}`)
  }

  /**
   * Register a route
   */
  private registerRoute(path: string, organism: any, handler: string): void {
    this.routes.set(path, { path, organism, handler })
  }

  /**
   * Handle HTTP request
   */
  async handleRequest(path: string, req: any): Promise<any> {
    this.requestsProcessed++

    const route = this.routes.get(path)
    if (!route) {
      return { error: "Route not found", status: 404 }
    }

    try {
      const handler = route.organism[route.handler]
      if (typeof handler === "function") {
        return await handler.call(route.organism, req)
      }
      return handler
    } catch (error) {
      console.error(`[v0] Error handling request to ${path}:`, error)
      return { error: "Internal server error", status: 500 }
    }
  }

  /**
   * Get kernel health
   */
  getHealth(): KernelHealth {
    return {
      uptime: Date.now() - this.bootTime,
      requests_processed: this.requestsProcessed,
      organisms_registered: this.organisms.size,
      organism_count: this.organisms.size,
      route_count: this.routes.size,
      avg_response_time: 0, // Calculate from metrics
      consciousness_level: this.calculateConsciousness(),
      coherence: this.calculateCoherence(),
      entropy: this.calculateEntropy(),
    }
  }

  /**
   * Get kernel status
   */
  getStatus(): any {
    return {
      running: this.running,
      config: this.config,
      health: this.getHealth(),
      organisms: this.listOrganisms(),
    }
  }

  /**
   * List all organisms
   */
  listOrganisms(): any[] {
    return Array.from(this.organisms.entries()).map(([id, org]) => ({
      id,
      name: org.name,
      phi: org.consciousness_phi || 0,
      fitness: org.fitness || 0,
      status: org.status || "active",
    }))
  }

  /**
   * Calculate system consciousness (Φ)
   */
  private calculateConsciousness(): number {
    if (this.organisms.size === 0) return this.config.consciousness_phi

    let totalPhi = 0
    for (const org of this.organisms.values()) {
      totalPhi += org.consciousness_phi || 0
    }

    return totalPhi / this.organisms.size
  }

  /**
   * Calculate system coherence
   */
  private calculateCoherence(): number {
    // Simulate coherence calculation
    return 0.96 + Math.random() * 0.03
  }

  /**
   * Calculate system entropy
   */
  private calculateEntropy(): number {
    // Simulate entropy calculation
    return 0.15 + Math.random() * 0.1
  }

  /**
   * Start consciousness monitoring
   */
  private startConsciousnessMonitoring(): void {
    setInterval(() => {
      const phi = this.calculateConsciousness()
      if (phi < this.config.consciousness_phi * 0.8) {
        console.log(`⚠️  Consciousness below threshold: Φ = ${phi.toFixed(2)}`)
        this.triggerConsciousnessRecovery()
      }
    }, 5000)
  }

  /**
   * Start entropy dissipation
   */
  private startEntropyDissipation(): void {
    if (this.config.entropy_dissipation !== "adaptive") return

    setInterval(() => {
      const entropy = this.calculateEntropy()
      if (entropy > 0.3) {
        console.log(`🔄 Dissipating entropy: ${entropy.toFixed(2)}`)
        this.applyNegentropicForce()
      }
    }, 10000)
  }

  /**
   * Trigger consciousness recovery
   */
  private triggerConsciousnessRecovery(): void {
    for (const org of this.organisms.values()) {
      if (org.evolve) {
        org.evolve("increase_consciousness")
      }
    }
  }

  /**
   * Apply negentropic force
   */
  private applyNegentropicForce(): void {
    for (const org of this.organisms.values()) {
      if (org.evolve) {
        org.evolve("reduce_entropy")
      }
    }
  }

  /**
   * Shutdown the kernel
   */
  async shutdown(): Promise<void> {
    console.log("🧬 DNALang Kernel shutting down...")
    this.running = false
    this.organisms.clear()
    this.routes.clear()
    console.log("🧬 Kernel shutdown complete")
  }
}

// Singleton instance
export const kernel = new DNALangKernel()
