import { AlertCircle } from "lucide-react"
import React, { PropsWithChildren } from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export interface AlertErrorProps extends PropsWithChildren {
  title: string
  className?: string
}

export default function AlertError({
  title,
  className,
  children,
}: AlertErrorProps) {
  return (
    <Alert
      variant="destructive"
      className={cn("bg-red-100 dark:bg-red-950 dark:text-red-300", className)}
    >
      <AlertCircle className="h-4 w-4 dark:text-red-300" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
