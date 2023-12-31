import { Inter } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { CookieConsent } from '@/components/CookieConsent'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    default:
      "Optimize and Increase Your Site's Engagement Rate | Publisher Analytics",
  },
  description:
    "Publisher Analytics leverages A/B testing to help you optimize your site's engagement. Understanding what keeps your audience intrigued has never been easier.",
  icons: {
    icon: ['/assets/publisher-analytics-logo/favicon.ico?v=5'],
    apple: ['/assets/publisher-analytics-logo/apple-touch-icon.png?v=5'],
    shortcut: ['/assets/publisher-analytics-logo/apple-touch-icon.png'],
  },
  openGraph: {
    title:
      "Optimize and Increase Your Site's Engagement Rate | Publisher Analytics",
    description:
      "Publisher Analytics leverages A/B testing to help you optimize your site's engagement. Understanding what keeps your audience intrigued has never been easier.",
    url: 'https://publisheranalytics.ai',
    siteName: 'PublisherAnalytics.ai',
    images: [
      {
        url: '/assets/publisher-analytics-logo/publisher-analytics-logo-1800-1600.png',
        width: 800,
        height: 600,
        alt: 'Publisher Analytics logo',
      },
      {
        url: '/assets/publisher-analytics-logo/publisher-analytics-logo-800-600.png',
        width: 1800,
        height: 1600,
        alt: 'Publisher Analytics logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
        <CookieConsent />
      </body>

      <Script id="npaw-sdk" src="https://publisheranalytics.ai/publisher-sdk"></Script>
      <Script
        id="npaw-plugin"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
                var accountCode = "abdev";
                var userId = "83068";
                var sdk = new PublisherAnalyticsSDK(accountCode, userId);
                sdk.setupExperiments();
            });
          `,
        }}
      ></Script>
    </html>
  )
}
