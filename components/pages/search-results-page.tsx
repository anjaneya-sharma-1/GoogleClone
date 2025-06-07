"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { SearchHeader } from "@/components/search/search-header"
import { SearchNavigation } from "@/components/search/search-navigation"
import { SearchResults } from "@/components/search/search-results"

export function SearchResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const query = searchParams.get("q")
    if (query) {
      setSearchQuery(query)
    }
  }, [searchParams])

  const handleNewSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SearchHeader searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} onSearch={handleNewSearch} />

      <SearchNavigation />

      <SearchResults query={searchParams.get("q") || searchQuery} />
    </div>
  )
}
