import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        // more space between sections
        'grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12',
      )}
    >
      <div className="flex items-start gap-2 text-sm text-gray-950/80">
        <span className="text-3xl text-gray-400 leading-none">🔒</span>
        <div>
          <span className="block text-base sm:text-lg font-medium text-gray-950">
            Privacy-first
          </span>
          Your data is processed securely. No selling. No training on your files.
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-950/80">
        <span className="text-3xl text-gray-400 leading-none">📄</span>
        <div>
          <span className="block text-base sm:text-lg font-medium text-gray-950">
            1040-based accuracy
          </span>
          Calculations are grounded in IRS forms and published rules.
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-950/80">
        <span className="text-3xl text-gray-400 leading-none">💬</span>
        <div>
          <span className="block text-base sm:text-lg font-medium text-gray-950">
            Plain-English explanations
          </span>
          We explain what’s happening and why not just the result.
        </div>
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-950/80">
        <span className="text-3xl text-gray-400 leading-none">📘</span>
        <div>
          <span className="block text-base sm:text-lg font-medium text-gray-950">
            Educational, not advice
          </span>
          This is an educational tool. Not tax advice.
        </div>
      </div>
    </div>
  )
}