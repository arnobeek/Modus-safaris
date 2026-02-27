
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
        <link rel="canonical" href={`https://modussafaris.com/destinations/${countrySlug}`} />
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
              Places To Visit
            </a>
            <a href="#experiences" className="hover:text-[#3a5a40] whitespace-nowrap uppercase">
              Safari Itineraries
            </a>
          </nav>
        </div>
      </div>

      {/* Overview & Travel Guide Section */}
      <section id="overview" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          {country.guide ? (
            <div className="space-y-24">
              {/* 1. Welcome Section */}
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                  <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase italic">
                    {country.guide.welcome.title}
                  </span>
                </div>
                <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-justify">
                  {country.guide.welcome.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* 2. Why Captivates Section */}
              <div className="items-start">
                <div className="bg-[#3a5a40]/5 p-10 rounded-3xl border border-[#3a5a40]/10">
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 font-heading italic uppercase">
                    {country.guide.whyVisit.title}
                  </h3>
                  <p className="text-gray-700 mb-8 italic">
                    {country.guide.whyVisit.intro}
                  </p>
                  <ul className="space-y-4">
                    {country.guide.whyVisit.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-700">
                        <span className="w-2 h-2 mt-2.5 rounded-full bg-[#3a5a40] shrink-0" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 font-medium text-[#3a5a40] italic">
                    {country.guide.whyVisit.outro}
                  </p>
                </div>
              </div>

              {/* 3. Signature Destinations */}
              <div>
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-5xl font-medium text-gray-900 font-heading italic uppercase">
                    {country.guide.destinations.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {country.guide.destinations.items.map((item, i) => (
                    <div key={i} className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
                      <h4 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-[#3a5a40] transition-colors leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed text-justify">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. When to Visit & Experiences */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-zinc-900 text-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-medium mb-6 font-heading italic uppercase tracking-wider">
                    {country.guide.seasons.title}
                  </h3>
                  <p className="opacity-80 mb-8 italic">{country.guide.seasons.text}</p>
                  <div className="space-y-6">
                    {country.guide.seasons.categories.map((cat, i) => (
                      <div key={i} className="border-l-2 border-[#3a5a40] pl-6">
                        <p className="text-sm uppercase tracking-widest text-[#588157] font-bold mb-1">{cat.label}</p>
                        <p className="text-xl font-light">{cat.months}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-10 pt-6 border-t border-white/10 text-sm opacity-60 italic">
                    {country.guide.seasons.outro}
                  </p>
                </div>

                <div className="bg-[#3a5a40] text-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-medium mb-6 font-heading italic uppercase tracking-wider">
                    {country.guide.experiences.title}
                  </h3>
                  <ul className="space-y-4">
                    {country.guide.experiences.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a3b18a] shrink-0" />
                        <span className="text-lg font-light tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-10 pt-6 border-t border-white/10 text-sm opacity-80 italic">
                    {country.guide.experiences.outro}
                  </p>
                </div>
              </div>

              {/* 5. Culture & Meaning */}
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 font-heading italic uppercase">
                  {country.guide.culture.title}
                </h3>
                <div className="space-y-6 text-xl text-gray-700 leading-relaxed italic">
                  {country.guide.culture.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* 6. Responsible Travel */}
              <div className="relative overflow-hidden bg-white border-2 border-[#3a5a40]/10 p-12 rounded-[3rem] text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#3a5a40]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3a5a40]/5 rounded-full -ml-32 -mb-32 blur-3xl" />
                
                <h3 className="text-2xl font-medium text-[#3a5a40] mb-4 font-heading italic uppercase tracking-widest">
                  {country.guide.responsibleTravel.title}
                </h3>
                <p className="text-xl text-gray-900 font-medium mb-8">
                  {country.guide.responsibleTravel.intro}
                </p>
                <p className="text-gray-600 mb-8 italic">
                  {country.guide.responsibleTravel.outro}
                </p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-10">
                  {country.guide.responsibleTravel.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3a5a40]" />
                      {p}
                    </div>
                  ))}
                </div>
                <p className="text-2xl font-heading text-[#3a5a40] italic">
                  "{country.guide.responsibleTravel.closing}"
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
          )}
        </div>
      </section>

      {/* Destinations Grid */}
      <div id="parks" className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-100 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              Places To Visit in {country.name}
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
