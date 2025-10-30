#!/data/data/com.termux/files/usr/bin/bash

# DNALang One-Click Installer for Termux
# Usage: curl -fsSL https://dnalang.dev/install | bash

set -e

DNALANG_VERSION="1.0.0"
INSTALL_DIR="$HOME/dnalang"
CONFIG_DIR="$HOME/.config/dnalang"
CACHE_DIR="$HOME/.cache/dnalang"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Progress bar
show_progress() {
    local current=$1
    local total=$2
    local width=50
    local percentage=$((current * 100 / total))
    local completed=$((width * current / total))
    
    printf "\r["
    printf "%${completed}s" | tr ' ' '='
    printf "%$((width - completed))s" | tr ' ' ' '
    printf "] %d%%" $percentage
}

# Check system requirements
check_requirements() {
    log_info "Checking system requirements..."
    
    # Check Android version
    if [ -f /system/build.prop ]; then
        ANDROID_VERSION=$(grep "ro.build.version.release" /system/build.prop | cut -d'=' -f2)
        log_info "Android version: $ANDROID_VERSION"
    fi
    
    # Check available storage
    AVAILABLE_STORAGE=$(df -h $HOME | awk 'NR==2 {print $4}')
    log_info "Available storage: $AVAILABLE_STORAGE"
    
    # Check RAM
    TOTAL_RAM=$(free -h | awk 'NR==2 {print $2}')
    log_info "Total RAM: $TOTAL_RAM"
    
    # Minimum requirements check
    AVAILABLE_MB=$(df -m $HOME | awk 'NR==2 {print $4}')
    if [ $AVAILABLE_MB -lt 500 ]; then
        log_error "Insufficient storage. Need at least 500MB free."
        exit 1
    fi
    
    log_success "System requirements met"
}

# Update Termux packages
update_termux() {
    log_info "Updating Termux packages..."
    pkg update -y > /dev/null 2>&1
    pkg upgrade -y > /dev/null 2>&1
    log_success "Termux packages updated"
}

