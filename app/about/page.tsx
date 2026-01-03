import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About the Author',
  description: 'Meet the heart behind Little Seed Library. A mother and storyteller dedicated to nurturing young hearts through faith-filled stories.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
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
          I&apos;d love to hear from you! Send me a message on social media.
        </p>
        <div className="flex gap-6 justify-center mb-8">
          <a
            href="https://www.instagram.com/brytcreates"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-medium">Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@brytcreates"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <span className="font-medium">TikTok</span>
          </a>
        </div>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-white font-medium transition-all hover:bg-primary-dark"
        >
          Explore My Books
        </Link>
      </section>
    </div>
  )
}
