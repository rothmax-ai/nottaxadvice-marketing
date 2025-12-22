import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing. Use credits only when you run analysis. No subscriptions. No surprises.',
}

/* -------------------------------------------------------------------------- */
/*                                    TIERS                                   */
/* -------------------------------------------------------------------------- */

const tiers = [
  {
    name: 'Free',
    slug: 'free',
    description: 'Try everything. No card required.',
    price: 'Free',
    cta: 'Start free (Coming soon)',
    highlights: [
      '50 free credits',
      'Full access to all features',
      'No credit card required',
      'Credits never expire',
    ],
  },
  {
    name: 'Credits',
    slug: 'credits',
    description: 'Use as much as you want, when you want.',
    price: '$9.99',
    cta: 'Buy credits (Coming soon)',
    highlights: [
      '2,000 credits (launch pricing)',
      'All features included',
      'Credits never expire',
      'Buy more anytime',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Simple pricing. No subscriptions.</Heading>
      <Lead className="mt-6 max-w-3xl">
        NotTaxAdvice uses a credit based model. Use credits only when you run analysis.
        No subscriptions. No expirations. No surprises.
      </Lead>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*                               PRICING CARDS                                */
/* -------------------------------------------------------------------------- */

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {tiers.map((tier) => (
            <PricingCard key={tier.slug} tier={tier} />
          ))}
        </div>

        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 rounded-4xl ring-1 ring-black/5 shadow-[inset_0_0_2px_1px_#ffffff4d]">
      <div className="rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/5">
          {/* Tier label */}
          <Subheading className="text-sm font-semibold tracking-wide text-gray-900">
            {tier.name}
          </Subheading>

          {/* Short description */}
          <p className="mt-3 text-base leading-7 text-gray-800">
            {tier.description}
          </p>

          {/* Price (leave as-is visually) */}
          <div className="mt-8 text-5xl font-medium text-gray-950">
            {tier.price}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button href="#">{tier.cta}</Button>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h3 className="text-base font-semibold text-gray-900">
              What you get
            </h3>

            <ul className="mt-4 space-y-4">
              {tier.highlights.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-base leading-7 text-gray-900"
                >
                  <CheckIcon className="mt-1 size-4 text-green-600 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   FAQ                                      */
/* -------------------------------------------------------------------------- */

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <dl>
      <dt className="text-sm font-semibold text-gray-950">{q}</dt>
      <dd className="mt-4 text-sm/6 text-gray-600">{a}</dd>
    </dl>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
       <div className="mt-14"></div>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>

        <Heading as="div" className="mt-2 text-center">
          How credits work.
        </Heading>

        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <FAQ q="Do credits expire?" a="Credits stay in your account until you use them whether that’s today, next month or a year from now. There are no deadlines, resets or forced usage windows." />

          <FAQ
            q="Do I need a credit card to try it?"
            a="No. The free tier requires no credit card.
            You can sign in with Google or Apple and immediately receive free credits to explore the full product. We don’t collect payment details unless you choose to buy more credits."
          />

          <FAQ
            q="What happens when I run out of credits?"
            a="You can purchase more credits if you want to continue, or simply stop. There are no subscriptions, no auto-renewals, and no background charges."
          />

          <FAQ
            q="Do I get access to everything?"
            a="Free and paid users see the same tools and explanations — the only difference is how many credits you have available to run analyses."
          />
        </div>
      </section>
    </Container>
  )
}



/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function Pricing() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>

      <Header />
      <PricingCards />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}