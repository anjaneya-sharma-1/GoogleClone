"use client"

import type React from "react"
import { Search, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
  onVoiceSearch: () => void
  isListening: boolean
  className?: string
}

export function SearchBar({ value, onChange, onSearch, onVoiceSearch, isListening, className }: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full h-12 pl-12 pr-12 text-base border border-gray-300 rounded-full shadow-sm hover:shadow-md focus:shadow-md focus:outline-none focus:border-transparent focus:ring-1 focus:ring-blue-500"
          placeholder=""
        />
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "absolute right-3 top-1/2 transform -translate-y-1/2 p-2",
            isListening ? "text-red-500" : "text-gray-400",
          )}
          onClick={onVoiceSearch}
        >
          <Mic className={cn("w-5 h-5", isListening && "animate-pulse")} />
        </Button>
      </div>

      {isListening && <div className="text-center mt-2 text-sm text-red-500">Listening... Speak now</div>}
    </div>
  )
}
