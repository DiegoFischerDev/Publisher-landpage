'use client'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/solid'
import extensionImage from '../images/extension-1.png'
import Image from 'next/image'

const features = [
  {
    name: 'Identify and address underperforming articles',
    description:
      'Pinpoint underperforming articles and refine your content strategy to boost reader engagement.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Automate image, subtitle, and headline testing.',
    description:
      'Easily set up A/B tests for the different content elements and let the tool automatically select the most compelling ones.',
    icon: LockClosedIcon,
  },
  {
    name: 'Powerful yet friendly user interface.',
    description:
      'Real-time ranking markers provide instant feedback on article performance, requiring no data analysis skills to operate.',
    icon: ServerIcon,
  },
]

const ExtensionShowoffComponent = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                How it works.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Optimize your editorial content with real-time A/B testing to
                increase user engagement rate.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Increase reader engagement with real-time content analytics for
                publishers. Identify underperforming content, conduct image and
                headline testing, and make strategic editorial decisions based
                on user behavior and preferences.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/*   <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-black px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={extensionImage}
                  alt="Product screenshot"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtensionShowoffComponent
