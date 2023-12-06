'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function FooterNavLinks() {
  const linksColOne = [
    ['Features', '/#features'],
    ['Pricing', '/#pricing'],
    ['About', '/about'],
    ['FAQs', '/faq'],
  ]

  const linksColTwo = [
    ['Privacy Policy', '/privacy-policy'],
    ['Cookie Policy', '/cookie-policy'],
    ['Compliance', '/compliance'],
    ['Documentation', '/'],
  ]

  return (
    <div className='flex justify-between w-[100%]'>
      <div className="columns-1 lg:flex lg:justify-start lg:space-x-12">
        {linksColOne.map(([label, href], index) => (
          <Link
            key={label}
            href={href}
            className="relative min-w-fit rounded-lg px-2 text-sm text-gray-700 transition-colors delay-150 lg:hover:bg-gray-100 hover:text-cyan-500 hover:delay-0"
          >
            <p>{label}</p>
          </Link>
        ))}
      </div>

      <div className="ml-12 columns-1 lg:flex lg:justify-center lg:space-x-12">
        {linksColTwo.map(([label, href], index) => (
          <Link
            key={label}
            href={href}
            className="relative min-w-fit rounded-lg px-2 text-sm text-gray-700 transition-colors delay-150 lg:hover:bg-gray-100 hover:text-cyan-500 hover:delay-0"
          >
            <p>{label}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
