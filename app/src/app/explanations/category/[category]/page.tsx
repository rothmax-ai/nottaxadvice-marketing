import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  getExplanationCategory,
  getFallbackExplanationsByCategory,
} from '@/data/explanations'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

type ExplanationListItem = {
  _id: string
  title: string
  excerpt?: string
  slug: string
}

/**
 * Converts "roth-conversions" → "Roth Conversions"
 */
function toTitleCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function getExplanationsByCategory(
  categorySlug: string
): Promise<ExplanationListItem[]> {
  return client.fetch(
    `
    *[
      _type == "explanation" &&
      category == $categorySlug
    ]
    | order(order asc, _createdAt asc) {
      _id,
      title,
      excerpt,
      "slug": slug.current
    }
    `,
    { categorySlug }
  )
}

export default async function ExplanationCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  const categoryMeta = getExplanationCategory(category)
  const categoryTitle = categoryMeta?.title ?? toTitleCase(category)
  const cmsExplanations = await getExplanationsByCategory(category)
  const fallbackExplanations = getFallbackExplanationsByCategory(category)
  const seenSlugs = new Set(cmsExplanations.map((item) => item.slug))
  const explanations = [
    ...cmsExplanations,
    ...fallbackExplanations
      .filter((item) => !seenSlugs.has(item.slug))
      .map((item) => ({
        _id: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
      })),
  ]

  return (
    <main>
      <Container>
        <Navbar />

        <Subheading className="mt-16">Category</Subheading>

        <Heading as="h1" className="mt-2">
          {categoryTitle}
        </Heading>

        <p className="mt-6 max-w-3xl text-sm text-gray-600">
          {categoryMeta?.description ??
            'A collection of plain-English explanations focused on how this part of the retirement tax system behaves and why the results change.'}
        </p>

        {explanations.length === 0 ? (
          <p className="mt-12 text-sm text-gray-600">
            No explanations published in this category yet.
          </p>
        ) : (
          <ul className="mt-12 space-y-8">
            {explanations.map((item) => (
              <li key={item._id}>
                <Link
                  href={`/explanations/${item.slug}`}
                  className="block text-lg font-medium text-gray-900 hover:underline"
                >
                  {item.title}
                </Link>

                {item.excerpt && (
                  <p className="mt-1 max-w-2xl text-sm text-gray-600">
                    {item.excerpt}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Container>

      <Footer />
    </main>
  )
}
