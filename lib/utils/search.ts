export function formatSearchQuery(query: string): string {
  return query.trim().toLowerCase()
}

export function encodeSearchQuery(query: string): string {
  return encodeURIComponent(formatSearchQuery(query))
}

export function isValidSearchQuery(query: string): boolean {
  return query.trim().length > 0
}
