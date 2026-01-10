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
            NotTaxAdvice.ai (“NotTaxAdvice”) is an educational software platform
            operated by AI Lantern Labs LLC. The Service is designed to explain
            how tax systems, rules, and calculations work using informational
            content, simulations, and visualizations.
          </p>

          <p>
            The Service does <strong>not</strong> provide tax advice, legal
            advice, financial advice, tax planning, tax preparation, or filing
            services. Nothing on the site should be relied upon as a substitute
            for advice from a qualified CPA, attorney, or financial advisor.
          </p>

          <p>
            By using the Service, you acknowledge and agree that all decisions
            you make based on information provided remain solely your
            responsibility. NotTaxAdvice makes no guarantees regarding accuracy,
            completeness, timeliness, or outcomes.
          </p>

          <p>
            The Service is provided on an “as-is” and “as-available” basis.
            Features, functionality, and availability may change at any time
            without notice.
          </p>

          <p>
            To the maximum extent permitted by law, AI Lantern Labs LLC shall not
            be liable for any direct, indirect, incidental, consequential, or
            special damages arising out of or related to your use of the
            Service.
          </p>

          <p>
            We may update these Terms of Service from time to time. Continued
            use of the Service after changes are posted constitutes acceptance
            of the current Terms.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  )
}