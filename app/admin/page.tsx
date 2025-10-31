import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Activity, Database, Shield } from "lucide-react"

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">1,247</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Users</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">3,891</span>
            </div>
            <p className="text-sm text-muted-foreground">Active Deployments</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Database className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">12.4 GB</span>
            </div>
            <p className="text-sm text-muted-foreground">Database Size</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">99.9%</span>
            </div>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <div className="space-y-4">
              <Button className="w-full bg-transparent" variant="outline">
                View All Users
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                Manage Roles
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                Audit Logs
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">System Health</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">API Response Time</span>
                <span className="text-sm font-semibold text-green-500">45ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Connections</span>
                <span className="text-sm font-semibold">12/20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cache Hit Rate</span>
                <span className="text-sm font-semibold text-green-500">87%</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
