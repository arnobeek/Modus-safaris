import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { HiOutlineScale, HiOutlineGlobeAlt, HiOutlineShieldCheck, HiOutlineHeart, HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineExclamationCircle, HiOutlineUserCircle } from "react-icons/hi"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const sections = [
  { id: "purpose", title: "1. Purpose", icon: HiOutlineLightBulb },
  { id: "guest-wildlife", title: "2. Respect for Wildlife", icon: HiOutlineHeart },
  { id: "guest-trade", title: "3. Wildlife Trade Policy", icon: HiOutlineExclamationCircle },
  { id: "guest-env", title: "4. Environmental Responsibility", icon: HiOutlineGlobeAlt },
  { id: "guest-community", title: "5. Cultural Respect", icon: HiOutlineUserGroup },
  { id: "guest-safety", title: "6. Health & Safety", icon: HiOutlineShieldCheck },
  { id: "guest-child", title: "7. Child Protection", icon: HiOutlineUserCircle },
  { id: "staff-conduct", title: "8. Professional Conduct", icon: HiOutlineShieldCheck },
  { id: "staff-wildlife", title: "9. Wildlife Protection", icon: HiOutlineHeart },
  { id: "staff-env", title: "10. Environmental Protection", icon: HiOutlineGlobeAlt },
  { id: "staff-safety", title: "11. Duty of Care", icon: HiOutlineShieldCheck },
  { id: "staff-equality", title: "12. Equality & Respect", icon: HiOutlineScale },
  { id: "staff-child", title: "13. Staff Child Protection", icon: HiOutlineUserCircle },
  { id: "staff-community", title: "14. Community Engagement", icon: HiOutlineUserGroup },
  { id: "compliance", title: "15. Compliance", icon: HiOutlineExclamationCircle },
  { id: "implementation", title: "16. Implementation", icon: HiOutlineGlobeAlt },
]

