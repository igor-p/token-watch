"use client"

import { QueryClientProvider } from "@tanstack/react-query"

import AlertError from "@/components/AlertError"
import TokenTable from "@/components/TokenTable"
import { CG_API_KEY } from "@/lib/coinGecko"
import { queryClient } from "@/lib/queryClient"

export default function HomePage() {
  // TODO: throw this key-check and alert logic into a provider that can wrap each page
  if (!CG_API_KEY) {
    return (
      <AlertError title="Error" className="mt-8">
        Could not find your API key. Please check your <code>.env</code> file or
        check the <code>README.md</code> file for instructions on how to
        generate one.
      </AlertError>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold tracking-tight">Token Watch</h2>
        <TokenTable />
      </div>
    </QueryClientProvider>
  )
}
