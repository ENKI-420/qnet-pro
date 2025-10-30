# DNALang Chrome Extension

Execute DNALang quantum code directly from your browser with quantum state inspection tools.

## Features

- **Inline Code Editor**: Write and execute DNALang code in a popup IDE
- **Real-time Metrics**: Monitor coherence, fidelity, and consciousness metrics
- **Quantum Visualization**: View circuit diagrams and state vectors
- **Auto-detection**: Automatically detects DNALang code on web pages
- **Quick Execution**: Run code blocks directly from documentation sites

## Installation

### From Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store
2. Search for "DNALang Quantum IDE"
3. Click "Add to Chrome"

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the `chrome-extension` folder
6. The DNALang icon should appear in your extensions toolbar

## Usage

### Using the Popup IDE
1. Click the DNALang icon in your Chrome toolbar
2. Write or paste your DNALang code in the editor
3. Click "Run Code" to execute
4. View output, metrics, and visualizations in the tabs

### Running Code from Web Pages
1. Visit any page with DNALang code examples
2. Look for the "▶ Run in DNALang" button on code blocks
3. Click to execute the code in the extension
4. Open the extension popup to see results

### Keyboard Shortcuts
- `Ctrl/Cmd + Enter`: Run code
- `Ctrl/Cmd + K`: Clear editor
- `Ctrl/Cmd + E`: Load example

## Configuration

Click the "Settings" button to configure:
- Quantum backend (simulator or IBM Quantum)
- API keys for quantum hardware access
- Editor preferences (theme, font size)
- Auto-save settings

## Supported Backends

- **Simulator**: Local quantum simulation (default)
- **IBM Quantum**: Connect to real quantum hardware (requires API key)
- **Custom**: Configure your own quantum backend

## Development

### Project Structure
\`\`\`
chrome-extension/
├── manifest.json       # Extension configuration
├── popup.html         # Main popup interface
├── popup.js           # Popup logic
├── background.js      # Background service worker
├── content.js         # Content script for page detection
├── icons/             # Extension icons
└── README.md          # This file
\`\`\`

### Building
No build step required - the extension runs directly from source files.

### Testing
1. Load the extension in developer mode
2. Open the popup and test code execution
3. Visit pages with DNALang code to test auto-detection
4. Check the console for any errors

## Permissions

The extension requires the following permissions:
- `storage`: Save code and settings locally
- `activeTab`: Detect DNALang code on current page
- `scripting`: Inject execution buttons into pages

## Privacy

- All code execution happens locally or on your configured quantum backend
- No data is sent to third-party servers
- Code and settings are stored locally in Chrome storage

## Support

For issues, feature requests, or questions:
- Visit: https://dna-lang.dev/support
- GitHub: https://github.com/dna-lang/chrome-extension
- Email: support@dna-lang.dev

## License

MIT License - See LICENSE file for details
