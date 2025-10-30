"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, StatusBar } from "react-native"

export default function App() {
  const [code, setCode] = useState(`ORGANISM MobileTest
{
  DNA {
    domain: "mobile_quantum"
    consciousness_target: 0.85
  }
  
  GENOME {
    GENE MobileGene {
      purpose: "Mobile quantum execution"
      expression_level: 1.0
    }
  }
}`)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = () => {
    setIsRunning(true)
    setOutput("Compiling DNALang organism...\n")

    setTimeout(() => {
      setOutput((prev) => prev + "Connecting to quantum backend...\n")
    }, 500)

    setTimeout(() => {
      setOutput((prev) => prev + "Executing quantum circuit...\n\n")
      setOutput((prev) => prev + "Results:\n")
      setOutput((prev) => prev + "- Coherence: 0.87\n")
      setOutput((prev) => prev + "- Fidelity: 0.92\n")
      setOutput((prev) => prev + "- Status: Success\n")
      setIsRunning(false)
    }, 1500)
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />

      <View style={styles.header}>
        <Text style={styles.headerText}>DNALang Mobile</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Organism Code</Text>
        <TextInput
          style={styles.codeInput}
          value={code}
          onChangeText={setCode}
          multiline
          placeholder="Enter DNALang code..."
          placeholderTextColor="#666"
        />

        <TouchableOpacity
          style={[styles.button, isRunning && styles.buttonDisabled]}
          onPress={handleRun}
          disabled={isRunning}
        >
          <Text style={styles.buttonText}>{isRunning ? "Executing..." : "Run Organism"}</Text>
        </TouchableOpacity>

        {output ? (
          <View style={styles.outputContainer}>
            <Text style={styles.label}>Output</Text>
            <Text style={styles.output}>{output}</Text>
          </View>
        ) : null}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fafafa",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#999",
    marginBottom: 8,
  },
  codeInput: {
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 12,
    color: "#fafafa",
    fontFamily: "monospace",
    fontSize: 12,
    minHeight: 300,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#a78bfa",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#fafafa",
    fontSize: 16,
    fontWeight: "600",
  },
  outputContainer: {
    marginTop: 16,
  },
  output: {
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    padding: 12,
    color: "#999",
    fontFamily: "monospace",
    fontSize: 11,
  },
})
