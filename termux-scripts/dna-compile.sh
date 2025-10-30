#!/bin/bash

# DNALang Compiler Script
# Compiles DNALang organisms to executable format

if [ -z "$1" ]; then
    echo "Usage: dna-compile <organism-file>"
    exit 1
fi

ORGANISM_FILE=$1
OUTPUT_FILE="${ORGANISM_FILE%.dna}.qasm"

echo "Compiling DNALang organism: $ORGANISM_FILE"
echo "Output: $OUTPUT_FILE"
echo ""

# Parse and validate organism
python3 ~/dna-lang/scripts/parser.py "$ORGANISM_FILE"

if [ $? -eq 0 ]; then
    echo "✓ Compilation successful"
    echo "✓ Output saved to: $OUTPUT_FILE"
else
    echo "✗ Compilation failed"
    exit 1
fi
