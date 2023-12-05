'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import RegisterDialog from '@/components/RegisterDialog'
import publisherLogo from '../../public/assets/small-publisher-logo.png'

const plans = [
  {
    name: 'Smaller publishers',
    featured: false,
    price: { Monthly: '$99', Annually: '$950' },
    description:
      'Achieve higher engagement rates and optimize your content with our tailored plan designed for smaller publishers. Start increasing your engagement rate today!',
    button: {
      label: 'Start for free with a 30 days free trial',
      href: '',
    },
    features: [
      'Perform up to 50 A/B tests per month',
      'Automatic winner selection',
      'See real-time data on page via the HUD',
      'Access to the backoffice with pre-built dashboards',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Medium-Sized Publishers',
    featured: false,
    price: { Monthly: '$599', Annually: '$5700' },
    description:
      'Take your engagement rates to the next level with our tailored plan designed for medium-sized publishers. Maximize your content optimization and achieve remarkable engagement results',
    button: {
      label: 'Start for free with a 30 days free trial',
      href: '',
    },
    features: [
      'Perform up to 200 A/B tests per month',
      'Automatic winner selection',
      'See real-time data on page via the HUD',
      'Access to the backoffice with pre-built dashboards',
      'Customize your own dashboards',
      'Set up email alerts',
      'Invite all your team members',
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'Large-Sized Publishers',
    featured: true,
    price: { Monthly: 'Contact us', Annually: 'Contact us' },
    description:
      'Unlock the full potential of your engagement strategy with our exclusive VIP plan. Gain unlimited access to advanced features and personalized support to drive unparalleled engagement and maximize your content performance.',
    button: {
      label: 'Contact us',
      href: 'contact',
    },
    features: [
      'Perform an unlimited amount of A/B tests per month',
      'Automatic winner selection',
      'See real-time data on page via the HUD',
      'Access to the backoffice with pre-built dashboards',
      'Customize your own dashboards',
      'Monthly call with our customer success team, to help you utilize the tool to its full potential',
      'Set up email alerts',
      'Invite all your team members',
      '24 hours support via phone or email',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  logomarkClassName,
  featured = false,
  onRegisterClick,
}) {
  const handleButtonClick = () => {
    if (button.href === "contact") {
      const targetElement = document.getElementById("contact")
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      onRegisterClick()
    }
  }

  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        <Image
          src={publisherLogo}
          alt="PublisherAnalytics logo"
          className="w-8"
        />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0',
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0',
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700',
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700',
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-cyan-500',
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
        onClick={handleButtonClick}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  const [activePeriod, setActivePeriod] = useState('Monthly')
  const [price, setPrice] = useState('$99')
  const [planName, setPlanName] = useState('Smaller publishers')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleRegisterClick = () => {
    setIsDialogOpen((prevState) => !prevState)
  }

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Affordable pricing for publishers of all sizes.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you're a small, medium, or large publisher, we offer
            tailored plans to optimize your content and boost engagement.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2"
            >
              {['Monthly', 'Annually'].map((period) => (
                <RadioGroup.Option
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                    period === 'Monthly'
                      ? 'rounded-l-lg'
                      : '-ml-px rounded-r-lg',
                  )}
                >
                  {period}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)]'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))]',
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className={clsx(
                    'py-2 text-center text-sm font-semibold text-white',
                    period === 'Annually' && '-ml-px',
                  )}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan
              key={plan.name}
              {...plan}
              activePeriod={activePeriod}
              onRegisterClick={() => {
                setPrice(plan.price[activePeriod])
                setPlanName(plan.name)
                handleRegisterClick()
              }}
            />
          ))}
        </div>
      </Container>
      <RegisterDialog
        isOpen={isDialogOpen}
        onClose={handleRegisterClick}
        activePeriod={activePeriod}
        price={price}
        planName={planName}
      />
    </section>
  )
}
