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
                <p>
                  These Terms of Service apply to the NPAW Suite platform
                  provided by NicePeopleAtWork SL, hereinafter “NPAW”, (its
                  affiliates and/or subsidiaries) and the company, organization
                  or individual named on the applicable SOF.
                </p>
                <br></br>
                <strong className="font-semibold text-gray-900">
                  1. Definitions.
                </strong>
              </p>
              <p>
                When used in this agreement, the following definitions apply.
                “Application Data“ or “Data” means all data, regardless of
                format or owner, provided or identified to NPAW to be sent or
                received using NPAW’s Services, and/or Data hosted, stored or
                cached by NPAW at the direction of Customer or its agents,
                customers or end users (“End-Customer”). “NPAW Suite“ means the
                NPAW Suite software platform, hosted by NPAW and offered in the
                form of Software as a Service, enabling Customer to upload,
                process, manage and distribute Customer’s Data. “Service Order
                From“ (SOF) means an NPAW contract by which Services are
                provided to the Customer. “Services“ means the particular
                services to be provided to the Customer by NPAW as specified on
                a Service Order Form. “Traffic“ means all data sent or received
                by or on behalf of Customer using NPAW Service(s). “Execution
                Date” is the date of signature of the ultimate signatory. “Days”
                are considered calendar days.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  2. Delivery of Services.
                </strong>
              </p>
              <p>
                Subject to the terms, conditions and limitations in this
                agreement, NPAW will provide, and Customer will purchase, the
                Services set forth on applicable SOFs. NPAW warrants that the
                Services will be performed substantially in accordance with the
                documentation provided to the Customer and with all reasonable
                skill and care. NPAW further warrants that it has and will
                maintain all necessary licences, consents, and permissions
                necessary for the performance of its obligations under this
                agreement. For and during the provision of the Services, NPAW
                grants Customer a non-exclusive, limited license to install and
                use any SDK, plug-in or other software program provided by NPAW
                to Customer for the sole purpose of interacting with NPAW
                Services. Customer may not reveal, modify, reengineer,
                redistribute or transfer such software to any third party.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  3. Term.
                </strong>
              </p>
              <p>
                These Terms of Service (TOS) apply until the expiration of all
                SOFs executed hereunder. The Initial Term of each SOF will be
                specified on that document. Upon expiration of the Initial Term,
                SOFs automatically renew for additional terms of equal length to
                the Initial Term (each a “Renewal Term“) unless either party
                notifies the other in writing no less than 30 or 14, as
                applicable,90 days prior to the end of the Initial Term, or
                Renewal Term, as applicable, that it will not renew the Service.
                If Customer does so, or if Service is terminated by NPAW for
                what is the Customer’s fault, Customer shall pay NPAW a
                termination charge equal to the sum of: (i) all unpaid amounts
                for Service actually provided; (ii) 100% of the corresponding
                fees to the next renewal term.remaining monthly recurring
                charges for months 1-12 of the Service Term (iii) 50% of the
                remaining monthly recurring charges for months 13 through end of
                Service Term; and (iiii) if not recovered by the foregoing, any
                termination liability payable to third parties resulting from
                termination. Customer acknowledges that the charges in this
                Section are a genuine estimate of NPAW’s actual damages and are
                not a penalty.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  4. Payment
                </strong>
              </p>
              <p>
                NPAW will invoice Customer the fees set forth on the SOF.
                Payment is due within the terms specified in the SOF, or
                otherwise 30 days from the date of invoice. NPAW may terminate
                or suspend Service should payment become past due, and the
                Customer does not bring its account current within 5 days of its
                receipt of a written notice from NPAW. NPAW may assess interest
                at the lower rate of 5% per month on any past due balances. The
                parties agree that no endorsement or statement to the contrary
                on any check or payment, or on any letter accompanying any check
                or payment, or elsewhere will be construed as an accord or
                satisfaction. Should NPAW bring an action to recover any past
                due balance, it shall be entitled to recover reasonable costs
                and attorneys’ fees, in addition to all other legal and
                equitable remedies.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  5. Taxes.
                </strong>
              </p>
              <p>
                The prices included on any SOF do not include taxes. Customer is
                responsible for payment of all taxes, levies, and similar
                governmental charges, however designated, that may be imposed by
                any jurisdiction, except for taxes based solely on NPAW’s net
                income. If special withholding taxes are required to be withheld
                on payments to NPAW, Customer shall promptly deliver to NPAW an
                official receipt along with an English translation (if
                applicable) of any taxes withheld or other documents necessary
                to enable NPAW to claim a foreign tax credit.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  6. NPAW Disclaimer of Warranties.
                </strong>
              </p>
              <p>
                DISCLAIMER OF IMPLIED AND EXPRESS WARRANTIES. Except as
                expressly provided herein or in any written Service Level
                Agreement (SLA) applicable to the Service, the Services are
                provided “AS IS“ and Customer’s use of the Services is at
                Customer’s sole risk. NPAW DISCLAIMS ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
                NON-INFRINGEMENT. NPAW DOES NOT WARRANT THAT THE SERVICES WILL
                BE ERROR FREE OR UNINTERRUPTED. From time to time, NPAW may
                offer access to trials of NPAW Suite or to demo features within
                it. Unless otherwise indicated expressly by the offer or by
                written notice by NPAW, such trial will be effective for a
                period of 30 days after such trial has been provisioned by NPAW
                or until Customer agrees on a SOF (whichever occurs first). Data
                processed by NPAW Suite by Customer during a trial and any
                setups made to the NPAW Suite accounts may be deleted unless
                Customer agrees on a SOF prior to conclusion of the trial
                period. NPAW may terminate the trial at any time at its sole
                discretion. THE SERVICE IS PROVIDED “AS-IS“ AND WITHOUT ANY
                REPRESENTATION OR WARRANTY DURING TRIALS OR OVER DEMO FEATURES.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  7. Ownership of IPRs/data.
                </strong>
              </p>
              <p>
                Except for the limited rights expressly granted herein, neither
                Party transfers to the other Party any customer data,
                technology, software or other intellectual property rights, and
                all right, title and interest in and to such customer data,
                technology, software, or other intellectual property rights
                remains the sole property of the respective owner. For the
                avoidance of doubt, NPAW grants the Customer a license to use
                and access the software relevant to NPAW Suite required for the
                provision of the Services for the duration of the Agreement.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  8. Marketing.
                </strong>
              </p>
              <p>
                NPAW will promote the Customer brand and logo on NPAW’s website
                and marketing materials. NPAW will share Customer testimonials
                reflecting their experience with NPAW products, service level
                and overall satisfaction level. Both NPAW and Customer will
                produce a joint press release announcing the use of NPAW
                products and services by Customer, and distribute the press
                release upon mutual agreement of content. Furthermore, NPAW will
                be able to announce the collaboration with the Customer through
                its social media. Neither party may use the other party’s name,
                logo, trade name, trademarks and icons (collectively, the
                “Brands“) without prior written agreement. Notwithstanding the
                foregoing, each party may use the other party’s name, trade
                name, trademarks and logos to refer publicly to the other,
                orally and in writing, as a customer/vendor of the other solely
                in connection with the Services provided hereunder and only for
                so long as this agreement remains in effect.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  9. Confidentiality.
                </strong>
              </p>
              <p>
                Confidential Information of a party includes prices, business
                plans, customer data, financial data and any other information,
                in any form or medium, that the party designates as confidential
                or which a reasonable party would understand to be confidential
                under the circumstances. Confidential Information does not
                include information that: (i) is known to the receiving party
                prior to its receipt from the disclosing party by means that are
                not in violation hereof; (ii) becomes known (independently of
                disclosure by the disclosing party) to the receiving party from
                a source other than one having an obligation of confidentiality
                to the disclosing party; (iii) becomes known and generally
                available to the public or otherwise ceases to be confidential,
                except through a breach of this agreement by the receiving
                party; (iv) is independently developed by the receiving party
                without use of or reference to the Confidential Information of
                the disclosing party, or (v) is required to be disclosed by
                subpoena, law, regulation, or court order. Each party agrees
                that it will not use in any way, for its own account or the
                account of any third party, except as expressly permitted by, or
                to the limited extent required to achieve the purposes of, this
                agreement, nor disclose to any third party (except as required
                by law or to such party’s attorneys, accountants and other
                advisers as reasonably necessary), any Confidential Information
                pertaining to the other party. Each party will take reasonable
                precautions to protect the confidentiality of the Confidential
                Information of the other party that are at least as stringent as
                it takes to protect its own Confidential Information.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  10. Data
                </strong>
              </p>
              <p>
                The Service may track and collect technical data that can be
                considered End-Customer personal data (such as IP, User Id,
                Device ID), including data that may identify the End-Customers
                or other data which can be reasonably linked to such information
                by NPAW. NPAW will provide the technical information on data
                collection for incorporation into Customer’s Privacy Policy.
                Customer will have and abide by an appropriate Privacy Policy
                and will comply with all applicable laws, policies, and
                regulations relating to the collection of information from
                End-Customers. Customer must post a Privacy Policy and that
                Privacy Policy must provide notice of Customer’s use of the
                Services that are used to collect data. Customer will use
                commercially reasonable efforts to ensure that an End-Customers
                is provided with clear and comprehensive information about, and
                consents to, the storing and accessing by the Service of such
                technical information on End-Customers’ devices where such
                activity occurs in connection with the Service and where
                providing such information and obtaining such consent is
                required by law.<br></br>
                <br></br>NPAW may have access and develop, in connection with
                the provision of its Services to the Customer, to certain
                anonymized analytics or other aggregate data (collectively
                “Analytics Data”), as well as any available diagnostic data
                based on the registered users’ use of the Services and
                Deliverables (“Diagnostic Data”). NPAW may use the Analytics and
                Diagnostic Data for the purpose of performing and improving the
                Services detailed herein or improving the Deliverables. NPAW may
                also publish or release to third parties as part of its services
                to customers certain aggregated Analytics and Diagnostic Data
                around services use and performance. Customer grants NPAW a
                non-exclusive right to use, reproduce, aggregate, distribute and
                publicly display the Analytics and Diagnostic Data on an
                aggregated and non-identifiable basis for these purposes. In the
                event such Data contains personal data, the provisions of clause
                11 (Data Protection) shall apply and Customer grants NPAW the
                right to anonymize and aggregate such data for the
                aforementioned purposes. In any event, except as indicated
                herein, NPAW will (i) maintain as confidential all Analytics and
                Diagnostic Data, using a degree of care that is appropriate to
                avoid unauthorized access, use or disclosure, (ii) use and
                disclose such Analytics and Diagnostic Data on an anonymous
                basis solely for the purposes of providing Services and
                Deliverables to its clients, and (iii) not use or combine
                Analytics and Diagnostic Data with personal data that identifies
                or may identify any individuals.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  11. Data Protection.
                </strong>
              </p>
              <p>
                The Privacy Policy for subscribing clients set out in “Exhibit
                A” of this Agreement applies to the processing of any personal
                data in the course of the provision of the Services.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  12. NPAW Representations, Warranties, Covenants and
                  Indemnification.
                </strong>
              </p>
              <p>
                NPAW warrants that the Services provided in accordance with the
                terms of this agreement will not violate any applicable law,
                rule or regulation, breach an agreement with, or infringe the
                copyright or other intellectual property rights of, a third
                party.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  13. Customer Representations, Warranties, Covenants and
                  Indemnification.
                </strong>
              </p>
              <p>
                Customer covenants, represents and warrants that it owns all
                right, title and interest in the “Application Data” or possesses
                the necessary rights to permit the “Application Data” to be
                stored. Customer warrants that its use of the Services will not
                violate any applicable law, rule or regulation, breach an
                agreement with, or infringe the copyright or other intellectual
                property rights of, a third party. If Customer breaches the
                foregoing covenants, representations or warranties, then NPAW,
                in addition to any other remedies available under law or in
                equity, may, at its sole discretion, suspend any of the
                Services. Customer agrees to indemnify and defend NPAW against
                any and all claims (including third-party discovery actions),
                liabilities, costs, damages, reasonable costs and expenses,
                including reasonable attorneys’ fees, relating to or arising
                from breach by Customer of the above representations, warranties
                and covenants.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  14. Limitation of Liability.
                </strong>
              </p>
              <p>
                Unless otherwise stated, neither party shall be liable or
                responsible to the other for any special, incidental, punitive,
                indirect, exemplary, or consequential damages, including, but
                not limited to, lost revenue, lost profits, loss of data or
                business information, even if advised of the possibility of such
                damages, whether arising under contract, tort (including
                negligence), strict liability or otherwise, provided that
                nothing herein constitutes a waiver of any unpaid or past due
                amounts owed by Customer for purchase commitments and/or
                Services rendered. Without limiting the foregoing, unless
                otherwise stated, each party’s liability to the other for any
                breach of this agreement shall be limited to the direct damages
                arising from such breach and shall not exceed an amount equal to
                payments made by Customer to NPAW during twelve (12) months
                prior to the claim, or if the breach is claimed before the sixth
                (6th) month of the SOF, an amount equal to 6 times the monthly
                payment by Customer for the month prior to the breach.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  15. Force Majeure.
                </strong>
              </p>
              <p>
                Neither party will be liable for any failure or delay due to any
                cause beyond its reasonable control, including but not limited
                to acts of war, acts of God, terrorism, earthquake, flood, riot,
                sabotage, labor shortage or dispute, utility outage,
                governmental act or failure of the Internet (not resulting from
                the actions or omissions of NPAW or Customer), provided that the
                delayed party: (a) gives prompt notice of such cause, and (b)
                uses its commercially reasonable efforts to promptly correct
                such failure or delay.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  16. Termination.
                </strong>
              </p>
              <p>
                Either party may terminate this agreement due to the material
                breach of the other party upon 90 days written notice and
                failure of the other party to cure the breach within 20 days.
                Upon termination by NPAW for cause, or termination by Customer
                in breach/violation of these terms, all payment obligations of
                Customer will immediately become due and payable. Notices
                provided hereunder are not effective until actually received by
                the receiving party at the address listed on the SOF. Without
                limiting the foregoing, submission by the Customer of a service
                ticket (or “trouble ticket“) does not constitute Customer
                “notice“ for purposes of this Agreement. Upon termination by
                Customer for cause, or termination by NPAW in breach/violation
                of these terms, all amounts prepaid by the Customer for Services
                not received will immediately be refunded to the Customer and no
                cancellation fees will apply. Notices provided hereunder are not
                effective until actually received by the receiving party at the
                address listed on the SOF.
              </p>
            </li>
            <li className="gap-x-3">
              <p>
                <strong className="font-semibold text-gray-900">
                  17. General Provisions.
                </strong>
              </p>
              <p>
                The laws of Spain applicable to contracts will govern the
                construction and operation of this agreement without regard to
                any conflict of laws provisions. Any action brought in
                connection with this agreement against NPAW will be brought in a
                court sitting in Barcelona, Spain. NPAW and Customer are
                independent contractors and this agreement does not establish
                any relationship of partnership, joint venture, or agency
                between NPAW and Customer. These TOS, along with the applicable
                SOF, SLA (if applicable) constitute the complete agreement
                between the parties with respect to the subject matter hereof,
                and supersedes and replaces any and all prior or contemporaneous
                discussions, negotiations, understandings and agreements,
                written and oral, regarding such subject matter. Should there be
                any conflict between the TOS and the provisions of any SOF, the
                SOF shall prevail. These TOS may be changed by NPAW at its sole
                discretion and the changes will become effective upon posting,
                provided that amended TOS shall only apply to SOFs that are
                executed after the effective date of the changes. The provisions
                intended to survive (including but not limited to the provisions
                regarding Intellectual Property, Limitation of Liability and
                Confidentiality) will survive any expiration or termination of
                this agreement.
              </p>
            </li>
          </ul>
        </div>
        {/* <AcceptTerms /> */}
      </div>
    </div>
  )
}
