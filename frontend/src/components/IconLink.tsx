"use client"

import Link from "next/link"
import { ComponentType } from "react"

import { Button, ButtonProps } from "@/components/ui/button"

export interface IconLinkProps {
  name: string
  url: string
  Icon: ComponentType<{ className?: string }>
  variant?: ButtonProps["variant"]
}

export function IconLink({
  name,
  url,
  Icon,
  variant = "outline",
}: IconLinkProps) {
  return (
    <Link href={url} target="_blank">
      <Button variant={variant} size="icon">
        <Icon className="h-4 w-4" />
        <span className="sr-only">{name}</span>
      </Button>
    </Link>
  )
}
