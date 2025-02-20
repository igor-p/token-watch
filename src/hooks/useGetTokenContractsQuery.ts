import { useQuery } from "@tanstack/react-query"

import { getCoinContracts } from "@/lib/coinGecko"

export default function useGetTokenContractsQuery(id?: string | null) {
  return useQuery({
    enabled: !!id,
    queryKey: ["token_contracts", id],
    queryFn: async () => {
      if (!id) {
        return null
      }

      const result = await getCoinContracts(id)

      if (result?.platforms?.solana) {
        return result.platforms.solana
      }
    },
  })
}
