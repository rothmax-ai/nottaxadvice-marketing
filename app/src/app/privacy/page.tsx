import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'

export default function PrivacyPage() {
  return (
    <main>
      <Container>
        <Navbar />

        <Subheading className="mt-16">Legal</Subheading>

        <Heading as="h1" className="mt-2">
          Privacy Policy
        </Heading>

        <div className="mt-12 max-w-3xl space-y-8 text-sm text-gray-600">
          <p>
            NotTaxAdvice.ai (“NotTaxAdvice”) is operated by AI Lantern Labs LLC.
            We respect your privacy and collect only the information necessary
            to operate, maintain, and improve the platform.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Data Collected
            </h2>
            <p>
              Information we may collect includes account information (such as
              an email address), usage data (such as features used and credits
              consumed), and technical data required to operate the service
              securely.
            </p>
            <p>
              Payment information is processed by third-party payment
              providers, and we do not store full payment card details.
            </p>
            <p>
              We do not sell personal data. Information provided to the
              platform is used solely for educational, operational, security,
              and fraud prevention purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Uploaded Documents
            </h2>
            <p>
              Uploaded documents, if any, are processed strictly for
              educational explanation and simulation purposes. Uploaded content
              is not used to provide tax advice, tax preparation, or filing
              services.
            </p>
            <p>
              Documents are not sold or shared for marketing purposes and are
              not used to train public or third-party AI models.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Third Parties
            </h2>
            <p>
              Data may be processed by trusted infrastructure, analytics, AI,
              and payment providers solely as necessary to operate the Service.
            </p>
            <p>
              We may also share information with legal authorities if required
              by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Retention</h2>
            <p>
              Information is retained only as long as necessary to operate the
              service or comply with legal obligations.
            </p>
            <p>
              Documents are typically deleted shortly after processing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Security</h2>
            <p>
              We use reasonable administrative, technical, and organizational
              measures to protect information. No system is completely secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Rights
            </h2>
            <p>
              You may request access to or deletion of your data by contacting
              us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              Additional Information
            </h2>
            <p>
              The platform is not intended for individuals under the age of 18.
            </p>
          </section>

          <p>
            If you have questions about this Privacy Policy or our data
            practices, you may contact us at{' '}
            <a
              href="mailto:support@nottaxadvice.ai"
              className="font-medium text-gray-900 underline"
            >
              support@nottaxadvice.ai
            </a>
            .
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
