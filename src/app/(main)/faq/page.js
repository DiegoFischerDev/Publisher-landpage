import FaqsSection from './faq-section'

export const metadata = {
  title: {
    default: 'Publisher Analytics | Frequently Asked Questions',
  },
  description:
    'On the FAQ section you will find all the answers to the most asked questions. Always just reach out to us if you have any other questions.',
  icons: {
    icon: ['/assets/favicon.ico?v=5'],
    apple: ['/assets/apple-touch-icon.png?v=5'],
    shortcut: ['/assets/apple-touch-icon.png'],
  },
  openGraph: {
    title: 'Publisher Analytics FAQ',
    description:
      'On the FAQ section you will find all the answers to the most asked questions. Always just reach out to us if you have any other questions.',
    url: 'https://publisheranalytics.ai/faq',
    siteName: 'PublisherAnalytics.ai',
    images: [
      {
        url: 'images/logos/publisher-analytics-logo/publisher-analytics-logo-1800-1600.png',
        width: 800,
        height: 600,
        alt: 'Publisher Analytics logo',
      },
      {
        url: 'images/logos/publisher-analytics-logo/publisher-analytics-logo-800-600.png',
        width: 1800,
        height: 1600,
        alt: 'Publisher Analytics logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function FAQ() {
  return (
    <div>
      <FaqsSection />
    </div>
  )
}
