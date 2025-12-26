import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    template: '%s - NotTaxAdvice.ai',
    default: 'NotTaxAdvice.ai — Understand Your Taxes Clearly',
  },

  description:
    'Plain-English explanations of your taxes. Upload your return, see how the numbers work, and understand how today’s decisions affect future taxes — with no advice, no black boxes.',

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'NotTaxAdvice.ai',
    description:
      'Plain-English explanations of your taxes. Upload your return, see how the numbers work, and understand how today’s decisions affect future taxes — with no advice, no black boxes.',
    url: 'https://nottaxadvice.ai',
    siteName: 'NotTaxAdvice.ai',
    images: [
      {
        url: 'https://nottaxadvice.ai/og.png',
        width: 1200,
        height: 630,
        alt: 'NotTaxAdvice.ai — Plain-English tax explanations',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NotTaxAdvice.ai',
    description:
      'Plain-English explanations of your taxes. Upload your return, see how the numbers work, and understand how today’s decisions affect future taxes.',
    images: ['https://nottaxadvice.ai/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">
        {children}
        <Analytics />
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}