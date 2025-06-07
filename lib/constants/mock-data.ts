import type { SearchResult } from "@/types/search"

export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    url: "https://example.com",
    title: 'Example Result for "{query}"',
    description:
      "This is a mock search result. In a real implementation, this would contain actual search results related to your query.",
  },
  {
    url: "https://another-example.com",
    title: 'Another Result for "{query}"',
    description: "This is another mock search result demonstrating how search results would appear on this page.",
  },
  {
    url: "https://third-example.com",
    title: 'Third Result for "{query}"',
    description: "Yet another mock search result to show the layout and styling of search results.",
  },
]
