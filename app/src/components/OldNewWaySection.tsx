export default function OldNewWaySection() {
  return (
    <section className="pt-8 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* OLD WAY */}
          <div className="rounded-2xl bg-gray-100 p-8 ring-1 ring-gray-200">
            <h4 className="text-3xl font-semibold text-gray-900 mb-6">
              The old way
            </h4>
            <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <video
                src="/videos/old-way.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto"
            />
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Messy PDFs.
              <br />
              Unclear rules.
              <br />
              Back-and-forth emails.
            </p>

            <p className="text-lg mt-6 text-gray-700">
              You see the <span className="font-medium text-red-600">final</span> numbers,
              <br />
              but never understand:
            </p>

            <ul className="text-lg mt-4 space-y-2 list-disc list-inside text-gray-700">
              <li>why it changed</li>
              <li>what actually mattered</li>
              <li>what to watch next year</li>
            </ul>
          </div>

          {/* NEW WAY */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <h4 className="text-3xl font-semibold text-gray-950 mb-6">
              The <span className="text-red-600">new</span> way
            </h4>
            <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <video
                src="/videos/new-way.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto"
            />
            </div>
            <p className="text-lg text-gray-950">Upload your return.</p>

            <ul className="text-lg mt-4 space-y-2 list-disc list-inside text-gray-950">
              <li>extract the numbers</li>
              <li>explain what they mean</li>
              <li>show how they affect future years</li>
            </ul>

            <p className="text-lg mt-6 font-medium text-gray-950">
              You understand:
            </p>

            <ul className="text-lg mt-3 space-y-2 list-disc list-inside text-gray-950">
              <li>what changed</li>
              <li>what matters</li>
              <li>what’s coming next</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}