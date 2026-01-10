import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'

export default function RefundsPage() {
  return (
    <main>
      <Container>
        <Navbar />

        <Subheading className="mt-16">Legal</Subheading>

        <Heading as="h1" className="mt-2">
          Refund Policy
        </Heading>

        <div className="mt-12 max-w-3xl space-y-6 text-sm text-gray-600">
          <p>
            This Refund Policy applies to purchases made on NotTaxAdvice.ai
            (“NotTaxAdvice”), an educational software platform operated by
            AI Lantern Labs LLC.
          </p>

          <p>
            NotTaxAdvice provides access to educational software and simulation
            tools through the use of usage credits.
          </p>

          <p>
            <strong>Unused credits are refundable</strong> upon request. Credits
            that have been used are <strong>not refundable</strong>, as the
            educational service has already been delivered.
          </p>

          <p>
            Credits do not expire, have no cash value outside the Service, and
            are non-transferable. We do not offer refunds for services that have
            already been used.
          </p>

          <p>
            If a purchase includes both used and unused credits, we may issue a
            partial refund for the unused portion at our discretion.
          </p>

          <p>
            To request a refund, please contact{' '}
            <a
              href="mailto:support@nottaxadvice.ai"
              className="font-medium text-gray-900 underline"
            >
              support@nottaxadvice.ai
            </a>{' '}
            and include the email address associated with your account, the date
            of purchase, and the reason for your request.
          </p>

          <p>
            Approved refunds are typically processed within 5–10 business days
            to the original payment method. We reserve the right to deny refund
            requests that appear fraudulent, abusive, or inconsistent with
            normal use of the Service.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  )
}