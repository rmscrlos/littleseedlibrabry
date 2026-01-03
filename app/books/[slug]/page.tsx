import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { bookBySlugQuery, bookSlugsQuery } from '@/sanity/lib/queries'

type Book = {
  _id: string
  title: string
  slug: { current: string }
  cover?: { asset: { _ref: string } }
  description?: string
  amazonUrl?: string
  publishedDate?: string
  featured?: boolean
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(bookSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const book = await client.fetch<Book | null>(bookBySlugQuery, { slug })

  if (!book) {
    return { title: 'Book Not Found' }
  }

  return {
    title: `${book.title} | Little Seed Library`,
    description: book.description || `${book.title} - A book from Little Seed Library`,
  }
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const book = await client.fetch<Book | null>(bookBySlugQuery, { slug })

  if (!book) {
    notFound()
  }

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
            <Link href="/about" className="text-muted hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Book Content */}
      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/#books"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all books
        </Link>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Book Cover */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            {book.cover ? (
              <Image
                src={urlFor(book.cover).width(400).height(600).url()}
                alt={book.title}
                width={400}
                height={600}
                className="w-72 md:w-80 rounded-2xl shadow-lg"
                priority
              />
            ) : (
              <div className="w-72 md:w-80 aspect-[2/3] bg-background-warm rounded-2xl flex items-center justify-center">
                <span className="text-muted">No cover</span>
              </div>
            )}
          </div>

          {/* Book Details */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {book.title}
            </h1>

            {book.publishedDate && (
              <p className="mt-2 text-muted">
                Published {new Date(book.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}

            {book.featured && (
              <span className="mt-4 inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                Featured Book
              </span>
            )}

            {book.description && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-foreground mb-2">About this book</h2>
                <p className="text-muted leading-relaxed whitespace-pre-line">
                  {book.description}
                </p>
              </div>
            )}

            {/* Purchase Section */}
            <div className="mt-8 p-6 bg-background-warm/50 rounded-xl">
              <h2 className="text-lg font-semibold text-foreground mb-4">Get your copy</h2>
              {book.amazonUrl ? (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-white font-medium transition-all hover:bg-primary-dark hover:scale-105"
                >
                  Buy on Amazon
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <p className="text-muted">Coming soon!</p>
              )}
            </div>

            {/* Series Info */}
            <div className="mt-8 p-6 border border-border/50 rounded-xl">
              <p className="text-sm text-muted">
                Part of the <span className="text-primary font-medium">Tales of Heavenly Manners</span> series —
                building up young hearts with Biblical values, one story at a time.
              </p>
            </div>
          </div>
        </div>
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
            <Link href="/mission" className="text-sm text-muted hover:text-foreground transition-colors">
              Mission
            </Link>
            <Link href="/about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
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
