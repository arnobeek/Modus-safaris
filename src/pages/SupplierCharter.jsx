import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"

export default function SupplierCharter() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "compliance", label: "1. Legal Compliance" },
    { id: "environmental", label: "2. Environmental" },
    { id: "labour", label: "3. Labour Practices" },
    { id: "community", label: "4. Community Engagement" },
    { id: "wildlife", label: "5. Wildlife Protection" },
    { id: "seah", label: "6. Prevention of SEAH" },
    { id: "safety", label: "7. Health & Safety" },
    { id: "improvement", label: "8. Continuous Improvement" },
  ]

  return (
    <div>
      <Helmet>
        <title>Supplier Sustainability Charter | Modus Safaris</title>
        <meta
          name="description"
          content="Modus Safaris Supplier Sustainability Charter. Our standards for accommodation partners, transport providers, and community partners in Uganda."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase mb-4 opacity-80">Partnerships</p>
          <h1 className="text-4xl md:text-5xl font-medium font-heading italic">
            Supplier Sustainability Charter
          </h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed">
            Working with partners who share our commitment to responsible and sustainable tourism in Uganda.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-24">
              <p className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Charter Items</p>
              <nav className="flex flex-col gap-4 text-sm text-gray-500 border-l border-gray-100 pl-6">
                {sections.map((item) => (
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
          <div className="flex-1 space-y-12 text-gray-700 leading-relaxed text-lg">
            
            <p className="text-gray-900 font-medium">
              Modus Safaris works in partnership with suppliers who share our commitment to responsible and sustainable tourism in Uganda. This Supplier Sustainability Charter outlines the minimum standards we expect from our accommodation partners, transport providers, guides, activity operators, and community partners.
            </p>

            <section id="compliance" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">1. Legal Compliance & Ethical Conduct</h2>
              <p>
                Suppliers must comply with all applicable Ugandan laws, regulations, and industry standards. Business operations should be conducted ethically, transparently, and honestly. Corruption, bribery, and fraudulent practices are not tolerated. Accurate records and clear agreements must be maintained. Ethical conduct is fundamental to long-term partnership with Modus Safaris.
              </p>
            </section>

            <section id="environmental" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">2. Environmental Responsibility</h2>
              <p>
                Suppliers are expected to actively reduce their environmental impact. This includes responsible use of water and energy, waste reduction, and pollution prevention. Preference is given to suppliers using renewable energy and environmentally friendly technologies. Wildlife habitats and sensitive ecosystems must be respected and protected. Continuous improvement in environmental performance is encouraged.
              </p>
            </section>

            <section id="labour" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">3. Fair Labour Practices & Human Rights</h2>
              <p>
                Suppliers must respect human rights and provide fair, lawful working conditions. Child labour, forced labour, and discrimination are strictly prohibited. Employees should receive fair wages, reasonable working hours, and safe working conditions. Equal opportunity and gender inclusion are encouraged. Respect for human dignity is non-negotiable.
              </p>
            </section>

            <section id="community" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">4. Community Engagement & Local Benefit</h2>
              <p>
                Suppliers are encouraged to prioritise local employment, sourcing, and service provision. Community engagement should be based on consultation, consent, and fair benefit sharing. Cultural heritage must be respected and protected. Community activities should contribute positively to local development. Long-term partnerships with local stakeholders are encouraged.
              </p>
            </section>

            <section id="wildlife" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">5. Wildlife Protection & Ethical Tourism</h2>
              <p>
                Suppliers must adhere to national wildlife regulations and ethical tourism standards. Activities involving wildlife must be non-exploitative and avoid disturbance or harm. Illegal wildlife trade, captive wildlife exploitation, or unethical encounters are strictly prohibited. Guests should be educated on responsible wildlife behaviour. Conservation outcomes should be supported where possible.
              </p>
            </section>

            <section id="seah" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">6. Prevention of Sexual Exploitation, Abuse & Harassment (SEAH)</h2>
              <p>
                Suppliers must maintain zero tolerance for sexual exploitation, abuse, or harassment. This includes strict prohibition of child sexual exploitation and any form of abuse involving vulnerable persons. Safeguarding principles should be communicated to staff and contractors. Any suspected incidents must be reported promptly. Cooperation with investigations and corrective actions is required.
              </p>
            </section>

            <section id="safety" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">7. Health, Safety & Risk Management</h2>
              <p>
                Suppliers must maintain appropriate health and safety standards for staff, guests, and partners. Risks associated with activities must be assessed and managed. Vehicles, equipment, and facilities should be properly maintained and safe for use. Emergency procedures should be in place and known to staff. Guest safety is a shared responsibility.
              </p>
            </section>

            <section id="improvement" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-2">8. Continuous Improvement & Collaboration</h2>
              <p>
                Suppliers are encouraged to continuously improve sustainability performance. Modus Safaris values open communication, feedback, and collaboration with partners. Sustainability expectations may be reviewed periodically and updated. Suppliers demonstrating commitment to improvement will be prioritised for long-term cooperation. Together, we aim to strengthen responsible tourism across Uganda.
              </p>
            </section>
            
            <div className="pt-16 mt-16 border-t border-gray-100">
              <p className="font-bold text-gray-900 mb-2">Modus Safaris (UG) Limited</p>
              <p className="text-[#3a5a40] italic">Strengthening responsible tourism through partnership.</p>
              <p className="text-xs text-gray-400 mt-8 italic">This charter forms part of Modus Safaris’ commitment to sustainable tourism and responsible partnerships in Uganda.</p>
              <p className="text-xs text-gray-400 mt-2">Last updated: February 2026</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
