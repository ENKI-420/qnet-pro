# DNALang Termux Installation Guide

## Overview

This guide provides comprehensive instructions for installing DNALang on Android devices using Termux, with direct IBM Quantum integration as a Qiskit alternative.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [One-Click Installation](#one-click-installation)
3. [Manual Installation](#manual-installation)
4. [IBM Quantum Configuration](#ibm-quantum-configuration)
5. [Security Best Practices](#security-best-practices)
6. [Resource Optimization](#resource-optimization)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

### Device Requirements

- **Android Version**: 7.0 (Nougat) or higher
- **RAM**: Minimum 2GB, recommended 4GB+
- **Storage**: Minimum 500MB free space
- **CPU**: ARM64 or x86_64 architecture

### Software Requirements

- **Termux**: Latest version from F-Droid (recommended) or Google Play
- **Internet Connection**: Required for initial installation only

## One-Click Installation

### Step 1: Install Termux

Download Termux from F-Droid (recommended for latest features):

\`\`\`bash
# Visit https://f-droid.org/packages/com.termux/
# Or use Google Play Store (may have older version)
\`\`\`

### Step 2: Run Installation Script

Open Termux and execute:

\`\`\`bash
curl -fsSL https://dnalang.dev/install | bash
\`\`\`

The installer will:
1. Check system requirements
2. Update Termux packages
3. Install core dependencies (Python, Node.js, Git)
4. Install Python packages (NumPy, SciPy, Matplotlib)
5. Download DNALang framework
6. Configure IBM Quantum integration
7. Set up PATH and environment variables
8. Create example organisms

### Step 3: Verify Installation

After installation completes, restart your terminal:

\`\`\`bash
source ~/.bashrc
\`\`\`

Test the installation:

\`\`\`bash
dna --version
dna run ~/dnalang/organisms/hello-quantum.dna
\`\`\`

## Manual Installation

If you prefer manual installation or the one-click installer fails:

### 1. Update Termux

\`\`\`bash
pkg update -y && pkg upgrade -y
\`\`\`

### 2. Install Core Dependencies

\`\`\`bash
pkg install -y python python-pip git nodejs-lts clang make cmake wget curl openssh
\`\`\`

### 3. Install Python Packages

\`\`\`bash
pip install --upgrade pip
pip install numpy scipy matplotlib pandas requests websockets pydantic click
\`\`\`

### 4. Create Directory Structure

\`\`\`bash
mkdir -p ~/dnalang/{organisms,scripts,output,logs,cache}
mkdir -p ~/.config/dnalang
mkdir -p ~/.cache/dnalang
\`\`\`

### 5. Download DNALang Framework

\`\`\`bash
cd ~/dnalang/scripts

# IBM Quantum Bridge (Qiskit alternative)
curl -fsSL https://dnalang.dev/framework/ibm-quantum-bridge.py -o ibm_quantum_bridge.py

# DNALang Interpreter
curl -fsSL https://dnalang.dev/framework/dnalang-interpreter.py -o dnalang_interpreter.py

# CLI Tool
curl -fsSL https://dnalang.dev/framework/dna-cli.py -o dna
chmod +x dna

# W-Flow Optimizer
curl -fsSL https://dnalang.dev/framework/wgf-optimizer.py -o wgf_optimizer.py

# Ψ-Assembly Assembler
curl -fsSL https://dnalang.dev/framework/psi-assembler.py -o psi_assembler.py

# Coherence Monitor
curl -fsSL https://dnalang.dev/framework/coherence-monitor.py -o coherence_monitor.py
\`\`\`

### 6. Configure PATH

Add to `~/.bashrc`:

\`\`\`bash
echo 'export PATH="$PATH:$HOME/dnalang/scripts"' >> ~/.bashrc
echo 'export DNALANG_HOME="$HOME/dnalang"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

## IBM Quantum Configuration

### Getting Your API Key

1. Visit [IBM Quantum](https://quantum.ibm.com/)
2. Create an account or log in
3. Navigate to Account Settings
4. Copy your API token

### Secure Configuration

\`\`\`bash
# Create credentials file
cat > ~/.config/dnalang/credentials << EOF
IBM_QUANTUM_API_KEY=your_api_key_here
EOF

# Secure the file
chmod 600 ~/.config/dnalang/credentials

# Source credentials
echo 'source ~/.config/dnalang/credentials' >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Test Connection

\`\`\`bash
python3 ~/dnalang/scripts/ibm_quantum_bridge.py test-connection
\`\`\`

Expected output:
\`\`\`
✓ Connected to IBM Quantum
✓ Available backends: 15
\`\`\`

### List Available Backends

\`\`\`bash
python3 ~/dnalang/scripts/ibm_quantum_bridge.py list-backends
\`\`\`

## Security Best Practices

### 1. Credential Protection

**Never** commit credentials to version control:

\`\`\`bash
# Add to .gitignore
echo "~/.config/dnalang/credentials" >> ~/.gitignore
\`\`\`

**Use environment variables** instead of hardcoding:

\`\`\`python
import os
api_key = os.getenv('IBM_QUANTUM_API_KEY')
\`\`\`

### 2. File Permissions

Ensure sensitive files have restricted permissions:

\`\`\`bash
chmod 600 ~/.config/dnalang/credentials
chmod 700 ~/.config/dnalang
\`\`\`

### 3. Secure Communication

Always use HTTPS for API calls:

\`\`\`python
# Good
url = "https://api.quantum-computing.ibm.com/..."

# Bad
url = "http://api.quantum-computing.ibm.com/..."
\`\`\`

### 4. API Key Rotation

Rotate your IBM Quantum API key regularly:

\`\`\`bash
# Update credentials file
nano ~/.config/dnalang/credentials

# Test new key
python3 ~/dnalang/scripts/ibm_quantum_bridge.py test-connection
\`\`\`

## Resource Optimization

### 1. Battery Management

Monitor battery usage:

\`\`\`bash
# Check battery level
termux-battery-status

# Enable power-saving mode for long simulations
dna run --power-save organism.dna
\`\`\`

### 2. Memory Optimization

Limit qubit count based on available RAM:

| RAM | Max Qubits (Statevector) | Max Qubits (MPS) |
|-----|--------------------------|------------------|
| 2GB | 18 | 30 |
| 4GB | 20 | 40 |
| 6GB | 21 | 50 |
| 8GB | 22 | 60 |

\`\`\`python
# Check available memory
import psutil
available_mb = psutil.virtual_memory().available / 1024 / 1024
max_qubits = int(np.log2(available_mb * 1024 * 1024 / 16))
\`\`\`

### 3. Storage Management

Clean up old results:

\`\`\`bash
# Remove old logs (older than 7 days)
find ~/dnalang/logs -type f -mtime +7 -delete

# Compress old results
tar -czf ~/dnalang/output/archive-$(date +%Y%m%d).tar.gz ~/dnalang/output/*.json
rm ~/dnalang/output/*.json
\`\`\`

### 4. Network Optimization

Use local simulator when possible:

\`\`\`bash
# Local simulation (no network)
dna run --backend simulator organism.dna

# IBM Quantum hardware (requires network)
dna run --backend ibm_torino organism.dna
\`\`\`

### 5. CPU Throttling

Prevent device overheating:

\`\`\`bash
# Monitor CPU temperature
cat /sys/class/thermal/thermal_zone0/temp

# Limit CPU usage
dna run --max-cpu 50 organism.dna
\`\`\`

## Troubleshooting

### Installation Issues

#### Problem: "pkg: command not found"

**Solution**: Reinstall Termux from F-Droid

#### Problem: "Permission denied" when running scripts

**Solution**:
\`\`\`bash
chmod +x ~/dnalang/scripts/*
\`\`\`

#### Problem: Python packages fail to install

**Solution**:
\`\`\`bash
pkg install python-dev clang
pip install --upgrade pip setuptools wheel
pip install numpy --no-binary numpy
\`\`\`

### Runtime Issues

#### Problem: "IBM Quantum connection failed"

**Solution**:
1. Check API key: `echo $IBM_QUANTUM_API_KEY`
2. Test connection: `python3 ~/dnalang/scripts/ibm_quantum_bridge.py test-connection`
3. Verify internet connection: `ping quantum.ibm.com`

#### Problem: "Out of memory" during simulation

**Solution**:
\`\`\`bash
# Reduce qubit count
dna run --max-qubits 18 organism.dna

# Use MPS simulator
dna run --simulator mps organism.dna
\`\`\`

#### Problem: Device overheating

**Solution**:
\`\`\`bash
# Enable thermal throttling
dna run --thermal-limit 45 organism.dna

# Reduce shot count
dna run --shots 1024 organism.dna
\`\`\`

### Performance Issues

#### Problem: Slow circuit execution

**Solution**:
\`\`\`bash
# Use local simulator
dna run --backend simulator organism.dna

# Reduce circuit depth
dna optimize --max-depth 50 organism.dna
\`\`\`

#### Problem: High battery drain

**Solution**:
\`\`\`bash
# Enable power-save mode
dna run --power-save organism.dna

# Limit background processes
dna config set background_execution false
\`\`\`

## Advanced Configuration

### Custom Backend Selection

\`\`\`python
# ~/.config/dnalang/config.yaml
backends:
  default: simulator
  fallback: ibmq_qasm_simulator
  preferred:
    - ibm_torino
    - ibm_brisbane
    - ibm_kyoto

optimization:
  max_qubits: 20
  max_depth: 100
  shots: 4096
  
resource_limits:
  max_memory_mb: 2048
  max_cpu_percent: 80
  thermal_limit_celsius: 45
\`\`\`

### Offline Mode

For air-gapped environments:

\`\`\`bash
# Download all dependencies
pip download -d ~/dnalang/cache numpy scipy matplotlib

# Install offline
pip install --no-index --find-links=~/dnalang/cache numpy scipy matplotlib

# Use local simulator only
dna config set offline_mode true
\`\`\`

## Support

- **Documentation**: https://dnalang.dev/docs
- **Community**: https://discord.gg/dnalang
- **Issues**: https://github.com/dnalang/framework/issues
- **Email**: support@dnalang.dev

## License

MIT License - See LICENSE file for details
