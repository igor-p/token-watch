import { useMutation } from "@tanstack/react-query"

import { queryClient } from "@/lib/queryClient"
import { postWatchList } from "@/lib/watchlist"

export default function usePostWatchlist() {
  return useMutation({
    mutationFn: async (id: string) => {
      console.log("post new id", id)
      const result = await postWatchList(id)
      console.log(result)

      // no need to wait for this
      void queryClient.invalidateQueries({ queryKey: ["watchlist"] })
    },
  })
}
