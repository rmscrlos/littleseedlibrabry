import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Mission',
  description: 'Tales of Heavenly Manners was born from a longing to plant seeds of virtue in young hearts. Building up children with Biblical values—one story at a time.',
}

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-warm via-background-soft to-background font-sans">
      {/* Navigation */}
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
            <Link href="/mission" className="text-foreground font-medium">
              Mission
            </Link>
            <Link href="/about" className="text-muted hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground">A Note from the Author</h1>
        </header>

        {/* Scripture Quote */}
        <blockquote className="border-l-4 border-primary pl-6 py-2 mb-12 bg-background-warm rounded-r-xl">
          <p className="text-lg italic text-foreground">
            &ldquo;Train up a child in the way he should go, and when he is old he will not depart from it.&rdquo;
          </p>
          <cite className="text-muted mt-2 block">— Proverbs 22:6</cite>
        </blockquote>

        {/* Main Content */}
        <article className="space-y-6 text-lg leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-primary">Tales of Heavenly Manners</span> was born from a longing to plant seeds of virtue in my own daughter&apos;s heart and to help other parents do the same in a gentle, joyful, and memorable way.
          </p>
          <p>
            In a world that moves fast, I believe we need slow moments of storytelling, rooted in timeless truth and character. Through these books, I hope to nurture <span className="text-foreground font-medium">kindness</span>, <span className="text-foreground font-medium">respect</span>, <span className="text-foreground font-medium">patience</span>, and <span className="text-foreground font-medium">love</span> in little ones everywhere.
          </p>
          <p>
            This is a growing series meant to build up young hearts with Biblical values—one story at a time. Thank you for joining us on this journey.
          </p>
        </article>

        {/* Signature */}
        <div className="mt-12 text-center">
          <p className="text-muted italic">With grace,</p>
          <p className="text-primary font-semibold text-lg mt-1">The Little Seed Library</p>
        </div>

        {/* Core Values */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            What We Nurture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background-warm rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Kindness</h3>
              <p className="mt-2 text-muted">Teaching little hearts to show love and compassion to others.</p>
            </div>
            <div className="bg-background-warm rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Respect</h3>
              <p className="mt-2 text-muted">Honoring God, family, and others through our words and actions.</p>
            </div>
            <div className="bg-background-warm rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Patience</h3>
              <p className="mt-2 text-muted">Learning to wait with grace and trust in God&apos;s timing.</p>
            </div>
            <div className="bg-background-warm rounded-xl p-6">
              <h3 className="font-semibold text-foreground text-lg">Love</h3>
              <p className="mt-2 text-muted">The foundation of all virtues, reflecting God&apos;s heart in everything we do.</p>
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <section className="mt-16 bg-background-soft rounded-2xl p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Acknowledgments</h2>
          <p className="text-muted leading-relaxed">
            These books were written with love and inspired by my sweet daughter. Watching her grow into a kind, curious, and compassionate little girl has been the greatest blessing.
          </p>
          <p className="text-muted leading-relaxed mt-4">
            Most of all, I give thanks to God, the King of all kings, who continues to guide my heart as a mother and reminds me that true royalty begins with a heart that reflects His.
          </p>
          <p className="text-foreground font-medium mt-4 italic">
            May these books be a reminder to little ones everywhere that good manners, rooted in love and kindness, are the mark of a true princess in God&apos;s kingdom.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/brytcreates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@brytcreates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/studio" className="text-sm text-muted hover:text-foreground transition-colors">
              Studio
            </Link>
          </div>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Little Seed Library
          </p>
        </div>
      </footer>
    </div>
  )
}
