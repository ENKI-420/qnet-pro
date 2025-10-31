import { EvolutionControlAPI } from "./admin/EvolutionControlAPI"
import { ExperimentsAPI } from "./admin/ExperimentsAPI"
import { TelemetryAPI } from "./admin/TelemetryAPI"
import { Telemetry } from "./telemetry/Telemetry"

export class DNALangSDK {
  public evolution: EvolutionControlAPI
  public experiments: ExperimentsAPI
  public telemetry: TelemetryAPI
  public localTelemetry: Telemetry

  constructor(config: { baseUrl?: string; apiKey?: string } = {}) {
    this.evolution = new EvolutionControlAPI(config)
    this.experiments = new ExperimentsAPI(config)
    this.telemetry = new TelemetryAPI(config)
    this.localTelemetry = new Telemetry()
  }
}

export default DNALangSDK
