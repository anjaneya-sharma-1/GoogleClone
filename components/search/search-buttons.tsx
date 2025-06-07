"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SearchButtonsProps {
  onGoogleSearch: () => void
  className?: string
}

export function SearchButtons({ onGoogleSearch, className }: SearchButtonsProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <Button
        variant="outline"
        className="px-6 py-2 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded hover:shadow-sm hover:border-gray-400"
        onClick={onGoogleSearch}
      >
        Google Search
      </Button>

      <Button
        variant="outline"
        className="px-6 py-2 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded hover:shadow-sm hover:border-gray-400"
        asChild
      >
        <Link href="https://www.google.com/doodles/" target="_blank" rel="noopener noreferrer">
          I'm Feeling Lucky
        </Link>
      </Button>
    </div>
  )
}
