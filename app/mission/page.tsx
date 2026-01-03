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
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Little Seed Library
          </p>
          <div className="flex items-center gap-6">
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
        </div>
      </footer>
    </div>
  )
}
