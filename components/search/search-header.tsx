"use client"

import type React from "react"
import Link from "next/link"
import { Search, Mic, Grid3X3, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GoogleLogo } from "@/components/ui/google-logo"
import { GOOGLE_LINKS } from "@/lib/constants/google-links"

interface SearchHeaderProps {
  searchQuery: string
  onSearchQueryChange: (query: string) => void
  onSearch: (query: string) => void
}

export function SearchHeader({ searchQuery, onSearchQueryChange, onSearch }: SearchHeaderProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch(searchQuery)
    }
  }

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="flex items-center px-4 py-3">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-5 h-5 text-gray-600 hover:text-gray-800" />
        </Link>

        <GoogleLogo size="small" className="mr-8" />

        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full h-10 pl-10 pr-10 text-sm border border-gray-300 rounded-full shadow-sm hover:shadow-md focus:shadow-md focus:outline-none focus:border-transparent focus:ring-1 focus:ring-blue-500"
            />
            <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1">
              <Mic className="w-4 h-4 text-gray-400" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-8">
          <Link
            href={GOOGLE_LINKS.gmail}
            className="text-sm text-gray-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail
          </Link>
          <Link
            href={GOOGLE_LINKS.images}
            className="text-sm text-gray-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Images
          </Link>
          <Button variant="ghost" size="sm" className="p-2" asChild>
            <Link href={GOOGLE_LINKS.products} target="_blank" rel="noopener noreferrer">
              <Grid3X3 className="w-4 h-4 text-gray-600" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="p-2" asChild>
            <Link href={GOOGLE_LINKS.accounts} target="_blank" rel="noopener noreferrer">
              <User className="w-4 h-4 text-gray-600" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
