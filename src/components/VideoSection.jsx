import ReactPlayerIframe from './ReactPlayerIframe'

const features = [
  {
    name: 'Identify and address underperforming articles.',
    description:
      'Detect underperforming articles and refine your content strategy to boost reader engagement',
  },
  {
    name: 'Automate image, subtitle, and headline testing.',
    description:
      'Easily set up A/B tests and let the tool automatically select the most compelling content elements.',
  },
  {
    name: 'Access powerful insights regardless of data expertise.',
    description:
      'Real-time, on-page markers provide instant feedback on article performance, requiring no data analysis skills.',
  },
]

export default function VideoSection() {
  return (
    <div id="videoSection" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Elevate your editorial strategy with real-time content analytics
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Increase reader engagement with actionable content insights for
            publishers. Identify underperforming content, conduct image and
            headline testing, and make strategic editorial decisions based on
            user behavior and preferences
          </p>
          {/* <p className="mt-10 text-2xl font-semibold leading-7 text-color2">
            How it works
          </p> */}
        </div>
      </div>
      <div className="my-0 -mb-14 flex w-full justify-center sm:my-10 sm:mb-20">
        <ReactPlayerIframe url="https://vimeo.com/880465679" />
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-0 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative mx-5">
              <dt className="mr-2 inline font-semibold text-gray-900">
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
