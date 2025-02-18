"use client"

import { IconLink } from "@/components/IconLink"
import { URL_GITHUB, URL_LINKEDIN, URL_TELEGRAM, URL_X } from "@/constants"
import IconGitHub from "@/icons/IconGitHub"
import IconLinkedIn from "@/icons/IconLinkedIn"
import IconTelegram from "@/icons/IconTelegram"
import IconX from "@/icons/IconX"

export function Footer() {
  return (
    <footer className="px-4 md:px-6 border-t flex justify-between gap-2 w-full shrink-0 items-center py-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2025 Igor Pokryshevskiy. All rights reserved.
      </p>
      <div className="flex gap-2">
        <IconLink
          name="Github"
          url={URL_GITHUB}
          Icon={IconGitHub}
          variant="ghost"
        />
        <IconLink
          name="LinkedIn"
          url={URL_LINKEDIN}
          Icon={IconLinkedIn}
          variant="ghost"
        />
        <IconLink
          name="Telegram"
          url={URL_TELEGRAM}
          Icon={IconTelegram}
          variant="ghost"
        />
        <IconLink name="X" url={URL_X} Icon={IconX} variant="ghost" />
      </div>
    </footer>
  )
}
