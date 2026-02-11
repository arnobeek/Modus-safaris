import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import ExperienceCard from "../components/ExperienceCard"
import DestinationCard from "../components/DestinationCard"
import { getFeaturedExperiences } from "../data/experiences"
import { HiOutlineGlobe, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineStar } from "react-icons/hi"

const SEO = {
  title: "Modus Safaris | Luxury East Africa Safaris, Gorilla Trekking & Wildlife Tours",
  description:
    "Discover East Africa with bespoke luxury safaris. Gorilla trekking in Uganda, wildlife safaris in Kenya & Tanzania, tailor-made journeys. Plan your East African adventure.",
  ogImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80",
}

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The gorilla trekking experience was beyond anything I could have imagined. Modus Safaris made every detail perfect.",
    name: "Sarah Mitchell",
    location: "California, USA",
    experience: "Gorilla Trekking Adventure",
  },
  {
    id: 2,
    quote: "From start to finish, our family safari was seamless. The guides were incredible and the lodges were stunning.",
    name: "James & Emma Thompson",
    location: "London, UK",
    experience: "Primates & Wildlife Uganda",
  },
  {
    id: 3,
    quote: "Witnessing the Great Migration with Modus was a dream come true. Professional, knowledgeable, and truly passionate.",
    name: "Michael van der Berg",
    location: "Amsterdam, Netherlands",
    experience: "Great Migration Safari",
  },
]

const WHY_CHOOSE_US = [
  {
    icon: <HiOutlineGlobe size={36} className="text-[#3a5a40]" />,
    title: "Local Expertise",
    description: "Ugandan-owned with deep knowledge of East Africa's hidden gems and authentic experiences.",
  },
  {
    icon: <HiOutlineUserGroup size={36} className="text-[#3a5a40]" />,
    title: "Personalized Service",
    description: "Every safari is tailor-made to your interests, pace, and style—no cookie-cutter tours.",
  },
  {
    icon: <HiOutlineShieldCheck size={36} className="text-[#3a5a40]" />,
    title: "Trusted & Reliable",
    description: "Licensed operator with years of experience and excellent safety standards.",
  },
  {
    icon: <HiOutlineSparkles size={36} className="text-[#3a5a40]" />,
    title: "Sustainable Tourism",
    description: "Every journey supports conservation and empowers local communities.",
  },
]

