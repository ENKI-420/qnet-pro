"""
DNA-Lang Compiler and Interpreter
Quantum Bioinformatics Programming Language
"""
import re
import json
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
import numpy as np

# ============================================================================
# LEXER
# ============================================================================

@dataclass
class Token:
    type: str
    value: str
    line: int
    column: int

class Lexer:
    """Tokenizes DNA-Lang source code"""
    
    KEYWORDS = {
        'organism', 'genome', 'gene', 'encode', 'qubits',
        'quantum_state', 'state', 'superpose', 'entangle', 'measure',
        'control', 'if', 'apply', 'evolve', 'fitness',
        'E_Dampening', 'Darwinism', 'compiler', 'DNA', 'GENOME',
        'GENE', 'MUTATIONS', 'AGENTS', 'purpose', 'expression_level',
        'trigger_conditions', 'methods', 'safety_level', 'domain',
        'security_level', 'evolution_rate', 'consciousness_target'
    }
    
    TOKEN_PATTERNS = [
        ('NUMBER', r'\d+\.?\d*'),
        ('STRING', r'"[^"]*"'),
        ('IDENTIFIER', r'[a-zA-Z_][a-zA-Z0-9_]*'),
        ('ARROW', r'->'),
        ('LBRACE', r'\{'),
        ('RBRACE', r'\}'),
        ('LPAREN', r'\('),
        ('RPAREN', r'\)'),
        ('LBRACKET', r'\['),
        ('RBRACKET', r'\]'),
        ('SEMICOLON', r';'),
        ('COLON', r':'),
        ('COMMA', r','),
        ('EQUALS', r'=='),
        ('ASSIGN', r'='),
        ('GT', r'>'),
        ('LT', r'<'),
        ('NE', r'!='),
        ('PLUS', r'\+'),
        ('MINUS', r'-'),
        ('STAR', r'\*'),
        ('SLASH', r'/'),
        ('PIPE', r'\|'),
        ('WHITESPACE', r'[ \t]+'),
        ('NEWLINE', r'\n'),
        ('COMMENT', r'#[^\n]*'),
    ]
    
    def __init__(self, source: str):
        self.source = source
        self.tokens: List[Token] = []
        self.line = 1
        self.column = 1
    
    def tokenize(self) -> List[Token]:
        """Convert source code into tokens"""
        pos = 0
        while pos < len(self.source):
            matched = False
            
            for token_type, pattern in self.TOKEN_PATTERNS:
                regex = re.compile(pattern)
                match = regex.match(self.source, pos)
                
                if match:
                    value = match.group(0)
                    
                    if token_type not in ('WHITESPACE', 'COMMENT'):
                        # Check if identifier is a keyword
                        if token_type == 'IDENTIFIER' and value in self.KEYWORDS:
                            token_type = value.upper()
                        
                        self.tokens.append(Token(token_type, value, self.line, self.column))
                    
                    # Update position
                    if token_type == 'NEWLINE':
                        self.line += 1
                        self.column = 1
                    else:
                        self.column += len(value)
                    
                    pos = match.end()
                    matched = True
                    break
            
            if not matched:
                raise SyntaxError(f"Unexpected character '{self.source[pos]}' at line {self.line}, column {self.column}")
        
        return self.tokens

# ============================================================================
# PARSER
# ============================================================================

@dataclass
class ASTNode:
    type: str
    value: Any = None
    children: List['ASTNode'] = None
    
    def __post_init__(self):
        if self.children is None:
            self.children = []

