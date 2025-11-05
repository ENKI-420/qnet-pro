"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getEvolutionEngine } from "@/lib/ui-evolution-engine"
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

  const engine = getEvolutionEngine()

  // Track hover interactions
  const handleMouseEnter = () => {
    setIsHovered(true)
    hoverStartTime.current = Date.now()

    engine.trackInteraction({
      timestamp: Date.now(),
      elementId: id,
      action: "hover",
      duration: 0,
      success: true,
    })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    const duration = Date.now() - hoverStartTime.current

    engine.trackInteraction({
      timestamp: Date.now(),
      elementId: id,
      action: "hover",
      duration,
      success: duration > 500, // Success if hovered for more than 500ms
    })
  }

  // Track click interactions
  const handleClick = () => {
    setClickCount((prev) => prev + 1)

    engine.trackInteraction({
      timestamp: Date.now(),
      elementId: id,
      action: "click",
      duration: 0,
      success: true,
    })

    // Increase optimization level with each click
    setOptimizationLevel((prev) => Math.min(prev + 1, 5))
  }

  // Apply evolutionary optimizations based on fitness
  useEffect(() => {
    const interval = setInterval(() => {
      const bestGenes = engine.getBestGenes()
      const generation = engine.getGeneration()

      // Update optimization level based on generation
      if (generation > optimizationLevel * 10) {
        setOptimizationLevel((prev) => Math.min(prev + 1, 5))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [engine, optimizationLevel])

  // Calculate dynamic styles based on optimization level
  const getOptimizedStyles = () => {
    const baseScale = 1
    const hoverScale = 1.05 + optimizationLevel * 0.01 // Increases with optimization
    const shadowIntensity = 30 + optimizationLevel * 10 // Stronger glow with optimization

    return {
      transform: isHovered ? `scale(${hoverScale})` : `scale(${baseScale})`,
      boxShadow: isHovered
        ? `0 0 ${shadowIntensity}px var(${accentColor})`
        : `0 0 ${shadowIntensity / 2}px var(${accentColor})`,
      transition: `all ${300 - optimizationLevel * 20}ms ease-out`, // Faster with optimization
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
      <Card
        className={`h-full cursor-pointer border-${accentColor}/30 bg-card/80 backdrop-blur-sm animate-toroidal-breathe`}
      >
        {optimizationLevel > 0 && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge variant="outline" className="lambda-phi-badge animate-coherence-pulse">
              Lv.{optimizationLevel}
            </Badge>
          </div>
        )}

        <CardHeader>
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-xl bg-${accentColor}/20 border border-${accentColor}/50 animate-phase-conjugate`}
            >
              <Icon className={`h-8 w-8 text-${accentColor}`} />
            </div>
            <div>
              <CardTitle className={`text-3xl text-${accentColor} lambda-phi-glow`}>{title}</CardTitle>
              <CardDescription className="text-muted-foreground mt-1">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-foreground/90 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="animate-coherence-pulse">
                <badge.icon className="h-3 w-3 mr-1" />
                {badge.label}
              </Badge>
            ))}
          </div>

          <Button
            className={`w-full mt-4 bg-${accentColor} hover:bg-${accentColor}/80 group-hover:shadow-lg group-hover:shadow-${accentColor}/50`}
          >
            {buttonText}
          </Button>

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
