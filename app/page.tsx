import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Zap, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/ibm-royal-cyber">
            <Card className="h-full hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-pointer border-blue-500/30 bg-slate-900/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl text-blue-300">IBM × Royal Cyber</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">
                  Enterprise quantum integration across IBM's technology stack with DNA-Lang framework
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/quantum-swarm">
            <Card className="h-full hover:shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer border-purple-500/30 bg-slate-900/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-purple-400" />
                  <CardTitle className="text-2xl text-purple-300">Quantum Swarm</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  Mass entanglement teleport protocol for deploying organisms across quantum hardware mesh
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
