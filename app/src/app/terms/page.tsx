import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'

export default function TermsPage() {
  return (
    <main>
      <Container>
        <Navbar />

        <Subheading className="mt-16">Legal</Subheading>

        <Heading as="h1" className="mt-2">
          Terms of Service
        </Heading>

        <div className="mt-12 max-w-3xl space-y-6 text-sm text-gray-600">
          <p>
            NotTaxAdvice is an educational platform designed to explain how tax
            systems work. It does not provide tax, legal, or financial advice.
          </p>

          <p>
            The content on this site is for informational and educational
            purposes only and should not be relied upon as a substitute for
            professional advice from a qualified CPA, attorney, or financial
            advisor.
          </p>

          <p>
            By using this site, you acknowledge that all decisions remain your
            responsibility and that NotTaxAdvice makes no guarantees regarding
            accuracy, completeness, or outcomes.
          </p>

          <p>
            We may update these terms from time to time. Continued use of the
            site constitutes acceptance of the current terms.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  )
}