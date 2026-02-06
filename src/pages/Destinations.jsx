import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import DestinationCard from "../components/DestinationCard"

const SEO = {
  title: "Safari Destinations | Uganda, Kenya, Tanzania & Rwanda | Modus Safaris",
  description:
    "Explore East Africa's finest safari destinations: Bwindi gorilla trekking, Serengeti, Masai Mara, Ngorongoro, Murchison Falls. Luxury safari parks and wildlife reserves.",
  ogImage: "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=1200&auto=format&fit=crop&q=80",
}

import { destinations } from "../data/destinations"

const COUNTRIES = ["All", "Uganda", "Kenya", "Tanzania", "Rwanda"]

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams()
  const countryFromUrl = searchParams.get("country")
  
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (countryFromUrl && COUNTRIES.includes(countryFromUrl)) {
      return countryFromUrl
    }
    return "All"
  })

  // Sync state with URL changes
  useEffect(() => {
    if (countryFromUrl && COUNTRIES.includes(countryFromUrl)) {
      setSelectedCountry(countryFromUrl)
    } else if (!countryFromUrl) {
      setSelectedCountry("All")
    }
  }, [countryFromUrl])

  const handleCountryChange = (country) => {
    setSelectedCountry(country)
    if (country === "All") {
      setSearchParams({})
    } else {
      setSearchParams({ country })
    }
  }

  const filteredDestinations = selectedCountry === "All"
    ? destinations
    : destinations.filter((dest) => dest.location === selectedCountry)

  return (
    <div className="relative">
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:site_name" content="Modus Safaris" />
      </Helmet>
      
      <div className="text-white flex flex-col gap-5 justify-center min-h-[70vh] md:min-h-screen px-6 md:px-10 hero-image-destination">
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest">DISCOVER EAST AFRICA</p>
        </div>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium">Our Destinations</p>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          From Uganda's misty mountains and ancient forests to the endless plains of Tanzania and Kenya—explore East Africa's most extraordinary destinations.
        </p>
      </div>

      {/* Country filter tabs */}
      <div className="px-4 sm:px-6 md:px-16 py-4 md:py-5 flex flex-wrap justify-center gap-4 bg-[#3a5a40] text-white text-lg sticky top-16 z-30">
        {COUNTRIES.map((country) => (
          <button
            key={country}
            type="button"
            onClick={() => handleCountryChange(country)}
            className="group flex flex-col items-center hover:opacity-90 transition-opacity"
          >
            <span>{country}</span>
            <hr
              className={`h-1 border-none bg-white transition-all duration-300 ${
                selectedCountry === country ? "w-2/3" : "w-0 group-hover:w-2/3"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Destinations grid */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 bg-zinc-100">
        <p className="text-gray-600 mb-8">
          Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? "s" : ""}
          {selectedCountry !== "All" && ` in ${selectedCountry}`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        {filteredDestinations.length === 0 && (
          <p className="text-center text-gray-500 py-12">No destinations in this region yet.</p>
        )}
      </div>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-20 flex flex-col items-center gap-8 text-center bg-white">
        <div className="flex flex-col gap-3 max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
            Ready to Explore?
          </h2>
          <p className="text-gray-600">
            Find your perfect safari experience or let us help you plan a custom journey.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/experiences"
            className="px-8 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-105 transition-all duration-300"
          >
            View Experiences
          </Link>
          <Link
            to="/booking"
            className="px-8 py-3 border border-[#3a5a40] text-[#3a5a40] font-medium hover:bg-[#3a5a40]/5 transition-all duration-300"
          >
            Plan Custom Trip
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
