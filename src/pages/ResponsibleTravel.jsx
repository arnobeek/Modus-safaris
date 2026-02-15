import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"

export default function ResponsibleTravel() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "respect-wildlife", label: "1. Respect Wildlife" },
    { id: "protect-environment", label: "2. Protect Natural Environments" },
    { id: "water-energy", label: "3. Water & Energy" },
    { id: "culture-community", label: "4. Cultures & Communities" },
    { id: "ethical-tourism", label: "5. Fair & Ethical Tourism" },
    { id: "health-responsibility", label: "6. Health & Safety" },
    { id: "no-exploitation", label: "7. Zero Tolerance" },
    { id: "ambassador", label: "8. Be an Ambassador" },
  ]

  return (
    <div>
      <Helmet>
        <title>Responsible Travel Code | Modus Safaris</title>
        <meta
          name="description"
          content="Learn about the Modus Safaris Guest Responsible Travel Code. Simple principles for respectful and sustainable travel in Uganda."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20 pt-16">
        <div className="max-w-4xl mx-auto text-center md:text-left pt-16">
          <p className="text-sm tracking-[0.2em] uppercase mb-4 opacity-80">Sustainability</p>
          <h1 className="text-4xl md:text-5xl font-medium font-heading italic">
            Guest Responsible Travel Code
          </h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed">
            Responsible travel creates positive experiences for guests while protecting Uganda&apos;s wildlife, environment, and communities.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-24">
              <p className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Principles</p>
              <nav className="flex flex-col gap-4 text-sm text-gray-500 border-l border-gray-100 pl-6">
                {sections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-[#3a5a40] hover:translate-x-1 transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-16 text-gray-700 leading-relaxed text-lg text-justify">
            
            <p className="text-gray-900 font-medium border-l-4 border-[#3a5a40] pl-6 py-2 bg-gray-50">
              At Modus Safaris, we believe responsible travel creates positive experiences for our guests while protecting Uganda’s wildlife, environment, and communities. This code outlines simple principles to help you travel respectfully and sustainably.
            </p>

            <section id="respect-wildlife" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 01</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">1. Respect Wildlife</h2>
              <p>
                Observe wildlife quietly and at a safe distance, following your guide’s instructions at all times. Never feed, touch, chase, or attempt to attract animals. Keep noise levels low to avoid disturbing wildlife and other visitors. Flash photography is discouraged, especially around primates and nocturnal animals. Your respectful behaviour helps protect animal welfare and natural habitats.
              </p>
            </section>

            <section id="protect-environment" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 02</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">2. Protect Natural Environments</h2>
              <p>
                Stay on designated roads, tracks, and trails at all times. Do not remove plants, stones, or natural objects from parks or reserves. Avoid littering and ensure all waste is taken back to designated disposal points. Use reusable water bottles and minimise plastic use during your trip. Small actions help preserve Uganda’s landscapes for future generations.
              </p>
            </section>

            <section id="water-energy" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 03</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">3. Use Water & Energy Responsibly</h2>
              <p>
                Water and energy are limited resources in many parts of Uganda. Please limit shower times and reuse towels where possible. Switch off lights, air conditioning, and electronic devices when not in use. Support lodges that use renewable energy by adopting energy-conscious behaviour. Responsible use of resources reduces environmental impact.
              </p>
            </section>

            <section id="culture-community" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 04</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">4. Respect Local Cultures & Communities</h2>
              <p>
                Dress modestly and behave respectfully, especially in rural and community settings. Always ask permission before taking photographs of people or cultural sites. Respect local customs, traditions, and beliefs as explained by your guide. Support local livelihoods by purchasing locally made crafts and services. Your respect helps build positive relationships with host communities.
              </p>
            </section>

            <section id="ethical-tourism" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 05</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">5. Support Fair & Ethical Tourism</h2>
              <p>
                Choose experiences that benefit local communities and conservation initiatives. Avoid purchasing wildlife products, antiques, or items made from endangered species. Pay fair prices and respect community guidelines during visits. Ethical choices help ensure tourism benefits are shared fairly.
              </p>
            </section>

            <section id="health-responsibility" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 06</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">6. Health, Safety & Personal Responsibility</h2>
              <p>
                Follow your guide’s safety instructions at all times. Inform your guide of any health concerns that may affect your participation in activities. Use seatbelts where available and follow vehicle safety rules. Responsible behaviour helps ensure a safe and enjoyable safari for everyone.
              </p>
            </section>

            <section id="no-exploitation" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 07</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">7. Zero Tolerance for Exploitation</h2>
              <p>
                Modus Safaris maintains zero tolerance for sexual exploitation, abuse, or harassment. This includes any form of child exploitation or inappropriate behaviour towards local communities. Guests are expected to uphold safeguarding principles and report any concerns to their guide or Modus Safaris staff immediately.
              </p>
            </section>

            <section id="ambassador" className="scroll-mt-28 group">
              <span className="text-[#3a5a40] font-bold text-sm tracking-widest uppercase mb-2 block">Principle 08</span>
              <h2 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors">8. Be an Ambassador for Responsible Travel</h2>
              <p>
                Your actions reflect responsible tourism values. Ask questions, learn from local guides, and share positive, respectful stories of Uganda. Provide feedback to help us improve our sustainability efforts. Together, we can ensure tourism remains a force for good.
              </p>
            </section>

            <div className="pt-16 mt-16 border-t border-gray-100 text-center md:text-left">
              <p className="font-bold text-gray-900 text-xl font-heading mb-2">Thank you for travelling responsibly with Modus Safaris.</p>
              <p className="text-[#3a5a40] italic">Your Travel Companion – Responsible Journeys in Uganda</p>
              <p className="text-xs text-gray-400 mt-8">Last updated: February 2026</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
