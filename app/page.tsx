import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { booksQuery } from '@/sanity/lib/queries'

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

export default async function Home() {
  const books = await client.fetch<Book[]>(booksQuery)

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

      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-primary font-medium mb-4">
                Faith-Based Children&apos;s Books
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                Planting Seeds of Virtue
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-8 text-muted max-w-xl">
                Stories rooted in timeless truth, nurturing kindness, respect, patience, and love in little hearts.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#books"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-white font-medium transition-all hover:bg-primary-dark hover:scale-105"
                >
                  Explore My Books
                </a>
                <Link
                  href="/mission"
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary/20 px-8 text-foreground font-medium transition-all hover:border-primary/40 hover:bg-primary/5"
                >
                  About the Author
                </Link>
              </div>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/logo.png"
                alt="Little Seed Library"
                width={280}
                height={280}
                className="w-56 h-56 md:w-72 md:h-72 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Tales of Heavenly Manners
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Building up young hearts with Biblical values—one story at a time.
            </p>
          </div>

          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <Link
                  key={book._id}
                  href={`/books/${book.slug.current}`}
                  className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  {book.cover ? (
                    <Image
                      src={urlFor(book.cover).width(400).height(600).url()}
                      alt={book.title}
                      width={400}
                      height={600}
                      className="w-full aspect-[2/3] object-cover"
                    />
                  ) : (
                    <div className="w-full aspect-[2/3] bg-background-soft flex items-center justify-center">
                      <span className="text-muted">No cover</span>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground text-lg">{book.title}</h3>
                    {book.publishedDate && (
                      <p className="text-sm text-muted mt-1">
                        {new Date(book.publishedDate).getFullYear()}
                      </p>
                    )}
                    {book.description && (
                      <p className="text-muted mt-3 text-sm line-clamp-3">
                        {book.description}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 text-primary font-medium">
                      View details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted">No books yet. Add some in the Studio!</p>
              <Link
                href="/studio"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-border px-6 text-foreground hover:bg-background transition-colors"
              >
                Open Studio
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
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
            <Link href="/mission" className="text-sm text-muted hover:text-foreground transition-colors">
              Mission
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
