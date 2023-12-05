import SuiteScreenshot from '../images/how-it-works-photos/suite-screenshot.png'
import Image from 'next/image'

export default function SuiteShowOffComponent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Powerful Analytics at Your Fingertips
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dive Deep Into Your Data with Our Fully-Equipped Backoffice
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Gain unparalleled insight into your content’s performance by
                drilling down into individual user actions, page views, and
                conversion metrics.
              </p>
              <p className="mt-8">
                Benefit from comprehensive, ready-to-use dashboards that provide
                an at-a-glance summary of your data, tailored to solve specific
                business questions.
              </p>
            </div>
            <div>
              <p>
                View your audience segments through various lenses, such as
                their browsing device, geographic location, or the source that
                brought them to you.
              </p>
              <p className="mt-8">
                Craft your own narrative with customizable dashboards that
                reflect your goals. Choose from a diverse array of widgets like
                pie charts for demographics, line graphs for trends, and more
                analytic tools.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src={SuiteScreenshot}
            alt="Backoffice Dashboard Screenshot"
            layout="responsive"
            width={700} // Adjust as needed
            height={475} // Adjust as needed to maintain aspect ratio
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
