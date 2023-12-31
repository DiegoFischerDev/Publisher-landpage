import Link from 'next/link'
import { Container } from '@/components/Container'
import { FooterNavLinks } from '@/components/FooterNavLinks'
import PublisherAnalyticsLogo from '../../public/assets/publisher-analytics-logo/PubisherAnalyticslogo.png'
import Image from 'next/image'
function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              {/* <p>Publisher Analytics</p> */}
              <div className="ml-10">
                <Link href="/">
                  <div className="flex cursor-pointer items-center text-xl font-bold">
                    <Image
                      src={PublisherAnalyticsLogo}
                      alt="Publisher Analytics Logo"
                      style={{ width: '200px', marginLeft: '-8px' }}
                      unoptimized
                    />
                    {/* <p>Publisher Analytics</p> */}
                  </div>
                </Link>

                {/* <p className="text-base font-semibold">Publisher Analytics</p> */}
                <p className="mt-1 max-w-sm text-sm">
                  On-page, real-time content analytics and A/B testing designed
                  to boost your site’s engagement rate. A proud member of the{' '}
                  <Link
                    style={{ textDecoration: 'underline' }}
                    href="https://npaw.com/"
                  >
                    <span> NPAW</span>
                  </Link>{' '}
                  analytics family.
                </p>
              </div>
            </div>
            <nav className="mt-4 flex flex-col justify-between gap-2 px-10 lg:mt-10 lg:gap-8">
              <FooterNavLinks />
            </nav>
          </div>
          {/* <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-color2" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold hover:text-color2">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the extension now
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan the QR code to download the extension from the Chrome
                Store.
              </p>
            </div>
          </div> */}
        </div>
        <div className="mt-2 flex w-full flex-col items-center border-t border-gray-200 pb-12 pt-8 md:pt-6">
          {/* <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form> */}
          <p className="mt-0 text-sm text-gray-500">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