export default function CodeOfConduct() {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white font-ui">
      <Helmet>
        <title>Code of Conduct | Modus Safaris</title>
        <meta
          name="description"
          content="Official Code of Conduct for Guests & Staff of Modus Safaris (UG) Limited. Ethical, environmental, and professional standards."
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80 italic">Sustainability & Ethics</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-heading uppercase italic">
            Code of Conduct for Guests & Staff
          </h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed italic">
            Ensuring ethical, sustainable, and responsible tourism that protects wildlife, preserves heritage, and supports communities.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 custom-scrollbar">
              <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Contents</p>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 border-l border-gray-200 pl-4">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-[#3a5a40] transition-colors py-1"
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-12 text-gray-700 leading-relaxed text-justify">
            
            <section id="purpose" className="scroll-mt-28 border-b border-gray-100 pb-8">
              <p className="font-medium text-gray-900 mb-4 uppercase tracking-wider">Modus Safaris (UG) Limited Code of Conduct</p>
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineLightBulb size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">1. Purpose</h2>
              </div>
              <p>
                This Code of Conduct establishes the ethical, environmental, social, and professional standards expected of all Modus Safaris staff, guests, contractors, and partners. It ensures that tourism activities are conducted responsibly, safely, and sustainably, while protecting wildlife, preserving cultural heritage, and supporting local communities.
              </p>
              <p className="mt-4">
                Modus Safaris is committed to sustainable tourism principles and requires all stakeholders to comply with this Code to ensure tourism contributes positively to conservation, community well-being, and responsible travel.
              </p>
            </section>

            <div className="bg-[#3a5a40]/5 p-8 rounded-2xl mb-12 border border-[#3a5a40]/10">
              <h3 className="text-2xl font-heading text-[#3a5a40] italic mb-4">PART A: CODE OF CONDUCT FOR GUESTS</h3>
            </div>

            <section id="guest-wildlife" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineHeart size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">2. Respect for Wildlife and Natural Ecosystems</h2>
              </div>
              <p>
                Wildlife conservation is fundamental to Modus Safaris’ operations. Guests must respect wildlife and natural environments at all times. Guests must:
              </p>
              <ul className="mt-4 space-y-3 pl-6">
                <li className="list-disc">Follow all instructions from guides, park rangers, and authorities.</li>
                <li className="list-disc">Maintain safe and respectful distances from wildlife.</li>
                <li className="list-disc">Never feed, touch, chase, or disturb animals.</li>
                <li className="list-disc">Avoid loud noises and sudden movements that may stress wildlife.</li>
                <li className="list-disc">Remain inside safari vehicles unless permitted by guides or park authorities.</li>
                <li className="list-disc">Respect protected areas and conservation regulations.</li>
              </ul>
              <p className="mt-4 italic text-sm">Disturbing wildlife may threaten animal safety and violate conservation laws.</p>
            </section>

            <section id="guest-trade" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineExclamationCircle size={28} className="text-red-700" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">3. Wildlife Harvest, Poaching, and Wildlife Trade Policy</h2>
              </div>
              <p>
                Modus Safaris maintains a strict zero-tolerance policy toward the illegal harvest, capture, harm, possession, consumption, or trade of wildlife and wildlife products. This includes any activities that threaten protected species, endangered wildlife, or natural ecosystems.
              </p>
              <div className="mt-6 bg-red-50 p-6 rounded-xl border border-red-100">
                <p className="font-bold text-red-800 mb-4 uppercase text-sm tracking-wider">Prohibited Activities:</p>
                <ul className="space-y-3 text-red-900/80">
                  <li className="list-disc ml-4">Hunting, capturing, injuring, or killing any wildlife species unless explicitly permitted under licensed programs.</li>
                  <li className="list-disc ml-4">Purchasing, collecting, or transporting wildlife products such as ivory, skins, bones, horns, shells, etc.</li>
                  <li className="list-disc ml-4">Participating in activities involving endangered, threatened, or protected species.</li>
                  <li className="list-disc ml-4">Supporting illegal wildlife trade directly or indirectly.</li>
                  <li className="list-disc ml-4">Removing plants, animals, or natural materials from protected areas.</li>
                </ul>
              </div>
              <p className="mt-6">
                Guests must comply fully with all national wildlife protection laws and international conservation regulations, including CITES. Any violation may result in immediate termination of the safari and reporting to relevant authorities.
              </p>
            </section>

            <section id="guest-env" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineGlobeAlt size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">4. Environmental Responsibility</h2>
              </div>
              <p>
                Guests are expected to minimize environmental impact and protect natural resources. Guests must:
              </p>
              <ul className="mt-4 space-y-3 pl-6">
                <li className="list-disc">Dispose of waste responsibly and never litter.</li>
                <li className="list-disc">Avoid using single-use plastics where possible.</li>
                <li className="list-disc">Respect vegetation and natural habitats.</li>
                <li className="list-disc">Avoid damaging plants, ecosystems, or cultural sites.</li>
                <li className="list-disc">Use water and electricity responsibly.</li>
              </ul>
            </section>

            <section id="guest-community" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">5. Cultural Respect and Community Interaction</h2>
              </div>
              <p>
                Modus Safaris promotes respectful and ethical cultural engagement. Guests must:
              </p>
              <ul className="mt-4 space-y-3 pl-6">
                <li className="list-disc">Respect local customs, traditions, and cultural values.</li>
                <li className="list-disc">Dress appropriately when visiting communities or religious sites.</li>
                <li className="list-disc">Ask permission before taking photographs of people.</li>
                <li className="list-disc">Avoid giving money or gifts directly to children.</li>
                <li className="list-disc">Support local communities through responsible purchases.</li>
              </ul>
            </section>

            <section id="guest-safety" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">6. Health, Safety, and Responsible Behaviour</h2>
              </div>
              <p>
                Guest safety is a priority. Guests must follow safety instructions provided by guides, inform staff of any medical conditions, and avoid illegal drugs or disruptive behaviour. Unsafe conduct may result in removal from the tour.
              </p>
            </section>

            <section id="guest-child" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserCircle size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">7. Child Protection and Safeguarding</h2>
              </div>
              <p>
                Modus Safaris maintains a strict child protection policy. Guests must never engage in any form of child exploitation or abuse, and must respect children’s dignity, privacy, and rights. Report any concerns to staff immediately.
              </p>
            </section>

            <div className="bg-[#3a5a40]/5 p-8 rounded-2xl mb-12 border border-[#3a5a40]/10">
              <h3 className="text-2xl font-heading text-[#3a5a40] italic mb-4">PART B: CODE OF CONDUCT FOR STAFF & GUIDES</h3>
            </div>

            <section id="staff-conduct" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">8. Professional Conduct and Integrity</h2>
              </div>
              <p>
                Staff must demonstrate professionalism and ethical conduct at all times, acting honestly and treating all individuals with respect.
              </p>
            </section>

            <section id="staff-wildlife" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineHeart size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">9. Wildlife Protection and Anti-Poaching Responsibilities</h2>
              </div>
              <p>
                All staff and guides are required to actively prevent and discourage wildlife harvesting and illegal wildlife trade. facilitating access to wildlife for illegal purposes is strictly prohibited.
              </p>
            </section>

            <section id="staff-env" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineGlobeAlt size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">10. Environmental Protection Responsibilities</h2>
              </div>
              <p>
                Staff must promote sustainable environmental practices, educate guests on responsible tourism, and report environmental violations.
              </p>
            </section>

            <section id="staff-safety" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">11. Health, Safety, and Duty of Care</h2>
              </div>
              <p>
                Staff is responsible for ensuring safety through briefings, equipment maintenance, and responsible driving.
              </p>
            </section>

            <section id="staff-equality" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineScale size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">12. Equality, Non-Discrimination, and Respect</h2>
              </div>
              <p>
                Modus Safaris promotes equality and respect. Staff must avoid discrimination and respect diversity and cultural differences.
              </p>
            </section>

            <section id="staff-child" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserCircle size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">13. Child Protection Responsibilities</h2>
              </div>
              <p>
                Staff must protect children and follow child protection policies at all times.
              </p>
            </section>

            <section id="staff-community" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">14. Responsible Community Engagement</h2>
              </div>
              <p>
                Staff must support ethical community tourism and ensure fair community benefits.
              </p>
            </section>

            <section id="compliance" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineExclamationCircle size={28} className="text-red-700" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">15. Compliance and Enforcement</h2>
              </div>
              <p>
                Failure to comply with this Code of Conduct may result in removal from tours, disciplinary action, or legal action.
              </p>
            </section>

            <section id="implementation" className="scroll-mt-28 pb-20">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineGlobeAlt size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">16. Implementation and Communication</h2>
              </div>
              <div className="prose prose-zinc max-w-none text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                  This Code of Conduct will be shared with guests before travel, included in staff training, and available on the Modus Safaris website. Reviewed annually.
                </p>
                <div className="mt-12 bg-zinc-50 p-8 rounded-2xl border border-gray-100">
                  <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-widest">Formal Approval</p>
                  <p className="text-gray-900 font-bold mb-4">Approved by: Management, Modus Safaris (UG) Limited</p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold mb-1">Effective Date</p>
                      <p className="border-b border-gray-300 pb-2 text-gray-900">15 October 2025</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold mb-1">Next Review Date</p>
                      <p className="border-b border-gray-300 pb-2 text-gray-900">15 October 2026</p>
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
