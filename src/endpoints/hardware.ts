/* Params */

export interface HardwareParams {
  type?: string
  brand?: string
}

/* Response */

export interface HardwareAlgorithm {
  hashrate: number
  power: number
}

export interface Hardware {
  id: string
  name: string
  url: string
  type: string
  brand: string
  algorithms: HardwareAlgorithms
  specs: HardwareSpecs
}

export type HardwareAlgorithms = Record<string, HardwareAlgorithm>
export type HardwareSpecs = Record<string, unknown>
export type HardwareResponse = Hardware[]
