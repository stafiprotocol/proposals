import './styles/globals.css'
import './styles/hljs.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StaFi Improvement Proposals',
  description: 'StaFi Improvement Proposals (SIP) describe standards for the core protocol specifications, contract standards and client APIs.They are standardized documents voted upon by StaFi Governance. SIPs can be added, amended, replaced, and removed.',
  twitter: {
    card: 'summary_large_image',
    title: 'StaFi Improvement Proposals',
    description: 'StaFi Improvement Proposals (SIP) describe standards for the core protocol specifications, contract standards and client APIs.They are standardized documents voted upon by StaFi Governance. SIPs can be added, amended, replaced, and removed.',
    creator: '@signal',
    images: ['https://proposals.stafi.io/og.png'],
  },
  openGraph: {
    title: 'StaFi Improvement Proposals',
    description: 'StaFi Improvement Proposals (SIP) describe standards for the core protocol specifications, contract standards and client APIs.They are standardized documents voted upon by StaFi Governance. SIPs can be added, amended, replaced, and removed.',
    url: 'https://proposals.stafi.io',
    siteName: 'StaFi Improvement Proposals',
    images: [
      {
        url: 'https://proposals.stafi.io/og.png',
        width: 800,
        height: 600,
        alt: 'StaFi Improvement Proposal',
      }
    ],
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
