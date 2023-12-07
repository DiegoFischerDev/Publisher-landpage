import { Button } from '@/components/Button'
import { MobileScrollBar } from '@/components/MobileScrollBar'

export const metadata = {
  title: 'Privacy Policy',
}

export default function CookiePolicy() {
  return (
    <div className="flex justify-center bg-white px-6 py-40 lg:px-8 lg:py-52">
      <div className="w-[90%] max-w-4xl text-base text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="text-base font-semibold text-[#06b6d4]">
          Last Updated: 17-Nov-2022
        </p>
        <div className="mt-10">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  1. What are cookies?
                </strong>
              </p>
              <p>
                This Cookie Policy explains what cookies are and how we use
                them, the types of cookies we use i.e, the information we
                collect using cookies and how that information is used, and how
                to manage the cookie settings. Cookies are small text files that
                are used to store small pieces of information. They are stored
                on your device when the website is loaded on your browser. These
                cookies help us make the website function properly, make it more
                secure, provide better user experience, and understand how the
                website performs and to analyze what works and where it needs
                improvement.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  2. How do we use cookies?
                </strong>
              </p>
              <p>
                As most of the online services, our website uses first-party and
                third-party cookies for several purposes. First-party cookies
                are mostly necessary for the website to function the right way,
                and they do not collect any of your personally identifiable
                data. The third-party cookies used on our website are mainly for
                understanding how the website performs, how you interact with
                our website, keeping our services secure, providing
                advertisements that are relevant to you, and all in all
                providing you with a better and improved user experience and
                help speed up your future interactions with our website.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  3. Types of Cookies we use
                </strong>
              </p>
              <p className="mt-5 text-[#06b6d4]">Necessary</p>
              <p>
                Necessary cookies are required to enable the basic features of
                this site, such as providing secure log-in or adjusting your
                consent preferences. These cookies do not store any personally
                identifiable data.
              </p>
              <div className="relative mt-5 max-w-[800px] overflow-x-auto bg-gray-100 p-4">
                <table className="w-[700px] table-auto divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                        Cookie
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        __hssrc
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        session
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        This cookie is set by Hubspot whenever it changes the
                        session cookie. The __hssrc cookie set to 1 indicates
                        that the user has restarted the browser, and if the
                        cookie does not exist, it is assumed to be a new
                        session.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        JSESSIONID
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        session
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        The JSESSIONID cookie is used by New Relic to store a
                        session identifier so that New Relic can monitor session
                        counts for an application.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        __cfruid
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        session
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        Cloudflare sets this cookie to identify trusted web
                        traffic.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        cookieyes-consent
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 year
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        CookieYes sets this cookie to remember user’s consent
                        preferences so that their preferences are respected on
                        their subsequent visits to this site. It does not
                        collect or store any personal information of the site
                        visitors.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <MobileScrollBar width={767} />
              </div>
              <p className="mt-5 text-[#06b6d4]">Functional</p>
              <p>
                Functional cookies help perform certain functionalities like
                sharing the content of the website on social media platforms,
                collecting feedback, and other third-party features.
              </p>
              <div className="relative mt-5 max-w-[800px] overflow-x-auto bg-gray-100 p-4">
                <table className="w-[700px] table-auto divide-y divide-gray-300">
                  <thead className="">
                    <tr>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Cookie
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-4 text-sm text-gray-900">
                        __cf_bm
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        30 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        This cookie, set by Cloudflare, is used to support
                        Cloudflare Bot Management.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 text-sm text-gray-900">
                        UserMatchHistory
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 month
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        LinkedIn sets this cookie for LinkedIn Ads ID syncing.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 text-sm text-gray-900">
                        bcookie
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 year
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        LinkedIn sets this cookie from LinkedIn share buttons
                        and ad tags to recognize browser ID.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 text-sm text-gray-900">lidc</td>
                      <td className="px-3 py-4 text-sm text-gray-500">1 day</td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        LinkedIn sets the lidc cookie to facilitate data center
                        selection.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 text-sm text-gray-900">
                        bscookie
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 year
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        LinkedIn sets this cookie to store performed actions on
                        the website.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 text-sm text-gray-900">
                        __hssc
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        30 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        HubSpot sets this cookie to keep track of sessions and
                        to determine if HubSpot should increment the session
                        number and timestamps in the __hstc cookie.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <MobileScrollBar width={767} />
              </div>
              <p className="mt-5 text-[#06b6d4]">Analytics</p>
              <p>
                Analytical cookies are used to understand how visitors interact
                with the website. These cookies help provide information on
                metrics such as the number of visitors, bounce rate, traffic
                source, etc.
              </p>
              <div className="relative mt-5 max-w-[800px] overflow-x-auto bg-gray-100 p-4">
                <table className="w-[700px] table-auto divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                        Cookie
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _hjFirstSeen
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        30 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        Hotjar sets this cookie to identify a new user’s first
                        session. It stores a true/false value, indicating
                        whether it was the first time Hotjar saw this user.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _hjIncluded In Session Sample
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        2 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        Hotjar sets this cookie to know whether a user is
                        included in the data sampling defined by the site’s
                        daily session limit.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _hjIncluded In Pageview Sample
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        2 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        Hotjar sets this cookie to know whether a user is
                        included in the data sampling defined by the site’s
                        pageview limit.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _hjAbsolute Session In Progress
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        30 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        Hotjar sets this cookie to detect the first pageview
                        session of a user. This is a True/False flag set by the
                        cookie.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        __hstc
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        5 months 27 days
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        This is the main cookie set by Hubspot, for tracking
                        visitors. It contains the domain, initial timestamp
                        (first visit), last timestamp (last visit), current
                        timestamp (this visit), and session number (increments
                        for each subsequent session).
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        hubspotutk
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        5 months 27 days
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        HubSpot sets this cookie to keep track of the visitors
                        to the website. This cookie is passed to HubSpot on form
                        submission and used when deduplicating contacts.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <MobileScrollBar width={767} />
              </div>

              <p className="mt-5 text-[#06b6d4]">Advertisement</p>
              <p>
                Advertisement cookies are used to provide visitors with
                customized advertisements based on the pages you visited
                previously and to analyze the effectiveness of the ad campaigns.
              </p>
              <div className="relative mt-5 max-w-[800px] overflow-x-auto bg-gray-100 p-4">
                <table className="w-[700px] table-auto divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                        Cookie
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        test_cookie
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">past</td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        The test_cookie is set by doubleclick.net and is used to
                        determine if the user’s browser supports cookies.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _nauid
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 year 5 months 22 days
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        The domain of this cookie is owned by N.Rich. The cookie
                        is used for targeting and advertising purposes.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _fbp
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        3 months
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        This cookie is set by Facebook to display advertisements
                        when either on Facebook or on a digital platform powered
                        by Facebook advertising, after visiting the website.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        fr
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        3 months
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        Facebook sets this cookie to show relevant
                        advertisements to users by tracking user behaviour
                        across the web, on sites that have Facebook pixel or
                        Facebook social plugin.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <MobileScrollBar width={767} />
              </div>
              <p className="mt-5 text-[#06b6d4]">Others</p>
              <p>
                Other uncategorized cookies are those that are being analyzed
                and have not been classified into a category as yet.
              </p>
              <div className="relative mt-5 max-w-[800px] overflow-x-auto bg-gray-100 p-4">
                <table className="w-[700px] table-auto divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                        Cookie
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duration
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        AnalyticsSyncHistory
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 month
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _hjSessionUser_2528354
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        1 year
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _hjSession_2528354
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        30 minutes
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        li_gc
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        5 months 27 days
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        ljs-lang
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">never</td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description available.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        ln_or
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">1 day</td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pl-4 pr-3 text-sm text-gray-900">
                        _tt_session
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        2 days
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        No description available.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <MobileScrollBar width={767} />
              </div>
            </li>

            <li className="gap-x-3">
              <p>
                If you are using any other web browser, please visit your
                browser’s official support documents. For more information or
                questions related to our policies, please contact{' '}
                <strong>info@nicepeopleatwork.com</strong>.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
