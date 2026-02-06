import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { HiOutlineUser, HiOutlineCalendar, HiOutlineLocationMarker, HiArrowRight } from "react-icons/hi"

const SEO = {
  title: "Safari Travel Stories & Testimonials | Modus Safaris East Africa",
  description:
    "Read traveler stories from East Africa: family safaris, gorilla trekking adventures, and luxury safari experiences in Uganda, Kenya, and Tanzania.",
  ogImage: "https://images.unsplash.com/photo-1765706730020-561a6432abbd?w=1200&auto=format&fit=crop&q=80",
}

const STORIES = [
    {
        id:1,
        category:'Family Travel',
        image:'https://images.unsplash.com/photo-1765706730020-561a6432abbd?w=600&auto=format&fit=crop&q=60',
        location:'Tanzania',
        date:'August 2025',
        title:'Family Bonds in the Wild',
        author:'The Anderson Family',
        about:"Traveling with three generations through the Serengeti created memories we'll treasure forever. Every detail was perfect—from kid-friendly activities to private game drives timed around nap schedules."
    },
    {
        id:2,
        category:'Gorilla Trekking',
        image:'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60',
        location:'Uganda',
        date:'July 2025',
        title:'Face to Face with Giants',
        author:'Mark & Sarah',
        about:"The moment we saw the silverback, time stood still. Bwindi Impenetrable Forest is a magical place, and the trek was challenging but absolutely worth every step."
    },
    {
        id:3,
        category:'Luxury Safari',
        image:'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&auto=format&fit=crop&q=60',
        location:'Kenya',
        date:'June 2025',
        title:'A Honeymoon in the Mara',
        author:'James & Emily',
        about:"Waking up to the sound of lions roaring and watching the sunrise over the Masai Mara from our tented camp was the most romantic experience of our lives."
    },
    {
        id:4,
        category:'Adventure',
        image:'https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=600&auto=format&fit=crop&q=60',
        location:'Uganda',
        date:'May 2025',
        title:'The Power of Murchison',
        author:'David R.',
        about:"The boat cruise to the bottom of the falls was incredible. Seeing the Nile force its way through that narrow gorge demonstrates the raw power of nature."
    },
]

export default function Stories() {
  return (
    <div>
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
      <header className="text-white flex flex-col gap-5 justify-center min-h-[60vh] md:min-h-[70vh] px-6 md:px-10 hero-image-experiences">
        <div className="flex items-center gap-2">
            <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
            <p className="text-sm tracking-widest uppercase">Traveler Stories</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium">Journeys That<br/>Transform</h1>
        <p className="text-base md:text-xl max-w-2xl leading-relaxed">
            Hear from travelers who have experienced the magic of East Africa through Modus—stories of wonder, connection, and transformation in the Pearl of Africa.
        </p>
      </header>

      {/* Featured Stories */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-end mb-12">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">Featured Stories</h2>
                    <p className="text-gray-600 text-lg">In-depth accounts of extraordinary journeys</p>
                </div>
                <hr className="w-full md:w-auto flex-1 border-gray-300 mb-2 ml-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {STORIES.map(story => (
                    <article key={story.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img 
                                src={story.image} 
                                alt={story.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium tracking-wider uppercase text-[#3a5a40] rounded-sm">
                                {story.category}
                            </div>
                        </div>
                        
                        <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1.5">
                                    <HiOutlineLocationMarker className="text-[#3a5a40]" />
                                    {story.location}
                                </span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                <span className="flex items-center gap-1.5">
                                    <HiOutlineCalendar className="text-[#3a5a40]" />
                                    {story.date}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 group-hover:text-[#3a5a40] transition-colors leading-tight">
                                {story.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                <HiOutlineUser className="text-[#3a5a40]" />
                                <span>by {story.author}</span>
                            </div>

                            <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                                {story.about}
                            </p>

                            <Link 
                                to="#" 
                                className="inline-flex items-center gap-2 text-[#3a5a40] font-medium tracking-wide text-sm group-hover:gap-3 transition-all"
                            >
                                READ FULL STORY
                                <HiArrowRight />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
        <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 flex flex-col items-center gap-8 text-center bg-white">
        <div className="flex flex-col gap-3 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Have a Story to Tell?
            </h2>
            <p className="text-gray-600">
            We love hearing from our guests. Share your safari memories with us and inspire future travelers.
            </p>
        </div>
        <a
            href="mailto:stories@modussafaris.com"
            className="px-8 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-105 transition-all duration-300"
        >
            Share Your Story
        </a>
        </section>

      <Footer />
    </div>
  );
}
