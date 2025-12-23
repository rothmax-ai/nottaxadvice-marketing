import { notFound } from 'next/navigation'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

async function getExplanation(slug: string) {
  return client.fetch(
    `
    *[_type == "explanation" && slug.current == $slug][0]{
      title,
      excerpt,
      body
    }
    `,
    { slug },
  )
}

export default async function ExplanationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const explanation = await getExplanation(slug)

  if (!explanation) {
    notFound()
  }

  return (
    <main className="overflow-hidden">
      <GradientBackground />

      <Container>
        <Navbar />

        {/* ------------------------------------------------------------------ */}
        {/* ARTICLE                                                            */}
        {/* ------------------------------------------------------------------ */}

        <article className="mx-auto mt-16 max-w-3xl">
          {/* Header */}
          <header className="mb-16">
            <p className="text-sm font-medium tracking-wide text-gray-500 uppercase">
              Explanation
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              {explanation.title}
            </h1>

            {explanation.excerpt && (
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {explanation.excerpt}
              </p>
            )}
          </header>

          {/* Body */}
          <div
            className="prose prose-gray prose-lg max-w-none
              prose-headings:font-semibold
              prose-headings:tracking-tight
              prose-headings:text-gray-950
              prose-p:leading-7
              prose-li:leading-7"
          >
            <PortableText value={explanation.body} />
          </div>
        </article>
      </Container>

      <Footer />
    </main>
  )
}