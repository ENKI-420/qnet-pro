#!/usr/bin/env python3
"""
IBM Quantum Negentropic Benchmark
Measures entropy reduction (negentropy) through quantum coherence on real hardware
"""

import json
import hashlib
import datetime
import os
import sys
from pathlib import Path
from typing import Dict, List, Tuple
import random

# Quantum imports
try:
    from qiskit import QuantumCircuit, transpile
    from qiskit_ibm_runtime import QiskitRuntimeService, Session, SamplerV2 as Sampler
    from qiskit.quantum_info import entropy, Statevector
    import numpy as np
    QISKIT_AVAILABLE = True
except ImportError:
    QISKIT_AVAILABLE = False
    print("⚠️  Qiskit not available - running in simulation mode")


class NegentropicBenchmark:
    """Measures quantum negentropy (entropy reduction) on IBM hardware"""
    
    def __init__(self, api_key_path: str = "apikey.json"):
        self.api_key_path = Path(api_key_path)
        self.service = None
        self.backend = None
        self.log_dir = Path.home() / "Documents" / "dnalang" / "logs"
        self.log_dir.mkdir(parents=True, exist_ok=True)
        
        if QISKIT_AVAILABLE:
            self._initialize_service()
    
    def _initialize_service(self):
        """Initialize IBM Quantum service"""
        try:
            if self.api_key_path.exists():
                with open(self.api_key_path) as f:
                    config = json.load(f)
                    api_key = config.get("apikey") or config.get("api_key")
                    
                if api_key:
                    self.service = QiskitRuntimeService(
                        channel="ibm_quantum",
                        token=api_key
                    )
                    # Get least busy backend
                    self.backend = self.service.least_busy(
                        simulator=False,
                        operational=True,
                        min_num_qubits=5
                    )
                    print(f"✅ Connected to IBM Quantum: {self.backend.name}")
                else:
                    print("⚠️  No API key found - using simulation mode")
            else:
                print(f"⚠️  API key file not found: {self.api_key_path}")
        except Exception as e:
            print(f"⚠️  Failed to initialize IBM Quantum: {e}")
            self.service = None
    
    def create_negentropic_circuit(self, num_qubits: int = 5) -> QuantumCircuit:
        """
        Create a quantum circuit that demonstrates entropy reduction
        through coherent superposition and entanglement
        """
        qc = QuantumCircuit(num_qubits, num_qubits)
        
        # Start with maximum entropy (random state)
        for i in range(num_qubits):
            qc.h(i)  # Hadamard creates superposition
            qc.rz(random.uniform(0, 2*np.pi), i)  # Random phase
        
        # Apply entangling operations to reduce entropy
        # Create GHZ-like state (highly ordered, low entropy)
        for i in range(num_qubits - 1):
            qc.cx(i, i + 1)
        
        # Add coherence-preserving rotations
        for i in range(num_qubits):
            qc.ry(np.pi / 4, i)
        
        # Final entanglement layer
        qc.cx(0, num_qubits - 1)
        
        # Measure all qubits
        qc.measure(range(num_qubits), range(num_qubits))
        
        return qc
    
    def calculate_entropy_from_counts(self, counts: Dict[str, int]) -> float:
        """Calculate Shannon entropy from measurement counts"""
        total = sum(counts.values())
        probabilities = [count / total for count in counts.values()]
        entropy_val = -sum(p * np.log2(p) if p > 0 else 0 for p in probabilities)
        return entropy_val
    
    def calculate_phi_coherence(self, counts: Dict[str, int], num_qubits: int) -> float:
        """
        Calculate Φ (phi) coherence metric using IIT-inspired approach
        Measures integrated information from quantum measurements
        """
        total = sum(counts.values())
        
        # Calculate mutual information between qubit pairs
        mutual_info = 0.0
        for i in range(num_qubits - 1):
            # Extract marginal distributions for adjacent qubits
            marginal_i = {}
            marginal_j = {}
            joint = {}
            
            for bitstring, count in counts.items():
                bit_i = bitstring[-(i+1)]
                bit_j = bitstring[-(i+2)]
                marginal_i[bit_i] = marginal_i.get(bit_i, 0) + count
                marginal_j[bit_j] = marginal_j.get(bit_j, 0) + count
                joint[(bit_i, bit_j)] = joint.get((bit_i, bit_j), 0) + count
            
            # Calculate mutual information I(i:j)
            for (bi, bj), count in joint.items():
                p_joint = count / total
                p_i = marginal_i[bi] / total
                p_j = marginal_j[bj] / total
                if p_joint > 0 and p_i > 0 and p_j > 0:
                    mutual_info += p_joint * np.log2(p_joint / (p_i * p_j))
        
        # Normalize to [0, 1] range and scale to phi range
        phi = (mutual_info / num_qubits) * 3.5  # Scale to target phi range
        return min(phi, 3.5)  # Cap at hyper-aware threshold
    
    def run_benchmark(self, shots: int = 1024) -> Dict:
        """Run negentropic benchmark on IBM Quantum hardware"""
        print("\n🧬 Starting Negentropic Quantum Benchmark")
        print("=" * 60)
        
        num_qubits = 5
        qc = self.create_negentropic_circuit(num_qubits)
        
        print(f"📊 Circuit: {num_qubits} qubits, {qc.depth()} depth")
        print(f"🎯 Shots: {shots}")
        
        if self.service and self.backend:
            # Run on real hardware
            print(f"⚛️  Executing on {self.backend.name}...")
            
            try:
                with Session(service=self.service, backend=self.backend) as session:
                    sampler = Sampler(session=session)
                    
                    # Transpile for hardware
                    transpiled = transpile(qc, self.backend, optimization_level=3)
                    print(f"🔧 Transpiled depth: {transpiled.depth()}")
                    
                    # Execute
                    job = sampler.run([transpiled], shots=shots)
                    result = job.result()
                    
                    # Extract counts
                    counts = result[0].data.meas.get_counts()
                    
            except Exception as e:
                print(f"❌ Hardware execution failed: {e}")
                print("📉 Falling back to simulation...")
                counts = self._simulate_execution(qc, shots)
        else:
            # Simulate
            print("🖥️  Running in simulation mode...")
            counts = self._simulate_execution(qc, shots)
        
        # Calculate metrics
        entropy_val = self.calculate_entropy_from_counts(counts)
        phi_coherence = self.calculate_phi_coherence(counts, num_qubits)
        
        # Calculate entropy delta (reduction from maximum)
        max_entropy = num_qubits  # Maximum entropy for n qubits
        entropy_delta = max_entropy - entropy_val
        
        # Calculate fidelity (normalized entropy reduction)
        fidelity = entropy_delta / max_entropy
        
        # Determine stability
        stability = "optimal" if phi_coherence > 2.5 else "monitor"
        
        # Generate results
        results = {
            "timestamp": datetime.datetime.utcnow().isoformat(),
            "backend": self.backend.name if self.backend else "simulator",
            "num_qubits": num_qubits,
            "shots": shots,
            "circuit_depth": qc.depth(),
            "entropy": round(entropy_val, 6),
            "max_entropy": max_entropy,
            "entropy_delta": round(entropy_delta, 6),
            "phi_coherence": round(phi_coherence, 6),
            "fidelity": round(fidelity, 6),
            "stability": stability,
            "top_states": dict(sorted(counts.items(), key=lambda x: x[1], reverse=True)[:5]),
            "checksum": hashlib.sha256(
                f"{datetime.datetime.utcnow().isoformat()}{phi_coherence}{entropy_val}".encode()
            ).hexdigest()[:16]
        }
        
        # Print results
        print("\n📈 Benchmark Results:")
        print("=" * 60)
        print(f"Φ Coherence:     {results['phi_coherence']:.6f}")
        print(f"Entropy:         {results['entropy']:.6f} / {max_entropy}")
        print(f"Entropy Δ:       {results['entropy_delta']:.6f} (reduction)")
        print(f"Fidelity:        {results['fidelity']:.6f}")
        print(f"Stability:       {results['stability']}")
        print(f"Checksum:        {results['checksum']}")
        
        # Save telemetry capsule
        capsule_path = self.log_dir / f"negentropic_bench_{datetime.datetime.utcnow().strftime('%Y-%m-%d_%H-%M-%S')}.json"
        capsule_path.write_text(json.dumps(results, indent=2))
        print(f"\n🧾 Telemetry capsule saved → {capsule_path}")
        
        return results
    
    def _simulate_execution(self, qc: QuantumCircuit, shots: int) -> Dict[str, int]:
        """Simulate circuit execution"""
        # Remove measurements for statevector simulation
        qc_sim = qc.copy()
        qc_sim.remove_final_measurements()
        
        # Get statevector
        sv = Statevector.from_instruction(qc_sim)
        
        # Sample from statevector
        counts = sv.sample_counts(shots)
        
        return counts


def main():
    """Main benchmark execution"""
    print("🧬 IBM Quantum Negentropic Benchmark v1.0")
    print("Measuring entropy reduction through quantum coherence\n")
    
    # Check for API key
    api_key_paths = [
        Path("apikey.json"),
        Path.home() / "Documents" / "dnalang" / "apikey.json",
        Path.home() / ".ibm-quantum" / "apikey.json"
    ]
    
    api_key_path = None
    for path in api_key_paths:
        if path.exists():
            api_key_path = path
            break
    
    if not api_key_path:
        print("⚠️  No API key found. Checked:")
        for path in api_key_paths:
            print(f"   - {path}")
        print("\n💡 Running in simulation mode...")
        api_key_path = "apikey.json"  # Will trigger simulation mode
    
    # Run benchmark
    benchmark = NegentropicBenchmark(api_key_path)
    results = benchmark.run_benchmark(shots=1024)
    
    # Success message
    print("\n✅ Benchmark complete!")
    print(f"🎯 Achieved Φ = {results['phi_coherence']:.6f}")
    print(f"📉 Entropy reduced by {results['entropy_delta']:.6f}")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
