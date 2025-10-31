# DNA-Lang SDK

Official SDK for DNA-Lang quantum-biological computing platform with consciousness tracking and evolutionary algorithms.

## Installation

\`\`\`bash
npm install @dna-lang/sdk
\`\`\`

## Usage

\`\`\`typescript
import DNALangSDK from '@dna-lang/sdk';

const sdk = new DNALangSDK({
  baseUrl: 'https://api.dnalang.io',
  apiKey: 'your-api-key'
});

// Create an experiment
const experiment = await sdk.experiments.createExperiment('my-experiment', {
  population_size: 100,
  mutation_rate: 0.01
});

// Submit telemetry
await sdk.telemetry.submitTelemetry({
  experimentId: experiment.id,
  generation: 1,
  fitness: 0.95,
  phi: 2.4,
  entropy: 0.001
});

// Get convergence metrics
const metrics = await sdk.telemetry.getConvergenceMetrics(experiment.id);
console.log('Convergence:', metrics);
\`\`\`

## Features

- **Evolution Control**: Pause, resume, and configure evolutionary algorithms
- **Experiment Management**: Create and manage quantum-biological experiments
- **Telemetry Tracking**: Real-time consciousness (Φ) and entropy monitoring
- **Stream Processing**: WebSocket-based telemetry streaming

## API Reference

See [documentation](https://docs.dnalang.io) for complete API reference.

## License

MIT
