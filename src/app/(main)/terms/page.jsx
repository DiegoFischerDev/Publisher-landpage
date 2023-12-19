import AcceptTerms from '@/components/AcceptTerms'

export const metadata = {
  title: 'Terms of Use',
}

export default function Terms() {
  return (
    <div className="flex justify-center bg-white px-6 py-12 lg:px-8 lg:py-24">
      <div className="w-[90%] max-w-3xl text-base text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Use for Publisher Analytics
        </h1>
        <p className="text-base font-semibold text-color2">
          Last updated on December 5, 2023
        </p>
        <div className="mt-10">
          <p>
            Welcome to Publisher Analytics, a product of NPAW (Nice People At
            Work). By using our services, you are agreeing to these terms.
            Please read them carefully.
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  1. Acceptance of Terms
                </strong>
              </p>
              <p>
                By accessing and using Publisher Analytics, you accept and agree
                to be bound by the terms and provision of this agreement. In
                addition, when using Publisher Analytics, you shall be subject
                to any posted guidelines or rules applicable to such services.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  2. Description of Service
                </strong>
              </p>
              <p>
                Publisher Analytics is a tool that leverages A/B testing to help
                you optimize your site’s engagement. It provides insights into
                what keeps your audience intrigued, interested, and invested,
                making the process of increasing your site’s engagement rate
                easier.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  3. Intellectual Property
                </strong>
              </p>
              <p>
                All content included on this site, such as text, graphics,
                logos, button icons, images, audio clips, digital downloads,
                data compilations, and software, is the property of NPAW or its
                content suppliers and protected by international copyright laws.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  4. User Conduct
                </strong>
              </p>
              <p>
                You agree to use Publisher Analytics only for lawful purposes.
                You are solely responsible for the knowledge of and adherence to
                any and all laws, rules, and regulations pertaining to your use
                of the Services.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  5. Modifications to Terms of Service
                </strong>
              </p>
              <p>
                NPAW reserves the right to change or modify these Terms at any
                time and in our sole discretion. If we make changes to these
                Terms, we will provide notice of such changes, such as by
                sending an email notification, providing notice through the
                Services, or updating the ’Last Updated’ date at the beginning
                of these Terms.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  6. Disclaimer of Warranties
                </strong>
              </p>
              <p>
                Publisher Analytics is provided ’as is’. NPAW and its suppliers
                and licensors hereby disclaim all warranties of any kind,
                express or implied, including, without limitation, the
                warranties of merchantability, fitness for a particular purpose
                and non-infringement.
              </p>
            </li>
          </ul>
          <p className="mt-16">
            By using Publisher Analytics, you acknowledge that you have read
            these terms of use, understand them, and agree to be bound by them.
            If you do not agree to these terms, please do not use Publisher
            Analytics.
          </p>
        </div>
        <AcceptTerms />
      </div>
    </div>
  )
}
