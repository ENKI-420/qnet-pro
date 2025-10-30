#!/usr/bin/env python3

"""
Ψ-Assembly Assembler
Low-level quantum state manipulation language
"""

import re
import json
import sys

class PsiAssembler:
    def __init__(self):
        self.instructions = []
        self.qubits = set()
        self.classical_bits = set()
        
    def parse_instruction(self, line):
        """Parse a single Ψ-Assembly instruction"""
        line = line.strip()
        
        # Skip comments and empty lines
        if not line or line.startswith('#'):
            return None
        
        # Parse instruction format: opcode operands
        parts = re.split(r'[,\s]+', line)
        opcode = parts[0].lower()
        operands = [op.strip() for op in parts[1:] if op.strip()]
        
        return {
            'opcode': opcode,
            'operands': operands
        }
    
    def validate_instruction(self, instruction):
        """Validate instruction syntax and operands"""
        if not instruction:
            return True
        
        opcode = instruction['opcode']
        operands = instruction['operands']
        
        # Define valid opcodes and their operand counts
        valid_opcodes = {
            'ψ_init': (1, float('inf')),  # Initialize qubits
            'ψ_h': (1, 1),                 # Hadamard gate
            'ψ_x': (1, 1),                 # Pauli-X gate
            'ψ_y': (1, 1),                 # Pauli-Y gate
            'ψ_z': (1, 1),                 # Pauli-Z gate
            'ψ_cnot': (2, 2),              # CNOT gate
            'ψ_cz': (2, 2),                # CZ gate
            'ψ_swap': (2, 2),              # SWAP gate
            'ψ_rx': (2, 2),                # RX rotation
            'ψ_ry': (2, 2),                # RY rotation
            'ψ_rz': (2, 2),                # RZ rotation
            'ψ_measure': (1, float('inf')), # Measurement
            'ψ_barrier': (0, float('inf')), # Barrier
        }
        
        if opcode not in valid_opcodes:
            raise ValueError(f"Unknown opcode: {opcode}")
        
        min_ops, max_ops = valid_opcodes[opcode]
        if not (min_ops <= len(operands) <= max_ops):
            raise ValueError(f"{opcode} expects {min_ops}-{max_ops} operands, got {len(operands)}")
        
        return True
    
    def assemble(self, source_code):
        """Assemble Ψ-Assembly code to quantum circuit"""
        print("Assembling Ψ-Assembly code...")
        print("")
        
        lines = source_code.strip().split('\n')
        
        for line_num, line in enumerate(lines, 1):
            try:
                instruction = self.parse_instruction(line)
                
                if instruction:
                    self.validate_instruction(instruction)
                    self.instructions.append(instruction)
                    
                    # Track qubits
                    for operand in instruction['operands']:
                        if operand.startswith('q'):
                            self.qubits.add(operand)
                        elif operand.startswith('c'):
                            self.classical_bits.add(operand)
                    
                    print(f"Line {line_num}: {instruction['opcode']} {' '.join(instruction['operands'])}")
                    
            except Exception as e:
                print(f"Error on line {line_num}: {e}")
                sys.exit(1)
        
        print("")
        print(f"✓ Assembly complete")
        print(f"✓ Qubits used: {len(self.qubits)}")
        print(f"✓ Instructions: {len(self.instructions)}")
        
        return self.to_qasm()
    
    def to_qasm(self):
        """Convert to OpenQASM format"""
        qasm = []
        qasm.append("OPENQASM 2.0;")
        qasm.append('include "qelib1.inc";')
        qasm.append(f"qreg q[{len(self.qubits)}];")
        
        if self.classical_bits:
            qasm.append(f"creg c[{len(self.classical_bits)}];")
        
        qasm.append("")
        
        # Convert instructions
        for inst in self.instructions:
            opcode = inst['opcode'].replace('ψ_', '')
            operands = inst['operands']
            
            if opcode == 'init':
                continue  # Skip init in QASM
            elif opcode == 'measure':
                for i, qubit in enumerate(operands):
                    qasm.append(f"measure {qubit} -> c[{i}];")
            elif opcode in ['rx', 'ry', 'rz']:
                angle = operands[0]
                qubit = operands[1]
                qasm.append(f"{opcode}({angle}) {qubit};")
            else:
                qasm.append(f"{opcode} {', '.join(operands)};")
        
        return '\n'.join(qasm)

def main():
    print("================================")
    print("Ψ-Assembly Assembler")
    print("================================")
    print("")
    
    if len(sys.argv) < 2:
        # Example code
        example_code = """
# Bell State Creation
ψ_init q0, q1
ψ_h q0
ψ_cnot q0, q1
ψ_measure q0, q1
"""
        print("No input file provided. Using example code:")
        print(example_code)
        source_code = example_code
    else:
        with open(sys.argv[1], 'r') as f:
            source_code = f.read()
    
    assembler = PsiAssembler()
    qasm_output = assembler.assemble(source_code)
    
    print("")
    print("Generated QASM:")
    print("================================")
    print(qasm_output)
    print("================================")
    
    # Save output
    output_file = '~/dna-lang/output/assembled.qasm'
    with open(output_file, 'w') as f:
        f.write(qasm_output)
    
    print(f"\nOutput saved to: {output_file}")

if __name__ == "__main__":
    main()
