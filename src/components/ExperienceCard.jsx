import { Link } from "react-router-dom"

export default function ExperienceCard({ experience }) {
  const { slug, title, duration, startingPrice, summary, heroImage, country, travelStyle } = experience

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/experiences/${slug}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Duration badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-medium text-gray-800">{duration}</span>
          </div>
          {/* Travel style badge */}
          <div className="absolute top-4 right-4 bg-[#3a5a40]/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <span className="text-sm font-medium text-white">{travelStyle}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#3a5a40] font-medium">{country}</span>
            <span className="text-sm text-gray-500">From ${startingPrice.toLocaleString()}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-medium text-gray-900 group-hover:text-[#3a5a40] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{summary}</p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-[#3a5a40] font-medium text-sm group-hover:gap-3 transition-all">
              View Experience
              <span className="text-lg">&rarr;</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
