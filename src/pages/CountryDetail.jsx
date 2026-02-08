
import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { IoLocationOutline } from "react-icons/io5"
import Footer from "../components/Footer"
import DestinationCard from "../components/DestinationCard"
import ExperienceCard from "../components/ExperienceCard"
import { countries } from "../data/countries"
import { destinations } from "../data/destinations"
import { experiences } from "../data/experiences"

export default function CountryDetail() {
  const { countrySlug } = useParams()
  
  // Find the country data
  const country = countries.find(c => c.slug === countrySlug)
  
  // Filter destinations belonging to this country
  const countryDestinations = country 
    ? destinations.filter(d => d.location === country.name)
    : []

  // Filter experiences belonging to this country
  const countryExperiences = country
    ? experiences.filter(e => e.country === country.name)
    : []

  if (!country) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center p-10">
          <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
          <Link to="/destinations" className="text-[#3a5a40] hover:underline">Return to Destinations</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const seoTitle = `${country.name} Safaris & Tours | Modus Safaris`
  const seoDescription = country.summary

  return (
    <div>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={country.heroImage} />
      </Helmet>

      {/* Hero */}
      <header 
        className="text-white flex flex-col gap-6 justify-center min-h-[60vh] md:min-h-[75vh] px-6 md:px-10 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${country.heroImage || "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest uppercase">Explore East Africa</p>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium">{country.name}</h1>
        <p className="text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
          {country.summary}
        </p>
      </header>

      {/* Sticky Sub-nav */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <nav className="mx-auto max-w-4xl flex justify-between overflow-x-auto py-5 text-sm tracking-widest font-medium text-gray-800">
            <a href="#overview" className="hover:text-[#3a5a40] whitespace-nowrap uppercase">
              Overview
            </a>
            <a href="#parks" className="hover:text-[#3a5a40] whitespace-nowrap uppercase">
              Famous Parks
            </a>
            <a href="#experiences" className="hover:text-[#3a5a40] whitespace-nowrap uppercase">
              Safari Itineraries
            </a>
          </nav>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Discover {country.name}
              </span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {country.description}
            </p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-4">Highlights</h3>
            <ul className="grid grid-cols-1 gap-3">
              {country.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#3a5a40] shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {Object.entries(country.facts).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs font-semibold text-[#3a5a40] tracking-wider uppercase mb-1">{key}</p>
                  <p className="text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <div id="parks" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-100 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              Famous Parks in {country.name}
            </h2>
          </div>
          
          {countryDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countryDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No specific destinations listed yet for {country.name}.</p>
          )}
        </div>
      </div>

      {/* Experiences Section */}
      <section id="experiences" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Ready for adventure?
              </span>
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            </div>
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight">
              Featured {country.name} Safaris
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our curated selection of pre-designed itineraries or use them as a starting point for your custom journey.
            </p>
          </div>

          {countryExperiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countryExperiences.map(experience => (
                <ExperienceCard key={experience.slug} experience={experience} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-center">No curated experiences available for {country.name} yet.</p>
          )}

          {/* Tailor-Made CTA */}
          <div className="mt-20 p-8 md:p-12 bg-zinc-50 border border-zinc-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                Can't find exactly what you're looking for?
              </h3>
              <p className="text-gray-600">
                Our safari experts are ready to design a personalized {country.name} itinerary that fits your specific interests, budget, and timeline.
              </p>
            </div>
            <Link
              to="/booking"
              className="whitespace-nowrap px-8 py-4 bg-[#3a5a40] text-white font-medium rounded-full shadow-lg hover:bg-[#2d4632] hover:scale-105 transition-all duration-300"
            >
              Plan Your Custom Safari
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
