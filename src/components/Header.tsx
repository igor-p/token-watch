import { ThemeToggle } from "@/components/ThemeToggle"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="px-4 sm:px-6 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="mr-6 flex items-center font-bold gap-2">
          <Avatar className="size-8 items-center">
            <AvatarImage
              src="/avatar.jpg"
              alt="Avatar"
              className="size-8 text-primary"
            />
          </Avatar>
          Token Watch
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

const linkStyles = "transition-colors hover:text-foreground/80"
