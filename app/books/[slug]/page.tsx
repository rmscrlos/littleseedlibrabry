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
    <div className="mx-auto max-w-5xl px-6 py-16">
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
    </div>
  )
}
