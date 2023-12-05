import { Button } from '@/components/Button'

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
              <table class="mt-5 w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Cookie</th>
                    <th class="px-4 py-2">Duration</th>
                    <th class="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">__hssrc</td>
                    <td class="border px-4 py-2">session</td>
                    <td class="border px-4 py-2">
                      This cookie is set by Hubspot whenever it changes the
                      session cookie. The __hssrc cookie set to 1 indicates that
                      the user has restarted the browser, and if the cookie does
                      not exist, it is assumed to be a new session.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">JSESSIONID</td>
                    <td class="border px-4 py-2">session</td>
                    <td class="border px-4 py-2">
                      The JSESSIONID cookie is used by New Relic to store a
                      session identifier so that New Relic can monitor session
                      counts for an application.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">__cfruid</td>
                    <td class="border px-4 py-2">session</td>
                    <td class="border px-4 py-2">
                      Cloudflare sets this cookie to identify trusted web
                      traffic.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">cookieyes-consent</td>
                    <td class="border px-4 py-2">1 year</td>
                    <td class="border px-4 py-2">
                      CookieYes sets this cookie to remember users' consent
                      preferences so that their preferences are respected on
                      their subsequent visits to this site. It does not collect
                      or store any personal information of the site visitors.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-5 text-[#06b6d4]">Functional</p>
              <p>
                Functional cookies help perform certain functionalities like
                sharing the content of the website on social media platforms,
                collecting feedback, and other third-party features.
              </p>
              <table class="mt-5 w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Cookie</th>
                    <th class="px-4 py-2">Duration</th>
                    <th class="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">__cf_bm</td>
                    <td class="border px-4 py-2">30 minutes</td>
                    <td class="border px-4 py-2">
                      This cookie, set by Cloudflare, is used to support
                      Cloudflare Bot Management.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">UserMatchHistory</td>
                    <td class="border px-4 py-2">1 month</td>
                    <td class="border px-4 py-2">
                      LinkedIn sets this cookie for LinkedIn Ads ID syncing.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">bcookie</td>
                    <td class="border px-4 py-2">1 year</td>
                    <td class="border px-4 py-2">
                      LinkedIn sets this cookie from LinkedIn share buttons and
                      ad tags to recognize browser ID.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">lidc</td>
                    <td class="border px-4 py-2">1 day</td>
                    <td class="border px-4 py-2">
                      LinkedIn sets the lidc cookie to facilitate data center
                      selection.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">bscookie</td>
                    <td class="border px-4 py-2">1 year</td>
                    <td class="border px-4 py-2">
                      LinkedIn sets this cookie to store performed actions on
                      the website.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">__hssc</td>
                    <td class="border px-4 py-2">30 minutes</td>
                    <td class="border px-4 py-2">
                      HubSpot sets this cookie to keep track of sessions and to
                      determine if HubSpot should increment the session number
                      and timestamps in the __hstc cookie.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-5 text-[#06b6d4]">Analytics</p>
              <p>
                Analytical cookies are used to understand how visitors interact
                with the website. These cookies help provide information on
                metrics such as the number of visitors, bounce rate, traffic
                source, etc.
              </p>
              <table class="mt-5 w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Cookie</th>
                    <th class="px-4 py-2">Duration</th>
                    <th class="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">_gcl_au</td>
                    <td class="border px-4 py-2">3 months</td>
                    <td class="border px-4 py-2">
                      Provided by Google Tag Manager to experiment advertisement
                      efficiency of websites using their services.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_gid</td>
                    <td class="border px-4 py-2">1 day</td>
                    <td class="border px-4 py-2">
                      Installed by Google Analytics, _gid cookie stores
                      information on how visitors use a website, while also
                      creating an analytics report of the website's performance.
                      Some of the data that are collected include the number of
                      visitors, their source, and the pages they visit
                      anonymously.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_gat_UA-73717038-1</td>
                    <td class="border px-4 py-2">1 minute</td>
                    <td class="border px-4 py-2">
                      A variation of the _gat cookie set by Google Analytics and
                      Google Tag Manager to allow website owners to track
                      visitor behaviour and measure site performance. The
                      pattern element in the name contains the unique identity
                      number of the account or website it relates to.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_ga</td>
                    <td class="border px-4 py-2">2 years</td>
                    <td class="border px-4 py-2">
                      The _ga cookie, installed by Google Analytics, calculates
                      visitor, session and campaign data and also keeps track of
                      site usage for the site's analytics report. The cookie
                      stores information anonymously and assigns a randomly
                      generated number to recognize unique visitors.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_hjFirstSeen</td>
                    <td class="border px-4 py-2">30 minutes</td>
                    <td class="border px-4 py-2">
                      Hotjar sets this cookie to identify a new user’s first
                      session. It stores a true/false value, indicating whether
                      it was the first time Hotjar saw this user.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_hjIncludedInSessionSample</td>
                    <td class="border px-4 py-2">2 minutes</td>
                    <td class="border px-4 py-2">
                      Hotjar sets this cookie to know whether a user is included
                      in the data sampling defined by the site's daily session
                      limit.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">
                      _hjIncludedInPageviewSample
                    </td>
                    <td class="border px-4 py-2">2 minutes</td>
                    <td class="border px-4 py-2">
                      Hotjar sets this cookie to know whether a user is included
                      in the data sampling defined by the site's pageview limit.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">
                      _hjAbsoluteSessionInProgress
                    </td>
                    <td class="border px-4 py-2">30 minutes</td>
                    <td class="border px-4 py-2">
                      Hotjar sets this cookie to detect the first pageview
                      session of a user. This is a True/False flag set by the
                      cookie.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">__hstc</td>
                    <td class="border px-4 py-2">5 months 27 days</td>
                    <td class="border px-4 py-2">
                      This is the main cookie set by Hubspot, for tracking
                      visitors. It contains the domain, initial timestamp (first
                      visit), last timestamp (last visit), current timestamp
                      (this visit), and session number (increments for each
                      subsequent session).
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">hubspotutk</td>
                    <td class="border px-4 py-2">5 months 27 days</td>
                    <td class="border px-4 py-2">
                      HubSpot sets this cookie to keep track of the visitors to
                      the website. This cookie is passed to HubSpot on form
                      submission and used when deduplicating contacts.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_ga_89GV07RGC5</td>
                    <td class="border px-4 py-2">2 months 1 day 12 hours</td>
                    <td class="border px-4 py-2">
                      This cookie is installed by Google Analytics.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_ga_0TX134F8MW</td>
                    <td class="border px-4 py-2">2 years</td>
                    <td class="border px-4 py-2">
                      This cookie is installed by Google Analytics.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-5 text-[#06b6d4]">Performance</p>
              <p>
                Performance cookies are used to understand and analyze the key
                performance indexes of the website which helps in delivering a
                better user experience for the visitors.
              </p>
              <table class="mt-5 w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Cookie</th>
                    <th class="px-4 py-2">Duration</th>
                    <th class="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">_gat</td>
                    <td class="border px-4 py-2">1 minute</td>
                    <td class="border px-4 py-2">
                      This cookie is installed by Google Universal Analytics to
                      restrain request rate and thus limit the collection of
                      data on high traffic sites.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-5 text-[#06b6d4]">Advertisement</p>
              <p>
                Advertisement cookies are used to provide visitors with
                customized advertisements based on the pages you visited
                previously and to analyze the effectiveness of the ad campaigns.
              </p>
              <table class="mt-5 w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Cookie</th>
                    <th class="px-4 py-2">Duration</th>
                    <th class="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">test_cookie</td>
                    <td class="border px-4 py-2">past</td>
                    <td class="border px-4 py-2">
                      The test_cookie is set by doubleclick.net and is used to
                      determine if the user's browser supports cookies.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_nauid</td>
                    <td class="border px-4 py-2">1 year 5 months 22 days</td>
                    <td class="border px-4 py-2">
                      The domain of this cookie is owned by N.Rich. The cookie
                      is used for targeting and advertising purposes.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_fbp</td>
                    <td class="border px-4 py-2">3 months</td>
                    <td class="border px-4 py-2">
                      This cookie is set by Facebook to display advertisements
                      when either on Facebook or on a digital platform powered
                      by Facebook advertising, after visiting the website.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">IDE</td>
                    <td class="border px-4 py-2">1 year 24 days</td>
                    <td class="border px-4 py-2">
                      Google DoubleClick IDE cookies are used to store
                      information about how the user uses the website to present
                      them with relevant ads and according to the user profile.
                    </td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">fr</td>
                    <td class="border px-4 py-2">3 months</td>
                    <td class="border px-4 py-2">
                      Facebook sets this cookie to show relevant advertisements
                      to users by tracking user behaviour across the web, on
                      sites that have Facebook pixel or Facebook social plugin.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-5 text-[#06b6d4]">Others</p>
              <p>
                Other uncategorized cookies are those that are being analyzed
                and have not been classified into a category as yet.
              </p>
              <table class="mt-5 w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2">Cookie</th>
                    <th class="px-4 py-2">Duration</th>
                    <th class="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2">AnalyticsSyncHistory</td>
                    <td class="border px-4 py-2">1 month</td>
                    <td class="border px-4 py-2">No description</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_hjSessionUser_2528354</td>
                    <td class="border px-4 py-2">1 year</td>
                    <td class="border px-4 py-2">No description</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_hjSession_2528354</td>
                    <td class="border px-4 py-2">30 minutes</td>
                    <td class="border px-4 py-2">No description</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">li_gc</td>
                    <td class="border px-4 py-2">5 months 27 days</td>
                    <td class="border px-4 py-2">No description</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">ljs-lang</td>
                    <td class="border px-4 py-2">never</td>
                    <td class="border px-4 py-2">No description available.</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">ln_or</td>
                    <td class="border px-4 py-2">1 day</td>
                    <td class="border px-4 py-2">No description</td>
                  </tr>
                  <tr>
                    <td class="border px-4 py-2">_tt_session</td>
                    <td class="border px-4 py-2">2 days</td>
                    <td class="border px-4 py-2">No description available.</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  4. Manage cookie preferences
                </strong>
              </p>
              <p>
                You can change your cookie preferences any time by clicking the
                above button. This will let you revisit the cookie consent
                banner and change your preferences or withdraw your consent
                right away. In addition to this, different browsers provide
                different methods to block and delete cookies used by websites.
                You can change the settings of your browser to block/delete the
                cookies. Listed below are the links to the support documents on
                how to manage and delete cookies from the major web browsers.
              </p>
              <ul className="mb-2 list-disc pl-5 mt-5">
                <li className="mb-2">Chrome</li>
                <li className="mb-2">Safari</li>
                <li className="mb-2">Firefox</li>
                <li className="mb-2">Internet Explorer</li>
              </ul>
              <Button href="#" className="mt-5">Cookie Settings</Button>
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
