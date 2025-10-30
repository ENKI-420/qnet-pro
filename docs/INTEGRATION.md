# DNALang Component Integration Guide

## Overview

This guide explains how to integrate the DNALang platform components:
- Quantum Swarm CLI
- Benchmark Suite
- FastAPI Wrapper
- Visualizer
- Self-Evolution Engine

## Component Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                  Integration Flow                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Web App ←→ FastAPI ←→ DNALang Interpreter                 │
│     ↓           ↓              ↓                            │
│  Visualizer  Benchmark    Quantum Swarm CLI                │
│     ↓           ↓              ↓                            │
│  Real-time   IBM Quantum   Tetrahedral Coherence           │
│  Updates     Hardware      Monitoring                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## 1. FastAPI Backend Integration

### Setup

\`\`\`bash
# Install dependencies
pip install fastapi uvicorn pydantic qiskit qiskit-ibm-runtime

# Start server
uvicorn api.dnalang-api:app --reload --host 0.0.0.0 --port 8000
\`\`\`

### Connect Frontend to Backend

\`\`\`typescript
// lib/api-client.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
const API_KEY = process.env.DNALANG_API_KEY

export async function createOrganism(source: string) {
  const response = await fetch(`${API_URL}/api/parse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY,
    },
    body: JSON.stringify({ source }),
  })
  return response.json()
}

