import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { HiOutlineScale, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineHeart, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineExclamationCircle } from "react-icons/hi"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const sections = [
  { id: "policy-statement", title: "1. Policy Statement", icon: HiOutlineGlobeAlt },
  { id: "scope", title: "2. Scope & Applicability", icon: HiOutlineScale },
  { id: "environmental", title: "3. Environmental Management", icon: HiOutlineGlobeAlt },
  { id: "wildlife", title: "4. Wildlife Conservation", icon: HiOutlineHeart },
  { id: "community", title: "5. Community Engagement", icon: HiOutlineUserGroup },
  { id: "fair-trade", title: "6. Fair Trade & Procurement", icon: HiOutlineScale },
  { id: "employee", title: "7. Employee Welfare", icon: HiOutlineUserGroup },
  { id: "safety", title: "8. Health & Safety", icon: HiOutlineShieldCheck },
  { id: "seah", title: "9. Prevention of SEAH", icon: HiOutlineExclamationCircle },
  { id: "conduct", title: "10. Responsible Business Conduct", icon: HiOutlineShieldCheck },
  { id: "customer", title: "11. Customer Awareness", icon: HiOutlineLightBulb },
  { id: "supplier", title: "12. Supplier Engagement", icon: HiOutlineUserGroup },
  { id: "monitoring", title: "13. Monitoring & Compliance", icon: HiOutlineShieldCheck },
  { id: "communication", title: "14. Policy Communication", icon: HiOutlineGlobeAlt },
]

