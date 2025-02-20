"use client"

import Image from "next/image"
import React, { PropsWithChildren, ReactNode } from "react"

import Spinner from "@/components/Spinner"
import {
  Table,
  TableHead,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import useGetTokensQuery from "@/hooks/useGetTokensQuery"
import { formatCurrency, formatPercent } from "@/util/number"

export default function TokenTable() {
  const { data, error, isLoading } = useGetTokensQuery()

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return error.message
  }

  return (
    <Table>
      <TableCaption>
        Tokens on the Solana blockchain, ordered by market cap
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Icon</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24-hour Change %</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>Total volume</TableHead>
          <TableHead>Volume of last 24 hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(data || []).map((token) => (
          <TableRow key={token.id} className="even:bg-primary-foreground">
            <TableCell className="font-semibold">
              {token.symbol.toUpperCase()}
            </TableCell>
            <TableCell>
              <Image
                src={token.image}
                alt={token.name}
                width="32"
                height="32"
              />
            </TableCell>
            <TableCell>{formatCurrency(token.current_price)}</TableCell>
            <TableCell>
              <StyledNumber value={token.price_change_percentage_24h}>
                {formatPercent(token.price_change_percentage_24h / 100)}
              </StyledNumber>
            </TableCell>
            <TableCell>{formatCurrency(token.market_cap)}</TableCell>
            <TableCell>{formatCurrency(token.total_volume)}</TableCell>
            <TableCell>{formatCurrency(token["24_hr_vol"])}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

interface StyledNumberProps extends PropsWithChildren {
  value: number
  children: ReactNode
}
function StyledNumber({ value, children }: StyledNumberProps) {
  return (
    <span className={value < 0 ? "text-red-600" : "text-green-600"}>
      {children}
    </span>
  )
}
