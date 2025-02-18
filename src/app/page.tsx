"use client"

import { useEffect } from "react"

import AlertError from "@/components/AlertError"

const URL_CG_PING = "https://api.coingecko.com/api/v3/ping"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const QUERY_PARAM_KEY = `x_cg_demo_api_key=${API_KEY}`

export default function Home() {
  console.log("render", API_KEY)

  useEffect(() => {
    const action = async () => {
      const response = await fetch(`${URL_CG_PING}?${QUERY_PARAM_KEY}`)
      const result = await response.json()
      console.log("ping result", result)
    }
    action()
  }, [])

  if (!API_KEY) {
    return (
      <AlertError title="Error" className="mt-8">
        Could not find your API key. Please check your <code>.env</code> file or
        check the <code>README.md</code> file for instructions on how to
        generate one.
      </AlertError>
    )
  }

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold tracking-tight">Token Watch</h2>
    </div>
  )
}
