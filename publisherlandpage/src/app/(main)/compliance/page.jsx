import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/solid'

export const metadata = {
  title: 'Privacy Policy',
}

const documents = [
  {
    name: 'Information Security and Privacy Policy',
    url: 'https://npaw.com/wp-content/uploads/2023/10/PO-Information_Security_and_Privacy_Policy.pdf',
  },
  {
    name: 'Certificate ISO 27001',
    url: 'https://npaw.com/wp-content/uploads/2023/04/NPAW-ISO-27001-IS-651703-EN.pdf',
  },
  {
    name: 'Certificate ISO 27701',
    url: 'https://npaw.com/wp-content/uploads/2023/09/NPAW-ISO-27701-PM-785708-EN.pdf',
  },
]

const documentsSectionTwo = [
  {
    name: 'Statement of Applicability ISO 20252',
    url: 'https://npaw.com/wp-content/uploads/2023/10/PO_-_ISO_20252_Statement_of_Applicability.pdf',
  },
  {
    name: 'Certificate ISO 20252',
    url: 'https://npaw.com/wp-content/uploads/2022/12/NICE-PEOPLE-AT-WORK-SL_20252.pdf',
  },
]

const documentsSectionThree = [
  {
    name: 'NPAW’s Environmental Policy',
    url: 'https://drive.google.com/file/d/1Qedxd8HUBTyWrxxBM0_hAS7z1sQ6YWWf/view',
  },
]

