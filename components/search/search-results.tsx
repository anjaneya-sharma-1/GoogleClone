import { SearchResultItem } from "./search-result-item"
import { MOCK_SEARCH_RESULTS } from "@/lib/constants/mock-data"

interface SearchResultsProps {
  query: string
}

export function SearchResults({ query }: SearchResultsProps) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-4 text-sm text-gray-600">About 1,234,567,890 results (0.45 seconds)</div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-medium text-gray-800 mb-2">Search results for: "{query}"</h1>
        <p className="text-gray-600">
          This is a demo search results page. In a real implementation, this would show actual search results from
          Google's Search API.
        </p>
      </div>

      <div className="space-y-6">
        {MOCK_SEARCH_RESULTS.map((result, index) => (
          <SearchResultItem
            key={index}
            url={result.url}
            title={result.title.replace("{query}", query)}
            description={result.description}
          />
        ))}
      </div>
    </main>
  )
}
