# DNALang Termux Setup

Complete DNALang quantum programming environment for Android via Termux.

## Installation

1. Install Termux from F-Droid (recommended) or Google Play
2. Open Termux and run:

\`\`\`bash
curl -O https://dnalang.dev/termux-setup/install.sh
bash install.sh
\`\`\`

## Features

- Full DNALang compiler and runtime
- Qiskit integration for quantum circuits
- IBM Quantum backend support
- W-Flow optimization
- Ψ-Assembly coherence monitoring
- Monosemantic disentanglement

## Usage

### Run an organism

\`\`\`bash
~/dnalang/dnalang-cli.py run ~/dnalang/organisms/example.dna
\`\`\`

### Quantum operations

\`\`\`bash
# W-Flow analysis
~/dnalang/dnalang-cli.py wflow --shots 4096

# Coherence monitoring
~/dnalang/dnalang-cli.py coherence --backend aer_simulator

# Disentanglement
~/dnalang/dnalang-cli.py disentangle
\`\`\`

### Connect to IBM Quantum

\`\`\`bash
export IBM_QUANTUM_TOKEN="your_token_here"
~/dnalang/dnalang-cli.py run organism.dna --backend ibm_quantum
\`\`\`

## Linux GUI (proot-distro)

For full Linux desktop environment:

\`\`\`bash
proot-distro install ubuntu
proot-distro login ubuntu

# Inside Ubuntu
apt update && apt install -y xfce4 tigervnc-standalone-server
vncserver :1

# Connect with VNC viewer to localhost:5901
\`\`\`

## Directory Structure

\`\`\`
~/dnalang/
├── organisms/     # Your DNALang organism files
├── scripts/       # Helper scripts
└── output/        # Execution results and metrics
\`\`\`

## Integration with Web Platform

Sync your organisms with the web platform:

\`\`\`bash
# Upload organism
curl -X POST https://dnalang.dev/api/sync \
  -H "Content-Type: application/json" \
  -d @~/dnalang/organisms/example.dna

# Download from web
curl https://dnalang.dev/api/organisms/my-organism > ~/dnalang/organisms/my-organism.dna
\`\`\`

## Troubleshooting

### Python packages not found
\`\`\`bash
pip install --upgrade qiskit qiskit-ibm-runtime
\`\`\`

### Permission denied
\`\`\`bash
chmod +x ~/dnalang/dnalang-cli.py
\`\`\`

### Storage access
\`\`\`bash
termux-setup-storage
\`\`\`

## Resources

- Documentation: https://dnalang.dev/docs
- Examples: https://dnalang.dev/examples
- Community: https://dnalang.dev/community
