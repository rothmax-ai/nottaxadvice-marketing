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

        <div className="mt-12 max-w-3xl space-y-8 text-sm text-gray-600">
          <p>
            NotTaxAdvice.ai (“NotTaxAdvice”) is an educational software platform
            operated by AI Lantern Labs LLC. The Service is designed to explain
            how tax systems, rules, and calculations work using informational
            content, simulations, and visualizations.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">No Advice</h2>
            <p>
              The Service does <strong>not</strong> provide tax advice, legal
              advice, financial advice, tax planning, tax preparation, or filing
              services. Nothing on the site should be relied upon as a
              substitute for advice from a qualified CPA, attorney, or
              financial advisor.
            </p>
            <p>
              Use of the Service does not create any advisor, fiduciary, or
              professional-client relationship.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              AI Limitations
            </h2>
            <p>
              The Service uses automated systems and may produce inaccurate,
              incomplete, or outdated results.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Use at Your Own Risk
            </h2>
            <p>
              By using the Service, you acknowledge and agree that all
              decisions you make based on information provided remain solely
              your responsibility. NotTaxAdvice makes no guarantees regarding
              accuracy, completeness, timeliness, or outcomes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Payments</h2>
            <p>
              The Service may require credits. Credits are non-transferable and
              have no cash value.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              No Warranties
            </h2>
            <p>
              The Service is provided on an “as-is” and “as-available” basis.
              Features, functionality, and availability may change at any time
              without notice.
            </p>
            <p>
              We disclaim all warranties, including merchantability and fitness
              for a particular purpose, to the maximum extent permitted by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, AI Lantern Labs LLC shall
              not be liable for any direct, indirect, incidental,
              consequential, or special damages arising out of or related to
              your use of the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Disputes</h2>
            <p>
              Disputes are resolved via binding arbitration in Delaware and not
              as part of any class action.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Governing Law
            </h2>
            <p>Delaware law governs these Terms.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Severability
            </h2>
            <p>If any provision is invalid, the remainder remains in effect.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Updates</h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of the Service after changes are posted constitutes acceptance
              of the current Terms.
            </p>
          </section>

          <p>
            Contact:{' '}
            <a
              href="mailto:support@nottaxadvice.ai"
              className="font-medium text-gray-900 underline"
            >
              support@nottaxadvice.ai
            </a>
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
