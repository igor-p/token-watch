"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import TokenTablesView from "@/app/_components/TokenTablesView"
import AlertError from "@/components/AlertError"
import { Button } from "@/components/ui/button"
import { CG_API_KEY } from "@/lib/coinGecko"
import { queryClient } from "@/lib/queryClient"

export default function HomePage() {
  const [showWarning, setShowWarning] = useState(true)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">Token Watch</h2>
        {!CG_API_KEY && showWarning && (
          <AlertError title="Error" className="mt-8">
            <p>
              Could not find your API key. Without a key, you may experience
              degraded performance.
            </p>
            <p>
              Please check your <code>.env</code> file or check the{" "}
              <code>README.md</code> file for instructions on how to generate
              one.
            </p>
            <Button
              variant="destructive"
              className="mt-2 self-end"
              onClick={() => setShowWarning(false)}
            >
              Ok
            </Button>
          </AlertError>
        )}
        <TokenTablesView />
      </div>
    </QueryClientProvider>
  )
}
