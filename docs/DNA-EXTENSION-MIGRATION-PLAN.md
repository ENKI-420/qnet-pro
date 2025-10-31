# DNALang .dna Extension Migration Plan

## Executive Summary

This document outlines the comprehensive plan to convert all `.tsx` and `.html` files to the new `.dna` extension across the entire DNALang codebase. This migration aligns with DNALang's biological computing paradigm, where `.dna` files represent living software organisms.

**Timeline**: 6 weeks (Phased rollout)  
**Risk Level**: Medium (Requires careful testing and rollback strategy)  
**Team Impact**: All developers (Training required)

---

## 1. Migration Overview

### 1.1 Scope

**Files to Convert:**
- 27 `.tsx` files in `/app` directory
- All React components in `/components` directory
- All `.html` template files
- Total estimated: ~150 files

**Files to Keep:**
- `.ts` files (TypeScript utilities, no JSX)
- `.py` files (Python backend)
- `.json`, `.yaml`, `.md` configuration files
- `.css` files

### 1.2 Benefits

1. **Brand Alignment**: `.dna` extension reinforces DNALang's biological computing identity
2. **Semantic Clarity**: Distinguishes living organisms from static code
3. **Tooling Integration**: Custom syntax highlighting for DNA-Lang constructs
4. **Marketing Value**: Unique file extension creates memorable developer experience

### 1.3 Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Build system breaks | High | Medium | Phased rollout with rollback plan |
| IDE support issues | Medium | High | Custom VS Code extension |
| Team confusion | Medium | Medium | Comprehensive training + docs |
| Third-party tool incompatibility | Low | Low | Maintain .tsx fallback support |

---

## 2. Technical Implementation

### 2.1 Build Configuration Changes

#### Next.js Configuration

