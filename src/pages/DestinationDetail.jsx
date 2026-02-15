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
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 overflow-x-auto">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <nav className="mx-auto max-w-6xl flex items-center justify-between gap-8 md:gap-12 py-5 text-xs tracking-widest font-bold">
            <a className="text-gray-900 hover:text-[#3a5a40] whitespace-nowrap uppercase border-b-2 border-transparent hover:border-[#3a5a40] transition-all pb-1 translate-y-[1px]" href="#overview">
              OVERVIEW
            </a>
            <a className="text-gray-500 hover:text-[#3a5a40] whitespace-nowrap uppercase border-b-2 border-transparent hover:border-[#3a5a40] transition-all pb-1 translate-y-[1px]" href="#accommodation">
              ACCOMMODATION
            </a>
            <a className="text-gray-500 hover:text-[#3a5a40] whitespace-nowrap uppercase border-b-2 border-transparent hover:border-[#3a5a40] transition-all pb-1 translate-y-[1px]" href="#activities">
              ACTIVITIES
            </a>
            <a className="text-gray-500 hover:text-[#3a5a40] whitespace-nowrap uppercase border-b-2 border-transparent hover:border-[#3a5a40] transition-all pb-1 translate-y-[1px]" href="#why-visit">
              WHY VISIT
            </a>
          </nav>
        </div>
      </div>


      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl">
          <section id="overview" className="scroll-mt-32">
            <div className="flex items-center gap-2 text-[#3a5a40] mb-6">
              <IoLocationOutline size={20} />
              <span className="text-sm font-medium uppercase tracking-[0.2em]">{destination.location}</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 font-heading italic border-l-4 border-[#3a5a40] pl-8 py-3 bg-[#3a5a40]/5 rounded-r-lg">
              {destination.description}
            </p>

            {destination.sections && destination.sections.length > 0 && (
              <div className="space-y-16 mb-12">
                {destination.sections
                  .filter(section => !section.title.toLowerCase().includes('why visit'))
                  .map((section, idx) => (
                  <div key={idx} className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-0.5 flex-1 bg-gray-100" />
                      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 font-heading uppercase italic px-4 text-center">
                        {section.title}
                      </h2>
                      <div className="h-0.5 flex-1 bg-gray-100" />
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
                      {(section.content || []).map((item, i) => {
                        if (item.type === "paragraph") {
                          const isKeyInfo = item.text.includes(': ') && item.text.length < 100;
                          return (
                            <p key={i} className={isKeyInfo ? "bg-zinc-50 p-4 border-l-2 border-amber-400 font-medium text-gray-900" : ""}>
                              {item.text}
                            </p>
                          )
                        }
                        if (item.type === "list") {
                          return (
                            <ul key={i} className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 pl-4">
                              {item.items.map((bullet, j) => (
                                <li key={j} className="flex items-start gap-4">
                                  <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2.5 shrink-0 opacity-60" />
                                  <span className="text-gray-800">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!destination.sections && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                  <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                    Highlights
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#3a5a40] shrink-0" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <hr className="my-16 border-gray-100" />

          {/* ACCOMMODATION SECTION */}
          <section id="accommodation" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-0.5 w-12 bg-[#3a5a40]" />
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 font-heading uppercase italic">
                Accommodation
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              We can include external accommodation near {destination.name}—from classic safari lodges to
              intimate luxury retreats. Below are popular options in the area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(destination.accommodations || []).map((place) => (
                <div key={place.name} className="bg-zinc-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 group border border-transparent hover:border-[#3a5a40]/10">
                  <p className="text-gray-900 font-bold text-lg group-hover:text-[#3a5a40] transition-colors">{place.name}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-600">
                    <span className="text-[#3a5a40] font-medium">{place.type}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" aria-hidden />
                    <span>{place.area}</span>
                  </div>
                </div>
              ))}
              {(destination.accommodations || []).length === 0 && (
                <div className="bg-zinc-50 rounded-xl p-8 text-center md:col-span-2">
                  <p className="text-gray-500 font-medium italic">
                    Accommodation options for this destination are curated specifically for each itinerary.
                  </p>
                </div>
              )}
            </div>
          </section>

          <hr className="my-16 border-gray-100" />

          {/* ACTIVITIES SECTION */}
          <section id="activities" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-0.5 w-12 bg-[#3a5a40]" />
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 font-heading uppercase italic">
                Activities
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Each itinerary is shaped around your interests—wildlife encounters, breathtaking landscapes, rich culture, and meaningful conservation.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[...destination.highlights, "Private game drives", "Guided nature walks", "Community visits"].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-gray-800 text-lg">
                  <span className="w-3 h-3 rounded-full border-2 border-[#3a5a40] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-16 border-gray-100" />

          {/* WHY VISIT SECTION */}
          <section id="why-visit" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-0.5 w-12 bg-[#3a5a40]" />
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 font-heading uppercase italic">
                Why Visit
              </h2>
            </div>

            <div className="bg-[#3a5a40] text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                {destination.sections?.find(s => s.title.toLowerCase().includes('why visit')) ? (
                  <div className="space-y-4">
                    {destination.sections
                      .find(s => s.title.toLowerCase().includes('why visit'))
                      .content.map((item, i) => (
                        <p key={i} className="text-lg md:text-xl leading-relaxed font-heading">
                          {item.text}
                        </p>
                      ))}
                  </div>
                ) : (
                  <p className="text-lg md:text-xl leading-relaxed font-heading">
                    At Modus Safaris UG Limited, we design immersive, responsible, and experts-led experiences in {destination.name}, combining authentic encounters with sustainable tourism practices.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="location-map" className="py-12 md:py-20 bg-zinc-50 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Where This Destination Is Located
            </span>
          </div>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title={`Map of ${destination.name}`}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${destination.latitude || 0},${destination.longitude || 0}&hl=en&z=10&output=embed`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

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