class Parser:
    """Parses tokens into Abstract Syntax Tree"""
    
    def __init__(self, tokens: List[Token]):
        self.tokens = tokens
        self.pos = 0
    
    def current_token(self) -> Optional[Token]:
        if self.pos < len(self.tokens):
            return self.tokens[self.pos]
        return None
    
    def consume(self, expected_type: str) -> Token:
        token = self.current_token()
        if not token or token.type != expected_type:
            raise SyntaxError(f"Expected {expected_type}, got {token.type if token else 'EOF'}")
        self.pos += 1
        return token
    
    def parse(self) -> ASTNode:
        """Parse entire program"""
        program = ASTNode('PROGRAM')
        
        while self.current_token():
            if self.current_token().type == 'ORGANISM':
                program.children.append(self.parse_organism())
            else:
                self.pos += 1
        
        return program
    
    def parse_organism(self) -> ASTNode:
        """Parse organism definition"""
        self.consume('ORGANISM')
        name = self.consume('IDENTIFIER')
        self.consume('LBRACE')
        
        organism = ASTNode('ORGANISM', name.value)
        
        while self.current_token() and self.current_token().type != 'RBRACE':
            token = self.current_token()
            if token.type == 'DNA':
                organism.children.append(self.parse_dna())
            elif token.type == 'GENOME':
                organism.children.append(self.parse_genome())
            elif token.type == 'AGENTS':
                organism.children.append(self.parse_agents())
            else:
                self.pos += 1
        
        self.consume('RBRACE')
        return organism
    
    def parse_dna(self) -> ASTNode:
        """Parse DNA configuration block"""
        self.consume('DNA')
        self.consume('LBRACE')
        
        dna = ASTNode('DNA')
        config = {}
        
        while self.current_token() and self.current_token().type != 'RBRACE':
            if self.current_token().type == 'IDENTIFIER':
                key = self.consume('IDENTIFIER').value
                self.consume('COLON')
                value_token = self.current_token()
                if value_token.type == 'STRING':
                    value = self.consume('STRING').value.strip('"')
                elif value_token.type == 'NUMBER':
                    value = float(self.consume('NUMBER').value)
                else:
                    value = self.consume('IDENTIFIER').value
                config[key] = value
            else:
                self.pos += 1
        
        self.consume('RBRACE')
        dna.value = config
        return dna
    
    def parse_genome(self) -> ASTNode:
        """Parse genome block"""
        self.consume('GENOME')
        self.consume('LBRACE')
        
        genome = ASTNode('GENOME')
        
        while self.current_token() and self.current_token().type != 'RBRACE':
            if self.current_token().type == 'GENE':
                genome.children.append(self.parse_gene())
            else:
                self.pos += 1
        
        self.consume('RBRACE')
        return genome
    
    def parse_gene(self) -> ASTNode:
        """Parse gene definition"""
        self.consume('GENE')
        name = self.consume('IDENTIFIER')
        self.consume('LBRACE')
        
        gene = ASTNode('GENE', {'name': name.value})
        
        while self.current_token() and self.current_token().type != 'RBRACE':
            token = self.current_token()
            if token.type == 'MUTATIONS':
                gene.children.append(self.parse_mutations())
            else:
                self.pos += 1
        
        self.consume('RBRACE')
        return gene
    
    def parse_mutations(self) -> ASTNode:
        """Parse mutations block"""
        self.consume('MUTATIONS')
        self.consume('LBRACE')
        
        mutations = ASTNode('MUTATIONS')
        
        # Skip mutation parsing for now - simplified
        depth = 1
        while depth > 0 and self.current_token():
            token = self.current_token()
            if token.type == 'LBRACE':
                depth += 1
            elif token.type == 'RBRACE':
                depth -= 1
            self.pos += 1
        
        return mutations
    
    def parse_agents(self) -> ASTNode:
        """Parse agents block"""
        self.consume('AGENTS')
        self.consume('LBRACE')
        
        agents = ASTNode('AGENTS')
        
        # Skip agent parsing for now - simplified
        depth = 1
        while depth > 0 and self.current_token():
            token = self.current_token()
            if token.type == 'LBRACE':
                depth += 1
            elif token.type == 'RBRACE':
                depth -= 1
            self.pos += 1
        
        return agents

# ============================================================================
# CODE GENERATOR
# ============================================================================

