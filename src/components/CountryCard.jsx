
import { Link } from "react-router-dom"

/**
 * Card for country listing on the main Destinations page.
 * Clicking navigates to /destinations/:countrySlug
 */
export default function CountryCard({ country }) {
  const { slug, name, summary, heroImage } = country

  return (
    <Link
      to={`/destinations/${slug}`}
      className="group relative flex flex-col h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 no-underline"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage || "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mt-auto p-8 text-white">
        <div className="flex items-center gap-2 mb-3">
          <hr className="w-8 h-1 bg-[#3a5a40] border-none" />
          <span className="text-sm font-medium tracking-widest uppercase opacity-90">Destination country</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium mb-3 group-hover:translate-x-2 transition-transform duration-500">
          {name}
        </h2>
        <p className="text-white/80 text-lg font-light line-clamp-2 max-w-xl">
          {summary}
        </p>
        
        <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          Discover {name}
          <span className="text-xl">&rarr;</span>
        </div>
      </div>
    </Link>
  )
}
