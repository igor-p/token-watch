import { useQuery } from "@tanstack/react-query"

import {
  CoinMarketData,
  getCoinPriceByIds,
  getCoinsMarkets,
} from "@/lib/coinGecko"

// For now, we're only going to get tokens in the Solana ecosystem
export default function useGetTokensQuery() {
  return useQuery({
    queryKey: ["tokens"],
    queryFn: async () => {
      // Get most of the token market data (fixed currency and sort since we don't offer the user a choice yet)
      const coins = await getCoinsMarkets({
        vs_currency: "USD",
        category: "solana-ecosystem",
        order: "market_cap_desc",
      })

      // The above gets us everything except last 24-hour volume and contract per coin

      // We can use getCoinPriceByIds() with a list of ids to get 24-hour volume
      const coinIds = coins.map(({ id }) => id)
      const coinsPriceMap = await getCoinPriceByIds(coinIds)

      const fullCoinData: CombinedCoinData[] = coins.map((coin) => ({
        ...coin,
        "24_hr_vol": coinsPriceMap[coin.id]?.usd_24h_vol ?? null,
      }))

      return fullCoinData

      // CoinGecko doesn't easily support bulk fetching of addresses for a list of coin IDs
      // Need to do it one coin at a time, which is problematic for the rate limit
      // TODO: find a new API provider that can allow this
      //  (or spread out the requests and cache locally or in the db)
    },
  })
}

export interface CombinedCoinData extends CoinMarketData {
  "24_hr_vol": number
}
