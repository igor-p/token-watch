import { generateQueryParams } from "@/util/generateQueryParams"

export const CG_API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const CG_API_BASE_URL = "https://api.coingecko.com/api/v3"

// Ensure every call has our auth token
const fetchConfig: RequestInit = {
  headers: {
    x_cg_demo_api_key: CG_API_KEY as string,
  },
}

// CoinGecko free api docs https://docs.coingecko.com/v3.0.1/reference/introduction

/*
  Get a list of coins with associated market data.
  https://docs.coingecko.com/v3.0.1/reference/coins-markets
 */
export async function getCoinsMarkets(params: Record<string, string>) {
  const url = [
    `${CG_API_BASE_URL}/coins/markets`,
    generateQueryParams(params),
  ].join("?")

  const response = await fetch(url, fetchConfig)
  if (!response.ok) {
    console.log("Returned", response.status, response.statusText)
  }
  return (await response.json()) as CoinMarketData[]
}

export interface CoinMarketData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  fully_diluted_valuation: number
  total_volume: number
  price_change_24h: number
  price_change_percentage_24h: number
}

/*
  Query price data of coins by ids
  https://docs.coingecko.com/v3.0.1/reference/simple-price
 */
export async function getCoinPriceByIds(ids: string[]) {
  const params = {
    ids: ids.join(","),
    vs_currencies: "USD",
    include_24hr_vol: true,
  }
  const url = [
    `${CG_API_BASE_URL}/simple/price`,
    generateQueryParams(params),
  ].join("?")

  const response = await fetch(url, fetchConfig)
  if (!response.ok) {
    console.log("Returned", response.status, response.statusText)
  }
  return (await response.json()) as CoinIdPriceMap
}

export type CoinIdPriceMap = Record<
  string,
  {
    usd: number
    usd_24h_vol: number
  }
>

/*
  Get coin data by id (including platform/contract data)
 */
export async function getCoinContracts(id: string) {
  const response = await fetch(`${CG_API_BASE_URL}/coins/${id}`, fetchConfig)
  return response.json()
}
