
import Link from "next/link"
import { Grid3X3, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GOOGLE_LINKS } from "@/lib/constants/google-links"

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 text-sm">
      <div className="flex space-x-4">
        <Link
          href={GOOGLE_LINKS.about}
          className="text-gray-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </Link>
        <Link
          href={GOOGLE_LINKS.store}
          className="text-gray-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Store
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href={GOOGLE_LINKS.gmail}
          className="text-gray-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </Link>
        <Link
          href={GOOGLE_LINKS.images}
          className="text-gray-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Images
        </Link>
        <Button variant="ghost" size="sm" className="p-2" asChild>
          <Link
            href={GOOGLE_LINKS.products}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google apps"
          >
            <Grid3X3 className="w-5 h-5 text-gray-600" />
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="p-2" asChild>
          <Link
            href={GOOGLE_LINKS.accounts}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Account"
          >
            <User className="w-5 h-5 text-gray-600" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
