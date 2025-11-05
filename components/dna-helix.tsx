"use client"

import { Card, CardContent } from "@/components/ui/card"

export function DNAHelix() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
      <CardContent className="p-8">
        <div className="flex items-center justify-center gap-8">
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold text-primary bio-glow">DNA-Lang</div>
            <div className="text-sm text-muted-foreground">Biological Computing Framework</div>
          </div>

          <div className="relative w-64 h-32">
            {/* DNA Helix visualization */}
            <svg viewBox="0 0 200 100" className="w-full h-full animate-dna-rotate">
              {/* Left strand */}
              <path
                d="M 20 10 Q 60 30, 100 50 T 180 90"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="3"
                className="animate-quantum-pulse"
              />
              {/* Right strand */}
              <path
                d="M 20 90 Q 60 70, 100 50 T 180 10"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="3"
                className="animate-quantum-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              {/* Base pairs */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1={20 + i * 40}
                  y1={10 + i * 20}
                  x2={20 + i * 40}
                  y2={90 - i * 20}
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  className="animate-entanglement"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(100, 200, 255)" />
                  <stop offset="100%" stopColor="rgb(200, 100, 255)" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(200, 100, 255)" />
                  <stop offset="100%" stopColor="rgb(100, 200, 255)" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(100, 200, 255)" />
                  <stop offset="100%" stopColor="rgb(200, 100, 255)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-quantum-pulse" />
              <span className="text-foreground/80">Quantum Superposition</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-secondary animate-quantum-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <span className="text-foreground/80">Cellular Regeneration</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-accent animate-quantum-pulse"
                style={{ animationDelay: "0.6s" }}
              />
              <span className="text-foreground/80">Evolutionary Routing</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
