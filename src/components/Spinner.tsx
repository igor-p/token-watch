import { LoaderCircle } from "lucide-react"
import React from "react"

export default function Spinner() {
  return (
    <div className="flex items-center justify-center my-2">
      <LoaderCircle className="animate-spin w-12 h-12 text-blue-500" />
    </div>
  )
}
