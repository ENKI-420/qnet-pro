import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Read migration map if it exists
    const mapPath = path.join(process.cwd(), "migration-map.json")
    let migrationData = {
      migration_map: {},
      stats: {
        total_files: 0,
        converted_to_dna: 0,
        converted_to_gene: 0,
        skipped: 0,
        errors: 0,
      },
    }

    if (fs.existsSync(mapPath)) {
      const content = fs.readFileSync(mapPath, "utf-8")
      migrationData = JSON.parse(content)
    }

    // Count current .dna and .gene files
    const countFiles = (dir: string, ext: string): number => {
      let count = 0
      const files = fs.readdirSync(dir, { withFileTypes: true })

      for (const file of files) {
        const fullPath = path.join(dir, file.name)
        if (file.isDirectory() && !["node_modules", ".next", "dist"].includes(file.name)) {
          count += countFiles(fullPath, ext)
        } else if (file.name.endsWith(ext)) {
          count++
        }
      }
      return count
    }

    const dnaCount = countFiles(process.cwd(), ".dna")
    const geneCount = countFiles(process.cwd(), ".gene")
    const tsxCount = countFiles(path.join(process.cwd(), "app"), ".tsx")
    const tsCount = countFiles(path.join(process.cwd(), "lib"), ".ts")

    return NextResponse.json({
      current_state: {
        dna_files: dnaCount,
        gene_files: geneCount,
        tsx_files_remaining: tsxCount,
        ts_files_remaining: tsCount,
        total_dnalang_files: dnaCount + geneCount,
      },
      migration_progress: {
        ...migrationData.stats,
        completion_percentage:
          migrationData.stats.total_files > 0
            ? Math.round(
                ((migrationData.stats.converted_to_dna + migrationData.stats.converted_to_gene) /
                  migrationData.stats.total_files) *
                  100,
              )
            : 0,
      },
      migration_map: migrationData.migration_map,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to get migration status" }, { status: 500 })
  }
}
