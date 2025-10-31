#!/usr/bin/env python3
"""
DNALang Import Validator

Validates that all imports use .dna extension and no .tsx imports remain.

Usage:
    python scripts/validate-imports.py
"""

import re
import sys
from pathlib import Path
from typing import List, Dict

def validate_imports(root_dir: str = '.') -> bool:
    """Check for any remaining .tsx imports"""
    root = Path(root_dir)
    issues = []
    
    # Find all code files
    files = (
        list(root.rglob('*.dna')) +
        list(root.rglob('*.ts')) +
        list(root.rglob('*.js'))
    )
    
    # Exclude node_modules and .next
    excluded = ['node_modules', '.next', 'dist', 'build']
    files = [
        f for f in files
        if not any(ex in str(f) for ex in excluded)
    ]
    
    print(f"Validating imports in {len(files)} files...\n")
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find .tsx imports
            tsx_imports = re.findall(r"from\s+['\"]([^'\"]+)\.tsx['\"]", content)
            tsx_imports += re.findall(r"import$$['\"]([^'\"]+)\.tsx['\"]$$", content)
            
            if tsx_imports:
                issues.append({
                    'file': str(file_path),
                    'imports': tsx_imports
                })
        
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
    
    if issues:
        print("❌ Found .tsx imports that need updating:\n")
        for issue in issues:
            print(f"File: {issue['file']}")
            for imp in issue['imports']:
                print(f"  - {imp}.tsx → {imp}.dna")
            print()
        return False
    else:
        print("✓ All imports validated successfully!")
        print("✓ No .tsx imports found")
        return True

if __name__ == "__main__":
    success = validate_imports('.')
    sys.exit(0 if success else 1)
