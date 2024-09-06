import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

import type { CoinsParams, CoinsResponse } from './endpoints/coins.js'
import type { HardwareParams, HardwareResponse } from './endpoints/hardware.js'
import type { PoolsParams, PoolsResponse } from './endpoints/pools.js'
import type { Options } from './types.js'

class MinerStat {
  public readonly axios: AxiosInstance

  public constructor(options?: Options) {
    const { axiosConfig = {} } = options ?? {}

    this.axios = axios.create({
      ...axiosConfig,
      baseURL: 'https://api.minerstat.com/v2',
    })
  }

  public async coins(
    params?: CoinsParams,
    config?: AxiosRequestConfig,
  ): Promise<CoinsResponse> {
    const response = await this.axios.get<CoinsResponse>('/coins', { ...config, params })
    return response.data
  }

  public async hardware(
    params?: HardwareParams,
    config?: AxiosRequestConfig,
  ): Promise<HardwareResponse> {
    const response = await this.axios.get<HardwareResponse>('/hardware', { ...config, params })
    return response.data
  }

  public async pools(
    params?: PoolsParams,
    config?: AxiosRequestConfig,
  ): Promise<PoolsResponse> {
    const response = await this.axios.get<PoolsResponse>('/pools', { ...config, params })
    return response.data
  }
}

export default MinerStat
