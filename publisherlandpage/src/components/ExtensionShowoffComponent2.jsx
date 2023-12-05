import extensionImage from '../images/extension-1.png'
import Image from 'next/image'
  
  const features = [
    {
      name: 'Identify and address underperforming articles.',
      description: 'underperforming articles and refine your content strategy to boost reader engagement.',
    },
    {
      name: 'Automate image, subtitle, and headline testing.',
      description: 'Easily set up A/B tests for the different content elements and let the tool automatically select the most compelling ones.',
    },
    {
      name: 'Powerful yet friendly user interface.',
      description: 'Real-time ranking markers provide instant feedback on article performance, requiring no data analysis skills to operate.',
    }
  ]
  
  export default function ExtensionShowoffComponent2() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-[900px] sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">How it works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Optimize your editorial content with real-time A/B testing to increase user engagement rate.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Increase reader engagement with real-time content analytics for publishers. Identify underperforming content, conduct image and headline testing, and make strategic editorial decisions based on user behavior and preferences.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Image
              src={extensionImage}
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
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