// Content script for DNALang Chrome Extension
// Detects DNALang code blocks on web pages and adds execution buttons

;(() => {
  // Declare the chrome variable
  const chrome = window.chrome

  // Find all code blocks that might contain DNALang code
  const codeBlocks = document.querySelectorAll("pre code, pre, code")

  codeBlocks.forEach((block) => {
    const code = block.textContent

    // Check if it looks like DNALang code
    if (code.includes("ORGANISM") && code.includes("DNA") && code.includes("GENOME")) {
      // Add execution button
      const button = document.createElement("button")
      button.textContent = "▶ Run in DNALang"
      button.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 6px 12px;
        background: #a78bfa;
        color: #0a0a0a;
        border: none;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        z-index: 1000;
      `

      button.addEventListener("click", () => {
        // Send code to extension popup
        chrome.runtime.sendMessage(
          {
            action: "executeCode",
            code: code,
          },
          (response) => {
            if (response.success) {
              alert("Code executed successfully!\n\nOpen the DNALang extension to see results.")
            } else {
              alert("Execution failed: " + response.error)
            }
          },
        )
      })

      // Make parent relative for absolute positioning
      const parent = block.parentElement
      if (parent.style.position !== "relative") {
        parent.style.position = "relative"
      }

      parent.appendChild(button)
    }
  })

  console.log("DNALang content script loaded")
})()
