import AcceptTerms from '@/components/AcceptTerms'

export const metadata = {
  title: 'Terms of Use',
}

export default function SupportLevelAgreement() {
  return (
    <div className="flex justify-center bg-white px-6 py-12 lg:px-8 lg:py-24">
      <div className="mt-20 w-[90%] max-w-3xl text-base text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Support Level Agreement for Publisher Analytics
        </h1>
        <p className="text-base font-semibold text-[#06b6d4]">
          Last updated on December 5, 2023
        </p>
        <div className="mt-10">
          <p>
            NPAW will provide support to the Customer for the NPAW service 24
            hours/day and 7 days/week. Customer Portal:<br></br>
            <br></br>
            https://support.npaw.com/support/signup<br></br>
            <br></br> Email support: sending email to support@npaw.com <br></br>
            <br></br>
            Phone support: EU +34 931 222 111 <br></br>
            <br></br>The support arrangement has clearly defined time scales
            within which NPAW agrees to respond to a call logged by Customer.
            This does not guarantee a fix within this time. In relation to any
            Support Request, NPAW will provide support according the issue’s
            severity level, specified within the table below:
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="gap-x-3">
              <strong>
                <p className="mb-2 mt-2 font-semibold text-[#06b6d4]">
                  Tier 1 - SILVER Support{' '}
                </p>
              </strong>
              <div className='overflow-x-auto-mobile'>
              <table className="w-[700px] divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Severity Level</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description of Severity Errors</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Response Time</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Temporary Solution</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Permanent Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 1 Critical Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">The Services are completely unavailable or Customer cannot use the services due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">12-4 business hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">5-10 business days/hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Next software update or 5 business days</td>
                  </tr>

                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 2 Important Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">A significant functional component of the Services is unavailable or Customer’s use of such component is impaired due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">24-8 business hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">10-48 business days/hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Next software update or 10 business days</td>
                  </tr>

                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 3 Other Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">A non-significant functional component of the Services is unavailable or Customer’s use of such component is impaired due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">48-10 business hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">20-10 business days</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Next software update</td>
                  </tr>
              </tbody>
              <div className='w-[767px] h-3 bg-[#06b6d4] absolute left-0 bottom-0 z-10'></div>
              <div className='w-[100px] block sm:hidden rounded-full h-1 bg-gray-100 absolute left-2 bottom-1 z-20'></div>
              </table>
              </div>


              <strong>
                <p className="mb-2 mt-10 font-semibold text-[#06b6d4]">
                  Tier 2 - GOLD Support{' '}
                </p>
              </strong>
              <div className='overflow-x-auto-mobile'>
              <table className="w-[700px] divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Severity Level</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description of Severity Errors</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Response Time</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Temporary Solution</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Permanent Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 1 Critical Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">The Services are completely unavailable or Customer cannot use the services due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">8-1 business hour [1-24 on Off Hours]</td>
                    <td className="px-3 py-4 text-sm text-gray-500">3-6 Business days/hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">10-3 business days</td>
                  </tr>

                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 2 Important Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">A significant functional component of the Services is unavailable or Customer’s use of such component is impaired due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">12-6 business hours [Next business day/8 hours on Off Hours]</td>
                    <td className="px-3 py-4 text-sm text-gray-500">10 business days</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Next software update or 10 business days</td>
                  </tr>

                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 3 Other Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">A non-significant functional component of the Services is unavailable or Customer’s use of such component is impaired due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">24-8 business hours [Next business day on Off Hours]</td>
                    <td className="px-3 py-4 text-sm text-gray-500">15-10 business days</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Next software update</td>
                  </tr>
              </tbody>
              <div className='w-[767px] h-3 bg-[#06b6d4] absolute left-0 bottom-0 z-10'></div>
              <div className='w-[100px] block sm:hidden rounded-full h-1 bg-gray-100 absolute left-2 bottom-1 z-20'></div>
              </table>
              </div>

              <strong>
                <p className="mb-2 mt-10 font-semibold text-[#06b6d4]">
                  Tier 3 - PLATINUM Support{' '}
                </p>
              </strong>
              <div className='overflow-x-auto-mobile'>
              <table className="w-[700px] divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Severity Level</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description of Severity Errors</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Response Time</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Temporary Solution</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Permanent Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 1 Critical Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">The Services are Completely unavailable or Customer cannot use the services due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">3-15 hours/minutes</td>
                    <td className="px-3 py-4 text-sm text-gray-500">2-6 days/hours</td>
                    <td className="px-3 py-4 text-sm text-gray-500">5-3 business days</td>
                  </tr>

                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 2 Important Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">A significant functional component of the Services is unavailable or Customer’s use of such component is impaired due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">6-30 hours/minutes</td>
                    <td className="px-3 py-4 text-sm text-gray-500">4 days/Next business day</td>
                    <td className="px-3 py-4 text-sm text-gray-500">10 business days</td>
                  </tr>

                  <tr>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Severity 3 Other Issues</td>
                    <td className="px-3 py-4 text-sm text-gray-500">A non-significant functional component of the Services is unavailable or Customers use of such component is impaired due to a Services failure.</td>
                    <td className="px-3 py-4 text-sm text-gray-500">8-30 hours/minutes</td>
                    <td className="px-3 py-4 text-sm text-gray-500">10 days</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Next software update</td>
                  </tr>
              </tbody>
              <div className='w-[767px] h-3 bg-[#06b6d4] absolute left-0 bottom-0 z-10'></div>
              <div className='w-[100px] block sm:hidden rounded-full h-1 bg-gray-100 absolute left-2 bottom-1 z-20'></div>
              </table>
              </div>
            </li>
          </ul>
          <div className="mt-10"></div>
          <p>
            Response times are maximal periods within which NPAW will respond to
            an open issue. <br></br>
            <br></br>Temporary Solution and Permanent Solution times are subject
            to the issue being solvable by NPAW. Issues that are the result of
            force majeure and issues resulting from third-party system failures
            are explicitly excluded from the SLA commitments.
          </p>
          <p className="mt-5">
            <strong className="mt-5 font-semibold text-gray-900">
              Service Level Agreement
            </strong>
          </p>
          <p className="mt-5">
            <strong className="mt-5 font-semibold text-gray-900">
              Service Level Uptime & Availability Matrix
            </strong>
          </p>
          <p>
            The matrix below indicates the guaranteed uptime & availability for
            the different contract types.
          </p>
          <p>
            NPAW will provide certain levels of monthly Availability (as defined
            below) for the Data Reception and User Interface & API NPAW Service
            within NPAW’s Immediate Control (as defined below).
          </p>
          <p>
            For purposes hereof, ’Availability’ or ’Available’ means the Service
            is available for use with full access through Customer’s devices (as
            detailed herein). If any abusive or improper Data collecting or
            ingesting through API NPAW Service is detected, which may affect
            stability of the system, NPAW has the right to temporarily suspend
            access to NPAW Suite to guarantee the integrity of the Data, and
            such suspension will not be counted in uptime & availability SLA.
          </p>
  <div className="mt-10">
    <h2 className="text-lg font-semibold leading-6 text-[#06b6d4]">
      Service Level Uptime & Availability Matrix
    </h2>
    <div className="mt-4">
      <div className='overflow-x-auto-mobile max-w-[600px]'>
        <table className="w-[500px] divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Support Type</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Monthly Availability Data Reception</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Monthly Availability User Interface & API</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">PLATINUM Support</td>
              <td className="px-3 py-4 text-sm text-gray-500">99.99%</td>
              <td className="px-3 py-4 text-sm text-gray-500">99.97%</td>
            </tr>
            <tr>
              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">GOLD Support</td>
              <td className="px-3 py-4 text-sm text-gray-500">99.99%</td>
              <td className="px-3 py-4 text-sm text-gray-500">99.97%</td>
            </tr>
          </tbody>
          <div className='w-[600px] h-3 bg-[#06b6d4] absolute left-0 bottom-0 z-10'></div>
          <div className='w-[100px] block sm:hidden rounded-full h-1 bg-gray-100 absolute left-2 bottom-1 z-20'></div>
        </table>
      </div>
    </div>
  </div>
          <p className="mt-5">
            <strong className="mt-5 font-semibold text-gray-900">
              Communication & Notifications
            </strong>
          </p>
          <p className="mt-2">
            <strong>Notifications</strong> - If any task on the Service requires
            execution, maintenance, updating or any other task, NPAW will
            communicate this via email to the specified people five (5) days
            prior to the Execution Date.
          </p>
          <p className="mt-2">
            <strong>New Releases</strong> - On every new release of the Service,
            NPAW will send via email the release notes document five (5) days
            prior to the new version being launched. The release notes document
            will list the changes included in the new version and will also
            describe the new version. The new release deployment date will be
            notified as a standard notification five (5) days prior to the date.
          </p>
        </div>
        {/* <AcceptTerms /> */}
      </div>
    </div>
  )
}