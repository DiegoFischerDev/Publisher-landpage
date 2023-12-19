import React from 'react'
import { InlineWidget } from 'react-calendly'
import Image from 'next/image'
import RasmusProfileImage from '../images/profile-photos/rasmus-sorensen.png'
import Link from 'next/link'

const people = [
  {
    name: 'Rasmus Sorensen',
    role: 'Head of Publisher Analytics',
    imageUrl: RasmusProfileImage,
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/rasmus-s-43a2966/',
  },
]

export default function CalendlyComponent() {
  return (
    <div id="contact" className="bg-grey py-32 pb-10 sm:pb-0">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Secure your free consultation now
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover how Publisher Analytics can help you optimize your content
            for engagement. Schedule your cost-free, no-obligation consultation
            with our team today.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-1"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="mx-auto h-56 w-56 rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
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
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="App">
          <InlineWidget
            url="https://calendly.com/rasmus-sorensen-publisher-analytics/30-min-intro-free-intro-call-to-publisher-analytics"
            styles={{
              height: '950px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
