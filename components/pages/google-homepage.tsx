"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/layout/header"
import { GoogleLogo } from "@/components/ui/google-logo"
import { SearchBar } from "@/components/search/search-bar"
import { SearchButtons } from "@/components/search/search-buttons"
import { LanguageOptions } from "@/components/ui/language-options"
import { Footer } from "@/components/layout/footer"
import { useSpeechRecognition } from "@/hooks/use-speech-recognition"

export function GoogleHomepage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { isListening, startListening } = useSpeechRecognition({
    onResult: (transcript) => {
      setSearchQuery(transcript)
      setTimeout(() => handleSearch(transcript), 500)
    },
  })

  const handleSearch = (query?: string) => {
    const searchTerm = query || searchQuery
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-20">
        <GoogleLogo className="mb-8" />

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
          onVoiceSearch={startListening}
          isListening={isListening}
          className="w-full max-w-xl mb-8"
        />

        <SearchButtons onGoogleSearch={() => handleSearch()} className="mb-8" />

        <LanguageOptions />
      </main>

      <Footer />
    </div>
  )
}
