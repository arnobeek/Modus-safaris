import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5"

/**
 * Reusable card for destination listing.
 * Clicking the card navigates to /destinations/:slug.
 */
export default function DestinationCard({ destination }) {
  const { id, slug, name, description, shortDescription, images, location } = destination
  
  // Use the first image from the array, or a fallback if empty
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70"
  const displayImage = (images && images.length > 0) ? images[0] : (destination.image || FALLBACK_IMAGE)
  const countrySlug = location ? location.toLowerCase() : "unknown"
  
  // Choose which description to show
  const displayDescription = shortDescription || description

  return (
    <Link
      to={`/destinations/${countrySlug}/${slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 no-underline text-inherit h-full"
      data-destination-id={id}
      data-destination-slug={slug}
    >
      <div className="overflow-hidden aspect-4/3 relative">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = FALLBACK_IMAGE
          }}
        />
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center gap-1.5 text-sm text-[#3a5a40]">
          <IoLocationOutline className="shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        <h2 className="text-xl font-medium text-gray-900 break-words line-clamp-2 leading-tight">
          {name}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3 overflow-hidden break-words flex-1">
          {displayDescription}
        </p>
        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[#3a5a40] self-start transition-all group-hover:gap-3">
          Explore
          <span className="text-lg">→</span>
        </div>
      </div>
    </Link>
  )
}
