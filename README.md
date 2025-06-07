# Google Homepage Clone

A modern, responsive clone of Google's search interface built with Next.js, TypeScript, and Tailwind CSS. This project includes both the main Google homepage and a search results page with a fully functional UI.

## Features

- Pixel-perfect recreation of Google's interface
- Responsive design that works on all devices
- Functional search bar with suggestions
- Voice search capability
- Google Images search
- Mobile-friendly layout
- Customizable UI components
- External links to Google services

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js (18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/google-homepage.git
cd google-homepage
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                  # Next.js app router pages
├── components/          
│   ├── layout/          # Layout components (header, footer)
│   ├── pages/           # Page-specific components
│   ├── search/          # Search-related components
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and constants
│   ├── constants/       # Constant values and links
│   └── utils/          # Helper functions
├── public/             # Static assets
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## Features in Detail

### Homepage
- Google logo with animation
- Functional search bar
- Voice search capability
- "I'm Feeling Lucky" button
- Language options
- Header and footer navigation

### Search Results Page
- Persistent search header
- Search navigation tabs
- Results list with pagination
- Related searches
- Mobile-responsive design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes only. All Google trademarks and copyrights belong to Google Inc.
