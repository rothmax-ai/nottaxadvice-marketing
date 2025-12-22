import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'NotTaxAdvice exposes how opaque systems change outcomes — and explains exactly why.',
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img
        alt=""
        src={img}
        className="size-12 rounded-full object-cover"
      />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

/* -------------------------------------------------------------------------- */
/*                                INVESTORS                                   */
/* -------------------------------------------------------------------------- */

function Investors() {
  return (
    <Container className="mt-12">
      <Heading as="h3" className="mt-2">
        Built by experience. Powered by proven infrastructure.
      </Heading>

      <Lead className="mt-6 max-w-3xl">
        NotTaxAdvice is built by AI Lantern Labs and runs on enterprise-grade AI
        infrastructure designed for reliability, security, and inspection.
      </Lead>

      <Subheading as="h3" className="mt-24">
        Platform
      </Subheading>

      <hr className="mt-6 border-t border-gray-200" />

      <ul className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <li>
          <img
            alt="AI Lantern Labs"
            src="/investors/ailanternlabs.png"
            className="h-14"
          />

          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            AI Lantern Labs builds modern AI-augmented software using a structured
            multi-agent development framework rather than a traditional
            engineering organization. The internal system supports architecture,
            engineering, product, and review functions while maintaining quality
            and execution speed.
          </p>
        </li>

        <li>
          <img alt="OpenAI" src="/investors/openai.png" className="h-14" />

          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            OpenAI provides the underlying AI infrastructure used by
            NotTaxAdvice, supporting structured reasoning and explanation across
            complex rule-based systems. The platform operates with enterprise-grade
            security controls, including SOC 2 Type II–aligned practices,
            encrypted data handling, and strict limitations on model training
            and output scope.
          </p>

          <a
            href="https://openai.com/security-and-privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm underline underline-offset-2 text-gray-950 hover:text-gray-700"
          >
            Learn more about OpenAI security and privacy.
          </a>

          <div className="mt-6 flex items-center gap-8">
            <img src="/soc.png" alt="SOC compliance" className="h-10 w-auto" />
            <img src="/ccpa.svg" alt="CCPA compliance" className="h-10 w-auto" />
            <img src="/iso.png" alt="ISO standards" className="h-10 w-auto" />
            <img
              src="/csastar.svg"
              alt="Cloud Security Alliance"
              className="h-10 w-auto"
            />
          </div>
        </li>
      </ul>

      <Subheading as="h3" className="mt-24">
        Governance & Oversight
      </Subheading>

      <hr className="mt-6 border-t border-gray-200" />

      <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Person
          name="Founder"
          description="Final accountability for system and outputs"
          img="/team/system.png"
        />
        <Person
          name="Archivist"
          description="Maintains system memory over time"
          img="/team/archivist.png"
        />
        <Person
          name="Contrarian"
          description="Challenges assumptions"
          img="/team/contrarian.png"
        />
        <Person
          name="Chief Technology Officer"
          description="Oversees technical integrity"
          img="/team/cto.png"
        />
        <Person
          name="Legal"
          description="Monitors regulatory boundaries"
          img="/team/legal.png"
        />
        <Person
          name="Chief Tax Strategist"
          description="Verifies tax logic"
          img="/team/cts.png"
        />
      </ul>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 CAREERS                                    */
/* -------------------------------------------------------------------------- */

function Careers() {
  return (
    <section id="careers" className="scroll-mt-24">
      <Container className="my-32">
        <Subheading>Careers</Subheading>

        <Heading as="h3" className="mt-2">
          Work on problems that matter.
        </Heading>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_31rem]">
          <div className="max-w-3xl">
            <Lead>
              Roles are rare, scoped, and focused on thinking systems.
            </Lead>

            <div className="mt-12 max-w-xl">
              <h4 className="text-sm font-medium tracking-tight text-gray-900">
                Open roles
              </h4>

              <p className="mt-4 text-sm/6 text-gray-600">
                There are no open roles at this time.
              </p>

              <p className="mt-4 text-sm/6 text-gray-600">
                This system is designed to do most of the work itself. When
                additional roles are created they are narrow, clearly scoped,
                and focused on improving system quality—not increasing
                throughput.
              </p>

              <p className="mt-4 text-sm/6 text-gray-600">
                Future roles, if any, will be posted here.
              </p>
            </div>
          </div>

          <div className="relative max-lg:order-first">
            <div className="aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:ml-auto">
              <img
                src="/company/6.png"
                alt="Quiet focus and clarity"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Investors />
      <Careers />
      <Footer />
    </main>
  )
}