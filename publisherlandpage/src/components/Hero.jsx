import { useId } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DownloadIcon } from '@heroicons/react/outline'
import HeroImageSlide from '@/components/HeroImageSlide'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

function goToPricing() {
    const targetElement = document.getElementById("pricing")
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
}

export function Hero() {

  return (
    <div className="overflow-hidden pb-12 py-48 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-5 lg:max-w-none lg:pt-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Optimize and Increase Your Site's Engagement Rate with Publisher
              Analytics
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Our Publisher Analytics tool leverages A/B testing to help you
              optimize your site's engagement. Understanding what keeps your
              audience intrigued, interested, and invested has never been
              easier.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-2 sm:gap-x-6 gap-y-4">
              <Button
                onClick={goToPricing}
                variant="outline"
                className="rounded-md bg-black px-1 sm:px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600"
              >
                Sign up now
              </Button>
              <Button
                href="/"
                variant="outline"
                className="rounded-md flex items-center px-1 sm:px-3.5"
              >
                
                <span className="mr-1.5 sm:mr-2.5">Download Chrome Extension</span>
                <DownloadIcon width={24} color='gray'/>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-7 lg:row-span-2 lg:mt-0">
            <BackgroundIllustration className="absolute left-1/2 top-4 -z-10 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <HeroImageSlide />
          </div>
        </div>
      </Container>
    </div>
  )
}
