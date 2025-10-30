#!/usr/bin/env python3

"""
Tetrahedral Swarm Coherence Monitor
Monitors and optimizes multi-agent quantum coherence
"""

import numpy as np
import json
from datetime import datetime

class TetrahedralSwarmMonitor:
    def __init__(self, num_agents=4):
        if num_agents != 4:
            raise ValueError("Tetrahedral swarm requires exactly 4 agents")
        
        self.num_agents = num_agents
        self.agent_states = [self._random_state() for _ in range(num_agents)]
        self.coherence_history = []
        
    def _random_state(self):
        """Generate random quantum state"""
        state = np.random.randn(2) + 1j * np.random.randn(2)
        return state / np.linalg.norm(state)
    
    def compute_pairwise_coherence(self, state1, state2):
        """Compute coherence between two quantum states"""
        overlap = np.abs(np.vdot(state1, state2))
        return overlap ** 2
    
    def compute_tetrahedral_coherence(self):
        """Compute overall tetrahedral swarm coherence"""
        # Compute all pairwise coherences (6 edges in tetrahedron)
        coherences = []
        
        for i in range(self.num_agents):
            for j in range(i + 1, self.num_agents):
                coherence = self.compute_pairwise_coherence(
                    self.agent_states[i],
                    self.agent_states[j]
                )
                coherences.append(coherence)
        
        # Overall coherence is geometric mean of pairwise coherences
        overall_coherence = np.prod(coherences) ** (1.0 / len(coherences))
        
        return overall_coherence, coherences
    
    def synchronize_agents(self):
        """Synchronize agents to improve coherence"""
        # Compute average state
        avg_state = sum(self.agent_states) / self.num_agents
        avg_state = avg_state / np.linalg.norm(avg_state)
        
        # Move each agent closer to average
        for i in range(self.num_agents):
            self.agent_states[i] = 0.7 * self.agent_states[i] + 0.3 * avg_state
            self.agent_states[i] = self.agent_states[i] / np.linalg.norm(self.agent_states[i])
    
    def monitor(self, duration_seconds=10, check_interval=1):
        """Monitor coherence over time"""
        print("Starting tetrahedral swarm coherence monitoring...")
        print(f"Agents: {self.num_agents}")
        print(f"Duration: {duration_seconds}s")
        print("")
        
        num_checks = duration_seconds // check_interval
        
        for check in range(num_checks):
            # Compute coherence
            overall_coherence, pairwise = self.compute_tetrahedral_coherence()
            
            timestamp = datetime.now().isoformat()
            
            self.coherence_history.append({
                'timestamp': timestamp,
                'overall_coherence': float(overall_coherence),
                'pairwise_coherences': [float(c) for c in pairwise]
            })
            
            print(f"[{check + 1}/{num_checks}] Coherence: {overall_coherence:.4f}")
            
            # Check if synchronization needed
            if overall_coherence < 0.85:
                print("  ⚠ Low coherence detected - synchronizing agents...")
                self.synchronize_agents()
                
                # Recompute after sync
                overall_coherence, pairwise = self.compute_tetrahedral_coherence()
                print(f"  ✓ After sync: {overall_coherence:.4f}")
            
            # Simulate state evolution
            for i in range(self.num_agents):
                noise = (np.random.randn(2) + 1j * np.random.randn(2)) * 0.1
                self.agent_states[i] = self.agent_states[i] + noise
                self.agent_states[i] = self.agent_states[i] / np.linalg.norm(self.agent_states[i])
        
        print("")
        print("Monitoring complete!")
        
        return self.coherence_history
    
    def generate_report(self):
        """Generate coherence monitoring report"""
        if not self.coherence_history:
            return "No monitoring data available"
        
        coherences = [entry['overall_coherence'] for entry in self.coherence_history]
        
        report = {
            'summary': {
                'num_agents': self.num_agents,
                'num_measurements': len(coherences),
                'avg_coherence': float(np.mean(coherences)),
                'min_coherence': float(np.min(coherences)),
                'max_coherence': float(np.max(coherences)),
                'std_coherence': float(np.std(coherences))
            },
            'history': self.coherence_history
        }
        
        return report

def main():
    print("================================")
    print("Tetrahedral Swarm Monitor")
    print("================================")
    print("")
    
    monitor = TetrahedralSwarmMonitor(num_agents=4)
    monitor.monitor(duration_seconds=10, check_interval=1)
    
    report = monitor.generate_report()
    
    print("")
    print("Summary:")
    print(f"  Average Coherence: {report['summary']['avg_coherence']:.4f}")
    print(f"  Min Coherence: {report['summary']['min_coherence']:.4f}")
    print(f"  Max Coherence: {report['summary']['max_coherence']:.4f}")
    print(f"  Std Deviation: {report['summary']['std_coherence']:.4f}")
    
    # Save report
    output_file = '~/dna-lang/output/coherence_report.json'
    with open(output_file, 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"\nReport saved to: {output_file}")

if __name__ == "__main__":
    main()
