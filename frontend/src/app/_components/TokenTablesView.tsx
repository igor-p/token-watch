"use client"

import React from "react"

import AlertError from "@/components/AlertError"
import Spinner from "@/components/Spinner"
import TokenTable from "@/components/TokenTable"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useDeleteWatchlist from "@/hooks/useDeleteWatchlist"
import useGetTokens from "@/hooks/useGetTokens"
import useGetWatchlist from "@/hooks/useGetWatchlist"
import usePostWatchlist from "@/hooks/usePostWatchlist"

export default function TokenTablesView() {
  const { data, error, isLoading } = useGetTokens()

  const { data: watchedIdSet } = useGetWatchlist()

  const { mutateAsync: addToWatchlist } = usePostWatchlist()
  const { mutateAsync: deleteFromWatchlist } = useDeleteWatchlist()

  const watchedTokens =
    data && watchedIdSet ? data.filter(({ id }) => watchedIdSet.has(id)) : []

  const handleStarClick = async (id: string) => {
    if (watchedIdSet?.has(id)) {
      // delete
      void deleteFromWatchlist(id)
    } else {
      // add token to watchlist
      void addToWatchlist(id)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    console.log("error", error, error.name, error.message, error.cause)
    return (
      <AlertError title="Error" className="mt-8">
        {error.name}: {error.message}
      </AlertError>
    )
  }

  if (!data) {
    return <Alert>No data</Alert>
  }

  return (
    <Tabs defaultValue="all-tokens" className="w-full">
      <TabsList>
        <TabsTrigger value="all-tokens">All tokens</TabsTrigger>
        <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
      </TabsList>
      <TabsContent value="all-tokens">
        <TokenTable
          data={data}
          watchlistIds={watchedIdSet}
          onClickStar={handleStarClick}
        />
      </TabsContent>
      <TabsContent value="watchlist">
        {watchedTokens.length === 0 ? (
          <Alert>
            <AlertTitle>Watchlist is empty</AlertTitle>
          </Alert>
        ) : (
          <TokenTable
            data={watchedTokens}
            watchlistIds={watchedIdSet}
            onClickStar={handleStarClick}
          />
        )}
      </TabsContent>
    </Tabs>
  )
}