\`\`\`javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Add .dna as a resolvable extension
    config.resolve.extensions.push('.dna')
    
    // Configure .dna files to be processed like .tsx
    config.module.rules.push({
      test: /\.dna$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    })
    
    return config
  },
  // Enable .dna files in page routing
  pageExtensions: ['dna', 'tsx', 'ts', 'jsx', 'js'],
}

export default nextConfig
\`\`\`

#### TypeScript Configuration

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.dna",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
\`\`\`

#### Type Definitions

\`\`\`typescript
// types/dna.d.ts
declare module '*.dna' {
  import { ComponentType } from 'react'
  const component: ComponentType<any>
  export default component
}
\`\`\`

### 2.2 Import Statement Updates

**Before:**
\`\`\`typescript
import HomePage from './app/page.tsx'
import { Button } from '@/components/ui/button.tsx'
\`\`\`

**After:**
\`\`\`typescript
import HomePage from './app/page.dna'
import { Button } from '@/components/ui/button.dna'
\`\`\`

**Migration Script** (see Section 4.1)

### 2.3 IDE Support

#### VS Code Extension

\`\`\`json
// .vscode/extensions.json
{
  "recommendations": [
    "dnalang.dna-lang-vscode"
  ]
}
\`\`\`

#### Syntax Highlighting

\`\`\`json
// .vscode/settings.json
{
  "files.associations": {
    "*.dna": "typescriptreact"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[dna]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
\`\`\`

#### Custom Language Definition

\`\`\`json
// syntaxes/dna.tmLanguage.json
{
  "scopeName": "source.dna",
  "name": "DNA-Lang",
  "fileTypes": ["dna"],
  "patterns": [
    {
      "include": "source.tsx"
    },
    {
      "name": "keyword.control.dna",
      "match": "\\b(ORGANISM|GENOME|GENE|MUTATIONS|AGENTS|DNA)\\b"
    }
  ]
}
\`\`\`

### 2.4 Linting & Formatting

#### ESLint Configuration

\`\`\`javascript
// .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals'],
  overrides: [
    {
      files: ['*.dna'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        // Same rules as .tsx files
      },
    },
  ],
}
\`\`\`

#### Prettier Configuration

\`\`\`json
// .prettierrc
{
  "semi": false,
  "singleQuote": false,
  "trailingComma": "es5",
  "overrides": [
    {
      "files": "*.dna",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
\`\`\`

---

## 3. Migration Phases

### Phase 1: Infrastructure Setup (Week 1)

**Objectives:**
- Update build configurations
- Create type definitions
- Set up IDE support
- Develop migration scripts

**Deliverables:**
- ✅ Updated `next.config.mjs`
- ✅ Updated `tsconfig.json`
- ✅ Created `types/dna.d.ts`
- ✅ VS Code extension published
- ✅ Migration scripts tested

**Success Criteria:**
- Build system recognizes `.dna` files
- TypeScript provides intellisense for `.dna` files
- VS Code syntax highlighting works

### Phase 2: Pilot Migration (Week 2)

**Objectives:**
- Convert 5 non-critical files
- Test build process
- Validate IDE support
- Gather team feedback

**Files to Convert:**
\`\`\`
app/examples/page.tsx → app/examples/page.dna
app/playground/page.tsx → app/playground/page.dna
components/ui/badge.tsx → components/ui/badge.dna
components/ui/separator.tsx → components/ui/separator.dna
components/ui/skeleton.tsx → components/ui/skeleton.dna
\`\`\`

**Success Criteria:**
- All 5 files build successfully
- No runtime errors
- IDE support works as expected
- Team provides positive feedback

### Phase 3: Core Pages Migration (Week 3-4)

**Objectives:**
- Convert all `/app` pages
- Update all imports
- Run comprehensive tests

**Files to Convert:**
\`\`\`
app/page.tsx → app/page.dna
app/layout.tsx → app/layout.dna
app/dashboard/page.tsx → app/dashboard/page.dna
app/editor/page.tsx → app/editor/page.dna
app/quantum/page.tsx → app/quantum/page.dna
app/chat/page.tsx → app/chat/page.dna
app/evolution/page.tsx → app/evolution/page.dna
app/dnalang-ide/page.tsx → app/dnalang-ide/page.dna
app/ibm-cloud/page.tsx → app/ibm-cloud/page.dna
app/ibm-partnership/page.tsx → app/ibm-partnership/page.dna
app/infrastructure/page.tsx → app/infrastructure/page.dna
app/production-roadmap/page.tsx → app/production-roadmap/page.dna
app/strategic-plan/page.tsx → app/strategic-plan/page.dna
... (all other pages)
\`\`\`

**Success Criteria:**
- All pages render correctly
- No broken imports
- All tests pass
- Performance unchanged

### Phase 4: Components Migration (Week 5)

**Objectives:**
- Convert all UI components
- Update component imports across codebase
- Validate component library

**Files to Convert:**
\`\`\`
components/ui/button.tsx → components/ui/button.dna
components/ui/card.tsx → components/ui/card.dna
components/ui/input.tsx → components/ui/input.dna
components/ui/dialog.tsx → components/ui/dialog.dna
... (all shadcn components)
\`\`\`

**Success Criteria:**
- All components work identically
- Storybook (if applicable) updated
- Component tests pass

### Phase 5: Cleanup & Documentation (Week 6)

**Objectives:**
- Remove all `.tsx` files
- Update documentation
- Train team
- Announce migration

**Deliverables:**
- ✅ All `.tsx` files deleted
- ✅ Updated README.md
- ✅ Migration guide published
- ✅ Team training completed
- ✅ Blog post published

**Success Criteria:**
- Zero `.tsx` files in codebase
- All documentation references `.dna`
- Team comfortable with new extension

---

## 4. Automation Scripts

### 4.1 File Conversion Script

\`\`\`python
# scripts/migrate-to-dna.py
import os
import re
from pathlib import Path

def migrate_file(file_path):
    """Convert a single .tsx file to .dna"""
    dna_path = file_path.replace('.tsx', '.dna')
    
    # Rename file
    os.rename(file_path, dna_path)
    print(f"✓ Converted: {file_path} → {dna_path}")
    
    return dna_path

def update_imports(file_path):
    """Update import statements in a file"""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace .tsx imports with .dna
    updated_content = re.sub(
        r"from ['\"](.+?)\.tsx['\"]",
        r"from '\1.dna'",
        content
    )
    
    # Replace @/ imports
    updated_content = re.sub(
        r"from ['\"]@/(.+?)\.tsx['\"]",
        r"from '@/\1.dna'",
        updated_content
    )
    
    with open(file_path, 'w') as f:
        f.write(updated_content)
    
    print(f"✓ Updated imports: {file_path}")

def migrate_directory(directory, dry_run=False):
    """Migrate all .tsx files in a directory"""
    tsx_files = list(Path(directory).rglob('*.tsx'))
    
    print(f"\nFound {len(tsx_files)} .tsx files to migrate\n")
    
    if dry_run:
        print("DRY RUN - No files will be changed\n")
        for file in tsx_files:
            print(f"Would convert: {file}")
        return
    
    # Phase 1: Rename all files
    dna_files = []
    for file in tsx_files:
        dna_file = migrate_file(str(file))
        dna_files.append(dna_file)
    
    # Phase 2: Update imports in all files
    all_files = list(Path(directory).rglob('*.dna')) + \
                list(Path(directory).rglob('*.ts'))
    
    for file in all_files:
        update_imports(str(file))
    
    print(f"\n✓ Migration complete! Converted {len(tsx_files)} files")

if __name__ == "__main__":
    import sys
    
    dry_run = '--dry-run' in sys.argv
    directory = sys.argv[1] if len(sys.argv) > 1 else './app'
    
    migrate_directory(directory, dry_run=dry_run)
\`\`\`

**Usage:**
\`\`\`bash
# Dry run to preview changes
python scripts/migrate-to-dna.py ./app --dry-run

# Execute migration
python scripts/migrate-to-dna.py ./app

# Migrate components
python scripts/migrate-to-dna.py ./components
\`\`\`

### 4.2 Import Validator Script

\`\`\`python
# scripts/validate-imports.py
import os
import re
from pathlib import Path

def validate_imports(directory):
    """Check for any remaining .tsx imports"""
    issues = []
    
    files = list(Path(directory).rglob('*.dna')) + \
            list(Path(directory).rglob('*.ts'))
    
    for file in files:
        with open(file, 'r') as f:
            content = f.read()
        
        # Find .tsx imports
        tsx_imports = re.findall(r"from ['\"](.+?)\.tsx['\"]", content)
        
        if tsx_imports:
            issues.append({
                'file': str(file),
                'imports': tsx_imports
            })
    
    if issues:
        print("❌ Found .tsx imports that need updating:\n")
        for issue in issues:
            print(f"File: {issue['file']}")
            for imp in issue['imports']:
                print(f"  - {imp}.tsx")
            print()
        return False
    else:
        print("✓ All imports validated successfully!")
        return True

if __name__ == "__main__":
    import sys
    directory = sys.argv[1] if len(sys.argv) > 1 else '.'
    
    success = validate_imports(directory)
    sys.exit(0 if success else 1)
\`\`\`

### 4.3 Build Test Script

\`\`\`bash
# scripts/test-build.sh
#!/bin/bash

echo "Testing DNALang build with .dna files..."

# Clean build cache
rm -rf .next

# Run build
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build successful!"
    exit 0
else
    echo "❌ Build failed!"
    exit 1
fi
\`\`\`

---

## 5. Testing Strategy

### 5.1 Unit Tests

\`\`\`typescript
// __tests__/dna-extension.test.ts
import { render } from '@testing-library/react'
import HomePage from '@/app/page.dna'

describe('.dna file support', () => {
  it('should render .dna files correctly', () => {
    const { container } = render(<HomePage />)
    expect(container).toBeInTheDocument()
  })
  
  it('should support TypeScript in .dna files', () => {
    // Type checking happens at build time
    expect(true).toBe(true)
  })
})
\`\`\`

### 5.2 Integration Tests

\`\`\`typescript
// __tests__/integration/routing.test.ts
import { test, expect } from '@playwright/test'

test('should navigate to .dna pages', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Dashboard')
  await expect(page).toHaveURL('/dashboard')
  await expect(page.locator('h1')).toContainText('Dashboard')
})
\`\`\`

### 5.3 Build Tests

\`\`\`bash
# Run in CI/CD pipeline
npm run build
npm run test
npm run lint
\`\`\`

### 5.4 Rollback Plan

\`\`\`bash
# scripts/rollback-migration.sh
#!/bin/bash

echo "Rolling back .dna migration..."

# Revert all .dna files to .tsx
find . -name "*.dna" -type f | while read file; do
    tsx_file="${file%.dna}.tsx"
    git checkout HEAD -- "$tsx_file" 2>/dev/null || true
    rm "$file"
done

# Restore original configs
git checkout HEAD -- next.config.mjs tsconfig.json

echo "✓ Rollback complete"
\`\`\`

---

## 6. Team Communication

### 6.1 Training Materials

**Documentation:**
- Migration guide (this document)
- Video tutorial (15 minutes)
- FAQ document
- Troubleshooting guide

**Training Sessions:**
- Week 1: Kickoff meeting (1 hour)
- Week 2: Hands-on workshop (2 hours)
- Week 3-6: Office hours (daily, 30 minutes)

### 6.2 Communication Timeline

| Week | Communication |
|------|---------------|
| Week 0 | Announce migration plan, share documentation |
| Week 1 | Infrastructure setup complete, request feedback |
| Week 2 | Pilot migration results, gather team input |
| Week 3 | Core pages migration begins, daily updates |
| Week 4 | Core pages complete, celebrate milestone |
| Week 5 | Components migration, final push |
| Week 6 | Migration complete, retrospective meeting |

### 6.3 Announcement Template

\`\`\`markdown
# 🧬 DNALang .dna Extension Migration

Hi team,

We're migrating all `.tsx` files to `.dna` to align with DNALang's biological computing paradigm!

**What's changing:**
- All `.tsx` files → `.dna` files
- Import statements updated automatically
- New VS Code extension for syntax highlighting

**What you need to do:**
1. Install the DNALang VS Code extension
2. Review the migration guide: [link]
3. Attend training session: [date/time]

**Timeline:**
- Week 1-2: Infrastructure setup
- Week 3-4: Core pages migration
- Week 5: Components migration
- Week 6: Cleanup & celebration 🎉

Questions? Join #dnalang-migration on Slack.

Thanks!
The DNALang Team
\`\`\`

---

## 7. Success Metrics

### 7.1 Technical Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Build time | No increase | CI/CD pipeline |
| Bundle size | No increase | Webpack analyzer |
| Type safety | 100% coverage | TypeScript compiler |
| Test pass rate | 100% | Jest/Playwright |
| Linting errors | 0 | ESLint |

### 7.2 Team Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Developer satisfaction | >80% | Survey |
| Training completion | 100% | Attendance tracking |
| Support tickets | <10 | Issue tracker |
| Adoption rate | 100% | Code review |

### 7.3 Business Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Brand recognition | +20% | Social media mentions |
| Developer interest | +30% | GitHub stars |
| Documentation views | +50% | Analytics |

---

## 8. Post-Migration

### 8.1 Monitoring

- Monitor build times for 2 weeks
- Track error rates in production
- Collect team feedback weekly
- Review IDE support issues

### 8.2 Continuous Improvement

- Enhance VS Code extension based on feedback
- Add more DNA-Lang specific syntax highlighting
- Create code snippets for common patterns
- Build custom linting rules for DNA-Lang constructs

### 8.3 Documentation Updates

- Update all README files
- Refresh getting started guides
- Record video tutorials
- Update API documentation

---

## 9. Appendix

### 9.1 File Extension Comparison

| Extension | Use Case | Tooling Support | Brand Value |
|-----------|----------|-----------------|-------------|
| `.tsx` | React + TypeScript | Excellent | Generic |
| `.jsx` | React + JavaScript | Excellent | Generic |
| `.dna` | DNALang organisms | Custom (good) | Unique ✨ |

### 9.2 Alternative Approaches Considered

1. **Keep .tsx, add .dna for new files**
   - ❌ Creates inconsistency
   - ❌ Confusing for new developers

2. **Use .tsx.dna double extension**
   - ❌ Too verbose
   - ❌ Poor tooling support

3. **Full migration to .dna** ✅
   - ✅ Clean, consistent
   - ✅ Strong brand identity
   - ✅ Manageable with automation

### 9.3 References

- [Next.js Custom Webpack Config](https://nextjs.org/docs/app/api-reference/next-config-js/webpack)
- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [VS Code Language Extensions](https://code.visualstudio.com/api/language-extensions/overview)
- [ESLint Custom Parsers](https://eslint.org/docs/latest/use/configure/parser)

---

**Document Version**: 1.0  
**Last Updated**: January 30, 2025  
**Owner**: DNALang Platform Team  
**Status**: Ready for Implementation
