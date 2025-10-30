#!/bin/bash

# DNALang Termux Installation Script
# Installs all necessary dependencies and CLI tools

echo "================================"
echo "DNALang Termux Installation"
echo "================================"
echo ""

# Update packages
echo "[1/6] Updating packages..."
pkg update -y && pkg upgrade -y

# Install core dependencies
echo "[2/6] Installing core dependencies..."
pkg install -y python nodejs git clang make cmake

# Install Python packages
echo "[3/6] Installing Python packages..."
pip install --upgrade pip
pip install qiskit numpy scipy matplotlib pandas

# Install Node.js packages
echo "[4/6] Installing Node.js packages..."
npm install -g dna-lang-cli

# Create DNALang directories
echo "[5/6] Creating directories..."
mkdir -p ~/dna-lang/organisms
mkdir -p ~/dna-lang/scripts
mkdir -p ~/dna-lang/output
mkdir -p ~/dna-lang/logs

# Copy CLI scripts
echo "[6/6] Installing CLI tools..."
cp dna-compile.sh ~/dna-lang/scripts/
cp dna-run.sh ~/dna-lang/scripts/
cp dna-metrics.sh ~/dna-lang/scripts/
cp wgf-optimize.py ~/dna-lang/scripts/
cp psi-assemble.py ~/dna-lang/scripts/
cp coherence-monitor.py ~/dna-lang/scripts/

chmod +x ~/dna-lang/scripts/*.sh

# Add to PATH
echo 'export PATH=$PATH:~/dna-lang/scripts' >> ~/.bashrc

echo ""
echo "================================"
echo "Installation Complete!"
echo "================================"
echo ""
echo "Available commands:"
echo "  dna-compile <file>   - Compile DNALang organism"
echo "  dna-run <file>       - Execute organism"
echo "  dna-metrics          - Display quantum metrics"
echo "  wgf-optimize         - Run W-Flow optimization"
echo "  psi-assemble <file>  - Assemble Ψ-Assembly code"
echo ""
echo "Restart your terminal or run: source ~/.bashrc"
