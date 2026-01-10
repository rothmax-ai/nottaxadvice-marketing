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

        <div className="mt-12 max-w-3xl space-y-6 text-sm text-gray-600">
          <p>
            NotTaxAdvice.ai (“NotTaxAdvice”) is operated by AI Lantern Labs LLC.
            We respect your privacy and collect only the information necessary
            to operate, maintain, and improve the platform.
          </p>

          <p>
            We do not sell personal data. Information provided to the platform
            is used solely for educational, operational, security, and fraud
            prevention purposes.
          </p>

          <p>
            Information we may collect includes account information (such as an
            email address), usage data (such as features used and credits
            consumed), and technical data required to operate the service
            securely. Payment information is processed by third-party payment
            providers, and we do not store full payment card details.
          </p>

          <p>
            Uploaded documents, if any, are processed strictly for educational
            explanation and simulation purposes. Uploaded content is not used
            to provide tax advice, tax preparation, or filing services, is not
            sold or shared for marketing purposes, and is not used to train
            public or third-party AI models. Documents may be handled by
            required infrastructure providers solely to operate the service.
          </p>

          <p>
            We may share limited information with trusted service providers
            (such as hosting, analytics, and payment processors) only as
            necessary to operate the platform, or with legal authorities if
            required by law.
          </p>

          <p>
            We use reasonable administrative, technical, and organizational
            measures to protect information. No system is completely secure,
            and we cannot guarantee absolute security.
          </p>

          <p>
            Information is retained only as long as necessary to operate the
            service or comply with legal obligations. The platform is not
            intended for individuals under the age of 18.
          </p>

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