import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About the Author',
  description: 'Meet the heart behind Little Seed Library. A mother and storyteller dedicated to nurturing young hearts through faith-filled stories.',
}

export default function AboutPage() {
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
            <Link href="/mission" className="text-muted hover:text-foreground transition-colors">
              Mission
            </Link>
            <Link href="/about" className="text-foreground font-medium">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground">About the Author</h1>
          <p className="mt-4 text-lg text-muted">The heart behind Little Seed Library</p>
        </header>

        {/* Author Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          {/* Placeholder for author photo */}
          <div className="w-48 h-48 rounded-full bg-background-warm flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Author"
              width={120}
              height={120}
              className="opacity-50"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg leading-relaxed text-muted">
              A mother, storyteller, and believer in the power of nurturing young hearts through faith-filled stories.
              Her journey began with a simple desire: to plant seeds of virtue in her own daughter&apos;s heart.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <section className="space-y-6 text-lg leading-relaxed text-muted">
          <h2 className="text-2xl font-bold text-foreground">My Story</h2>
          <p>
            As a mother, I&apos;ve always believed that the stories we share with our children shape who they become.
            When my daughter was born, I began searching for books that would teach her not just about the world,
            but about the values that matter most—kindness, respect, patience, and love.
          </p>
          <p>
            What I found was a calling. <span className="text-primary font-medium">Little Seed Library</span> grew
            from my desire to create the kind of books I wanted to read to my own child—stories rooted in
            Biblical truth, wrapped in gentle words, and filled with lessons that would stay with her forever.
          </p>
          <p>
            Each book in the <span className="text-primary font-medium">Tales of Heavenly Manners</span> series
            is written with prayer and purpose, designed to help parents and caregivers nurture character
            in the little ones they love.
          </p>
        </section>

        {/* Why I Write Section */}
        <section className="mt-12 bg-background-warm/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why I Write</h2>
          <ul className="space-y-4 text-muted">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To plant seeds of faith and virtue in young hearts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To give parents a tool for meaningful conversations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To create slow, beautiful moments of storytelling</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>To honor God through stories that reflect His love</span>
            </li>
          </ul>
        </section>

        {/* Connect Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Connect</h2>
          <p className="text-muted mb-6">
            I&apos;d love to hear from you! Whether you have questions, feedback, or just want to share
            how these stories have touched your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-white font-medium transition-all hover:bg-primary-dark"
            >
              Explore My Books
            </Link>
            <Link
              href="/mission"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-primary/20 px-8 text-foreground font-medium transition-all hover:border-primary/40 hover:bg-primary/5"
            >
              Read My Mission
            </Link>
          </div>
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
            <Link href="/mission" className="text-sm text-muted hover:text-foreground transition-colors">
              Mission
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
