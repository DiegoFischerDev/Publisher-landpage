import PublisherAnalyticsTeamPicture from '../../../images/profile-photos/publisher-analytics-team.png'
import Image from 'next/image'
import MarceloProfilePicture from '../../../images/profile-photos/marcelo-profile-picture.png'
import RasmusProfilePicture from '../../../images/profile-photos/rasmus-profile-picture.png'
import JosepProfilePicture from '../../../images/profile-photos/josep-profile-picture.png'
import DiegoProfilePicture from '../../../images/profile-photos/diego-profile-picture.png'
import ComingSoonPic from '../../../images/profile-photos/coming-soon-pic.png'
import Link from 'next/link'

export const metadata = {
  title: {
    default: 'About Publisher Analytics | Who we are and what we do',
  },
  description:
    'With a rich experience within the publisher industry, our mission at Publisher Analytics is to empower publishers to maximize engagement and revenue.',
  icons: {
    icon: ['/assets/favicon.ico?v=5'],
    apple: ['/assets/apple-touch-icon.png?v=5'],
    shortcut: ['/assets/apple-touch-icon.png'],
  },
  openGraph: {
    title: 'About Publisher Analytics | Who we are and what we do',
    description:
      'With a rich experience within the publisher industry, our mission at Publisher Analytics is to empower publishers to maximize engagement and revenue.',
    url: 'https://publisheranalytics.ai/about',
    siteName: 'PublisherAnalytics.ai',
    images: [
      {
        url: 'images/logos/publisher-analytics-logo/publisher-analytics-logo-1800-1600.png',
        width: 800,
        height: 600,
        alt: 'Publisher Analytics logo',
      },
      {
        url: 'images/logos/publisher-analytics-logo/publisher-analytics-logo-800-600.png',
        width: 1800,
        height: 1600,
        alt: 'Publisher Analytics logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const timeline = [
  {
    name: 'Development Initiation',
    description: 'Started developing Publisher Analytics.',
    date: 'Feb 2023',
    dateTime: '2023-02',
  },
  {
    name: 'Fourth Developer Onboarded',
    description: 'Hired a new developer for Publisher Analytics.',
    date: 'Jun 2023',
    dateTime: '2023-06',
  },
  {
    name: 'Beta Release ',
    description: 'Launched first beta version of Publisher Analytics.',
    date: 'July 2023',
    dateTime: '2023-08',
  },
  {
    name: 'IBC Appearance',
    description:
      'Showcased our product at the International Broadcasting Convention, Amsterdam.',
    date: 'Sep 2023',
    dateTime: '2023-09',
  },
]

const people = [
  {
    name: 'Rasmus',
    role: 'Head of Publisher Analytics',
    imageUrl: RasmusProfilePicture,
    bio: `A tech enthusiast through and through, Rasmus thrives on designing solutions for complex problems. His extensive experience ranges from the publishing industry to e-commerce and marketing. In his spare time, he also enjoys coding.`,
    linkedinUrl: 'https://www.linkedin.com/in/rasmus-s-43a2966/',
  },
  {
    name: 'Marcelo',
    role: 'Full Stack Developer',
    imageUrl: MarceloProfilePicture,
    bio: `As our full-stack maestro, Marcelo's passion spans from mastering new frameworks to tackling APIs. His enthusiasm for both back-end and front-end programming is matched only by his love for a good beer.`,
    linkedinUrl: 'https://www.linkedin.com/in/mpbrazil/',
  },
  {
    name: 'Josep',
    role: 'Full Stack Developer',
    imageUrl: JosepProfilePicture,
    bio: `Whether it's coding in PHP, JavaScript, Java, or any other language, Josep excels across the board. When he's not impressing us with his tech skills, he's setting the rhythm with his exceptional drumming.`,
    linkedinUrl: 'https://www.linkedin.com/in/josepbernad/',
  },
  {
    name: 'Diego',
    role: 'Frontend Developer',
    imageUrl: DiegoProfilePicture,
    bio: `Diego, our go-to for all things frontend and CSS, literally sets the tone for our user interface. His input is vital in ensuring our product maintains its appealing aesthetics.`,
    linkedinUrl: 'https://www.linkedin.com/in/diegofischerdev/',
  },
  {
    name: 'Alexandre',
    role: 'Backend Developer',
    imageUrl: ComingSoonPic,
    bio: `As the back-end powerhouse of our team, Alexandre relishes setting up APIs and delving into robust backend functionalities. He's not merely a code enthusiast, but rather a fervent 'backend geek'.`,
    linkedinUrl: '#',
  },
]

export default function About() {
  return (
    <div className="bg-white">
      <div className="isolate">
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 xl:grid xl:max-w-none xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-16 xl:gap-y-6">
              <h1 className="max-w-2xl text-4xl font-medium tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
                Working on enhancing publisher performance through cutting-edge
                analytics & AI.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Our diverse team, hailing from Spain, Denmark, Portugal, and
                  Brazil, brings together expertise in coding, marketing, and
                  sales. With a rich experience within the publisher industry,
                  our mission at Publisher Analytics is to empower publishers to
                  maximize engagement and revenue. Being part of the{' '}
                  <span style={{ borderBottom: 'solid black 1px' }}>
                    <Link href="https://npaw.com/">NPAW group</Link>
                  </span>{' '}
                  of companies, we benefit from a vast and diverse background in
                  the analytics field.
                </p>
              </div>
              <Image
                src={PublisherAnalyticsTeamPicture}
                alt="PublisherAnalyticsTeamPicture"
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-0"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-[#06b6d4]"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo cloud */}
        {/* <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our customers love us
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit
              occaecat labore proident cillum in nisi adipisicing officia
              excepteur tempor deserunt.
            </p>
            <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
              />
            </div>
          </div>
        </div> */}

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className="flex flex-col gap-6 xl:flex-row"
                >
                  <Image
                    className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {person.role}
                    </p>
                    <div>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="#06b6d4"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {person.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
