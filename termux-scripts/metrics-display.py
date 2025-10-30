#!/usr/bin/env python3

"""
DNALang Metrics Display
Shows current quantum metrics in a formatted table
"""

import json
import os
from datetime import datetime

def load_metrics():
    """Load metrics from storage"""
    metrics_file = os.path.expanduser('~/dna-lang/output/metrics.json')
    
    if not os.path.exists(metrics_file):
        # Return default metrics
        return {
            'coherence': 0.87,
            'fidelity': 0.92,
            'consciousness': 0.89,
            'expression_level': 1.0,
            'circuit_depth': 75,
            'mutations': 0,
            'last_updated': datetime.now().isoformat()
        }
    
    with open(metrics_file, 'r') as f:
        return json.load(f)

def display_metrics(metrics):
    """Display metrics in formatted table"""
    print("Metric                 Value")
    print("─" * 35)
    print(f"Coherence              {metrics['coherence']:.2f}")
    print(f"Fidelity               {metrics['fidelity']:.2f}")
    print(f"Consciousness          {metrics['consciousness']:.2f}")
    print(f"Expression Level       {metrics['expression_level']:.2f}")
    print(f"Circuit Depth          {metrics['circuit_depth']}")
    print(f"Active Mutations       {metrics['mutations']}")
    print("─" * 35)

def main():
    metrics = load_metrics()
    display_metrics(metrics)

if __name__ == "__main__":
    main()
