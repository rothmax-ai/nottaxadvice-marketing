import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'

export default function ContactPage() {
  return (
    <main>
      <Container>
        <Navbar />

        <Subheading className="mt-16">Contact</Subheading>

        <Heading as="h1" className="mt-2">
          Get in touch
        </Heading>

        <div className="mt-12 max-w-xl space-y-6 text-sm text-gray-600">
          <p>
            We welcome feedback, bug reports, and general questions about how
            NotTaxAdvice works.
          </p>

          <p>
            NotTaxAdvice is an educational platform. We can’t provide tax advice
            or guidance on personal financial decisions.
          </p>

        
        </div>
      </Container>

      <Footer />
    </main>
  )
}