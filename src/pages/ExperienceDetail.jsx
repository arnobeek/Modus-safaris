import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useState } from "react"
import Footer from "../components/Footer"
import { destinations } from "../data/destinations"
import { getExperienceBySlug, getExperiencesByCountry } from "../data/experiences"
import ExperienceCard from "../components/ExperienceCard"
import { HiOutlineCalendar, HiOutlineCurrencyDollar, HiOutlineCheck, HiOutlineX, HiChevronDown } from "react-icons/hi"

function ItineraryDay({ day, isLast }) {
  const [isOpen, setIsOpen] = useState(day.day === 1)

  return (
    <div className={`${!isLast ? "border-b border-gray-200" : ""}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#3a5a40] text-white flex items-center justify-center font-medium shrink-0">
            {day.day}
          </div>
          <h4 className="text-lg font-medium text-gray-900">{day.title}</h4>
        </div>
        <HiChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <div className="pl-14 pr-2 space-y-3">
          <p className="text-gray-600 leading-relaxed">{day.description}</p>
          {day.accommodation && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium text-[#3a5a40]">Accommodation:</span>
              {day.accommodation}
            </div>
          )}
          {day.meals && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium text-[#3a5a40]">Meals:</span>
              {day.meals}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceDetail() {
  const { countrySlug, slug, experienceSlug } = useParams()
  const experience = getExperienceBySlug(experienceSlug)

  if (!experience) {
    return (
      <div>
        <Helmet>
          <title>Experience Not Found | Modus Safaris</title>
        </Helmet>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-zinc-100 pt-28">
          <hr className="w-10 h-1 bg-[#3a5a40] border-none mb-6" />
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Experience not found</h1>
          <p className="text-gray-600 text-center max-w-md mb-8">
            The experience you're looking for doesn't exist. Explore our available safari experiences.
          </p>
          <Link
            to="/experiences"
            className="px-6 py-3 bg-[#3a5a40] shadow text-white font-medium hover:scale-105 transition-all duration-300"
          >
            View all experiences
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  // Find destination name for breadcrumbs
  const destination = destinations.find(d => d.slug === experience.destination)

  const relatedExperiences = getExperiencesByCountry(experience.country)
    .filter((exp) => exp.slug !== experienceSlug) // Changed slug to experienceSlug
    .slice(0, 2)

  const seoTitle = `${experience.title} | ${experience.country} Safari | Modus Safaris`
  const seoDescription = `${experience.summary.substring(0, 155)}...` // Kept original substring logic

  return (
    <div>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={experience.heroImage} />
        <meta property="og:site_name" content="Modus Safaris" />
      </Helmet>

      {/* Hero */}
      <header
        className="text-white flex flex-col gap-5 justify-center min-h-[60vh] md:min-h-[70vh] px-6 md:px-10 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${experience.heroImage || "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-2">
          <nav className="flex items-center gap-2 text-white/90 text-xs md:text-sm tracking-widest uppercase mb-4 overflow-x-auto whitespace-nowrap py-2">
            <Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span>/</span>
            <Link to={`/destinations/${countrySlug}`} className="hover:text-white transition-colors">{experience.country}</Link>
            <span>/</span>
            <Link to={`/destinations/${countrySlug}/${slug}`} className="hover:text-white transition-colors">{destination?.name || experience.destination}</Link>
          </nav>
          <div className="flex items-center gap-2">
            <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              {experience.title}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <HiOutlineCalendar className="w-5 h-5" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <HiOutlineCurrencyDollar className="w-5 h-5" />
            <span>From ${experience.startingPrice.toLocaleString()}</span>
          </div>
          <span className="bg-[#3a5a40] px-4 py-2 rounded-full">{experience.travelStyle}</span>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">Overview</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{experience.summary}</p>
              <div className="flex flex-wrap gap-3">
                {experience.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-100 text-gray-700 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">Day by Day</span>
              </div>
              <div className="bg-zinc-50 rounded-xl p-4 md:p-6">
                {experience.itinerary.map((day, index) => (
                  <ItineraryDay
                    key={day.day}
                    day={day}
                    isLast={index === experience.itinerary.length - 1}
                  />
                ))}
              </div>
            </section>

            {/* Gallery */}
            {experience.gallery.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                  <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">Gallery</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {experience.gallery.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg aspect-square">
                      <img
                        src={image}
                        alt={`${experience.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800"
                        }}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Booking card */}
            <div className="sticky top-24 bg-zinc-50 rounded-xl p-6 space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Starting from</p>
                <p className="text-3xl font-medium text-gray-900">
                  ${experience.startingPrice.toLocaleString()}
                  <span className="text-lg font-normal text-gray-500"> / person</span>
                </p>
              </div>
              <Link
                to={`/booking?experience=${experience.slug}`}
                className="block w-full text-center px-6 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-[1.02] transition-all duration-300"
              >
                Book This Experience
              </Link>
              <p className="text-sm text-gray-500 text-center">
                Free cancellation up to 30 days before
              </p>

              <hr className="border-gray-200" />

              {/* Included */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <HiOutlineCheck className="w-5 h-5 text-[#3a5a40]" />
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {experience.included.slice(0, 5).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3a5a40] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                  {experience.included.length > 5 && (
                    <li className="text-sm text-[#3a5a40] font-medium">
                      +{experience.included.length - 5} more items
                    </li>
                  )}
                </ul>
              </div>

              {/* Excluded */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <HiOutlineX className="w-5 h-5 text-red-500" />
                  Not Included
                </h4>
                <ul className="space-y-2">
                  {experience.excluded.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related experiences */}
      {relatedExperiences.length > 0 && (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-zinc-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                More in {experience.country}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
