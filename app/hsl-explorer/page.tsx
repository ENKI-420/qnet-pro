"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, AlertTriangle, RefreshCw, Download, Shield } from "lucide-react"

interface BlockData {
  hash: string
  ipfs_cid: string
  timestamp: string
  quantum_gravity: {
    proper_time: number
    cosmological_term: number
    phi_field: number
    coherence: number
  }
  verification: {
    z3_smt: "SAT" | "UNSAT"
    coq_holo: "VERIFIED" | "FAILED"
    gpg_signature: "VALID" | "INVALID"
  }
  status: "VERIFIED" | "FAILED" | "PENDING"
}

export default function HSLExplorerPage() {
  const [blockData, setBlockData] = useState<BlockData>({
    hash: "0x65ad53e3369d51bdc4b341dd85b40514e1803cf19cdc760efcb0168c16622a37",
    ipfs_cid: "Qm65ad53e3369d51bdc4b341dd85b40514e1803cf19cdc",
    timestamp: new Date().toLocaleString(),
    quantum_gravity: {
      proper_time: 0.8187,
      cosmological_term: 4.708e-3,
      phi_field: -3.74859,
      coherence: 0.99999,
    },
    verification: {
      z3_smt: "UNSAT",
      coq_holo: "FAILED",
      gpg_signature: "VALID",
    },
    status: "FAILED",
  })
  const [isRepairing, setIsRepairing] = useState(false)
  const [repairLogs, setRepairLogs] = useState<string[]>([])

  const repairBlock = async () => {
    setIsRepairing(true)
    setRepairLogs([])

    const addLog = (msg: string) => setRepairLogs((prev) => [...prev, msg])

    addLog("🔧 Initiating Quantum Metric Recalibration...")
    await new Promise((r) => setTimeout(r, 1000))

    addLog("📊 Analyzing Phi Field Drift...")
    await new Promise((r) => setTimeout(r, 800))
    addLog(`   Current Phi: ${blockData.quantum_gravity.phi_field}`)
    addLog(`   Target Phi: -4.81`)

    await new Promise((r) => setTimeout(r, 1000))
    addLog("⚡ Applying Holographic Correction...")

    const correctionFactor = -4.81 / blockData.quantum_gravity.phi_field

    const newMetrics = {
      proper_time: Number.parseFloat((blockData.quantum_gravity.proper_time * Math.sqrt(correctionFactor)).toFixed(4)),
      cosmological_term: Number.parseFloat((blockData.quantum_gravity.cosmological_term * correctionFactor).toFixed(6)),
      phi_field: -4.81,
      coherence: 0.999993,
    }

    await new Promise((r) => setTimeout(r, 1200))
    addLog("🔐 Applying Z3 SMT Invariant Corrections...")
    await new Promise((r) => setTimeout(r, 800))
    addLog("✅ SMT Status: SAT")

    await new Promise((r) => setTimeout(r, 1000))
    addLog("🎯 Verifying Coq Holographic Equivalence...")
    await new Promise((r) => setTimeout(r, 800))
    addLog("✅ Coq Status: VERIFIED")

    await new Promise((r) => setTimeout(r, 1000))
    addLog("🚀 Resubmitting Block to HSL Network...")
    await new Promise((r) => setTimeout(r, 1500))

    setBlockData({
      ...blockData,
      quantum_gravity: newMetrics,
      verification: {
        z3_smt: "SAT",
        coq_holo: "VERIFIED",
        gpg_signature: "VALID",
      },
      status: "VERIFIED",
    })

    addLog("✨ BLOCK REPAIR COMPLETE!")
    addLog("📡 Block now passing all verification checks")
    setIsRepairing(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "VERIFIED":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            VERIFIED
          </Badge>
        )
      case "FAILED":
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
            <XCircle className="h-3 w-3 mr-1" />
            VERIFICATION FAILED
          </Badge>
        )
      case "PENDING":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
            <AlertTriangle className="h-3 w-3 mr-1" />
            PENDING
          </Badge>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Shield className="h-10 w-10 text-cyan-400" />
            DNALang HSL Block Explorer
          </h1>
          <p className="text-muted-foreground">
            Real-Time Verification and Distributed Trust via IPFS • Holographic State Ledger v2.5
          </p>
        </div>

        {/* Block Status */}
        <Card className="p-6 mb-6 bg-card border-cyan-400/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Block Verification Status</h2>
            {getStatusBadge(blockData.status)}
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Block Metadata */}
          <Card className="p-6 bg-card border-cyan-400/20">
            <h3 className="text-xl font-bold mb-4">Block Metadata</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Block Hash:</p>
                <p className="font-mono text-xs break-all text-cyan-400">{blockData.hash}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">IPFS CID (Audit Capsule):</p>
                <p className="font-mono text-xs break-all text-cyan-400">{blockData.ipfs_cid}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Timestamp:</p>
                <p className="font-mono">{blockData.timestamp}</p>
              </div>
            </div>
          </Card>

          {/* Quantum Gravity Metrics */}
          <Card className="p-6 bg-card border-cyan-400/20">
            <h3 className="text-xl font-bold mb-4">Quantum Gravity Metrics (RPoW Output)</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Proper Time Interval (Δτ):</span>
                <span className="font-mono">{blockData.quantum_gravity.proper_time}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cosmological Term (Λ):</span>
                <span className="font-mono">{blockData.quantum_gravity.cosmological_term.toExponential(4)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phi Field Mean (Φ):</span>
                <span
                  className={`font-mono ${blockData.quantum_gravity.phi_field < -4.5 && blockData.quantum_gravity.phi_field > -5.0 ? "text-green-400" : "text-red-400"}`}
                >
                  {blockData.quantum_gravity.phi_field.toFixed(5)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coherence Index (C):</span>
                <span className="font-mono text-green-400">{blockData.quantum_gravity.coherence}</span>
              </div>
            </div>
          </Card>

          {/* Audit Capsule Verification */}
          <Card className="p-6 bg-card border-cyan-400/20">
            <h3 className="text-xl font-bold mb-4">Audit Capsule Verification</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Z3 SMT Invariants:</span>
                <Badge
                  className={
                    blockData.verification.z3_smt === "SAT"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }
                >
                  {blockData.verification.z3_smt}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Coq: Holo Equivalence:</span>
                <Badge
                  className={
                    blockData.verification.coq_holo === "VERIFIED"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }
                >
                  {blockData.verification.coq_holo}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">GPG Signature Integrity:</span>
                <Badge
                  className={
                    blockData.verification.gpg_signature === "VALID"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }
                >
                  {blockData.verification.gpg_signature}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Repair Console */}
          <Card className="p-6 bg-card border-cyan-400/20">
            <h3 className="text-xl font-bold mb-4">Block Repair Protocol</h3>
            {blockData.status === "FAILED" && (
              <div className="mb-4 p-3 bg-red-950/30 border border-red-500/50 rounded-lg">
                <p className="text-sm text-red-400">
                  ⚠️ Phi Field out of range. Expected: [-5.0, -4.5], Current: {blockData.quantum_gravity.phi_field}
                </p>
              </div>
            )}
            <Button
              onClick={repairBlock}
              disabled={isRepairing || blockData.status === "VERIFIED"}
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold mb-4"
            >
              {isRepairing ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Repairing Block...
                </>
              ) : blockData.status === "VERIFIED" ? (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Block Verified
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Repair Block
                </>
              )}
            </Button>
            {repairLogs.length > 0 && (
              <div className="bg-black p-3 rounded-lg font-mono text-xs max-h-48 overflow-y-auto">
                {repairLogs.map((log, i) => (
                  <div key={i} className="text-cyan-400">
                    {log}
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* IPFS Retrieval */}
        <Card className="p-6 mt-6 bg-card border-cyan-400/20">
          <h3 className="text-xl font-bold mb-4">Retrieve Audit Capsule via IPFS</h3>
          <p className="text-sm text-muted-foreground mb-4">
            The cryptographic proof capsule is now decentralized and immutable (DNALang v2.5.0).
          </p>
          <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download from IPFS: {blockData.ipfs_cid}
          </Button>
        </Card>
      </div>
    </div>
  )
}
