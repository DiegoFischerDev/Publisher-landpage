'use client'
import { Disclosure } from '@headlessui/react'

export const metadata = {
  title: 'hello',
  description: '...',
}

const faqs = [
  {
    question: 'How can our tool help publishers optimize their content?',
    answer:
      'Our tool is designed to help publishers of all sizes optimize their content through easy A/B testing of images, titles, and descriptions. It automatically selects the winning variant, saving you time and effort.',
  },
  {
    question: 'What kind of analytics data will be available in real-time?',
    answer:
      'The HUD (heads-up display) will provide you with real-time analytics data on your page. This data includes the results of your A/B tests, allowing you to make data-driven decisions for optimizing your content.',
  },
  ,
  {
    question: 'What features does the backoffice offer?',
    answer:
      'The backoffice provides a range of features to support your content optimization efforts. You will have access to pre-built dashboards that display analytics data. Additionally, for users on tier 2 or 3, the backoffice allows you to create custom dashboards to visualize your data in a way that suits your needs.',
  },
  {
    question: 'How do I optimize my content using the tool?',
    answer:
      'Our tool simplifies the process of content optimization through easy A/B testing. You can test different images, titles, and descriptions, and the tool will automatically select the winning combination for you.',
  },

  {
    question: 'Can I track everything that happens on my publisher site?',
    answer:
      'Yes, with our tool, you can drill down into the analytics data to track everything that happens on your publisher site. This includes monitoring the performance of different content variants tested through A/B testing.',
  },
  {
    question: 'Is there a limit to the number of dashboards I can create?',
    answer:
      'Users on tier 2 or 3 have the flexibility to build their own dashboards in addition to accessing the pre-built ones. This allows you to create custom visualizations and monitor specific metrics or KPIs that are important to your content optimization strategy.',
  },
]

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  )
}

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  )
}

export default function FaqsSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? <MinusIcon /> : <PlusIcon />}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  )
}
