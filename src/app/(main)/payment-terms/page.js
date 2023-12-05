import AcceptTerms from '@/components/AcceptTerms'

export const metadata = {
  title: 'Terms of Use',
}

export default function PaymentTerms() {
  return (
    <div className="mt-10 flex justify-center bg-white px-6 py-12 lg:px-8 lg:py-24">
      <div className="mt-10 w-[90%] max-w-3xl text-base text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Use for Publisher Analytics
        </h1>
        <p className="text-base font-semibold text-[#06b6d4]">
          Last updated on December 5, 2023
        </p>
        <div className="mt-10">
          <p>
            Welcome to Publisher Analytics, a product of NPAW (Nice People At
            Work). By using our services, you are agreeing to these terms.
            Please read them carefully.
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  1. Acceptance of Terms
                </strong>
              </p>
              <p>
                This Service Order Form will give access to a premium trial
                period (the “Trial”) of 30 (thirty) days starting today and
                ending 30 (thirty) natural days after, at the date hereinafter
                called the “Trial Period End Date”. Service can be cancelled
                free of charge until the Trial Period End Date. Billing is
                applicable from the Trial Period End Date, hereinafter ‘Term
                Start Date’ for billing purposes.<br></br>
                <br></br> The term of this contract is set for one (1) year or
                12 months (the “Initial Term”) starting from the ‘Term Start
                Date’. Thereafter, the term will automatically renew for
                additional successive one-year periods (yearly commitment)
                /one-month periods (monthly commitment) , unless either party
                provides a written notice of no less than 30 days prior to the
                then-current term (yearly commitment)/ 14 days prior to the
                then-current term (monthly commitment).
              </p>
            </li>
          </ul>
        </div>
        {/* <AcceptTerms /> */}
      </div>
    </div>
  )
}
