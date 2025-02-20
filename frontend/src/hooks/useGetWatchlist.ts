import { useQuery } from "@tanstack/react-query"

import { getWatchList } from "@/lib/watchlist"

export default function useGetWatchlist() {
  return useQuery({
    queryKey: ["watchlist"],
    queryFn: async () => {
      const watchedIds = await getWatchList()

      // store as set for efficient lookups (and it keeps insertion order)
      return new Set(watchedIds)
    },
  })
}
