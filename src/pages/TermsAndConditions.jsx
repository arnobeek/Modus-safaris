import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"

export default function TermsAndConditions() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "booking-agreement", label: "1. Booking Agreement" },
    { id: "scope", label: "2. Scope & Applicability" },
    { id: "fitness", label: "3. Fitness to Travel" },
    { id: "pricing", label: "4. Pricing & Payments" },
    { id: "amendments", label: "5. Amendments" },
    { id: "cancellations", label: "6. Client Cancellations" },
    { id: "permits", label: "7. Trekking Permits" },
    { id: "modus-changes", label: "8. Company Changes" },
    { id: "refund-policy", label: "9. Refund Policy" },
    { id: "early-departure", label: "10. Early Departure" },
    { id: "health-safety", label: "11. Health & Safety" },
    { id: "insurance", label: "12. Travel Insurance" },
    { id: "documents", label: "13. Travel Documents" },
    { id: "conduct", label: "14. Conduct & Safeguarding" },
    { id: "liability", label: "15. Liability" },
    { id: "data-privacy", label: "16. Data Privacy" },
    { id: "complaints", label: "17. Complaints" },
    { id: "interest", label: "18. Overdue Interest" },
    { id: "entire-agreement", label: "19. Entire Agreement" },
    { id: "legal-costs", label: "20. Legal Costs" },
    { id: "governing-law", label: "21. Governing Law" },
  ]

  return (
    <div>
      <Helmet>
        <title>Terms & Conditions | Modus Safaris</title>
        <meta
          name="description"
          content="Official Terms, Conditions, Cancellation & Refund Policy for Modus Safaris (UG) Limited."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium font-heading uppercase italic">
            Terms, Conditions, Cancellation & Refund Policy
          </h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90">
            These terms govern all bookings made with Modus Safaris (UG) Limited. By confirming a booking, you agree to these legal conditions.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-12 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 custom-scrollbar">
              <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Contents</p>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 border-l border-gray-200 pl-4">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-[#3a5a40] transition-colors py-1"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-12 text-gray-700 leading-relaxed text-justify">
            
            <section className="border-b border-gray-100 pb-8">
              <p className="font-medium text-gray-900 mb-4">MODUS SAFARIS (UG) LIMITED</p>
              <p>
                These Terms, Conditions, Cancellation & Refund Policy govern all bookings made with Modus Safaris (UG) Limited ("Modus Safaris", "we", "us", or "our"). By confirming a booking, the client agrees to be bound by this full document. This policy is designed to ensure transparency, fairness, and safe travel in line with Ugandan law and international tourism best practice.
              </p>
            </section>

            <section id="booking-agreement" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Booking Agreement</h2>
              <p>
                A booking is considered confirmed once the client has accepted the itinerary and quotation in writing and Modus Safaris has received the required deposit or full payment. Upon confirmation, Modus Safaris proceeds to secure accommodation, permits, transport, guides, and other services on behalf of the client. These terms apply to all persons named in the booking. Clients are responsible for checking booking confirmations carefully and notifying Modus Safaris of any errors immediately.
              </p>
            </section>

            <section id="scope" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Scope & Applicability</h2>
              <p>
                These Terms & Conditions apply to all services offered by Modus Safaris within Uganda, including private safaris, group safaris, tailor-made itineraries, and associated services. The policy applies to all clients, including individuals, groups, and third-party agents booking on behalf of travellers. Certain services may be subject to additional supplier-specific conditions, which will be communicated where applicable.
              </p>
            </section>

            <section id="fitness" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">3. Client Responsibilities & Fitness to Travel</h2>
              <p>
                Clients are responsible for ensuring that they are medically and physically fit to participate in safari travel, which may involve long drives, remote locations, wildlife encounters, uneven terrain, and limited medical facilities. Any medical conditions, disabilities, allergies, or special requirements must be disclosed at the time of booking. Clients must follow guide instructions, respect wildlife regulations, local laws, and community customs at all times. Modus Safaris reserves the right to remove any client from a safari where behaviour compromises safety or the enjoyment of others.
              </p>
            </section>

            <section id="pricing" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Pricing, Deposits & Payments</h2>
              <p>
                All prices are quoted per person unless otherwise stated and include only the services specified in the confirmed itinerary. A non-refundable deposit is required to confirm a booking, with the balance payable by the deadline stated on the invoice.
              </p>
              <p className="mt-4">
                The full payment balance is due no later than 54 days prior to the safari start date, unless agreed otherwise in writing. Bookings made within 54 days of arrival must be paid in full at the time of confirmation.
              </p>
              <p className="mt-4">
                If payment is not received in accordance with these conditions, Modus Safaris (UG) Limited reserves the right to cancel the booking without further notice, and applicable cancellation charges may apply.
              </p>
              <p className="mt-4">
                Payments may be made by bank transfer, VISA credit card, or cash, provided payment is completed before the start of the safari. <strong>Please note that payments by VISA credit card attract a 5% service charge.</strong> Credit card payments must be completed at least two (2) months prior to the safari start date. Regretfully, traveller&apos;s cheques are not accepted.
              </p>
              <p className="mt-4">
                All costs related to international bank transfers, intermediary bank charges, or credit card service fees (including the 5% VISA surcharge) are borne fully by the client.
              </p>
              <p className="mt-4">
                Prices may be adjusted due to changes in park fees, government taxes, fuel costs, or exchange rate fluctuations beyond our control.
              </p>
            </section>

            <section id="amendments" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Amendments to Bookings</h2>
              <p>
                Requests for changes to confirmed bookings must be submitted in writing. Amendments are subject to availability and may incur additional costs or supplier charges. Certain services, including permits, special reservations, and flights, may not be changeable or refundable. Changes requested within 14 days of travel may not be possible due to supplier restrictions.
              </p>
            </section>

            <section id="cancellations" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Client-Initiated Cancellations</h2>
              <p>
                If a client cancels a confirmed booking, cancellation charges will apply based on the date written notice is received by Modus Safaris. Charges are calculated on the total safari cost, excluding non-refundable third-party services.
              </p>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <p className="font-bold mb-4 uppercase text-sm tracking-wider">Cancellation Charges:</p>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span>More than 60 days before travel:</span>
                    <span className="font-bold">10% retained</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span>31–60 days before travel:</span>
                    <span className="font-bold">30% retained</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span>15–30 days before travel:</span>
                    <span className="font-bold">50% retained</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-1">
                    <span>8–14 days before travel:</span>
                    <span className="font-bold">75% retained</span>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span>0–7 days before travel or no-show:</span>
                    <span className="font-bold text-red-600">100% retained (no refund)</span>
                  </li>
                </ul>
              </div>
              <p className="mt-6 font-medium text-gray-900">General Rule: No refunds will be considered under any circumstances once a booking is confirmed.</p>
              <p className="mt-4 italic">
                Exceptional Circumstances: A refund may be considered only in the event of the death or hospitalisation of the affected client, subject to the submission of required documentation (Original death certificate or full certified medical records and sworn affidavit).
              </p>
            </section>

            <section id="permits" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Gorilla & Chimpanzee Trekking Permits</h2>
              <p>
                All gorilla and chimpanzee permits are issued and governed by the Uganda Wildlife Authority (UWA). Once issued, permits are generally non-refundable and non-transferable. In exceptional cases, such as serious illness supported by medical documentation, UWA may consider rescheduling or partial refunds at its sole discretion. Modus Safaris has no authority to override UWA decisions. Clients are strongly advised to obtain comprehensive travel insurance.
              </p>
            </section>

            <section id="modus-changes" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Cancellations or Changes by Modus Safaris</h2>
              <p>
                Modus Safaris reserves the right to cancel, amend, or substitute any part of a safari due to circumstances beyond our control, including force majeure events, safety or security concerns, adverse weather, or supplier failure. Where a significant change occurs, we will inform clients as soon as reasonably possible and offer an alternative itinerary or a refund for services not yet delivered.
              </p>
            </section>

            <section id="refund-policy" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Refund Policy & Processing</h2>
              <p>
                Approved refunds will be processed within 14–30 working days of confirmation. Refunds will be made using the original payment method where possible. Bank charges, card processing fees, and international transfer costs may be deducted from the refunded amount. Refunds are subject to supplier policies and services already utilised.
              </p>
            </section>

            <section id="early-departure" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">10. Early Departure & Unused Services</h2>
              <p>
                No refunds will be made for unused accommodation, meals, activities, transport, or services if a client voluntarily leaves a safari early or chooses not to use booked services. This includes early departures due to personal reasons, illness, or missed activities.
              </p>
            </section>

            <section id="health-safety" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">11. Health, Safety & Risk Acceptance</h2>
              <p>
                Client safety is a priority for Modus Safaris. All activities are risk-assessed and operated by trained guides and reputable partners. Clients must follow all safety instructions provided. Safari travel involves inherent risks, including wildlife encounters and remote travel, which clients accept by participating. Modus Safaris cannot be held liable for incidents resulting from failure to follow instructions or disclose relevant medical information.
              </p>
            </section>

            <section id="insurance" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">12. Travel Insurance</h2>
              <p>
                All clients are required to have comprehensive travel insurance covering medical treatment, evacuation, repatriation, trip cancellation, and loss of personal belongings. Insurance must be valid for the full duration of travel in Uganda and suitable for safari and adventure activities. Proof of insurance may be requested prior to travel.
              </p>
            </section>

            <section id="documents" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">13. Travel Documents & Legal Requirements</h2>
              <p>
                Clients are responsible for ensuring that they hold valid passports, visas, vaccination certificates, and any other required travel documentation. Modus Safaris is not liable for denied entry, delays, or costs resulting from incomplete or invalid documentation.
              </p>
            </section>

            <section id="conduct" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">14. Behaviour, Conduct & Safeguarding</h2>
              <p>
                Clients are expected to behave respectfully toward guides, fellow travellers, communities, and wildlife. Modus Safaris maintains zero tolerance for harassment, illegal activity, or sexual exploitation, including child exploitation. Serious breaches may result in immediate removal from the safari without refund.
              </p>
            </section>

            <section id="liability" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">15. Liability</h2>
              <p>
                Modus Safaris (UG) Limited shall not be liable for any claim whatsoever unless such claim arises directly from the proven negligence of the company. Any claim must be submitted in writing to Modus Safaris within thirty (30) days after the end of the safari. Claims submitted after this period shall not be considered. Liability is further limited in accordance with applicable Ugandan law and international tourism conventions. We are not responsible for losses arising from acts beyond our control, including force majeure or third-party actions.
              </p>
            </section>

            <section id="data-privacy" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">16. Data Protection & Privacy</h2>
              <p>
                Personal data is processed in accordance with applicable data protection laws and used solely for the purpose of delivering travel services. Information may be shared with suppliers as necessary. Further details are available in our Privacy Policy.
              </p>
            </section>

            <section id="complaints" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">17. Complaints & Dispute Resolution</h2>
              <p>
                Any concerns should be raised immediately with the safari guide to allow prompt resolution. Formal complaints must be submitted in writing within thirty (30) days of completion of travel. Complaints will be investigated fairly and responded to in a timely manner.
              </p>
            </section>

            <section id="interest" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">18. Interest on Overdue Payments</h2>
              <p>
                Any amounts due and payable by the client which remain unpaid after the due date shall incur interest from the due date at a rate of two percent (2%) above the prime rate charged by the company&apos;s bank.
              </p>
            </section>

            <section id="entire-agreement" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">19. Amendments, Waivers & Entire Agreement</h2>
              <p>
                No amendment, cancellation, waiver, or variation of any term or right contained in this document shall be valid or binding unless reduced to writing and signed by both the client and a duly authorised representative of Modus Safaris (UG) Limited. This document constitutes the entire agreement between the parties and supersedes all prior discussions or representations.
              </p>
            </section>

            <section id="legal-costs" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">20. Legal Costs</h2>
              <p>
                The client shall be liable for all legal fees on an attorney-and-own-client scale in the event that Modus Safaris (UG) Limited is required to engage legal counsel to enforce any of its rights or remedies under this agreement.
              </p>
            </section>

            <section id="governing-law" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">21. Governing Law & Jurisdiction</h2>
              <p>
                These Terms, Conditions, Cancellation & Refund Policy are governed by the laws of the Republic of Uganda. Any disputes shall be subject to the jurisdiction of Ugandan courts unless otherwise agreed.
              </p>
            </section>
            
            <div className="pt-12 mt-12 border-t border-gray-200">
              <p className="font-bold text-gray-900">Modus Safaris (UG) Limited</p>
              <p>Kampala, Uganda</p>
              <p>Email: info@modussafaris.com</p>
              <p>Tel: +256 763 174 100</p>
              <p className="text-sm text-gray-400 mt-8 italic">Last updated: February 2026</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
