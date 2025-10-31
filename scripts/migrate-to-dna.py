#!/usr/bin/env python3
"""
DNALang .dna Extension Migration Script

This script converts all .tsx and .html files to .dna extension
and updates all import statements across the codebase.

Usage:
    python scripts/migrate-to-dna.py --dry-run  # Preview changes
    python scripts/migrate-to-dna.py             # Execute migration
    python scripts/migrate-to-dna.py --rollback  # Undo migration
"""

import os
import re
import sys
import shutil
from pathlib import Path
from typing import List, Dict, Tuple

class DNAMigrator:
    def __init__(self, root_dir: str = '.', dry_run: bool = False):
        self.root_dir = Path(root_dir)
        self.dry_run = dry_run
        self.stats = {
            'files_converted': 0,
            'imports_updated': 0,
            'errors': []
        }
    
    def find_files_to_convert(self) -> List[Path]:
        """Find all .tsx and .html files"""
        tsx_files = list(self.root_dir.rglob('*.tsx'))
        html_files = list(self.root_dir.rglob('*.html'))
        
        # Exclude node_modules and .next
        excluded = ['node_modules', '.next', 'dist', 'build']
        files = [
            f for f in tsx_files + html_files
            if not any(ex in str(f) for ex in excluded)
        ]
        
        return files
    
    def convert_file(self, file_path: Path) -> Path:
        """Convert a single file to .dna extension"""
        dna_path = file_path.with_suffix('.dna')
        
        if self.dry_run:
            print(f"[DRY RUN] Would convert: {file_path} → {dna_path}")
            return dna_path
        
        try:
            shutil.move(str(file_path), str(dna_path))
            print(f"✓ Converted: {file_path.name} → {dna_path.name}")
            self.stats['files_converted'] += 1
            return dna_path
        except Exception as e:
            error_msg = f"Error converting {file_path}: {e}"
            print(f"✗ {error_msg}")
            self.stats['errors'].append(error_msg)
            return file_path
    
    def update_imports_in_file(self, file_path: Path) -> None:
        """Update import statements in a file"""
        if not file_path.exists():
            return
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Pattern 1: from './path/file.tsx'
            content = re.sub(
                r"from\s+['\"]([^'\"]+)\.tsx['\"]",
                r"from '\1.dna'",
                content
            )
            
            # Pattern 2: from '@/path/file.tsx'
            content = re.sub(
                r"from\s+['\"]@/([^'\"]+)\.tsx['\"]",
                r"from '@/\1.dna'",
                content
            )
            
            # Pattern 3: import('./path/file.tsx')
            content = re.sub(
                r"import$$['\"]([^'\"]+)\.tsx['\"]$$",
                r"import('\1.dna')",
                content
            )
            
            # Pattern 4: require('./path/file.tsx')
            content = re.sub(
                r"require$$['\"]([^'\"]+)\.tsx['\"]$$",
                r"require('\1.dna')",
                content
            )
            
            if content != original_content:
                if self.dry_run:
                    print(f"[DRY RUN] Would update imports in: {file_path}")
                else:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✓ Updated imports: {file_path.name}")
                    self.stats['imports_updated'] += 1
        
        except Exception as e:
            error_msg = f"Error updating imports in {file_path}: {e}"
            print(f"✗ {error_msg}")
            self.stats['errors'].append(error_msg)
    
    def update_all_imports(self) -> None:
        """Update imports in all .dna, .ts, and .js files"""
        files_to_update = (
            list(self.root_dir.rglob('*.dna')) +
            list(self.root_dir.rglob('*.ts')) +
            list(self.root_dir.rglob('*.js'))
        )
        
        # Exclude node_modules and .next
        excluded = ['node_modules', '.next', 'dist', 'build']
        files_to_update = [
            f for f in files_to_update
            if not any(ex in str(f) for ex in excluded)
        ]
        
        print(f"\nUpdating imports in {len(files_to_update)} files...")
        
        for file_path in files_to_update:
            self.update_imports_in_file(file_path)
    
    def migrate(self) -> None:
        """Execute the full migration"""
        print("=" * 60)
        print("DNALang .dna Extension Migration")
        print("=" * 60)
        
        if self.dry_run:
            print("\n⚠️  DRY RUN MODE - No files will be changed\n")
        
        # Phase 1: Find files
        files_to_convert = self.find_files_to_convert()
        print(f"\nFound {len(files_to_convert)} files to convert:")
        print(f"  - .tsx files: {len([f for f in files_to_convert if f.suffix == '.tsx'])}")
        print(f"  - .html files: {len([f for f in files_to_convert if f.suffix == '.html'])}")
        
        if not files_to_convert:
            print("\n✓ No files to convert!")
            return
        
        # Confirm before proceeding
        if not self.dry_run:
            response = input("\nProceed with migration? (yes/no): ")
            if response.lower() != 'yes':
                print("Migration cancelled.")
                return
        
        # Phase 2: Convert files
        print("\n" + "=" * 60)
        print("Phase 1: Converting files to .dna extension")
        print("=" * 60 + "\n")
        
        for file_path in files_to_convert:
            self.convert_file(file_path)
        
        # Phase 3: Update imports
        print("\n" + "=" * 60)
        print("Phase 2: Updating import statements")
        print("=" * 60 + "\n")
        
        self.update_all_imports()
        
        # Summary
        print("\n" + "=" * 60)
        print("Migration Summary")
        print("=" * 60)
        print(f"Files converted: {self.stats['files_converted']}")
        print(f"Imports updated: {self.stats['imports_updated']}")
        print(f"Errors: {len(self.stats['errors'])}")
        
        if self.stats['errors']:
            print("\nErrors encountered:")
            for error in self.stats['errors']:
                print(f"  - {error}")
        
        if not self.dry_run:
            print("\n✓ Migration complete!")
            print("\nNext steps:")
            print("  1. Run: npm run build")
            print("  2. Run: npm run test")
            print("  3. Run: python scripts/validate-imports.py")
            print("  4. Commit changes: git add . && git commit -m 'Migrate to .dna extension'")
        else:
            print("\nTo execute migration, run without --dry-run flag")

def main():
    dry_run = '--dry-run' in sys.argv
    rollback = '--rollback' in sys.argv
    
    if rollback:
        print("Rollback not yet implemented. Use git to revert changes.")
        sys.exit(1)
    
    migrator = DNAMigrator(root_dir='.', dry_run=dry_run)
    migrator.migrate()

if __name__ == "__main__":
    main()
