import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { IoLocationOutline } from "react-icons/io5"
import Footer from "../components/Footer"
import { destinations } from "../data/destinations"
import { getExperienceBySlug } from "../data/experiences"
import ExperienceCard from "../components/ExperienceCard"

export default function DestinationDetail() {
  const { countrySlug, slug } = useParams()
  const destination = destinations.find((d) => d.slug === slug)

  if (!destination) {
    return (
      <div>
        <Helmet>
          <title>Destination Not Found | Modus Safaris</title>
        </Helmet>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 bg-zinc-100">
          <hr className="w-10 h-1 bg-[#3a5a40] border-none mb-6" />
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Destination not found</h1>
          <p className="text-gray-600 text-center max-w-md mb-8">
            The destination you're looking for doesn't exist. Explore our available safari destinations.
          </p>
          <Link
            to={`/destinations/${countrySlug || "uganda"}`}
            className="px-6 py-3 bg-[#3a5a40] shadow text-white font-medium hover:scale-105 transition-all duration-300"
          >
            Back to {countrySlug || "destinations"}
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const heroImage = destination.images[0]
  const galleryImages = destination.images.slice(1)
  
  const seoTitle = `${destination.name} | ${destination.location} Safari | Modus Safaris`
  const seoDescription = `${destination.description.substring(0, 155)}...`

  return (
    <div>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={heroImage} />
        <meta property="og:site_name" content="Modus Safaris" />
      </Helmet>

      <header
        className="text-white flex flex-col gap-5 justify-center min-h-[60vh] md:min-h-[70vh] px-6 md:px-10 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage || "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-2">
          <Link 
            to={`/destinations/${countrySlug}`} 
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm tracking-widest uppercase mb-2"
          >
            <span>&larr;</span> {destination.location}
          </Link>
          <div className="flex items-center gap-2">
            <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">{destination.name}</h1>
          </div>
        </div>
      </header>

      {/* In-page section navigation */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <nav className="mx-auto max-w-4xl flex gap-10 overflow-x-auto py-5 text-sm tracking-widest md:gap-0 md:justify-between">
            <a className="text-gray-800 hover:text-[#3a5a40] whitespace-nowrap font-medium" href="#overview">
              OVERVIEW
            </a>
            <a className="text-gray-800 hover:text-[#3a5a40] whitespace-nowrap font-medium" href="#accommodation">
              ACCOMMODATION
            </a>
            <a className="text-gray-800 hover:text-[#3a5a40] whitespace-nowrap font-medium" href="#activities">
              ACTIVITIES
            </a>
          </nav>
        </div>
      </div>


      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <section id="overview" className="scroll-mt-28">
            <div className="flex items-center gap-2 text-[#3a5a40] mb-6">
              <IoLocationOutline size={20} />
              <span className="text-sm font-medium">{destination.location}</span>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
              {destination.description}
            </p>

            <div className="flex items-center gap-3 mb-8">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Highlights
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#3a5a40] shrink-0" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-14 border-gray-200" />

          <section id="accommodation" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Accommodation
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              We can include external accommodation near {destination.name}—from classic safari lodges to
              intimate luxury retreats. Below are popular options in the area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(destination.accommodations || []).map((place) => (
                <div key={place.name} className="bg-zinc-100 rounded-xl p-6">
                  <p className="text-gray-900 font-medium">{place.name}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-600">
                    <span className="text-[#3a5a40] font-medium">{place.type}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3a5a40]" aria-hidden />
                    <span>{place.area}</span>
                  </div>
                </div>
              ))}
              {(destination.accommodations || []).length === 0 && (
                <div className="bg-zinc-100 rounded-xl p-6">
                  <p className="text-gray-900 font-medium">Accommodation options</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Accommodation options for this destination will be added soon.
                  </p>
                </div>
              )}
            </div>
          </section>

          <hr className="my-14 border-gray-200" />

          <section id="activities" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Activities
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              Each itinerary is shaped around your interests—wildlife, landscapes, culture, and conservation.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ...destination.highlights,
                "Private game drives",
                "Guided nature walks",
                "Sundowner experiences",
                "Cultural encounters",
              ].map((item, index) => (
                <li key={`${item}-${index}`} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#3a5a40] shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {galleryImages.length > 0 && (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-zinc-100">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">Gallery</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl aspect-4/3">
                  <img
                    src={image}
                    alt={`${destination.name} - Image ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

