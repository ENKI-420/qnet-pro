"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface AdaptiveCardProps {
  id: string
  title: string
  description: string
  icon: LucideIcon
  href: string
  badges: Array<{ icon: LucideIcon; label: string }>
  buttonText: string
  accentColor: string
}

export function AdaptiveCard({
  id,
  title,
  description,
  icon: Icon,
  href,
  badges,
  buttonText,
  accentColor,
}: AdaptiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [optimizationLevel, setOptimizationLevel] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const hoverStartTime = useRef<number>(0)

  // Track hover interactions
  const handleMouseEnter = () => {
    setIsHovered(true)
    hoverStartTime.current = Date.now()

    if (typeof window !== "undefined") {
      import("@/lib/ui-evolution-engine").then(({ getEvolutionEngine }) => {
        const engine = getEvolutionEngine()
        engine.trackInteraction({
          timestamp: Date.now(),
          elementId: id,
          action: "hover",
          duration: 0,
          success: true,
        })
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const duration = Date.now() - hoverStartTime.current

    if (typeof window !== "undefined") {
      import("@/lib/ui-evolution-engine").then(({ getEvolutionEngine }) => {
        const engine = getEvolutionEngine()
        engine.trackInteraction({
          timestamp: Date.now(),
          elementId: id,
          action: "hover",
          duration,
          success: duration > 500,
        })
      })
    }
  }

  // Track click interactions
  const handleClick = () => {
    setClickCount((prev) => prev + 1)
    setOptimizationLevel((prev) => Math.min(prev + 1, 5))

    if (typeof window !== "undefined") {
      import("@/lib/ui-evolution-engine").then(({ getEvolutionEngine }) => {
        const engine = getEvolutionEngine()
        engine.trackInteraction({
          timestamp: Date.now(),
          elementId: id,
          action: "click",
          duration: 0,
          success: true,
        })
      })
    }
  }

  // Apply evolutionary optimizations based on fitness
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window === "undefined") return

      import("@/lib/ui-evolution-engine").then(({ getEvolutionEngine }) => {
        const engine = getEvolutionEngine()
        const generation = engine.getGeneration()

        // Update optimization level based on generation
        if (generation > optimizationLevel * 10) {
          setOptimizationLevel((prev) => Math.min(prev + 1, 5))
        }
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [optimizationLevel])

  // Calculate dynamic styles based on optimization level
  const getOptimizedStyles = () => {
    const baseScale = 1
    const hoverScale = 1.05 + optimizationLevel * 0.01
    const shadowIntensity = 30 + optimizationLevel * 10

    return {
      transform: isHovered ? `scale(${hoverScale})` : `scale(${baseScale})`,
      boxShadow: isHovered
        ? `0 0 ${shadowIntensity}px var(${accentColor})`
        : `0 0 ${shadowIntensity / 2}px var(${accentColor})`,
      transition: `all ${300 - optimizationLevel * 20}ms ease-out`,
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={getOptimizedStyles()}
      className="relative"
    >
      <Card className="h-full cursor-pointer border-lambda-phi/30 bg-card/80 backdrop-blur-sm animate-toroidal-breathe">
        {optimizationLevel > 0 && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge variant="outline" className="lambda-phi-badge animate-coherence-pulse">
              Lv.{optimizationLevel}
            </Badge>
          </div>
        )}

        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-lambda-phi/20 border border-lambda-phi/50 animate-phase-conjugate">
              <Icon className="h-8 w-8 text-lambda-phi" />
            </div>
            <div>
              <CardTitle className="text-3xl text-lambda-phi lambda-phi-glow">{title}</CardTitle>
              <CardDescription className="text-muted-foreground mt-1">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="animate-coherence-pulse">
                <badge.icon className="h-3 w-3 mr-1" />
                {badge.label}
              </Badge>
            ))}
          </div>

          <Button className="w-full mt-4 bg-lambda-phi hover:bg-lambda-phi/80 shadow-lambda-phi">{buttonText}</Button>

          {clickCount > 0 && (
            <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border/50">
              Interactions: {clickCount} • Optimizing...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
