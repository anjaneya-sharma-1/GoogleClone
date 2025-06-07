import Link from "next/link"
import { GOOGLE_LINKS } from "@/lib/constants/google-links"

export function SearchNavigation() {
  return (
    <div className="px-4 pb-2">
      <div className="flex space-x-6 text-sm">
        <Link href="#" className="text-blue-600 border-b-2 border-blue-600 pb-2">
          All
        </Link>
        <Link
          href={GOOGLE_LINKS.images}
          className="text-gray-600 hover:text-gray-800 pb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Images
        </Link>
        <Link
          href={GOOGLE_LINKS.news}
          className="text-gray-600 hover:text-gray-800 pb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          News
        </Link>
        <Link
          href={GOOGLE_LINKS.shopping}
          className="text-gray-600 hover:text-gray-800 pb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shopping
        </Link>
        <Link
          href={GOOGLE_LINKS.maps}
          className="text-gray-600 hover:text-gray-800 pb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maps
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-800 pb-2">
          More
        </Link>
      </div>
    </div>
  )
}