export default function Home() {
  const navigate = useNavigate()
  const featuredExperiences = getFeaturedExperiences()

  const destinations = [
    "Bwindi Impenetrable Forest",
    "Murchison Falls National Park",
    "Kibaale Forest and Queen Elizabeth",
    "Serengeti and Ngorongoro",
    "Masai Mara and Amboseli",
    "Kidepo Valley and Northern Uganda",
  ]
  const durations = ["2-4 Days", "5-7 Days", "8-10 Days", "11-13 Days", "14-16 Days", "17+ Days"]
  const travelStyles = [
    "Gorilla Trekking",
    "Wildlife Safari",
    "Cultural Immersion",
    "Photography Expedition",
    "Luxury Safari",
  ]
  const treasures = [
    {
      id: 1,
      name: "Bwindi Impenetrable Forest",
      slug: "bwindi-impenetrable-forest",
      location: "Uganda",
      info: "Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.",
      image:
        "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YndpbmRpJTIwaW1wZW5ldHJhYmxlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Murchison Falls National Park",
      slug: "murchison-falls",
      location: "Uganda",
      info: "Where the Nile explodes through a narrow gorge—experience game drives, boat safaris, and the thundering power of nature.",
      image:
        "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVyY2hpc29uJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Kidepo Valley National Park",
      slug: "kidepo-valley",
      location: "Uganda",
      info: "Remote wilderness with vast plains, rare species, and some of Africa's most dramatic landscapes.",
      image:
        "https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lyYWZmZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Lake Mburo National Park",
      slug: "lake-mburo",
      location: "Uganda",
      info: "A compact gem perfect for walking safaris, horseback adventures, and close wildlife encounters.",
      image:
        "https://images.unsplash.com/photo-1553521306-9387d3795516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww",
    },
  ]

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
      <div className="relative flex justify-center min-h-screen md:min-h-[110vh] overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dv093jd0o/video/upload/so_0,f_auto,q_auto,w_1280/v1770402674/10-Greetings_No_Subs_itmpri.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://res.cloudinary.com/dv093jd0o/video/upload/v1770467253/0206_1_vreeki.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col justify-center text-white items-center w-full max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <h1 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-center leading-tight drop-shadow-lg">
            East Africa, Re-imagined
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide font-light drop-shadow-md">
            Discover East Africa, Travel with Purpose
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
            <Link
              to="/booking"
              className="px-8 py-4 bg-[#3a5a40] text-white font-bold rounded-full shadow-xl hover:bg-[#2d4632] hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95"
            >
              Plan Your Trip
            </Link>
            <Link
              to="/destinations"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 active:scale-95"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* Tailor-Made Journey Form */}
      {/* <div className="flex flex-col gap-8 md:gap-10 min-h-0 md:min-h-[60vh] shadow z-50 mx-4 sm:mx-6 md:mx-auto md:max-w-5xl -mt-16 md:-mt-20 bg-white px-4 sm:px-6 md:px-8 py-8 md:py-10 mb-16 md:mb-20">
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">Tailor-Made Journey</p>
          <p className="text-gray-600 text-sm sm:text-base">Design your perfect East African adventure</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-5">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-gray-600 text-sm">DESTINATION</label>
            <select className="text-gray-500 bg-transparent">
              <option>Select a destination</option>
              {destinations.map((d, index) => (
                <option value={d} key={index}>
                  {d}
                </option>
              ))}
            </select>
            <hr />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-gray-600 text-sm">DURATION</label>
            <select className="text-gray-500 bg-transparent">
              <option>Select duration</option>
              {durations.map((d, index) => (
                <option value={d} key={index}>
                  {d}
                </option>
              ))}
            </select>
            <hr />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-gray-600 text-sm">TRAVEL STYLE</label>
            <select className="text-gray-500 bg-transparent">
              <option>Select style</option>
              {travelStyles.map((t, index) => (
                <option value={t} key={index}>
                  {t}
                </option>
              ))}
            </select>
            <hr />
          </div>
        </div>
        <button
          className="w-full sm:w-60 px-4 py-3 sm:py-2 text-lg shadow font-medium bg-[#3a5a40] text-white hover:cursor-pointer hover:scale-[1.02] transition-all duration-300"
          onClick={() => navigate("/experiences")}
        >
          EXPLORE JOURNEYS
        </button>
      </div> */}

      {/* Featured Experiences */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                  Featured
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
                Signature Experiences
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-[#3a5a40] font-medium hover:underline flex items-center gap-2"
            >
              View All Experiences <span>&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                  Destinations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
                Hidden Treasures
              </h2>
            </div>
            <Link
              to="/destinations"
              className="text-[#3a5a40] font-medium hover:underline flex items-center gap-2"
            >
              View All Destinations <span>&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treasures.map((treasure) => (
              <DestinationCard key={treasure.id} destination={{
                ...treasure,
                slug: treasure.slug,
                shortDescription: treasure.info // Map 'info' to 'shortDescription' for the card
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-[#3a5a40] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <hr className="w-10 h-0.5 bg-white/50 border-none" />
            <span className="text-sm font-medium tracking-widest uppercase">
              Our Promise
            </span>
            <hr className="w-10 h-0.5 bg-white/50 border-none" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
            "At Modus Safaris, we believe travel should be transformative—for the traveler and the destination. We deliver unforgettable journeys, exceptional service, and responsible travel that leaves a positive footprint in Uganda."
          </h2>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
              <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                Why Modus Safaris?
              </span>
              <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
              Travel with Confidence
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#3a5a40]/10 rounded-full">
                <HiOutlineGlobe size={36} className="text-[#3a5a40]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Local expertise and in-depth destination knowledge</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#3a5a40]/10 rounded-full">
                <HiOutlineUserGroup size={36} className="text-[#3a5a40]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600 text-sm">Personalized itineraries tailored to guest interests</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#3a5a40]/10 rounded-full">
                <HiOutlineShieldCheck size={36} className="text-[#3a5a40]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Trusted Partnerships</h3>
              <p className="text-gray-600 text-sm">Strong partnerships with reputable lodges and guides</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#3a5a40]/10 rounded-full">
                <HiOutlineSparkles size={36} className="text-[#3a5a40]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">Commitment to sustainability and community development</p>
            </div>
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#3a5a40]/10 rounded-full">
                <HiOutlineStar size={36} className="text-[#3a5a40]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Reliable Support</h3>
              <p className="text-gray-600 text-sm">Reliable customer support before, during, and after travel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Guest Stories
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar key={i} className="w-5 h-5 text-[#3a5a40] fill-[#3a5a40]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-[#3a5a40] mt-1">{testimonial.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 bg-[#3a5a40] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6">
            Ready for Your African Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let us create the safari of your dreams. Start planning your journey today.
          </p>
          <Link
            to="/booking"
            className="inline-block px-10 py-4 bg-white text-[#3a5a40] font-medium shadow-lg hover:scale-105 transition-all duration-300"
          >
            Send an Inquiry Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}