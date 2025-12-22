import Link from 'next/link'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'

export default function ExplanationsIndex() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />

      {/* ------------------------------------------------------------------ */}
      {/* NAV + HERO                                                         */}
      {/* ------------------------------------------------------------------ */}

      <Container>
        <Navbar />

        <Subheading className="mt-16">Explanations</Subheading>

        <Heading as="h1" className="mt-2">
          How retirement tax systems actually work.
        </Heading>

        <Lead className="mt-6 max-w-3xl">
          Clear explanations of Roth conversions, tax brackets, IRMAA, and
          long-term tradeoffs — written to help you understand why outcomes
          change, not just what the numbers are.
        </Lead>

        <p className="mt-4 max-w-3xl text-sm text-gray-500">
          If this feels confusing, that’s normal — these systems were not designed
          to be intuitive.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Educational explanations only. Simulations, not advice.
        </p>
      </Container>

      {/* ------------------------------------------------------------------ */}
      {/* START HERE                                                         */}
      {/* ------------------------------------------------------------------ */}

      <Container className="mt-24">
        <Subheading>Start here</Subheading>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'What is NotTaxAdvice?',
              desc: 'What problem this system solves, what it does — and what it deliberately does not do.',
              href: '/explanations/what-is-nottaxadvice',
            },
            {
              title: 'How the calculations work',
              desc: 'The rules, assumptions, and math behind Roth conversions, IRMAA, and projections.',
              href: '/explanations/how-calculations-work',
            },
            {
              title: 'Limitations & assumptions',
              desc: 'Clear boundaries, simplifications, and why they exist.',
              href: '/explanations/limitations',
            },
          ].map((item) => (
            <div
              key={item.href}
              className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5"
            >
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-sm font-medium text-gray-900"
              >
                Read →
              </Link>
            </div>
          ))}
        </div>
      </Container>

      {/* ------------------------------------------------------------------ */}
      {/* CORE TOPICS                                                        */}
      {/* ------------------------------------------------------------------ */}

      <Container className="mt-32">
        <Subheading>Core topics</Subheading>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Roth Conversions',
              desc: 'What a Roth conversion is, how it is taxed, and when it may or may not make sense.',
              slug: 'roth-conversions',
            },
            {
              title: 'Tax Brackets & Income',
              desc: 'How marginal brackets work, what “room left” means, and why timing matters.',
              slug: 'tax-brackets',
            },
            {
              title: 'IRMAA & Medicare',
              desc: 'How Medicare premiums are calculated and why small income changes can have large effects.',
              slug: 'irmaa',
            },
            {
              title: 'Capital Gains',
              desc: 'How capital gains stack on top of ordinary income and interact with conversions.',
              slug: 'capital-gains',
            },
            {
              title: 'RMDs',
              desc: 'Required minimum distributions, forced income, and long-term tax pressure.',
              slug: 'rmds',
            },
            {
              title: 'Glossary',
              desc: 'Plain-English definitions of common retirement and tax terms.',
              slug: 'glossary',
            },
          ].map((topic) => (
            <div
              key={topic.slug}
              className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5"
            >
              <h3 className="text-base font-medium">{topic.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{topic.desc}</p>
              <Link
                href={`/explanations/category/${topic.slug}`}
                className="mt-4 inline-block text-sm font-medium text-gray-900"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      </Container>

      {/* ------------------------------------------------------------------ */}
      {/* RECOMMENDED READING                                                */}
      {/* ------------------------------------------------------------------ */}

      <Container className="mt-32">
        <Subheading>Recommended reading</Subheading>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              title: 'How RothMax Calculates Taxes',
              desc: 'A step-by-step explanation of how ordinary income, capital gains, and conversions are modeled.',
              slug: 'how-rothmax-calculates-taxes',
            },
            {
              title: 'What “Room Left in Your Bracket” Actually Means',
              desc: 'Why marginal brackets matter and how Roth conversions interact with them.',
              slug: 'room-left-in-bracket',
            },
            {
              title: 'IRMAA: Why $1 Can Matter',
              desc: 'How Medicare premium cliffs work and why small income changes have outsized effects.',
              slug: 'irmaa-why-one-dollar-matters',
            },
          ].map((item) => (
            <div
              key={item.slug}
              className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-black/5"
            >
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
              <Link
                href={`/explanations/${item.slug}`}
                className="mt-4 inline-block text-sm font-medium text-gray-900"
              >
                Read →
              </Link>
            </div>
          ))}
        </div>
      </Container>

      {/* ------------------------------------------------------------------ */}
      {/* METHODOLOGY & TRANSPARENCY                                         */}
      {/* ------------------------------------------------------------------ */}

      <Container className="mt-32 max-w-3xl">
        <Subheading>Methodology & transparency</Subheading>

        <p className="mt-6 text-sm text-gray-600">
          These explanations are grounded in current U.S. federal tax law (2025),
          simplified where necessary, and explicit about assumptions.
        </p>

        <p className="mt-4 text-sm text-gray-600">
          We do not predict future tax law, investment returns, or personal
          outcomes. We show how systems behave under stated conditions.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <Link href="/explanations/methodology" className="text-gray-900">
            Methodology →
          </Link>
          <Link href="/explanations/assumptions" className="text-gray-900">
            Assumptions →
          </Link>
          <Link href="/explanations/limitations" className="text-gray-900">
            Limitations →
          </Link>
          <Link href="/explanations/disclaimer" className="text-gray-900">
            Simulation disclaimer →
          </Link>
        </div>
      </Container>

      {/* ------------------------------------------------------------------ */}
      {/* SOFT CTA                                                           */}
      {/* ------------------------------------------------------------------ */}

      <Container className="mt-32 mb-32 text-center">
        <p className="text-sm text-gray-600">
          Want to see how this applies to your own numbers?
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
          <Link href="/analysis" className="text-gray-900">
            Try the calculator →
          </Link>
          <Link href="/explanations" className="text-gray-900">
            Or keep reading →
          </Link>
        </div>
      </Container>

      <Footer />
    </main>
  )
}