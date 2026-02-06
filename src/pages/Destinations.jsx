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

const DESTINATIONS_MOCK = [
  {
    id: 1,
    slug: "bwindi-impenetrable-forest",
    name: "Bwindi Impenetrable Forest",
    location: "Uganda",
    shortDescription: "Home to nearly half the world's remaining mountain gorillas. Trek through misty ancient rainforest and spend an hour with a gorilla family in this UNESCO World Heritage Site.",
    image: "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    slug: "murchison-falls",
    name: "Murchison Falls National Park",
    location: "Uganda",
    shortDescription: "Where the Nile explodes through a narrow gorge. Game drives, boat safaris, and towering falls in Uganda's largest national park.",
    image: "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    slug: "queen-elizabeth",
    name: "Queen Elizabeth National Park",
    location: "Uganda",
    shortDescription: "Tree-climbing lions, savanna, and Kazinga Channel boat cruises. A classic East African safari in the shadow of the Rwenzoris.",
    image: "https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    slug: "kidepo-valley",
    name: "Kidepo Valley National Park",
    location: "Uganda",
    shortDescription: "Remote wilderness in Uganda's northeast. Vast plains, rare species, and some of Africa's most dramatic landscapes.",
    image: "https://images.unsplash.com/photo-1553521306-9387d3795516?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    slug: "masai-mara",
    name: "Masai Mara National Reserve",
    location: "Kenya",
    shortDescription: "The stage for the Great Migration. Endless plains, big cats, and the iconic Maasai culture in Kenya's finest wildlife reserve.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    slug: "amboseli",
    name: "Amboseli National Park",
    location: "Kenya",
    shortDescription: "Elephants with Kilimanjaro as backdrop. Open savanna and swamps draw wildlife and photographers year-round.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    slug: "serengeti",
    name: "Serengeti National Park",
    location: "Tanzania",
    shortDescription: "Vast savannas and the greatest wildlife spectacle on earth. The Serengeti defines the African safari.",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    slug: "ngorongoro",
    name: "Ngorongoro Conservation Area",
    location: "Tanzania",
    shortDescription: "The world's largest intact volcanic caldera. Dense wildlife and the chance to see the Big Five in one day.",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    slug: "volcanoes-national-park",
    name: "Volcanoes National Park",
    location: "Rwanda",
    shortDescription: "Mountain gorilla trekking in the Virunga massif. The original setting for Dian Fossey's conservation work.",
    image: "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=500&auto=format&fit=crop&q=60",
  },
]

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
    ? DESTINATIONS_MOCK
    : DESTINATIONS_MOCK.filter((dest) => dest.location === selectedCountry)

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
