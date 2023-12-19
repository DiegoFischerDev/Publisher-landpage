'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consentValue = localStorage.getItem('npaw-cookie-consent')
    if (consentValue !== 'true') {
      setShowConsent(true)
    }
  }, [])

  const handleClick = () => {
    localStorage.setItem('npaw-cookie-consent', 'true')
    setShowConsent(false)
  }

  if (!showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-20 right-10 sm:right-0 z-50 flex max-w-lg flex-col rounded-md border border-gray-300 bg-white p-5 shadow-2xl">
      <h3 className="text-lg font-bold">We value your privacy</h3>
      <p className="mr-10 mt-2 text-sm">
        We use cookies to enhance your browsing experience, serve personalized
        ads or content, and analyze our traffic. By clicking “I understand“, you
        consent to our use of cookies.{' '}
        <Link target="_blank" href="/cookie-policy">
          <span className="font-bold text-color2">Read More.</span>
        </Link>
      </p>
      <button
        className="mt-3 self-center rounded-md bg-color2 hover:bg-black px-4 py-2 text-white"
        onClick={handleClick}
      >
        I understand
      </button>
    </div>
  )
}