export default function Compliance() {
  return (
    <div className="flex justify-center bg-white px-6 py-40 lg:px-8 lg:py-52">
      <div className="w-[90%] max-w-4xl text-base text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Compliance
        </h1>
        <p className="text-base font-semibold text-[#06b6d4]">
          NicePeopleAtWork S.L. is committed to compliance standards
        </p>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  1. Data Privacy and Security
                </strong>
              </p>
              <p className="mt-5">
                <strong>NPAW</strong> is{' '}
                <Link target="_blank" href="https://www.iso.org/standard/27001">
                  <span className="font-bold text-[#06b6d4]">ISO 27001</span>
                </Link>{' '}
                certified, which reflects our strong commitment to data
                security. This certification is among the most widely accepted
                global standards for compliance with appropriate security
                controls for an Information Security Management System (ISMS)
                such as NPAW’s. This certification required an extensive,
                three-stage process by independent auditors examining our data
                security procedures.
              </p>
              <p className="mt-5">
                As a big data and business intelligence company processing 80
                million daily video views for over 190 online video platforms,
                we know that earning and maintaining the trust of our clients is
                as vital to our core mission as are our technological
                innovations and solutions. That’s why we welcome this external
                validation of our security procedures. As COO and co-founder,
                Sergi Vergés reports, “The ISO 27001 is the most respected
                global benchmark in our industry. So, we’re happy to get it, but
                our security structure and plans for the future go beyond even
                that.”
              </p>
              <p className="mt-5">
                Additionally, NPAW is{' '}
                <Link
                  target="_blank"
                  href="https://www.iso.org/standard/71670.html"
                >
                  <span className="font-bold text-[#06b6d4]">ISO 27001</span>
                </Link>{' '}
                certified. This Privacy Information Management System (PIMS)
                standard acts as a privacy extension to the ISO/IEC 27001
                certification, providing broad requirements, guidelines, and
                controls that can be tailored to particular business needs and
                regulations including GDPR. These are audited by both internal
                and external parties, providing a record of standard adherence.
              </p>
              <p className="mt-5">
                Achieving ISO 27701 certification marks a milestone for NPAW,
                demonstrating that the company proactively supports the latest
                global governance, privacy, and risk management strategies
                before they become standards in the SaaS analytics industry. The
                certification sets a benchmark in personal data privacy
                protection, requiring a company to connect data privacy
                protocols with an information security management system and
                implement a functional, comprehensive internal system to handle
                privacy concerns.
              </p>
              <p className="mt-5">
                Find below{' '}
                <Link target="_blank" href={documents[0].url}>
                  <span className="font-bold text-[#06b6d4]">
                    {documents[0].name}
                  </span>
                </Link>{' '}
                and our{' '}
                <Link target="_blank" href={documents[1].url}>
                  <span className="font-bold text-[#06b6d4]">
                    {documents[1].name}
                  </span>
                </Link>{' '}
                and{' '}
                <Link target="_blank" href={documents[2].url}>
                  <span className="font-bold text-[#06b6d4]">
                    {documents[2].name}
                  </span>
                </Link>{' '}
                certificates.
              </p>

              <ul
                role="list"
                className="mx-auto mb-10 mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
              >
                {documents.map((document) => (
                  <li
                    key={document.name}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold">{document.name}</h3>

                    <div className="mt-3 flex w-full justify-between">
                      <p className="text-gray-700">English</p>

                      <div className="flex cursor-pointer items-center justify-end font-bold text-[#06b6d4]">
                        <Link
                          className="flex items-center"
                          target="_blank"
                          href={document.url}
                        >
                          <span>Read more</span>
                          <ArrowRightIcon
                            className="ml-1 h-5 w-5"
                            color="#06b6d4"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  2. Market, opinion, and social research
                </strong>
              </p>
              <p className="mt-5">
                NPAW is also certified to{' '}
                <Link
                  target="_blank"
                  href="https://www.iso.org/standard/73671.html"
                >
                  <span className="font-bold text-[#06b6d4]">ISO 20252</span>
                </Link>
                , an international quality standard outlining requirements for
                companies that conduct market, opinion, and social research,
                including insights and data analytics. You can download the
                certificate and statement of applicability below.
              </p>
              <ul
                role="list"
                className="mx-auto mb-10 mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
              >
                {documentsSectionTwo.map((document) => (
                  <li
                    key={document.name}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold">{document.name}</h3>

                    <div className="mt-3 flex w-full justify-between">
                      <p className="text-gray-700">English</p>

                      <div className="flex cursor-pointer items-center justify-end font-bold text-[#06b6d4]">
                        <Link
                          className="flex items-center"
                          target="_blank"
                          href={document.url}
                        >
                          <span>Read more</span>
                          <ArrowRightIcon
                            className="ml-1 h-5 w-5"
                            color="#06b6d4"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  3. Environmental protection
                </strong>
              </p>
              <p className="mt-5">
                NPAW also places a high value on environmental responsibility.
                As part of our sustainability efforts, we are in the process of
                achieving ISO 14001 certification. This international standard
                focuses on environmental management, assisting organizations in
                enhancing their environmental performance. The ISO 14001
                certification further illustrates our commitment to an
                environmentally responsible approach to our operations. We
                believe that, as a technology company, we have a unique
                potential and responsibility to lead the charge in environmental
                stewardship, and we are working to do exactly that.
              </p>
              <p className="mt-5">
                As proof of our dedication to the environment, we have published
                our                <Link
                  target="_blank"
                  href={documentsSectionThree[0].url}
                >
                  <span className="font-bold text-[#06b6d4]">Environmental Policy</span>
                </Link> , which details our initiatives and
                goals in creating a sustainable organization.
              </p>

              <ul
                role="list"
                className="mx-auto mb-10 mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
              >
                {documentsSectionThree.map((document) => (
                  <li
                    key={document.name}
                    className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold">{document.name}</h3>

                    <div className="mt-3 flex w-full justify-between">
                      <p className="text-gray-700">English</p>

                      <div className="flex cursor-pointer items-center justify-end font-bold text-[#06b6d4]">
                        <Link
                          className="flex items-center"
                          target="_blank"
                          href={document.url}
                        >
                          <span>Read more</span>
                          <ArrowRightIcon
                            className="ml-1 h-5 w-5"
                            color="#06b6d4"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
            <li className="gap-x-3">
              <p>
                To learn more about NPAW’s compliance policy, please contact{' '}
                <span className="font-bold text-[#06b6d4]">
                  info@nicepeopleatwork.com
                </span>
                .
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
