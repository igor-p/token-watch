import { ThemeToggle } from "@/components/ThemeToggle"
import IconBitcoin from "@/icons/IconBitcoin"

export function Header() {
  return (
    <header className="px-4 sm:px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="mr-6 flex items-center font-bold gap-2">
          <IconBitcoin />
          Token Watch
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
