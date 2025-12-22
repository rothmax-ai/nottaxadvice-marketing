import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
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
  params: { category: string }
}) {
  const categorySlug = params.category
  const categoryTitle = toTitleCase(categorySlug)

  const explanations = await getExplanationsByCategory(categorySlug)

  return (
    <main>
      <Container>
        <Navbar />

        <Subheading className="mt-16">Category</Subheading>

        <Heading as="h1" className="mt-2">
          {categoryTitle}
        </Heading>

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