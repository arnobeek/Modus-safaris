import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"

export default function PrivacyPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Modus Safaris</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Modus Safaris (UG) Limited. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80">Legal</p>
          <h1 className="text-4xl md:text-5xl font-medium font-heading">Privacy Policy</h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90">
            Modus Safaris (UG) Limited is committed to protecting and respecting your privacy. This policy explains how we handle your personal information.
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
                  { id: "who-we-are", label: "1. Who We Are" },
                  { id: "info-collect", label: "2. Information We Collect" },
                  { id: "how-use", label: "3. How We Use Information" },
                  { id: "legal-basis", label: "4. Legal Basis" },
                  { id: "sharing", label: "5. Sharing Your Information" },
                  { id: "security", label: "6. Data Security" },
                  { id: "retention", label: "7. Data Retention" },
                  { id: "rights", label: "8. Your Rights" },
                  { id: "cookies", label: "9. Cookies" },
                  { id: "third-party", label: "10. Third-Party Links" },
                  { id: "transfers", label: "11. Data Transfers" },
                  { id: "updates", label: "12. Policy Updates" },
                  { id: "contact", label: "13. Contact Us" },
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
            
            <section id="who-we-are" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Who We Are</h2>
              <p>
                Modus Safaris (UG) Limited is a safari company based in Uganda providing travel and tourism services, including safari planning, bookings, guided tours, and related travel services.
              </p>
              <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#3a5a40]">
                <p className="font-bold text-sm uppercase mb-2">Contact Details:</p>
                <p>Email: info@modussafaris.com</p>
                <p>Phone: +256 763 174 100</p>
                <p>Location: Mirage Complex, Second Floor, RM MC2 - 05 Kitintale ,P.O. Box 115592 Kampala GPO</p>
              </div>
            </section>

            <section id="info-collect" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect and process the following types of personal information:</p>
              
              <h3 className="font-bold text-gray-900 mt-6 mb-2">2.1 Personal Identification Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Nationality</li>
                <li>Passport details (where required for permits or bookings)</li>
              </ul>

              <h3 className="font-bold text-gray-900 mt-6 mb-2">2.2 Booking and Travel Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Travel dates and preferences</li>
                <li>Accommodation and activity selections</li>
                <li>Emergency contact information</li>
                <li>Special requirements (dietary, accessibility, or medical information voluntarily provided)</li>
              </ul>

              <h3 className="font-bold text-gray-900 mt-6 mb-2">2.3 Website Usage Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on our website</li>
              </ul>

              <h3 className="font-bold text-gray-900 mt-6 mb-2">2.4 Communication Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Information you provide when contacting us by email, phone, or forms</li>
              </ul>
            </section>

            <section id="how-use" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your personal information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Process safari bookings and travel arrangements</li>
                <li>Communicate with you regarding inquiries and bookings</li>
                <li>Provide customer support and assistance</li>
                <li>Arrange permits, accommodations, and transport</li>
                <li>Improve our services and website performance</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
              <p className="mt-4 italic">We only collect information necessary for providing our services.</p>
            </section>

            <section id="legal-basis" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Legal Basis for Processing (GDPR Principles)</h2>
              <p className="mb-4">We process personal information based on:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your consent</li>
                <li>Performance of a contract (e.g., safari booking)</li>
                <li>Legal obligations</li>
                <li>Legitimate business interests (e.g., improving services)</li>
              </ul>
            </section>

            <section id="sharing" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Sharing Your Information</h2>
              <p className="mb-4">We may share your information with trusted third parties only where necessary, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Accommodation providers</li>
                <li>National park authorities (e.g., Uganda Wildlife Authority)</li>
                <li>Transport providers</li>
                <li>Payment processors</li>
                <li>Government authorities where legally required</li>
              </ul>
              <p className="mt-4 font-medium text-[#3a5a40]">We do not sell or rent your personal information to third parties.</p>
            </section>

            <section id="security" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Data Security</h2>
              <p className="mb-4">We take appropriate measures to protect your personal information, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure storage of personal data</li>
                <li>Restricted access to authorized personnel only</li>
                <li>Use of secure communication systems</li>
                <li>Protection against unauthorized access, disclosure, or loss</li>
              </ul>
            </section>

            <section id="retention" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">7. Data Retention</h2>
              <p className="mb-4">We retain personal information only as long as necessary to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fulfill safari bookings and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="mt-4 text-sm">After this period, data is securely deleted or anonymized.</p>
            </section>

            <section id="rights" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent where applicable</li>
                <li>Request restriction of data processing</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us using the details provided above.</p>
            </section>

            <section id="cookies" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Cookies and Website Usage</h2>
              <p>
                Our website may use cookies to improve user experience and analyze website performance. Cookies help us understand visitor behavior and improve our services.
              </p>
              <p className="mt-2 text-sm text-gray-500">You may disable cookies in your browser settings.</p>
            </section>

            <section id="third-party" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. Modus Safaris is not responsible for the privacy practices of external websites.
              </p>
            </section>

            <section id="transfers" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">11. International Data Transfers</h2>
              <p>
                As a tourism company serving international clients, your information may be transferred to suppliers or partners outside your country when necessary to fulfill your travel arrangements.
              </p>
              <p className="mt-2">We ensure such transfers are handled securely and responsibly.</p>
            </section>

            <section id="updates" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">12. Updates to This Policy</h2>
              <p>
                Modus Safaris may update this Privacy Policy from time to time. Updated versions will be published on our website with the revised effective date.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">13. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or your personal data, please contact:</p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <p className="font-bold text-gray-900">Modus Safaris (UG) Limited</p>
                <p className="mt-2">Email: info@modussafaris.com</p>
                <p>Phone: +256 763 174 100</p>
                <p className="mt-2">Location: Mirage Complex, Second Floor, RM MC2 - 05 Kitintale ,P.O. Box 115592 Kampala GPO</p>
              </div>
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
