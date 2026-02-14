import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"

export default function HealthAndSafety() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "approach", label: "Our Approach" },
    { id: "transport", label: "Transport Safety" },
    { id: "guides-emergency", label: "Guides & Emergency" },
    { id: "health", label: "Health Considerations" },
    { id: "activities", label: "Activities & Risk" },
    { id: "accommodation", label: "Accommodation" },
    { id: "guest-responsibility", label: "Guest Responsibility" },
  ]

  return (
    <div>
      <Helmet>
        <title>Health & Safety | Modus Safaris</title>
        <meta
          name="description"
          content="Your safety is our priority. Learn about Modus Safaris' approach to health and safety, emergency preparedness, and travel risk management."
        />
      </Helmet>

      {/* Header */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80">Safety First</p>
          <h1 className="text-4xl md:text-5xl font-medium font-heading">Health & Safety for Our Clients</h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed">
            At Modus Safaris, the health, safety, and wellbeing of our clients is a core operational priority.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="md:w-64 shrink-0">
            <div className="sticky top-24">
              <p className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Safety Guidelines</p>
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
          <div className="flex-1 space-y-12 text-gray-700 leading-relaxed">
            
            <section id="approach" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Our Approach to Client Safety</h2>
              <p>
                All Modus Safaris journeys are planned and delivered with safety in mind. We conduct risk assessments for destinations, routes, and activities and continuously monitor conditions during travel. Our guides and drivers are trained to manage safety responsibly while ensuring guests enjoy an authentic and relaxed safari experience. Safety considerations are integrated into itinerary design, accommodation selection, and daily operations.
              </p>
            </section>

            <section id="transport" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Transport Safety</h2>
              <p>
                Our safari vehicles are well maintained, roadworthy, and regularly inspected. Drivers are professionally trained, experienced, and familiar with Ugandan road and park conditions. Speed limits, rest breaks, and defensive driving practices are strictly observed. Seatbelts are required where available, and guests are briefed on vehicle safety at the start of each journey.
              </p>
            </section>

            <section id="guides-emergency" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Guides, Staff & Emergency Preparedness</h2>
              <p>
                All Modus Safaris guides and drivers are trained in first aid, emergency response, and client care. Emergency contacts, medical facilities, and evacuation procedures are identified in advance for each itinerary. In the event of an incident, our team acts calmly and professionally to ensure appropriate assistance and communication.
              </p>
            </section>

            <section id="health" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Health Considerations</h2>
              <p>
                Clients are advised to consult their medical providers prior to travel regarding vaccinations and personal health requirements. Guests should inform Modus Safaris of any medical conditions, allergies, or mobility concerns that may affect their participation. Drinking water safety, food hygiene, and basic health precautions are explained during the safari briefing.
              </p>
            </section>

            <section id="activities" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Activities & Risk Management</h2>
              <p>
                All activities offered by Modus Safaris are assessed for safety and suitability. Wildlife viewing is conducted under strict ethical and safety guidelines. Adventure and community activities are facilitated by trained professionals and reputable partners. Guests are expected to follow guide instructions at all times to ensure safety for themselves, wildlife, and communities.
              </p>
            </section>

            <section id="accommodation" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Accommodation Safety</h2>
              <p>
                We work with accommodation partners that maintain appropriate safety and security standards. Lodges are selected based on location, emergency preparedness, hygiene practices, and staff training. Guests are briefed on lodge-specific safety measures upon arrival.
              </p>
            </section>

            <section id="guest-responsibility" className="scroll-mt-28">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Guest Responsibility</h2>
              <p>
                Client safety is a shared responsibility. Guests are expected to follow safety instructions, respect wildlife regulations, use protective equipment where provided, and communicate any concerns promptly. Responsible behaviour enhances safety for everyone and contributes to a positive travel experience.
              </p>
            </section>

            <div className="pt-12 mt-12 border-t border-gray-100 italic">
              <p className="font-medium text-gray-900 mb-2">Continuous Improvement</p>
              <p className="text-sm">
                Health and safety practices are reviewed regularly based on feedback, operational experience, and changing conditions. We work closely with partners and authorities to ensure our standards remain relevant and effective. Our goal is to continuously improve safety while preserving the spirit of exploration and discovery.
              </p>
              <p className="mt-12 text-[#3a5a40] font-bold">Travelling with Modus Safaris means travelling with care, professionalism, and responsibility.</p>
              <p className="text-xs text-gray-400 mt-4">Last updated: February 2026</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
