'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { LogoCloud } from '@/components/logo-cloud'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import OldNewWaySection from "@/components/OldNewWaySection";
import ProductExplanationSection from '@/components/ProductExplanationSection'

export const metadata: Metadata = {
  description:
    'Plain-English explanations of your taxes. Upload your return and see how today’s decisions affect future taxes.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />

      <Container className="relative">
        <Navbar />

        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-40">
        <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-8xl/[0.8]">            
        Understand your taxes, 
        <br />
        clearly.
          </h1>

          <div className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            <ul className="space-y-3">
              <li>  + Upload your 1040.</li>
              <li>  + NotTaxAdvice.ai extracts the numbers.</li>
              <li>  + Explains what they mean.</li>
              <li>  + Shows your future tax path all in plain English.</li>
            </ul>

            <span className="block mt-6 text-base text-gray-950/60">
              Built by the creator of RothMax.ai.
            </span>
          </div>

          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/pricing">
              Get 2,000 Pre-Launch Credits — $9.99
              <br /> (Coming Soon)
            </Button>
            <Button variant="secondary" href="/company">
              Try the Demo
              <br /> (Coming Soon)
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Social proof (Radiant-style) */}
      <Container className="mt-6">
        <div className="mt-14">
          <LogoCloud />
        </div>

      </Container>
      <div className="mb-14"></div>
      {/* Old / New Way comparison */}
      <OldNewWaySection />
      <ProductExplanationSection />
      {/* Positioning line */}

      <Container className="mt-16">
          <Subheading>Most tax software <br /> tells you <span className="text-red-600">what you owe</span>.</Subheading>
          <Heading as="h2" className="mt-12 max-w-2xl">
            NotTaxAdvice
            <br /> tells you <span className="text-red-600">why</span>.
          </Heading>
      </Container>

      <div className="mb-14"></div>
      <Footer />
    </div>
  )
}