import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { TextField } from '@/components/Fields'
import { Button } from '@/components/Button'
import StripeController from '@/components/controllers/StripeController'
import publisherLogo from '../../public/assets/publisher-analytics-logo/small-publisher-logo.png'
import Link from 'next/link'

export default function RegisterDialog({
  isOpen,
  onClose,
  activePeriod,
  price,
  planName,
}) {
  const [invalidEamil, setInvalidEmail] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    serviceLegalAgreement: false,
    termsOfService: false,
    privacyPolicy: false,
  })
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    const isFirstNameFilled = formData.firstName.trim() !== ''
    const isLastNameFilled = formData.lastName.trim() !== ''
    const isServiceLegalAgreementChecked = formData.serviceLegalAgreement
    const isTermsOfServiceChecked = formData.termsOfService
    const isPrivacyPolicyChecked = formData.privacyPolicy

    if (isValidEmail) setInvalidEmail(false)

    setIsFormValid(
      isValidEmail &&
        isFirstNameFilled &&
        isLastNameFilled &&
        isServiceLegalAgreementChecked &&
        isTermsOfServiceChecked &&
        isPrivacyPolicyChecked,
    )
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      StripeController.redirectToStripe(price, formData.email)
    } else {
      setInvalidEmail(true)
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="mb-10">
                  <div className="mb-5 flex items-center gap-2">
                    <Image
                      src={publisherLogo}
                      alt="PublisherAnalytics logo"
                      className="w-10"
                    />
                    <h2>Publisher Analitycs</h2>
                  </div>
                  <div className="">
                    <p className="text-sm text-slate-500">{planName}</p>
                    <p className="text-2xl">30 Days Free Trial</p>
                    <p className="text-sm text-slate-500">
                      Then {price} per{' '}
                      {activePeriod === 'Monthly' ? 'month' : 'year'}
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8 flex flex-col gap-2">
                    <TextField
                      label="First name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <TextField
                      label="Last name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <TextField
                      className="col-span-full"
                      label="Email address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {invalidEamil && (
                      <p className="text-xs text-red-700">invalid email</p>
                    )}
                  </div>
                  <fieldset>
                    <legend className="sr-only">Notifications</legend>
                    <div className="space-y-0">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="serviceLegalAgreement"
                            aria-describedby="serviceLegalAgreement-description"
                            name="serviceLegalAgreement"
                            value={formData.serviceLegalAgreement}
                            type="checkbox"
                            onChange={handleChange}
                            required
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label className="font-medium text-gray-900">
                            I agree to the{' '}
                            <Link
                              className="text-color2"
                              href="/support-level-agreement"
                            >
                              Support Level Agreement
                            </Link>
                          </label>{' '}
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="privacyPolicy"
                            aria-describedby="privacyPolicy-description"
                            name="privacyPolicy"
                            value={formData.privacyPolicy}
                            type="checkbox"
                            onChange={handleChange}
                            required
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label className="font-medium text-gray-900">
                            I agree to the{' '}
                            <Link
                              className="text-color2"
                              href="/privacy-policy-addendum"
                            >
                              Privacy Policy
                            </Link>
                          </label>{' '}
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="termsOfService"
                            aria-describedby="termsOfService-description"
                            name="termsOfService"
                            value={formData.termsOfService}
                            type="checkbox"
                            onChange={handleChange}
                            required
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label className="font-medium text-gray-900">
                            I agree to the{' '}
                            <Link className="text-color2" href="/payment-terms">
                              Terms of Service
                            </Link>
                          </label>{' '}
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <Button
                    type="submit"
                    color="cyan"
                    className="mt-8 w-full cursor-pointer"
                  >
                    Proceed to Payment Details
                  </Button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
