"use client"

import Image from "next/image"
import React, { PropsWithChildren, ReactNode } from "react"

import {
  Table,
  TableHead,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { CombinedCoinData } from "@/hooks/useGetTokens"
import IconStar from "@/icons/IconStar"
import IconStarFilled from "@/icons/IconStarFilled"
import { formatCurrency, formatPercent } from "@/util/number"

import { Button } from "./ui/button"

export interface TokenTableProps {
  data: CombinedCoinData[]
  watchlistIds?: Set<string>
  onClickStar: (id: string) => void
}

export default function TokenTable({
  data,
  watchlistIds,
  onClickStar,
}: TokenTableProps) {
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
          <TableHead>Add to Watchlist</TableHead>
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
            <TableCell>
              <Button variant="ghost" onClick={() => onClickStar(token.id)}>
                {watchlistIds?.has(token.id) ? (
                  <IconStarFilled />
                ) : (
                  <IconStar />
                )}
              </Button>
            </TableCell>
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
