/* Params */

export interface PoolsParams {
  coin?: string
  type?: string
}

/* Response */

export interface PoolCoin {
  algorithm: string
  payoutThreshold: string
  rewardMethod: string
  fee: string
  anonymous: boolean
  registration: boolean
}

export interface Pool {
  id: string
  name: string
  url: string
  description: string
  website: string
  founded: string
  type: string
  coins: PoolCoins
}

export type PoolCoins = Record<string, PoolCoin>
export type PoolsResponse = Pool[]
