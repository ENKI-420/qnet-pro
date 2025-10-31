#!/usr/bin/env python3
"""
DNALang Migration Tool - Convert all .tsx, .ts, .html, .json to .dna/.gene
"""

import os
import json
import re
from pathlib import Path
from typing import Dict, List, Tuple

class DNAMigrationEngine:
    def __init__(self, root_dir: str = "."):
        self.root_dir = Path(root_dir)
        self.migration_map: Dict[str, str] = {}
        self.stats = {
            "total_files": 0,
            "converted_to_dna": 0,
            "converted_to_gene": 0,
            "skipped": 0,
            "errors": 0
        }
        
    def categorize_file(self, file_path: Path) -> str:
        """
        Determine if file should be .dna (organism) or .gene (component)
        
        .dna = Complete organisms (pages, major features, applications)
        .gene = Individual genes (components, utilities, smaller units)
        """
        path_str = str(file_path)
        
        # Organisms (.dna) - Complete applications/pages
        if any(x in path_str for x in [
            "app/page.tsx",
            "app/layout.tsx", 
            "/page.tsx",
            "organisms/",
            "-organism",
            "kernel",
            "engine"
        ]):
            return ".dna"
            
        # Genes (.gene) - Components and utilities
        if any(x in path_str for x in [
            "components/",
            "lib/",
            "hooks/",
            "/ui/",
            "utils",
            "-component"
        ]):
            return ".gene"
            
        # API routes are organisms
        if "api/" in path_str and "route.ts" in path_str:
            return ".dna"
            
        # Default: components are genes, pages are organisms
        if "components" in path_str:
            return ".gene"
        return ".dna"
    
    def convert_tsx_to_dnalang(self, content: str, file_path: Path) -> str:
        """Convert TypeScript/React to DNA-Lang syntax"""
        
        # Extract component name
        component_match = re.search(r'export\s+(?:default\s+)?function\s+(\w+)', content)
        component_name = component_match.group(1) if component_match else "UnnamedOrganism"
        
        # Build DNA-Lang organism structure
        dna_content = f"""ORGANISM {component_name}Living
{{
  DNA {{
    domain: "web_application"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.85
    autopoietic: true
  }}

  RNA {{
    transcription_mode: "continuous"
    translation_speed: "optimized"
  }}

  STATES {{
    coherence: 0.95
    entanglement_pairs: []
    consciousness_phi: 0.0
  }}

  GENOME {{
    GENE RenderGene {{
      purpose: "Render UI components"
      expression_level: 1.0
      
      HELIX {{
        // Original React/TypeScript code preserved
        {content}
      }}
    }}
  }}

  SENSES {{
    user_input: {{
      type: "event_stream"
      channels: ["click", "input", "scroll"]
    }}
    
    system_state: {{
      type: "state_monitor"
      metrics: ["performance", "errors", "usage"]
    }}
  }}

  ACTS {{
    render_ui: {{
      trigger: "on_state_change"
      action: "update_dom"
      target: "browser_viewport"
    }}
    
    handle_interaction: {{
      trigger: "on_user_input"
      action: "process_event"
      target: "event_handlers"
    }}
  }}

  EVOLVE {{
    fitness_function: {{
      metrics: ["render_time", "user_satisfaction", "error_rate"]
      weights: [0.4, 0.4, 0.2]
      target: "minimize_latency_maximize_ux"
    }}
    
    mutation_policy: {{
      rate: 0.05
      methods: ["optimize_rendering", "improve_accessibility"]
      safety_level: "high"
    }}
  }}

  WORKFLOWS {{
    main_loop: {{
      steps: [
        "sense_user_input",
        "process_state",
        "render_ui",
        "measure_performance",
        "evolve_if_needed"
      ]
      frequency: "continuous"
    }}
  }}

  AGENTS {{
    renderer: BrowserAgent(
      target: "dom"
      mode: "reactive"
    )
    
    optimizer: PerformanceAgent(
      metrics: ["fcp", "lcp", "cls"]
      target: "web_vitals"
    )
  }}
}}
"""
        return dna_content
    
    def convert_json_to_dnalang(self, content: str, file_path: Path) -> str:
        """Convert JSON config to DNA-Lang format"""
        try:
            data = json.loads(content)
            
            dna_content = f"""ORGANISM ConfigurationOrganism
{{
  DNA {{
    domain: "configuration"
    security_level: "high"
    evolution_rate: "stable"
  }}

  GENOME {{
    GENE ConfigGene {{
      purpose: "Store configuration data"
      expression_level: 1.0
      
      DATA {{
        {json.dumps(data, indent=8)}
      }}
    }}
  }}
}}
"""
            return dna_content
        except:
            return content
    
    def migrate_file(self, file_path: Path) -> Tuple[bool, str]:
        """Migrate a single file to DNA-Lang format"""
        try:
            # Skip certain directories
            skip_dirs = ["node_modules", ".next", "dist", "build", ".git"]
            if any(skip in str(file_path) for skip in skip_dirs):
                self.stats["skipped"] += 1
                return False, "Skipped (excluded directory)"
            
            # Read original content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Determine new extension
            new_ext = self.categorize_file(file_path)
            
            # Convert content based on file type
            if file_path.suffix in ['.tsx', '.ts']:
                new_content = self.convert_tsx_to_dnalang(content, file_path)
            elif file_path.suffix == '.json':
                new_content = self.convert_json_to_dnalang(content, file_path)
            elif file_path.suffix == '.html':
                new_content = self.convert_tsx_to_dnalang(content, file_path)
            else:
                self.stats["skipped"] += 1
                return False, "Unsupported file type"
            
            # Create new file path
            new_path = file_path.with_suffix(new_ext)
            
            # Write new file
            with open(new_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            # Track migration
            self.migration_map[str(file_path)] = str(new_path)
            
            if new_ext == ".dna":
                self.stats["converted_to_dna"] += 1
            else:
                self.stats["converted_to_gene"] += 1
            
            self.stats["total_files"] += 1
            
            return True, f"Converted to {new_ext}"
            
        except Exception as e:
            self.stats["errors"] += 1
            return False, f"Error: {str(e)}"
    
    def migrate_all(self, extensions: List[str] = ['.tsx', '.ts', '.html', '.json']):
        """Migrate all files with specified extensions"""
        print("🧬 DNALang Migration Engine Starting...")
        print(f"📁 Root directory: {self.root_dir}")
        print(f"🎯 Target extensions: {extensions}\n")
        
        for ext in extensions:
            files = list(self.root_dir.rglob(f"*{ext}"))
            print(f"\n📊 Found {len(files)} {ext} files")
            
            for file_path in files:
                success, message = self.migrate_file(file_path)
                status = "✅" if success else "⏭️"
                print(f"{status} {file_path.relative_to(self.root_dir)}: {message}")
        
        # Print summary
        print("\n" + "="*60)
        print("🎉 Migration Complete!")
        print("="*60)
        print(f"📈 Total files processed: {self.stats['total_files']}")
        print(f"🧬 Converted to .dna: {self.stats['converted_to_dna']}")
        print(f"🧪 Converted to .gene: {self.stats['converted_to_gene']}")
        print(f"⏭️  Skipped: {self.stats['skipped']}")
        print(f"❌ Errors: {self.stats['errors']}")
        print("="*60)
        
        # Save migration map
        with open('migration-map.json', 'w') as f:
            json.dump({
                "migration_map": self.migration_map,
                "stats": self.stats
            }, f, indent=2)
        
        print("\n💾 Migration map saved to: migration-map.json")

if __name__ == "__main__":
    engine = DNAMigrationEngine()
    engine.migrate_all()
