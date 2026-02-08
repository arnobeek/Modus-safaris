import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import CountryCard from "../components/CountryCard"
import { countries } from "../data/countries"

const SEO = {
  title: "Safari Destinations | East Africa's Best Parks | Modus Safaris",
  description:
    "Explore the best safari destinations in East Africa. From Bwindi's gorillas to the Serengeti's migration, discover the magic of Uganda, Kenya, Tanzania, and Rwanda.",
  ogImage: "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=1200&auto=format&fit=crop&q=80",
}

export default function Destinations() {
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

      {/* Hero */}
      <header className="text-white flex flex-col gap-5 justify-center min-h-[50vh] md:min-h-[80vh] px-6 md:px-10 hero-image-destination">
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest uppercase">Select a Country</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium">Safari Destinations</h1>
        <p className="text-base md:text-xl max-w-2xl leading-relaxed">
          Embark on a journey through East Africa's most iconic landscapes and wilderness areas. 
          Choose a country to begin your adventure.
        </p>
      </header>

      {/* Country Selection Grid */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Where to next?
              </span>
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Extraordinary Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {countries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
