# .dna Extension Migration FAQ

## General Questions

### Why are we migrating to .dna extension?

The `.dna` extension aligns with DNALang's biological computing paradigm, where files represent living software organisms. It creates a unique developer experience and reinforces our brand identity.

### Will this break existing code?

No. The migration is backwards compatible. Next.js will support both `.tsx` and `.dna` files during the transition period.

### How long will the migration take?

6 weeks total, with a phased rollout to minimize disruption.

## Technical Questions

### Will TypeScript still work?

Yes! `.dna` files are processed identically to `.tsx` files. Full TypeScript support, intellisense, and type checking work perfectly.

### What about IDE support?

We've created a VS Code extension that provides syntax highlighting, autocomplete, and formatting for `.dna` files.

### Do I need to update my imports?

The migration script automatically updates all imports. You don't need to do anything manually.

### Will this affect build times?

No. Build performance remains identical since `.dna` files are processed the same way as `.tsx` files.

## Workflow Questions

### Can I still use .tsx files?

During the migration (weeks 1-6), yes. After migration is complete, all files will be `.dna`.

### What if I create a new file?

Use the `.dna` extension for all new files starting in Week 2.

### How do I test my changes?

Run `npm run build` and `npm run test` as usual. All existing tests work with `.dna` files.

## Troubleshooting

### My IDE doesn't recognize .dna files

Install the DNALang VS Code extension: `ext install dnalang.dna-lang-vscode`

### I'm getting import errors

Run the validator: `python scripts/validate-imports.py`

### Build is failing

Check that `next.config.mjs` and `tsconfig.json` are updated correctly.

### How do I rollback?

Run: `git checkout HEAD -- next.config.mjs tsconfig.json && git clean -fd`

## Support

### Where can I get help?

- Slack: #dnalang-migration
- Email: support@dnalang.dev
- Office hours: Daily, 2-2:30pm

### Who do I contact for issues?

Tag @dnalang-team in Slack or create an issue in GitHub.
