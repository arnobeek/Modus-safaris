import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import ExperienceCard from "../components/ExperienceCard"
import { experiences } from "../data/experiences"

const SEO = {
  title: "Safari Experiences | Curated Itineraries | Modus Safaris",
  description:
    "Discover curated safari experiences in East Africa: gorilla trekking, wildlife safaris, and the Great Migration. Luxury itineraries in Uganda, Kenya, Tanzania & Rwanda.",
  ogImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80",
}

const COUNTRIES = ["All", "Uganda", "Kenya", "Tanzania", "Rwanda"]
const DURATIONS = ["All", "3-5 Days", "6-8 Days", "9+ Days"]

export default function Experiences() {
  const [selectedCountry, setSelectedCountry] = useState("All")
  const [selectedDuration, setSelectedDuration] = useState("All")

  const filteredExperiences = experiences.filter((exp) => {
    const countryMatch = selectedCountry === "All" || exp.country === selectedCountry
    
    let durationMatch = true
    if (selectedDuration === "3-5 Days") {
      durationMatch = exp.durationDays >= 3 && exp.durationDays <= 5
    } else if (selectedDuration === "6-8 Days") {
      durationMatch = exp.durationDays >= 6 && exp.durationDays <= 8
    } else if (selectedDuration === "9+ Days") {
      durationMatch = exp.durationDays >= 9
    }
    
    return countryMatch && durationMatch
  })

  return (
    <div>
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:site_name" content="Modus Safaris" />
      </Helmet>

      {/* Hero */}
      <header className="text-white flex flex-col gap-5 justify-center min-h-[60vh] md:min-h-[70vh] px-6 md:px-10 hero-image-experiences">
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest">DISCOVER EAST AFRICA</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium">Safari Experiences</h1>
        <p className="text-base md:text-xl max-w-2xl leading-relaxed">
          Curated itineraries designed to immerse you in East Africa's wildlife, landscapes, and cultures.
          Each journey is crafted for unforgettable moments.
        </p>
      </header>

      {/* Categories Overview */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Explore by Category
              </span>
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
              Our Safari Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gorilla & Chimpanzee Tracking */}
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-[#3a5a40] mb-4 flex items-center gap-2">
                Gorilla & Chimpanzee Tracking
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Bwindi Impenetrable National Park
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Mgahinga Gorilla National Park
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Kibale Forest National Park
                </li>
              </ul>
            </div>

            {/* Wildlife & Big Game Safaris */}
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-[#3a5a40] mb-4 flex items-center gap-2">
                Wildlife & Big Game Safaris
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Queen Elizabeth National Park
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Murchison Falls National Park
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Kidepo Valley National Park
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Lake Mburo National Park
                </li>
              </ul>
            </div>

            {/* Cultural & Community-Based Tourism */}
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-[#3a5a40] mb-4 flex items-center gap-2">
                Cultural & Community
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Village walks and cultural encounters
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Community homestays
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Traditional music, dance, and storytelling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Craft and culinary experiences
                </li>
              </ul>
            </div>

            {/* Adventure & Nature Experiences */}
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-[#3a5a40] mb-4 flex items-center gap-2">
                Adventure & Nature
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Boat safaris on the Nile and Kazinga Channel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Hiking and nature walks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Birding safaris (Uganda – the Pearl of Africa)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Mountain trekking and photography safaris
                </li>
              </ul>
            </div>

            {/* Tailor-Made & Luxury Safaris */}
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-medium text-[#3a5a40] mb-4 flex items-center gap-2">
                Tailor-Made & Luxury
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Honeymoon safaris
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Family-friendly tours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Corporate and group travel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3a5a40] mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                  Budget, mid-range, and luxury packages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6 bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((country) => (
              <button
                key={country}
                type="button"
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCountry === country
                    ? "bg-[#3a5a40] text-white"
                    : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-gray-500 hidden sm:inline">Duration:</span>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3a5a40]/20"
            >
              {DURATIONS.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Experience grid */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          {filteredExperiences.length > 0 ? (
            <>
              <p className="text-gray-600 mb-8">
                Showing {filteredExperiences.length} experience{filteredExperiences.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredExperiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-4">No experiences match your filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCountry("All")
                  setSelectedDuration("All")
                }}
                className="text-[#3a5a40] font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Journey CTA */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 flex flex-col items-center gap-8 text-center bg-white">
        <div className="flex flex-col gap-3 max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
            Create Your Perfect Journey
          </h2>
          <p className="text-gray-600">
            Don't see exactly what you're looking for? We specialize in tailor-made safaris crafted
            around your interests, timeline, and budget.
          </p>
        </div>
        <Link
          to="/booking"
          className="w-full sm:w-auto min-w-48 px-8 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-105 transition-all duration-300"
        >
          Start Planning
        </Link>
      </section>

      <Footer />
    </div>
  )
}
