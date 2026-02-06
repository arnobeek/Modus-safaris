import { Link } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5"

/**
 * Reusable card for destination listing.
 * Clicking the card navigates to /destinations/:slug.
 */
export default function DestinationCard({ destination }) {
  const { id, slug, name, description, images, location } = destination
  
  // Use the first image from the array, or a fallback if empty
  const displayImage = images && images.length > 0 ? images[0] : ""

  return (
    <Link
      to={`/destinations/${slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 no-underline text-inherit"
      data-destination-id={id}
      data-destination-slug={slug}
    >
      <div className="overflow-hidden aspect-4/3">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center gap-1.5 text-sm text-[#3a5a40]">
          <IoLocationOutline className="shrink-0" />
          <span>{location}</span>
        </div>
        <h2 className="text-xl font-medium text-gray-900">{name}</h2>
        <p className="text-gray-600 text-sm line-clamp-3 flex-1">{description}</p>
        <span className="mt-2 flex items-center gap-2 text-sm font-medium text-[#3a5a40] self-start">
          View destination
          <IoLocationOutline size={16} />
        </span>
      </div>
    </Link>
  )
}
