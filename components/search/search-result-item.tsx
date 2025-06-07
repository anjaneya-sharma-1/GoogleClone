interface SearchResultItemProps {
  url: string
  title: string
  description: string
}

export function SearchResultItem({ url, title, description }: SearchResultItemProps) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <div className="text-sm text-green-700 mb-1">{url}</div>
      <h3 className="text-xl text-blue-600 hover:underline cursor-pointer mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
