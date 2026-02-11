import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function TermsAndConditions() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      <Helmet>
        <title>Terms & Conditions | Modus Safaris</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for booking with Modus Safaris. Information on payments, cancellations, liability, and traveler responsibilities."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium font-heading">Terms & Conditions</h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90">
            Please read these terms carefully before booking your safari. They outline your rights and obligations as a traveler with Modus Safaris.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-12 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-24">
              <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Contents</p>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 border-l border-gray-200 pl-4">
                {[
                  { id: "booking", label: "1. Booking & Payments" },
                  { id: "cancellations", label: "2. Cancellations & Refunds" },
                  { id: "changes", label: "3. Changes to Itinerary" },
                  { id: "insurance", label: "4. Travel Insurance" },
                  { id: "health", label: "5. Health & Entry Requirements" },
                  { id: "liability", label: "6. Liability & Risk" },
                  { id: "advisories", label: "7. Travel Advisories" },
                  { id: "conduct", label: "8. Traveler Conduct" },
                  { id: "complaints", label: "9. Complaints" },
                  { id: "safeguarding", label: "10. Safeguarding" },
                  { id: "law", label: "11. Governing Law" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-[#3a5a40] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-12 text-gray-700 leading-relaxed">
            
            <section id="booking" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Booking & Payments</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>To secure a booking, a non-refundable deposit of 30% of the total tour cost is required.</li>
                <li>For bookings including gorilla or chimpanzee trekking permits, the full cost of permits must be paid upfront to secure them, as they are strictly non-refundable and subject to availability.</li>
                <li>The remaining balance is due 60 days prior to the departure date.</li>
                <li>If a booking is made within 60 days of departure, full payment is required immediately to confirm the reservation.</li>
                <li>Payments can be made via bank transfer or credit card (surcharges may apply).</li>
              </ol>
            </section>

            <section id="cancellations" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Cancellations & Refunds</h2>
              <p className="mb-4">All cancellations must be submitted in writing. Refunds are processed based on the date the cancellation notice is received:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>More than 60 days before departure:</strong> Deposit is forfeited.</li>
                <li><strong>60 – 31 days before departure:</strong> 50% of the total tour cost is refunded.</li>
                <li><strong>30 days or less before departure:</strong> 100% of the total tour cost is forfeited (no refund).</li>
                <li><strong>Gorilla/Chimp Permits:</strong> Non-refundable under any circumstances once purchased.</li>
              </ul>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">3. Changes to Itinerary</h2>
              <p className="mb-4">Modus Safaris reserves the right to alter the itinerary due to unforeseen circumstances, including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Weather conditions or natural disasters.</li>
                <li>Road closures or park authority regulations.</li>
                <li>Safety and security concerns.</li>
                <li>Accommodation unavailability (alternatives of similar standard will be provided).</li>
              </ul>
              <p>We will make every effort to maintain the original plan, but the safety and experience of our guests are our priority.</p>
            </section>

            <section id="insurance" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Travel Insurance</h2>
              <p>Comprehensive travel insurance is <strong>mandatory</strong> for all travelers. Your policy must cover:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Medical emergencies and evacuation (including air ambulance).</li>
                <li>Trip cancellation and curtailment.</li>
                <li>Loss of personal belongings and baggage.</li>
                <li>Activities included in your itinerary (e.g., trekking, hiking).</li>
              </ul>
            </section>

            <section id="health" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Health & Entry Requirements</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>It is the traveler's responsibility to ensure they meet all visa and entry requirements for the destination countries (Uganda, Kenya, Tanzania, Rwanda).</li>
                <li>Valid Yellow Fever vaccination certificates are often required for entry.</li>
                <li>Malaria prophylaxis is strongly recommended. Consult your doctor before travel.</li>
                <li>Any dietary restrictions, allergies, or medical conditions must be disclosed at the time of booking.</li>
              </ol>
            </section>

            <section id="liability" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Liability & Risk</h2>
              <p className="mb-4">While Modus Safaris takes every precaution to ensure your safety:</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>Safaris involve travel to wild areas where animals are unpredictable. Guests participate at their own risk.</li>
                <li>Modus Safaris accepts no liability for injury, death, loss, or damage to property, unless caused by our proven negligence.</li>
                <li>We are not liable for delays or costs arising from strikes, political unrest, force majeure, or airline schedule changes.</li>
              </ul>
            </section>

            <section id="advisories" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Travel Advisories</h2>
              <p>It is the traveler's responsibility to stay informed about travel advisories issued by their home country's government regarding travel to East Africa.</p>
            </section>

            <section id="conduct" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Traveler Conduct</h2>
              <p>We reserve the right to remove any guest from a tour if their behavior:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Endangers the safety of themselves, other guests, or staff.</li>
                <li>Disrupts the enjoyment of others.</li>
                <li>Violates local laws or park regulations.</li>
                <li>Harasses or disrespects local communities or wildlife.</li>
              </ul>
              <p className="mt-2 text-sm italic">No refunds will be given in such cases.</p>
            </section>

            <section id="complaints" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Complaints</h2>
              <p>If you have a complaint during your safari, please report it immediately to your guide or camp manager so it can be resolved. If the issue is not resolved, submit a written complaint to Modus Safaris within 14 days of the tour end date.</p>
            </section>

            <section id="safeguarding" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">10. Safeguarding & Human Rights</h2>
              <p>We are committed to preventing exploitation and abuse. We have a zero-tolerance policy towards:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Sexual exploitation of children or vulnerable adults.</li>
                <li>Trafficking or forced labor.</li>
                <li>Discrimination based on race, gender, religion, or orientation.</li>
              </ul>
            </section>

            <section id="law" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">11. Governing Law</h2>
              <p>These terms and conditions are governed by the laws of the Republic of Uganda. Any disputes shall be settled in the courts of Uganda.</p>
            </section>
            
            <div className="pt-12 mt-12 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last updated: February 2026</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
