import { Container } from '@/components/Container'

const faqs = [
  [
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
  ],
  [
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
  ],
  [
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
