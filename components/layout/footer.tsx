import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="px-4 py-3 text-sm text-gray-600">
        <div className="text-center sm:text-left mb-2 sm:mb-0">India</div>
      </div>

      <div className="border-t border-gray-300 px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-sm text-gray-600">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6">
            <Link href="https://ads.google.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Advertising
            </Link>
            <Link
              href="https://business.google.com/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Business
            </Link>
            <Link
              href="https://www.google.com/search/howsearchworks/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Search works
            </Link>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
            <Link
              href="https://policies.google.com/privacy"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </Link>
            <Link
              href="https://policies.google.com/terms"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </Link>
            <Link
              href="https://myaccount.google.com/preferences"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
