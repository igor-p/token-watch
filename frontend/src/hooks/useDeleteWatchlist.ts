import { useMutation } from "@tanstack/react-query"

import { queryClient } from "@/lib/queryClient"
import { deleteWatchList } from "@/lib/watchlist"

export default function useDeleteWatchlist() {
  return useMutation({
    mutationFn: async (id: string) => {
      await deleteWatchList(id)

      // no need to wait for this
      void queryClient.invalidateQueries({ queryKey: ["watchlist"] })
    },
  })
}
