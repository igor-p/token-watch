import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ReactNode } from "react"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Token Watch",
  description: "Check token prices",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, "antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <article className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="container flex-1 px-4 sm:px-6">{children}</main>
            <Footer />
          </article>
        </ThemeProvider>
      </body>
    </html>
  )
}
