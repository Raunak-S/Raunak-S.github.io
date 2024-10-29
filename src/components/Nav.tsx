"use client"

import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"
import { link } from "fs"

interface NavProps {
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
  }[]
}

export function Nav({ links }: NavProps) {
  const isCollapsed: boolean = false;
  const [sections, setSections] = useState(links);


  const handleClick = (matchingIndex: number) => {
    const newSections = links.map((link, index) => {
      return {
        ...link,
        variant: index === matchingIndex ? "default" : "ghost"
      } as const
    })
    setSections(newSections)
  }

  return (
    <div
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {sections.map((link, index) =>
          isCollapsed ? <h1>IS COLLAPSED</h1> : (
            <button
              key={index}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted/30",
                "dark:text-white dark:hover:bg-muted/30 dark:hover:text-white justify-start"
              )}
              onClick={() => handleClick(index)}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </button>
          )
        )}
      </nav>
    </div>
  )
}
