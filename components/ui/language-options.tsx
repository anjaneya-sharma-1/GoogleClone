import Link from "next/link"

const LANGUAGE_LINKS = [
  { code: "hi", name: "हिन्दी", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=hi" },
  { code: "bn", name: "বাংলা", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=bn" },
  { code: "te", name: "తెలుగు", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=te" },
  { code: "mr", name: "मराठी", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=mr" },
  { code: "ta", name: "தமிழ்", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=ta" },
  { code: "gu", name: "ગુજરાતી", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=gu" },
  { code: "kn", name: "ಕನ್ನಡ", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=kn" },
  { code: "ml", name: "മലയാളം", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=ml" },
  { code: "pa", name: "ਪੰਜਾਬੀ", url: "https://www.google.com/setprefs?sig=0_rKFD8AAAAA&hl=pa" },
] as const

export function LanguageOptions() {
  return (
    <div className="text-sm text-gray-600">
      Google offered in:{" "}
      {LANGUAGE_LINKS.map((lang, index) => (
        <span key={lang.code}>
          <Link href={lang.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {lang.name}
          </Link>
          {index < LANGUAGE_LINKS.length - 1 && " "}
        </span>
      ))}
    </div>
  )
}
