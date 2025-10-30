#!/bin/bash

# DNALang Execution Script
# Executes compiled organisms on quantum backends

if [ -z "$1" ]; then
    echo "Usage: dna-run <organism-file>"
    exit 1
fi

ORGANISM_FILE=$1
BACKEND=${2:-simulator}

echo "Executing organism: $ORGANISM_FILE"
echo "Backend: $BACKEND"
echo ""

python3 ~/dna-lang/scripts/executor.py "$ORGANISM_FILE" "$BACKEND"

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ Execution complete"
    echo "✓ Results saved to: ~/dna-lang/output/"
else
    echo ""
    echo "✗ Execution failed"
    exit 1
fi
