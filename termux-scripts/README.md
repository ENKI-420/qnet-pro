# DNALang Termux Integration Scripts

Command-line tools for quantum operations: W-Flow, Ψ-Assembly, and coherence analysis.

## Installation

Run the installation script:
\`\`\`bash
bash install.sh
\`\`\`

This will:
- Install all dependencies (Python, Node.js, quantum libraries)
- Set up DNALang directories
- Install CLI tools
- Configure PATH

## Available Commands

### dna-compile
Compile DNALang organisms to executable format.

\`\`\`bash
dna-compile organism.dna
\`\`\`

### dna-run
Execute compiled organisms on quantum backends.

\`\`\`bash
dna-run organism.dna [backend]
# backend: simulator (default) or ibm_quantum
\`\`\`

### dna-metrics
Display current quantum metrics.

\`\`\`bash
dna-metrics
\`\`\`

Output:
\`\`\`
Metric                 Value
───────────────────────────────────
Coherence              0.87
Fidelity               0.92
Consciousness          0.89
Expression Level       1.00
Circuit Depth          75
Active Mutations       0
───────────────────────────────────
\`\`\`

### wgf-optimize
Run Wasserstein Gradient Flow optimization to mitigate barren plateaus.

\`\`\`bash
python3 ~/dna-lang/scripts/wgf-optimize.py
\`\`\`

Features:
- Automatic barren plateau detection
- Optimal transport-based gradient computation
- Adaptive learning rate
- Convergence monitoring

### psi-assemble
Assemble Ψ-Assembly code to quantum circuits.

\`\`\`bash
python3 ~/dna-lang/scripts/psi-assemble.py input.psi
\`\`\`

Supported instructions:
- `ψ_init q0, q1` - Initialize qubits
- `ψ_h q0` - Hadamard gate
- `ψ_x q0` - Pauli-X gate
- `ψ_cnot q0, q1` - CNOT gate
- `ψ_measure q0, q1` - Measurement

### coherence-monitor
Monitor tetrahedral swarm coherence.

\`\`\`bash
python3 ~/dna-lang/scripts/coherence-monitor.py
\`\`\`

Features:
- Real-time coherence monitoring
- Automatic agent synchronization
- Tetrahedral geometry optimization
- Detailed reporting

## Directory Structure

\`\`\`
~/dna-lang/
├── organisms/        # DNALang organism files
├── scripts/          # CLI tools and utilities
├── output/           # Execution results and reports
└── logs/             # Execution logs
\`\`\`

## Examples

### Example 1: Compile and Run
\`\`\`bash
# Create organism file
cat > ~/dna-lang/organisms/test.dna << EOF
ORGANISM TestOrganism
{
  DNA {
    domain: "quantum_computing"
  }
  GENOME {
    GENE TestGene {
      purpose: "Test quantum operations"
      expression_level: 1.0
    }
  }
}
EOF

# Compile and run
dna-compile ~/dna-lang/organisms/test.dna
dna-run ~/dna-lang/organisms/test.dna
\`\`\`

### Example 2: W-Flow Optimization
\`\`\`bash
# Run optimization
python3 ~/dna-lang/scripts/wgf-optimize.py

# View results
cat ~/dna-lang/output/wgf_results.json
\`\`\`

### Example 3: Ψ-Assembly
\`\`\`bash
# Create assembly file
cat > ~/dna-lang/organisms/bell.psi << EOF
# Bell State
ψ_init q0, q1
ψ_h q0
ψ_cnot q0, q1
ψ_measure q0, q1
EOF

# Assemble
python3 ~/dna-lang/scripts/psi-assemble.py ~/dna-lang/organisms/bell.psi
\`\`\`

### Example 4: Coherence Monitoring
\`\`\`bash
# Monitor swarm coherence
python3 ~/dna-lang/scripts/coherence-monitor.py

# View report
cat ~/dna-lang/output/coherence_report.json
\`\`\`

## Troubleshooting

### Command not found
Make sure scripts are in PATH:
\`\`\`bash
source ~/.bashrc
\`\`\`

### Permission denied
Make scripts executable:
\`\`\`bash
chmod +x ~/dna-lang/scripts/*.sh
\`\`\`

### Python module not found
Reinstall dependencies:
\`\`\`bash
pip install qiskit numpy scipy matplotlib pandas
\`\`\`

## Support

For issues or questions:
- Documentation: https://dna-lang.dev/docs/termux
- GitHub: https://github.com/dna-lang/termux-scripts
- Email: support@dna-lang.dev

## License

MIT License - See LICENSE file for details
