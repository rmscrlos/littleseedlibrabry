import { groq } from 'next-sanity'

export const booksQuery = groq`
  *[_type == "book"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    cover,
    description,
    amazonUrl,
    publishedDate,
    featured
  }
`

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    cover,
    description,
    amazonUrl,
    publishedDate,
    featured
  }
`

export const bookSlugsQuery = groq`
  *[_type == "book" && defined(slug.current)][].slug.current
`
