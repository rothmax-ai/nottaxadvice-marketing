import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'


/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24 text-gray-300">
      {/* ⬆️ THIS is the black wrapper (Radiant pattern) */}

      <Container>
        <Heading as="h1" className="text-white">
          Your taxes didn’t change by accident.
          <br />
          We show you <span className="text-red-500">why</span>.
        </Heading>

        <Lead className="mt-6 max-w-3xl text-gray-300">
          We explain how taxes, benefits, and thresholds actually work — so you
          can see what changed and what it means next.
        </Lead>

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {/* WHY THIS EXISTS */}
          <div className="max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight text-white">
              Why Not Tax Advice?
            </h2>

            <p className="mt-6 text-sm/6">
              After meeting with thousands of tax advisors, one issue kept appearing again and again.
            </p>

            <p className="mt-6 text-sm/6">
              The numbers were there.
              <br />
              The software worked.
              <br />
              But the <span className="text-red-500">why</span> was missing.
            </p>

            <p className="mt-6 text-sm/6">
              Advisors were handed results without context. Their clients were even
              further removed not because the questions were bad, but because
              the systems were built for tax pros.
            </p>

            <p className="mt-6 text-sm/6">
              Most tax software is designed for compliance not explanation.
              Professionals are paid to file not to explain how rules interact
              over time.
            </p>

            <p className="mt-6 text-sm/6">
              So NotTaxAdvice does something different.
            </p>

            <p className="mt-6 text-sm/6">
              You don’t need insider knowledge.
            </p>

            <p className="mt-2 text-sm/6">
              You don’t need to be a tax professional.
            </p>

            <p className="mt-2 text-sm/6">
              You just need clarity.
            </p>
          </div>

          {/* PRODUCT IMAGES (UNCHANGED) */}
          <div className="pt-20 lg:row-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              {['1', '2', '3', '4'].map((n, i) => (
                <div
                  key={n}
                  className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${
                    i % 2 === 1 ? 'lg:-mt-32 -mt-8' : ''
                  }`}
                >
                  <img
                    src={`/company/${n}.png`}
                    alt=""
                    className="block size-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                                SYSTEM LAYER                                */
/* -------------------------------------------------------------------------- */

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
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>The system</Subheading>
      <Heading as="h3" className="mt-2">
        Designed to illuminate understanding.
      </Heading>

      <Lead className="mt-6 max-w-3xl">
        Deterministic rules. Explicit assumptions. Human review.
        Explanations that hold up under inspection.
      </Lead>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            The goal isn’t prediction or optimization it’s understanding.
            You should be able to see how an outcome was produced, step by step,
            using rules that are explicit and assumptions that are visible.
          </p>

          <p className="mt-6 text-sm/6 text-gray-600">
            Rather than presenting a single result, the system shows the sequence
            of interactions that led there. You can trace how inputs flow through
            the rules, how thresholds are applied, and how different components
            of the system influence one another over time.
          </p>

          <p className="mt-6 text-sm/6 text-gray-600">
            If a number changes, you can see exactly what moved which threshold
            was crossed, which rule was triggered, and which interactions actually
            mattered. Nothing is hidden behind a score or a black box.
          </p>

          <p className="mt-6 text-sm/6 text-gray-600">
            That visibility makes it possible to reason about outcomes rather than
            simply accept them. The purpose is not to tell you what to do, but to
            make the mechanics legible so decisions are made with context instead
            of guesswork.
          </p>

          <div className="mt-6">
            <Button href="/explanations">
              See how it works (coming soon)
            </Button>
          </div>
        </div>

        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline -outline-offset-1 outline-black/10">
            <img
              src="/company/5.png"
              alt="Working with the NotTaxAdvice explanation system"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>

      <Subheading as="h3" className="mt-24">
        Core components
      </Subheading>

      <hr className="mt-6 border-t border-gray-200" />

      <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Person name="Reasoning Engine" description="Evaluates rule interactions" img="/team/reasoning.png" />
        <Person name="Scenario Simulator" description="Explores counterfactuals safely" img="/team/simulator.png" />
        <Person name="Assumptions Layer" description="Makes simplifications explicit" img="/team/assumptions.png" />
        <Person name="Compliance Guardrails" description="Prevents advice or overreach" img="/team/guardrails.png" />
        <Person name="Explanation Generator" description="Translates logic into plain English" img="/team/explanation.png" />
        <Person name="Human Review" description="Final responsibility stays human" img="/team/founder.png" />
      </ul>
    </Container>
  )
}

export default function ProductExplanationSection() {
  return (
    <>
      <Header />
      <Team />
    </>
  )
}