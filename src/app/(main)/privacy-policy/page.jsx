import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center bg-white px-6 py-40 lg:px-8 lg:py-52">
      <div className="w-[90%] max-w-4xl text-base text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-base font-semibold text-color2">
          NicePeopleAtWork S.L. is committed to protecting your privacy.
        </p>
        <div className="mt-10">
          <p>
            We have prepared this Privacy Policy to describe our practices
            regarding data and personal data (as defined below) that we collect
            from users of our website, the NicePeopleAtWork products (the
            “Products”), or related services. This Privacy Policy covers our
            collection, use and disclosure of the information we collect through
            our website and further communications with us. If you are a client
            or partner, please refer to our Data Processing Addendum attached to
            your Service or Partner Agreement. Before providing us any data on
            the website, please ensure that you have read and understood our
            collection, storage, use and disclosure of your personal information
            as described in this privacy policy.
          </p>
          <p className="mt-5">
            Data Controller:{' '}
            <span className="font-bold">NicePeopleAtWork S.L.</span>
          </p>
          <p>
            Address:{' '}
            <span className="font-bold">
              C. Roc Boronat 23, 08005, Barcelona, Spain
            </span>
          </p>
          <p>
            Contact person for privacy matters:{' '}
            <span className="font-bold">
              dataprotection@nicepeopleatwork.com
            </span>
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  1. User consent
                </strong>
              </p>
              <p>
                By submitting or making available Personal Data through our
                website, communications with us or through any related services,
                you agree to the terms of this Privacy Policy and expressly
                consent to the processing of your Personal Data in accordance
                with this Privacy Policy. Your Personal Data may be processed in
                the country in which it was collected and in other countries,
                including the United States, where laws regarding processing of
                Personal Data may be less stringent than the laws in other
                countries. Please see more information below.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  2. Information Collection
                </strong>
              </p>
              <p>
                We collect the following data through the website, when you
                contact us: First name, Last name, Company name, E-mail, Country
                (all obligatory), Phone (voluntary). On subscribing to our
                newsletter, we only collect your email address. This data is
                collected in particular when subscribing to our service or
                publications; request marketing materials to be sent to you; or
                giving us your feedback. We also collect the date of your
                requests, questions and interactions with us. We collect the
                following data automatically through your use of the Site: IP
                addresses, Referral Site, Device, Geolocation, Gender, First
                name, Last name and Company name for analytical purposes only,
                that will remain within NPAW’s organization.
              </p>

              <p className="mt-5">
                [<strong>Cookies and other technologies</strong>: The website
                may use cookies, a type of technology that installs a small
                amount of information on a website user’s computer or other
                device to permit a website to, for example, recognize future
                visits using that computer or device. The website may use other
                similar technologies (including, without limitation, tracking
                pixels, as described further below, and other anonymous
                identifiers) to gather personal data, such as IP addresses and
                location data, to customize your visit, to enable us to enhance
                our, or for other purposes. Please see our Cookie Policy for
                further details.]
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  3. Purposes
                </strong>
              </p>
              <p>
                Information collected through the website is used for commercial
                and administrative purposes relating to NicePeopleAtWork, in
                particular to contact you to inform you about our services and
                make commercial offers, to respond to your direct inquiries,
                provide you with a demo, include products and services in your
                Service Order, schedule meetings, and to send you marketing
                materials, and the dissemination materials, case studies,
                webinars and white papers.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  4. Lawful basis for processing
                </strong>
              </p>
              <p>
                We process the data on the basis of your informed consent, as
                well as in the legitimate interests of NicePeopleAtWork (the
                interest of our business in conducting and managing our business
                to enable us to interact with you and give you the best
                service/product). We make sure we consider and balance any
                potential impact on you (both positive and negative) and your
                rights before we process your personal data for our legitimate
                interests. We do not use your personal data for activities where
                our interests are overridden by the impact on you (unless we
                have your consent or are otherwise required or permitted to by
                law). You can obtain further information about how we assess our
                legitimate interests against any potential impact on you in
                respect of specific activities by contacting us as indicated
                below. Note that we may process your personal data for more than
                one lawful ground depending on the specific purpose for which we
                are using your data. You may withdraw your consent at any time,
                by contacting us as indicated below..
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  5. Retention period
                </strong>
              </p>
              <p>
                We will only retain your personal data for as long as necessary
                to fulfil the purposes we collected it for, including for the
                purposes of satisfying any legal, accounting, or reporting
                requirements, and in particular until you specifically ask us to
                delete this data. To determine the appropriate retention period
                for personal data, we consider the amount, nature, and
                sensitivity of the personal data, the potential risk of harm
                from unauthorized use or disclosure of your personal data, the
                purposes for which we process your personal data and whether we
                can achieve those purposes through other means, and the
                applicable legal requirements.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  6. Data Quality
                </strong>
              </p>
              <p>
                It is important that the personal data we hold about you is
                accurate and current. Please keep us informed if your personal
                data changes during your relationship with us.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  7. Marketing
                </strong>
              </p>
              <p>
                We strive to provide you with choices regarding certain personal
                data uses, particularly around marketing and advertising. We may
                use your personal data to form a view on what we think you may
                want or need, or what may be of interest to you. This is how we
                decide which products, services and offers may be relevant for
                you. You will receive marketing communications from us if you
                have requested information from us or used our services and, in
                each case, you have not opted out of receiving that marketing.
                You may opt out by emailing us as indicated below.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  8. Cookie Data
                </strong>
              </p>
              <p>
                Our cookie policy is indicated{' '}
                <Link href="/cookie-policy">
                  <span className="font-bold text-color2">here</span>
                </Link>
              </p>
            </li>
            <li className="gap-x-3">
              <p className="mb-2">
                <strong className="font-semibold text-gray-900">
                  9. Information and Sharing
                </strong>
              </p>
              <p className="mb-2">
                NicePeopleAtWork does not disclose, sell or share your personal
                data with other people or non-affiliated companies for
                promotional purposes except to provide services you have
                requested, when we have your permission. We may disclose your
                information under the following circumstances:
              </p>
              <ul className="mb-2 list-disc pl-5">
                <li className="mb-2">
                  To our service providers, for the provision of their services
                  (e.g. email or mailing services)
                </li>
                <li className="mb-2">
                  When we share anonymous, aggregated information generated by
                  our services.
                </li>
                <li className="mb-2">
                  When we respond to subpoenas, court orders, or legal process
                  or to establish or exercise our legal rights or defend against
                  legal claims.
                </li>
                <li className="mb-2">
                  When we believe in our sole discretion it is necessary to
                  share information in order to investigate, prevent or take
                  actions against illegal activities, suspected fraud, situation
                  involving potential threats to the physical safety of any
                  person, violations of term of use of NicePeopleAtWork or
                  otherwise required by law.
                </li>
                <li className="mb-2">
                  When we need to transfer information about you if
                  NicePeopleAtWork is acquired by or merged with another
                  company.
                </li>
              </ul>
            </li>
            <li className="gap-x-3">
              <p className="mb-2">
                <strong className="font-semibold text-gray-900">
                  10. Links to Other Sites
                </strong>
              </p>
              <p className="mb-2">
                This Web site contains links to other sites that are not owned
                or controlled by NicePeopleAtWork. Please be aware that we are
                not responsible for the privacy practices of other such sites.
                We encourage you to be aware when you leave our site and to read
                the privacy statements of each and every Website that collects
                personally identifiable information. This privacy statement
                applies only to information collected by this Web site.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  11. Changes to these terms and purposes
                </strong>
              </p>
              <p>
                If we make material changes in the way we use your personal
                data, we will notify you by posting an announcement on our
                Website or sending you an email with the email address you
                provided when you submitted your personal information on the
                site. We will only use your personal data for the purposes for
                which we collected it, unless we reasonably consider that we
                need to use it for another legitimate reason and that reason is
                compatible with the original purpose. If you wish to get an
                explanation as to how the processing for the new purpose is
                compatible with the original purpose, please contact us.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  12. International Transfer
                </strong>
              </p>
              <p>
                The personal information we collect may be transferred to and
                stored in countries outside of the jurisdiction you are in. Some
                of our service providers will process your personal information
                outside of the European Union; these international transfers of
                your personal information are made pursuant to appropriate
                safeguards, such as standard data protection clauses adopted by
                the European Commission. If you wish to enquire further about
                these safeguards used, please contact us using the details set
                out above. If you are located outside of Spain and choose to
                provide information about you to NicePeopleAtWork, please be
                advised that we transfer all information to Spain and process it
                here.
              </p>
            </li>
            <li className="gap-x-3">
              <p className="mb-2">
                <strong className="font-semibold text-gray-900">
                  13. Your rights
                </strong>
              </p>
              <p className="mb-2">
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data. You have the
                right to:
              </p>
              <ul className="mb-2 list-disc pl-5">
                <li className="mb-2">
                  Request access to your personal data (commonly known as a
                  “data subject access request”). This enables you to receive a
                  copy of the personal data we hold about you and to check that
                  we are lawfully processing it.
                </li>
                <li className="mb-2">
                  Request correction of the personal data that we hold about
                  you. This enables you to have any incomplete or inaccurate
                  data we hold about you corrected, though we may need to verify
                  the accuracy of the new data you provide to us.
                </li>
                <li className="mb-2">
                  Request erasure of your personal data. This enables you to ask
                  us to delete or remove personal data where there is no good
                  reason for us continuing to process it. You also have the
                  right to ask us to delete or remove your personal data where
                  you have successfully exercised your right to object to
                  processing (see below), where we may have processed your
                  information unlawfully or where we are required to erase your
                  personal data to comply with local law. Note, however, that we
                  may not always be able to comply with your request of erasure
                  for specific legal reasons which will be notified to you, if
                  applicable, at the time of your request.
                </li>
                <li className="mb-2">
                  Object to processing of your personal data where we are
                  relying on a legitimate interest (or those of a third party)
                  and there is something about your particular situation which
                  makes you want to object to processing on this ground as you
                  feel it impacts on your fundamental rights and freedoms. You
                  also have the right to object where we are processing your
                  personal data for direct marketing purposes. In some cases, we
                  may demonstrate that we have compelling legitimate grounds to
                  process your information which override your rights and
                  freedoms.
                </li>
                <li className="mb-2">
                  Request restriction of processing of your personal data. This
                  enables you to ask us to suspend the processing of your
                  personal data in the following scenarios: (a) if you want us
                  to establish the data’s accuracy; (b) where our use of the
                  data is unlawful but you do not want us to erase it; (c) where
                  you need us to hold the data even if we no longer require it
                  as you need it to establish, exercise or defend legal claims;
                  or (d) you have objected to our use of your data but we need
                  to verify whether we have overriding legitimate grounds to use
                  it.
                </li>
                <li className="mb-2">
                  Request the transfer of your personal data to you or to a
                  third party. We will provide to you, or a third party you have
                  chosen, your personal data in a structured, commonly used,
                  machine-readable format. Note that this right only applies to
                  automated information which you initially provided consent for
                  us to use or where we used the information to perform a
                  contract with you.
                </li>
                <li className="mb-2">
                  Withdraw consent at any time where we are relying on consent
                  to process your personal data. However, this will not affect
                  the lawfulness of any processing carried out before you
                  withdraw your consent. If you withdraw your consent, we may
                  not be able to provide certain products or services to you. We
                  will advise you if this is the case at the time you withdraw
                  your consent.
                </li>
              </ul>
            </li>
            <li className="gap-x-3">
              <p>
                At any time you may revoke the consent to use your information
                and/or exercise the above rights, for free, by emailing us at{' '}
                <strong>dataprotection@nicepeopleatwork.com</strong> or at{' '}
                <strong>C/ Roc Boronat 23, 08005, Barcelona</strong> or calling
                at <strong>(+34) 93 122 21 11</strong>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
