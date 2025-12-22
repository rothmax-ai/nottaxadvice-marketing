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
            NotTaxAdvice respects your privacy. We collect only the information
            necessary to operate and improve the platform.
          </p>

          <p>
            We do not sell personal data. Any data provided is used solely for
            educational, operational, and security purposes.
          </p>

          <p>
            Uploaded documents, if any, are processed for explanation purposes
            and are not used to train models or shared with third parties beyond
            required infrastructure providers.
          </p>

          <p>
            You may contact us at{' '}
            <a
              href="mailto:support@nottaxadvice.ai"
              className="font-medium text-gray-900 underline"
            >
              support@nottaxadvice.ai
            </a>{' '}
            with privacy-related questions.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  )
}