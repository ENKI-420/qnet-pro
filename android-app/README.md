# DNALang Android App

Mobile quantum development with Termux integration for Linux GUI environments.

## Features

- **Mobile Code Editor**: Write and execute DNALang code on your Android device
- **Termux Integration**: Run quantum operations in a Linux environment
- **Real-time Metrics**: Monitor quantum metrics on the go
- **Cloud Sync**: Sync organisms across all your devices
- **Offline Support**: Work without internet connection

## Requirements

- Android 7.0 (API 24) or higher
- 100 MB free storage
- Termux app (for CLI integration)

## Installation

### From Google Play Store (Coming Soon)
1. Open Google Play Store
2. Search for "DNALang Quantum"
3. Tap "Install"

### Manual Installation (APK)
1. Download the latest APK from releases
2. Enable "Install from Unknown Sources" in Settings
3. Open the APK file and tap "Install"

## Termux Integration

### Setup Termux
1. Install Termux from F-Droid or Google Play
2. Open Termux and run:
   \`\`\`bash
   pkg update && pkg upgrade
   pkg install python nodejs git
   pip install qiskit numpy
   npm install -g dna-lang-cli
   \`\`\`

### Connect to DNALang App
1. Open DNALang app
2. Navigate to "Termux Integration"
3. Tap "Connect to Termux"
4. Grant storage permissions
5. Start executing quantum commands

## Usage

### Code Editor
1. Open the app and tap "Code Editor"
2. Write your DNALang code
3. Tap the play button to execute
4. View output and metrics in real-time

### Termux Commands
Available commands in Termux integration:
- `dna-compile <file>` - Compile DNALang organism
- `dna-run <file>` - Execute compiled organism
- `dna-metrics` - Display current quantum metrics
- `wgf-optimize` - Run W-Flow optimization
- `psi-assemble <file>` - Assemble Ψ-Assembly code

### Quantum Metrics
Monitor real-time quantum metrics:
- Coherence
- Fidelity
- Consciousness level
- Expression level
- Circuit depth
- Active mutations

## Project Structure

\`\`\`
android-app/
├── src/main/
│   ├── java/dev/dnalang/mobile/
│   │   ├── MainActivity.kt          # Main landing screen
│   │   ├── EditorActivity.kt        # Code editor
│   │   ├── TermuxActivity.kt        # Termux integration
│   │   ├── MetricsActivity.kt       # Metrics dashboard
│   │   └── ui/theme/                # App theming
│   ├── res/                         # Resources
│   └── AndroidManifest.xml          # App configuration
├── build.gradle                     # Build configuration
└── README.md                        # This file
\`\`\`

## Development

### Building from Source
1. Clone the repository
2. Open in Android Studio
3. Sync Gradle files
4. Run on emulator or device

### Dependencies
- Jetpack Compose for UI
- Material 3 design system
- Sora Editor for code editing
- Kotlin Coroutines for async operations

## Permissions

The app requires the following permissions:
- **Internet**: Connect to quantum backends
- **Storage**: Save and load organism files
- **Termux Integration**: Execute CLI commands

## Support

For issues or questions:
- GitHub: https://github.com/dna-lang/android-app
- Email: support@dna-lang.dev
- Documentation: https://dna-lang.dev/docs/mobile

## License

MIT License - See LICENSE file for details