export default function SustainabilityPolicy() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Sustainability & Operational Policy | Modus Safaris</title>
        <meta name="description" content="Formal Sustainability, Responsible Tourism & Operational Policy of Modus Safaris (UG) Limited." />
      </Helmet>

      {/* Hero */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80 italic">Sustainability & Responsible Tourism</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-heading uppercase italic">
            Sustainability & Operational Policy
          </h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed italic">
            Modus Safaris (UG) Limited is committed to operating as a responsible, ethical, and sustainable safari company within Uganda.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Sidebar Nav */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 custom-scrollbar">
              <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Contents</p>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 border-l border-gray-200 pl-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-left hover:text-[#3a5a40] transition-colors py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <div className="lg:col-span-3 space-y-12 text-gray-700 leading-relaxed text-justify">
            <section id="policy-statement" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineGlobeAlt size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">1. Policy Statement</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris (UG) Limited is committed to operating as a responsible, ethical, and sustainable safari company within Uganda. We recognise tourism as a driver for conservation, community development, and inclusive economic growth when managed responsibly.
                </p>
                <p>
                  Our operations aim to minimise negative environmental and social impacts while maximising long-term benefits for wildlife, host communities, and the national tourism sector. Sustainability principles are embedded in decision-making, daily operations, and strategic planning. This policy provides the guiding framework for all Modus Safaris activities.
                </p>
              </div>
            </section>

            <section id="scope" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineScale size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">2. Scope & Applicability</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  This policy applies to all Modus Safaris operations conducted within Uganda. It covers management, employees, guides, drivers, and contracted personnel. The policy also applies to suppliers, accommodation partners, transport providers, and community partners engaged by the company.
                </p>
                <p>
                  Guests travelling with Modus Safaris are expected to respect and comply with responsible travel guidelines derived from this policy. The policy applies across all destinations, products, and services offered by the company.
                </p>
              </div>
            </section>

            <section id="environmental" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineGlobeAlt size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">3. Environmental Management & Climate Responsibility</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris is committed to protecting the natural environment and reducing its ecological footprint. Environmental considerations are integrated into itinerary design, supplier selection, transport planning, and guest management. We prioritise efficient use of natural resources, pollution prevention, and ecosystem protection.
                </p>
                <div className="bg-zinc-50 p-6 rounded-xl space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">3.1 Transportation & Mobility</h4>
                    <p className="text-sm">We operate well-maintained vehicles, train drivers in fuel-efficient techniques, and plan routes to minimise emissions. alternatives such as shared transfers or domestic flights are considered to reduce environmental impact.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">3.2 Energy Management</h4>
                    <p className="text-sm">We promote responsible energy use across offices and safari operations, preference being given to accommodation partners using renewable energy like solar power.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">3.3 Water Stewardship</h4>
                    <p className="text-sm">We promote responsible water use among staff, guests, and suppliers. Guests are encouraged to reduce laundry frequency and use water responsibly.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">3.4 Waste Management & Pollution Control</h4>
                    <p className="text-sm">We minimise waste generation and pollution. Single-use plastics are actively discouraged, and we promote recycling where infrastructure allows.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="wildlife" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineHeart size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">4. Wildlife Conservation & Biodiversity Protection</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Wildlife conservation is central to Modus Safaris’ operations. The company strictly complies with all Uganda Wildlife Authority (UWA) regulations and protected area guidelines.
                </p>
                <p>
                  Wildlife encounters are conducted in a non-invasive and ethical manner to avoid stress or disturbance. Activities involving exploitation, illegal trade, or unethical interactions with wildlife are strictly prohibited. Clients are educated on responsible wildlife viewing behaviour.
                </p>
              </div>
            </section>

            <section id="community" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">5. Community Engagement & Local Development</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris recognises host communities as essential partners in sustainable tourism. Community engagement is based on respect, consultation, consent, and shared benefit.
                </p>
                <p>
                  Tourism activities are designed to generate income, employment, and skills development at the local level. Community visits are organised in collaboration with local leaders and partners. Long-term partnerships are encouraged.
                </p>
              </div>
            </section>

            <section id="fair-trade" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineScale size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">6. Fair Trade & Ethical Procurement</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris is committed to fair trade principles in all procurement and contracting processes. The company ensures fair pricing, transparent contracting, and timely payments to suppliers and community partners.
                </p>
                <p>
                  Local sourcing is prioritised to maximise economic benefits within Uganda. Exploitative purchasing practices are avoided, and suppliers are encouraged to uphold fair labour conditions.
                </p>
              </div>
            </section>

            <section id="employee" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">7. Employee Welfare & Capacity Building</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris is committed to fair, lawful, and ethical employment practices. Employees are provided with fair wages and working conditions in compliance with Ugandan labour laws.
                </p>
                <p>
                  A safe and healthy working environment is prioritised. Continuous training is provided on sustainability, safety, customer service, and destination knowledge.
                </p>
              </div>
            </section>

            <section id="safety" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">8. Health, Safety & Risk Management</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  The safety of clients, staff, and partners is a core operational priority. Risk assessments are conducted for all activities and destinations.
                </p>
                <p>
                  Vehicles are regularly inspected and maintained. Guides and drivers are trained in first aid, emergency response, and safety procedures. Health and safety information is communicated clearly to clients.
                </p>
              </div>
            </section>

            <section id="seah" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineExclamationCircle size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading text-red-700">9. Prevention of SEAH</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p className="font-medium">
                  Modus Safaris maintains zero tolerance for sexual exploitation, abuse, or harassment in any form.
                </p>
                <p>
                  This applies to staff, suppliers, contractors, guides, drivers, and clients. The company strictly prohibits child sexual exploitation, including any form of child sex tourism. Any suspected incidents are addressed through immediate corrective action in line with Ugandan law.
                </p>
              </div>
            </section>

            <section id="conduct" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">10. Responsible Business Conduct</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris operates with integrity, transparency, and accountability. All activities comply with Ugandan laws and tourism regulations.
                </p>
                <p>
                  Marketing and communication accurately represent products without greenwashing. Contracts with suppliers and partners are clear, fair, and documented.
                </p>
              </div>
            </section>

            <section id="customer" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineLightBulb size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">11. Customer Awareness & Responsible Travel</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Guests are encouraged to actively participate in responsible tourism. Pre-departure information is provided to guide responsible behaviour regarding wildlife ethics and cultural respect.
                </p>
              </div>
            </section>

            <section id="supplier" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">12. Supplier Engagement & Partnership Management</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Modus Safaris works with suppliers who share its sustainability values. Sustainability performance is considered during selection, and preference is given to partners demonstrating strong local and environmental commitment.
                </p>
              </div>
            </section>

            <section id="monitoring" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">13. Monitoring, Compliance & Continuous Improvement</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  The company monitors sustainability performance across operations and partnerships. Regular reviews assess impacts, and feedback from staff and clients informs improvements.
                </p>
              </div>
            </section>

            <section id="communication" className="scroll-mt-28 pb-20">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineGlobeAlt size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading">14. Policy Communication, Implementation & Review</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  This policy is integrated into training and operational procedures. It is publicly available to clients and stakeholders. Management oversight ensures effective implementation. Reviewed at least every two years.
                </p>
                <div className="mt-12 bg-zinc-50 p-8 rounded-2xl border border-gray-100">
                  <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-widest">Formal Approval</p>
                  <p className="text-gray-900 font-bold mb-4">Approved by: Management, Modus Safaris (U) Limited</p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold mb-1">Effective Date</p>
                      <p className="border-b border-gray-300 pb-2 text-gray-900">February 15, 2026</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold mb-1">Next Review Date</p>
                      <p className="border-b border-gray-300 pb-2 text-gray-900">February 15, 2028</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
