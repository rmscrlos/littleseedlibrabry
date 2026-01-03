'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  // Don't show header on studio pages
  if (pathname?.startsWith('/studio')) {
    return null
  }

  return (
    <nav className="border-b border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Little Seed Library"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold text-primary">Little Seed Library</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/mission"
            className={pathname === '/mission' ? 'text-foreground font-medium' : 'text-muted hover:text-foreground transition-colors'}
          >
            Mission
          </Link>
          <Link
            href="/about"
            className={pathname === '/about' ? 'text-foreground font-medium' : 'text-muted hover:text-foreground transition-colors'}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
