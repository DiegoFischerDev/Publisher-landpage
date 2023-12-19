import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does our tool help publishers optimize their content?',
      answer:
        'Our tool is designed to assist publishers of all sizes in optimizing their content through real-time performance insights, as well as easy A/B testing of images, titles, and descriptions. Our tool automatically determines the most engaging options for various content elements, saving you both time and effort. Simultaneously, on-page markers and comprehensive dashboards help you identify high-performing topics and stories. You can then use this information to improve less successful articles and develop a more effective editorial strategy.',
    },
    {
      question:
        'What kind of analytics and metrics are available in real time?',
      answer:
        'The HUD (heads-up display) provides you with real-time insights on page and article performance. These include visitors and click information, as well as the results of your A/B tests, allowing you to make data-driven content decisions.',
    },
  ],
  [
    {
      question: 'What features does the back office offer?',
      answer:
        'The back office provides a range of features to support your content optimization efforts. All plans include access to pre-built dashboards that display core site and content insights (covering dimensions such as traffic, geography and language, and devices), as well as details on the outcome of experiments. Additionally, if you are a user in the tier 2 and 3 plans, create custom dashboards. This allows you to visualize your data in a way that best aligns with your unique requirements.',
    },
  ],
  [
    {
      question: 'Is there a limit to the number of dashboards I can create?',
      answer:
        'Users on <a href="/pricing" className="text-blue-600 underline">pricing tiers 2 and 3</a> have the flexibility to build an unlimited number ofcustom dashboards in addition to accessing the pre-built ones. This allows you to create tailored data visualizations and monitor specific metrics or KPIs that are important to your site’s content optimization strategy.',
    },
  ],
]
export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