class QiskitCodeGenerator:
    """Generates Qiskit circuit code from AST"""
    
    def __init__(self, ast: ASTNode):
        self.ast = ast
        self.code_lines = []
        self.num_qubits = 4  # Default
    
    def generate(self) -> str:
        """Generate complete Qiskit code"""
        self.code_lines = [
            "from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister",
            "from qiskit.quantum_info import Statevector",
            "from qiskit_ibm_runtime import QiskitRuntimeService, Sampler",
            "import numpy as np",
            "",
        ]
        
        for organism in self.ast.children:
            if organism.type == 'ORGANISM':
                self.generate_organism(organism)
        
        return '\n'.join(self.code_lines)
    
    def generate_organism(self, organism: ASTNode):
        """Generate code for organism"""
        self.code_lines.append(f"# Organism: {organism.value}")
        self.code_lines.append("")
        
        # Extract DNA configuration
        dna_config = {}
        for child in organism.children:
            if child.type == 'DNA':
                dna_config = child.value
        
        self.code_lines.append(f"# DNA Configuration: {dna_config}")
        self.code_lines.append("")
        
        # Create quantum circuit
        self.code_lines.append(f"qc = QuantumCircuit({self.num_qubits})")
        self.code_lines.append("")
        
        # Add basic quantum operations
        self.code_lines.append("# Apply Hadamard for superposition")
        self.code_lines.append("qc.h(0)")
        self.code_lines.append("")
        
        self.code_lines.append("# Create entanglement")
        self.code_lines.append("qc.cx(0, 1)")
        self.code_lines.append("")
        
        self.code_lines.append("# Measure qubits")
        self.code_lines.append("qc.measure_all()")
        self.code_lines.append("")
        
        # Add execution code
        self.code_lines.append("# Execute on IBM Quantum")
        self.code_lines.append("# service = QiskitRuntimeService()")
        self.code_lines.append("# backend = service.backend('ibm_brisbane')")
        self.code_lines.append("# sampler = Sampler(backend)")
        self.code_lines.append("# job = sampler.run(qc, shots=1024)")
        self.code_lines.append("# result = job.result()")
        self.code_lines.append("")
        
        self.code_lines.append("print('Circuit compiled successfully!')")
        self.code_lines.append("print(qc)")

# ============================================================================
# COMPILER INTERFACE
# ============================================================================

def compile_dna_lang(source_code: str) -> Dict[str, Any]:
    """
    Compile DNA-Lang source code to Qiskit circuit
    
    Returns:
        Dictionary with compilation results including AST, generated code, and metadata
    """
    try:
        # Lexical analysis
        lexer = Lexer(source_code)
        tokens = lexer.tokenize()
        
        # Parsing
        parser = Parser(tokens)
        ast = parser.parse()
        
        # Code generation
        codegen = QiskitCodeGenerator(ast)
        qiskit_code = codegen.generate()
        
        return {
            'success': True,
            'qiskit_code': qiskit_code,
            'num_qubits': codegen.num_qubits,
            'tokens': len(tokens),
            'message': 'Compilation successful'
        }
    
    except SyntaxError as e:
        return {
            'success': False,
            'error': str(e),
            'message': 'Syntax error in DNA-Lang code'
        }
    except Exception as e:
        return {
            'success': False,
            'error': str(e),
            'message': 'Compilation failed'
        }

# Test the compiler
if __name__ == "__main__":
    test_code = """
ORGANISM QuantumExample
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.85
  }

  GENOME {
    GENE EntanglementGene {
      purpose: "Create entangled states"
      expression_level: 1.0

      MUTATIONS {
        optimize_fidelity {
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
    quantum_executor: QuantumAgent(
      backend: "ibm_quantum",
      shots: 4096
    )
  }
}
"""
    
    result = compile_dna_lang(test_code)
    print(json.dumps(result, indent=2))
    if result['success']:
        print("\nGenerated Qiskit Code:")
        print(result['qiskit_code'])