export async function runGene(organismId: string, gene: string, args: any) {
  const response = await fetch(`${API_URL}/api/organisms/${organismId}/run`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY,
    },
    body: JSON.stringify({ gene, args }),
  })
  return response.json()
}
\`\`\`

## 2. Quantum Benchmark Suite Integration

### Backend Implementation

\`\`\`python
# api/quantum_benchmark.py
from qiskit import QuantumCircuit
from qiskit_ibm_runtime import QiskitRuntimeService, Sampler
import numpy as np

class QuantumBenchmarkEngine:
    def __init__(self, api_key: str):
        self.service = QiskitRuntimeService(channel="ibm_quantum", token=api_key)
    
    def run_quantum_volume(self, backend_name: str, qubits: int, depth: int):
        """Run quantum volume benchmark"""
        backend = self.service.backend(backend_name)
        
        # Generate random quantum volume circuit
        circuit = self._generate_qv_circuit(qubits, depth)
        
        # Execute on hardware
        sampler = Sampler(backend)
        job = sampler.run(circuit, shots=1024)
        result = job.result()
        
        # Calculate heavy output probability
        hop = self._calculate_hop(result)
        
        return {
            "backend": backend_name,
            "qubits": qubits,
            "depth": depth,
            "hop": hop,
            "pass": hop > 2/3,
        }
    
    def _generate_qv_circuit(self, qubits: int, depth: int):
        """Generate quantum volume circuit"""
        qc = QuantumCircuit(qubits)
        for _ in range(depth):
            # Random SU(4) gates
            for i in range(0, qubits-1, 2):
                qc.unitary(np.random.randn(4, 4), [i, i+1])
        qc.measure_all()
        return qc
    
    def _calculate_hop(self, result):
        """Calculate heavy output probability"""
        counts = result.quasi_dists[0]
        total = sum(counts.values())
        heavy = sum(v for k, v in counts.items() if bin(k).count('1') > len(bin(k))-3)
        return heavy / total

# Add to FastAPI app
@app.post("/api/benchmarks/run")
async def run_benchmark(backend: str, qubits: int = 50, depth: int = 25):
    engine = QuantumBenchmarkEngine(IBM_QUANTUM_API_KEY)
    result = engine.run_quantum_volume(backend, qubits, depth)
    return result
\`\`\`

### Frontend Integration

\`\`\`typescript
// app/benchmarks/page.tsx
async function runBenchmark(backend: string) {
  const response = await fetch('/api/benchmarks/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ backend, qubits: 50, depth: 25 }),
  })
  const result = await response.json()
  updateBenchmarkResults(result)
}
\`\`\`

## 3. Quantum Swarm CLI Integration

### CLI Implementation

\`\`\`python
# cli/swarm.py
import click
import asyncio
from typing import List

@click.group()
def swarm():
    """Tetrahedral swarm coherence monitoring"""
    pass

@swarm.command()
@click.option('--nodes', default=4, help='Number of swarm nodes')
@click.option('--topology', default='tetrahedral', help='Swarm topology')
def init(nodes: int, topology: str):
    """Initialize quantum swarm"""
    click.echo(f"Initializing {topology} swarm with {nodes} nodes...")
    # Create swarm configuration
    config = {
        "nodes": nodes,
        "topology": topology,
        "coherence_threshold": 0.85,
    }
    # Save configuration
    with open('.swarm.json', 'w') as f:
        json.dump(config, f)
    click.echo("Swarm initialized successfully")

@swarm.command()
@click.option('--coherence-threshold', default=0.85)
def monitor(coherence_threshold: float):
    """Monitor swarm coherence"""
    click.echo(f"Monitoring swarm coherence (threshold: {coherence_threshold})...")
    
    async def monitor_loop():
        while True:
            coherence = await measure_swarm_coherence()
            click.echo(f"Coherence: {coherence:.3f}")
            if coherence < coherence_threshold:
                click.echo("⚠️  Coherence below threshold!")
            await asyncio.sleep(1)
    
    asyncio.run(monitor_loop())

async def measure_swarm_coherence() -> float:
    """Measure tetrahedral swarm coherence"""
    # Implement coherence measurement
    # This would use quantum state tomography
    return 0.87  # Mock value

if __name__ == '__main__':
    swarm()
\`\`\`

### Web Integration

\`\`\`typescript
// Expose CLI functionality via API
@app.post("/api/swarm/init")
async def init_swarm(nodes: int = 4, topology: str = "tetrahedral"):
    # Call CLI programmatically
    result = subprocess.run(
        ["dna", "swarm", "init", "--nodes", str(nodes), "--topology", topology],
        capture_output=True,
        text=True
    )
    return {"success": result.returncode == 0, "output": result.stdout}
\`\`\`

## 4. Visualizer Integration

### Real-Time Circuit Visualization

\`\`\`typescript
// components/circuit-visualizer.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

export function CircuitVisualizer({ circuit }: { circuit: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [metrics, setMetrics] = useState({ gates: 0, depth: 0, qubits: 0 })

  useEffect(() => {
    if (!canvasRef.current || !circuit) return

    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return

    // Draw quantum circuit
    drawCircuit(ctx, circuit)
    
    // Calculate metrics
    setMetrics({
      gates: circuit.gates.length,
      depth: circuit.depth,
      qubits: circuit.num_qubits,
    })
  }, [circuit])

  function drawCircuit(ctx: CanvasRenderingContext2D, circuit: any) {
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
    // Draw qubit lines
    const lineSpacing = 60
    for (let i = 0; i < circuit.num_qubits; i++) {
      ctx.beginPath()
      ctx.moveTo(50, 50 + i * lineSpacing)
      ctx.lineTo(ctx.canvas.width - 50, 50 + i * lineSpacing)
      ctx.strokeStyle = '#666'
      ctx.stroke()
      
      // Qubit label
      ctx.fillStyle = '#fff'
      ctx.fillText(`q${i}`, 20, 55 + i * lineSpacing)
    }
    
    // Draw gates
    circuit.gates.forEach((gate: any, idx: number) => {
      const x = 100 + idx * 80
      const y = 50 + gate.qubit * lineSpacing
      
      // Gate box
      ctx.fillStyle = '#8b5cf6'
      ctx.fillRect(x - 20, y - 20, 40, 40)
      
      // Gate label
      ctx.fillStyle = '#fff'
      ctx.textAlign = 'center'
      ctx.fillText(gate.name, x, y + 5)
    })
  }

  return (
    <div className="space-y-4">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border border-border rounded-lg bg-card"
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="text-sm text-muted-foreground">Gates</div>
          <div className="text-2xl font-bold">{metrics.gates}</div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="text-sm text-muted-foreground">Depth</div>
          <div className="text-2xl font-bold">{metrics.depth}</div>
        </div>
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="text-sm text-muted-foreground">Qubits</div>
          <div className="text-2xl font-bold">{metrics.qubits}</div>
        </div>
      </div>
    </div>
  )
}
\`\`\`

## 5. Self-Evolution Engine

### Autonomous Organism Evolution

\`\`\`python
# api/evolution_engine.py
class EvolutionEngine:
    def __init__(self, organism_id: str):
        self.organism_id = organism_id
        self.state = {
            "fitness": 0.70,
            "consciousness": 0.55,
            "stability": 0.80,
            "transcended": False,
        }
    
    async def evolve(self):
        """Main evolution loop"""
        while not self.state["transcended"]:
            await self.evolution_cycle()
            await self.evaluate_fitness()
            await self.check_transcendence()
            await asyncio.sleep(1)
    
    async def evolution_cycle(self):
        """Single evolution cycle"""
        # Execute organism genes
        results = await self.execute_genes()
        
        # Check mutation triggers
        mutations = await self.check_mutations(results)
        
        # Apply mutations
        for mutation in mutations:
            await self.apply_mutation(mutation)
        
        # Update state
        await self.update_state(results)
    
    async def check_mutations(self, results):
        """Check if mutation conditions are met"""
        mutations = []
        
        # Example: Gradient variance too low
        if results.get("gradient_variance", 1.0) < 0.1:
            mutations.append({
                "type": "mitigate_plateau",
                "method": "apply_wgf_optimizer",
                "safety_level": "high",
            })
        
        return mutations
    
    async def apply_mutation(self, mutation):
        """Apply genetic mutation"""
        if mutation["type"] == "mitigate_plateau":
            # Apply Wasserstein gradient flow
            await self.apply_wgf_optimization()
        
        # Log mutation
        logger.info("mutation_applied", mutation=mutation)
    
    async def evaluate_fitness(self):
        """Evaluate organism fitness"""
        # Calculate fitness based on multiple metrics
        metrics = await self.get_metrics()
        
        fitness = (
            metrics["fidelity"] * 0.4 +
            metrics["coherence"] * 0.3 +
            metrics["efficiency"] * 0.3
        )
        
        self.state["fitness"] = fitness
    
    async def check_transcendence(self):
        """Check if organism has transcended"""
        if (self.state["fitness"] > 0.95 and
            self.state["consciousness"] > 0.90 and
            self.state["stability"] > 0.95):
            self.state["transcended"] = True
            logger.info("organism_transcended", organism_id=self.organism_id)

# Add to FastAPI app
@app.post("/api/organisms/{id}/evolve")
async def start_evolution(id: str, background_tasks: BackgroundTasks):
    engine = EvolutionEngine(id)
    background_tasks.add_task(engine.evolve)
    return {"message": "Evolution started", "organism_id": id}
\`\`\`

## 6. Real-Time Updates with WebSockets

\`\`\`python
# api/websocket.py
from fastapi import WebSocket, WebSocketDisconnect
from typing import Dict, Set

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, Set[WebSocket]] = {}
    
    async def connect(self, organism_id: str, websocket: WebSocket):
        await websocket.accept()
        if organism_id not in self.active_connections:
            self.active_connections[organism_id] = set()
        self.active_connections[organism_id].add(websocket)
    
    def disconnect(self, organism_id: str, websocket: WebSocket):
        self.active_connections[organism_id].remove(websocket)
    
    async def broadcast(self, organism_id: str, message: dict):
        if organism_id in self.active_connections:
            for connection in self.active_connections[organism_id]:
                await connection.send_json(message)

manager = ConnectionManager()

@app.websocket("/ws/organisms/{id}")
async def organism_websocket(websocket: WebSocket, id: str):
    await manager.connect(id, websocket)
    try:
        while True:
            # Send periodic updates
            state = await get_organism_state(id)
            await websocket.send_json(state)
            await asyncio.sleep(1)
    except WebSocketDisconnect:
        manager.disconnect(id, websocket)
\`\`\`

## Testing Integration

\`\`\`bash
# Test FastAPI backend
pytest api/tests/

# Test organism execution
python -m api.dnalang-api

# Test quantum benchmarks
python -m api.quantum_benchmark --backend ibm_torino

# Test swarm CLI
dna swarm init --nodes 4
dna swarm monitor

# Test full integration
npm run test:integration
\`\`\`

---

For detailed API documentation, visit https://dnalang.dev/api-docs
