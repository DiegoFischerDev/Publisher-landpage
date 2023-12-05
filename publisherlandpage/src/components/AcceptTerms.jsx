'use client'
import { Button } from '@/components/Button'
import { useState } from 'react'
import Link from 'next/link'

export default function AcceptTerms() {

    const [accepted, setAccepted] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleProceedClick = () => {
        if (!accepted) {
            setAlert(true);
        }
    }

  return (
    <div className='mt-24' id="terms">
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-[#06b6d4] focus:ring-[#06b6d4]"
            onChange={() => {setAccepted(!accepted); setAlert(false)}}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor="comments" className="font-medium text-gray-900">
            By selecting 'I have read and agree to the terms
          </label>{' '}
          <span id="comments-description" className="text-gray-500">
            <span className="sr-only">
              By selecting 'I have read and agree to the terms{' '}
            </span>
            so you always know you confirm that you have reviewed the Terms of
            Use for Publisher Analytics, understand them, and agree to comply
            with all the provisions contained therein. If you do not agree with
            these terms, please do not proceed with using the service. We
            encourage you to carefully read and understand the terms before
            agreeing.
          </span>
        </div>
      </div>
      <div className="mt-10 flex justify-end items-center">
      {alert && <p className="text-red-500 mr-10">You must accept the terms to proceed.</p>}
      <Link href={accepted ? "/" : "#terms"}>
        <button onClick={handleProceedClick} className={`inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden ${accepted ? "bg-cyan-500" : "bg-gray-500"} text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:text-white/80 before:transition-colors`}>
          <span className="hidden lg:inline">Proceed</span>
          <span className="lg:hidden">Proceed</span>
        </button>
      </Link>
      </div>
    </div>
  )
}