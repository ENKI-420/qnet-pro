"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/organisms", label: "Organisms" },
  { href: "/consciousness", label: "Consciousness" },
  { href: "/aiden", label: "AIDEN" },
  { href: "/quantum", label: "Quantum" },
  { href: "/ibm-royal-cyber", label: "IBM Partnership" },
  { href: "/quantum-swarm", label: "Swarm" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="text-base font-semibold tracking-tight">QNetPro</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                      isActive
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Docs
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm rounded-md transition-colors ${
                    isActive
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 mt-3 border-t border-border flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-start text-muted-foreground">
                Docs
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