# Install core dependencies
install_dependencies() {
    log_info "Installing core dependencies..."
    
    local packages=(
        "python"
        "python-pip"
        "git"
        "nodejs-lts"
        "clang"
        "make"
        "cmake"
        "wget"
        "curl"
        "openssh"
    )
    
    local total=${#packages[@]}
    local current=0
    
    for package in "${packages[@]}"; do
        current=$((current + 1))
        show_progress $current $total
        pkg install -y $package > /dev/null 2>&1
    done
    
    echo ""
    log_success "Core dependencies installed"
}

# Install Python packages (without Qiskit)
install_python_packages() {
    log_info "Installing Python packages..."
    
    pip install --upgrade pip > /dev/null 2>&1
    
    local packages=(
        "numpy>=1.24.0"
        "scipy>=1.10.0"
        "matplotlib>=3.7.0"
        "pandas>=2.0.0"
        "requests>=2.31.0"
        "websockets>=12.0"
        "pydantic>=2.5.0"
        "click>=8.1.0"
    )
    
    local total=${#packages[@]}
    local current=0
    
    for package in "${packages[@]}"; do
        current=$((current + 1))
        show_progress $current $total
        pip install "$package" > /dev/null 2>&1
    done
    
    echo ""
    log_success "Python packages installed"
}

# Create directory structure
create_directories() {
    log_info "Creating directory structure..."
    
    mkdir -p "$INSTALL_DIR"/{organisms,scripts,output,logs,cache}
    mkdir -p "$CONFIG_DIR"
    mkdir -p "$CACHE_DIR"
    
    log_success "Directory structure created"
}

# Download DNALang framework
download_framework() {
    log_info "Downloading DNALang framework..."
    
    # Download IBM Quantum bridge (Qiskit alternative)
    curl -fsSL https://dnalang.dev/framework/ibm-quantum-bridge.py -o "$INSTALL_DIR/scripts/ibm_quantum_bridge.py"
    
    # Download DNALang interpreter
    curl -fsSL https://dnalang.dev/framework/dnalang-interpreter.py -o "$INSTALL_DIR/scripts/dnalang_interpreter.py"
    
    # Download CLI tools
    curl -fsSL https://dnalang.dev/framework/dna-cli.py -o "$INSTALL_DIR/scripts/dna"
    chmod +x "$INSTALL_DIR/scripts/dna"
    
    # Download W-Flow optimizer
    curl -fsSL https://dnalang.dev/framework/wgf-optimizer.py -o "$INSTALL_DIR/scripts/wgf_optimizer.py"
    
    # Download Ψ-Assembly assembler
    curl -fsSL https://dnalang.dev/framework/psi-assembler.py -o "$INSTALL_DIR/scripts/psi_assembler.py"
    
    # Download coherence monitor
    curl -fsSL https://dnalang.dev/framework/coherence-monitor.py -o "$INSTALL_DIR/scripts/coherence_monitor.py"
    
    log_success "DNALang framework downloaded"
}

# Configure IBM Quantum integration
configure_ibm_quantum() {
    log_info "Configuring IBM Quantum integration..."
    
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  IBM Quantum Configuration"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "To use real quantum hardware, you need an IBM Quantum API key."
    echo "Get your key at: https://quantum.ibm.com/account"
    echo ""
    read -p "Do you have an IBM Quantum API key? (y/n): " has_key
    
    if [ "$has_key" = "y" ] || [ "$has_key" = "Y" ]; then
        read -sp "Enter your IBM Quantum API key: " ibm_key
        echo ""
        
        # Save securely
        echo "IBM_QUANTUM_API_KEY=$ibm_key" > "$CONFIG_DIR/credentials"
        chmod 600 "$CONFIG_DIR/credentials"
        
        # Test connection
        log_info "Testing IBM Quantum connection..."
        python3 "$INSTALL_DIR/scripts/ibm_quantum_bridge.py" test-connection
        
        if [ $? -eq 0 ]; then
            log_success "IBM Quantum connection successful"
        else
            log_warning "IBM Quantum connection failed. You can configure it later."
        fi
    else
        log_info "Skipping IBM Quantum configuration. You can configure it later with: dna config ibm"
        echo "# IBM_QUANTUM_API_KEY=your_key_here" > "$CONFIG_DIR/credentials"
    fi
}

# Setup PATH
setup_path() {
    log_info "Setting up PATH..."
    
    # Add to .bashrc
    if ! grep -q "dnalang/scripts" ~/.bashrc; then
        echo "" >> ~/.bashrc
        echo "# DNALang" >> ~/.bashrc
        echo "export PATH=\"\$PATH:$INSTALL_DIR/scripts\"" >> ~/.bashrc
        echo "export DNALANG_HOME=\"$INSTALL_DIR\"" >> ~/.bashrc
        echo "source \"$CONFIG_DIR/credentials\"" >> ~/.bashrc
    fi
    
    # Add to current session
    export PATH="$PATH:$INSTALL_DIR/scripts"
    export DNALANG_HOME="$INSTALL_DIR"
    
    log_success "PATH configured"
}

# Create example organism
create_example() {
    log_info "Creating example organism..."
    
    cat > "$INSTALL_DIR/organisms/hello-quantum.dna" << 'EOF'
ORGANISM HelloQuantum
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.85
  }

  GENOME {
    GENE BellState {
      purpose: "Create Bell state (quantum entanglement)"
      expression_level: 1.0
      
      MUTATIONS {
        optimize {
          trigger_conditions: [
            {metric: "fidelity", operator: "<", value: 0.9}
          ]
          methods: ["apply_error_mitigation"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    executor: QuantumAgent(
      backend: "simulator",
      shots: 4096
    )
  }
}
EOF
    
    log_success "Example organism created"
}

# Display completion message
show_completion() {
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  🧬 DNALang Installation Complete! 🧬"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Version: $DNALANG_VERSION"
    echo "Install Directory: $INSTALL_DIR"
    echo ""
    echo "Quick Start:"
    echo "  1. Restart your terminal or run: source ~/.bashrc"
    echo "  2. Run example: dna run ~/dnalang/organisms/hello-quantum.dna"
    echo "  3. View help: dna --help"
    echo ""
    echo "Available Commands:"
    echo "  dna run <file>           Execute organism"
    echo "  dna compile <file>       Compile organism"
    echo "  dna wflow                Run W-Flow optimization"
    echo "  dna coherence            Monitor swarm coherence"
    echo "  dna config ibm           Configure IBM Quantum"
    echo "  dna benchmark            Run quantum benchmarks"
    echo ""
    echo "Documentation: https://dnalang.dev/docs"
    echo "Community: https://discord.gg/dnalang"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

# Main installation flow
main() {
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  🧬 DNALang One-Click Installer for Termux 🧬"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Version: $DNALANG_VERSION"
    echo "This will install DNALang quantum programming framework"
    echo ""
    
    check_requirements
    update_termux
    install_dependencies
    install_python_packages
    create_directories
    download_framework
    configure_ibm_quantum
    setup_path
    create_example
    show_completion
}

# Run installation
main
