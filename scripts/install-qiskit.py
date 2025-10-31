#!/usr/bin/env python3
"""
Install Qiskit and IBM Quantum Runtime dependencies
"""

import subprocess
import sys

def install_dependencies():
    """Install required packages for quantum benchmarking"""
    packages = [
        "qiskit>=1.0.0",
        "qiskit-ibm-runtime>=0.20.0",
        "numpy>=1.24.0",
    ]
    
    print("🧬 Installing Qiskit and IBM Quantum Runtime...")
    print("=" * 60)
    
    for package in packages:
        print(f"\n📦 Installing {package}...")
        try:
            subprocess.check_call([
                sys.executable, "-m", "pip", "install", package
            ])
            print(f"✅ {package} installed successfully")
        except subprocess.CalledProcessError as e:
            print(f"❌ Failed to install {package}: {e}")
            return 1
    
    print("\n✅ All dependencies installed successfully!")
    print("\n💡 You can now run: python3 scripts/ibmq_negentropic_bench.py")
    return 0

if __name__ == "__main__":
    sys.exit(install_dependencies())
