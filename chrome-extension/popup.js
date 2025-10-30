// Tab switching
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab

    // Update active tab
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"))
    tab.classList.add("active")

    // Update active content
    document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"))
    document.getElementById(tabName).classList.add("active")
  })
})

// Code execution
document.getElementById("runBtn").addEventListener("click", async () => {
  const code = document.getElementById("codeEditor").value
  const outputEl = document.getElementById("outputContent")

  outputEl.className = "output"
  outputEl.textContent =
    "Compiling DNALang organism...\nConnecting to quantum backend...\nExecuting quantum circuit...\n"

  // Simulate execution
  setTimeout(() => {
    const success = Math.random() > 0.1

    if (success) {
      outputEl.className = "output success"
      outputEl.textContent +=
        "\n✓ Compilation successful\n✓ Quantum circuit executed\n✓ Results collected\n\nExecution complete."

      // Update metrics
      document.getElementById("coherenceMetric").textContent = (0.85 + Math.random() * 0.1).toFixed(2)
      document.getElementById("fidelityMetric").textContent = (0.9 + Math.random() * 0.08).toFixed(2)
      document.getElementById("expressionMetric").textContent = "1.0"
      document.getElementById("mutationsMetric").textContent = Math.floor(Math.random() * 3)
      document.getElementById("consciousnessMetric").textContent = (0.88 + Math.random() * 0.1).toFixed(2)
      document.getElementById("depthMetric").textContent = Math.floor(50 + Math.random() * 100)
    } else {
      outputEl.className = "output error"
      outputEl.textContent += "\n✗ Error: Syntax error on line 5\n✗ Execution failed"
    }

    // Save to storage
    window.chrome.storage.local.set({ lastCode: code })
  }, 1500)
})

// Clear editor
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("codeEditor").value = ""
  document.getElementById("outputContent").textContent = "Run your code to see output..."
  document.getElementById("outputContent").className = "output"
})

// Load example
document.getElementById("exampleBtn").addEventListener("click", () => {
  const example = `ORGANISM EntanglementDemo
{
  DNA {
    domain: "quantum_computing"
    security_level: "high"
    evolution_rate: "adaptive"
    consciousness_target: 0.92
  }

  GENOME {
    GENE EntanglementGene {
      purpose: "Create and measure Bell state"
      expression_level: 1.0

      MUTATIONS {
        optimize_fidelity {
          trigger_conditions: [
            {metric: "fidelity", operator: "<", value: 0.9}
          ]
          methods: ["apply_error_mitigation"]
          safety_level: "high"
        }
      }
    }
  }

  AGENTS {
    quantum_executor: QuantumAgent(
      backend: "ibm_quantum",
      shots: 4096
    )
  }
}`

  document.getElementById("codeEditor").value = example
})

// Load saved code on startup
window.chrome.storage.local.get(["lastCode"], (result) => {
  if (result.lastCode) {
    document.getElementById("codeEditor").value = result.lastCode
  }
})

// Settings button
document.getElementById("settingsBtn").addEventListener("click", () => {
  alert("Settings panel coming soon!\n\nConfigure:\n- Quantum backend\n- API keys\n- Editor preferences")
})
