import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineHeart, HiOutlineSparkles, HiDownload } from "react-icons/hi"
import { Link } from "react-router-dom"

const SEO = {
  title: "Sustainability & Conservation | Responsible Travel | Modus Safaris",
  description:
    "Our commitment to conservation, community empowerment, and sustainable safari tourism. Learn how Modus Safaris protects East Africa's wildlife and supports local communities.",
  ogImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80",
}

const COMMITMENTS = [
  {
    id: 1,
    icon: <HiOutlineGlobeAlt size={40} className="text-[#3a5a40]" />,
    title: "Eco-Friendly Accommodations",
    description:
      "We work with eco-certified and community-friendly accommodations that prioritize sustainability.",
  },
  {
    id: 2,
    icon: <HiOutlineSparkles size={40} className="text-[#3a5a40]" />,
    title: "Resource Management",
    description:
      "We promote waste reduction and responsible resource use across all our operations.",
  },
  {
    id: 3,
    icon: <HiOutlineHeart size={40} className="text-[#3a5a40]" />,
    title: "Respect for Heritage",
    description:
      "We encourage deep respect for wildlife and cultural heritage in every destination we visit.",
  },
  {
    id: 4,
    icon: <HiOutlineUserGroup size={40} className="text-[#3a5a40]" />,
    title: "Local Empowerment",
    description:
      "We support local employment and sourcing to ensure our tourism benefits the community.",
  },
  {
    id: 5,
    icon: <HiOutlineSparkles size={40} className="text-[#3a5a40]" />, // Using Sparkles again as a generic positive icon, or could import another one
    title: "Traveler Education",
    description:
      "We educate travelers on sustainable travel practices to minimize impact and maximize connection.",
  },
]

const INITIATIVES = [
  {
    title: "Gorilla Conservation Fund",
    description:
      "Supporting mountain gorilla veterinary care, ranger salaries, and habitat protection in Bwindi Impenetrable Forest.",
    image: "https://images.unsplash.com/photo-1723036123249-1955f57f6d8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fEdvcmlsbGElMjBDb25zZXJ2YXRpb24lMjBGdW5kfGVufDB8fDB8fHww",
  },
  {
    title: "Community Schools Project",
    description:
      "Supplying primary schools in villages near national parks, giving children access to education.",
    image: "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Women's Craft Cooperative",
    description:
      "Partnering with women's groups who create traditional crafts, providing sustainable income for families.",
    image: "https://images.unsplash.com/photo-1612353312154-a7aae0a0a998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWdhbmRhJTIwY3JhZnRzfGVufDB8fDB8fHww",
  },
  {
    title: "Reforestation Initiative",
    description:
      "Planting native trees in buffer zones around protected areas to expand wildlife corridors.",
    image: "https://images.unsplash.com/photo-1637552481611-1f36222fb188?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVmb3Jlc3RhdGlvbiUyMEluaXRpYXRpdmV8ZW58MHx8MHx8fDA%3D",
  },
]

export default function Sustainability() {
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
      <header className="text-white flex flex-col gap-5 justify-center min-h-[50vh] md:min-h-[80vh] px-6 md:px-10 hero-image-sustainability">
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest">TRAVEL WITH PURPOSE</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
          Conservation &<br />
          Community
        </h1>
        <p className="text-base md:text-xl max-w-2xl leading-relaxed">
          At Modus Safaris, we believe that responsible tourism is the key to
          preserving East Africa's extraordinary wildlife and empowering its people.
        </p>
      </header>

      {/* Our Commitment */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Our Commitment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 max-w-3xl">
            Sustainable Tourism for a Better Future
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
            Every safari we create is designed to protect the landscapes and wildlife we love,
            while creating meaningful benefits for local communities. Here's how we make a difference:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMITMENTS.map((commitment) => (
              <div
                key={commitment.id}
                className="bg-zinc-50 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-lg border border-[#3a5a40]/20">
                  {commitment.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{commitment.description}</p>
                <p className="text-[#3a5a40] font-medium text-sm">{commitment.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Our Initiatives
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12">
            Projects We Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INITIATIVES.map((initiative, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                    <img 
                        src={initiative.image || "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70"} 
                        alt={initiative.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70"
                        }}
                    />
                </div>
                <div className="p-8 border-l-4 border-[#3a5a40] flex flex-col gap-3">
                    <h3 className="text-xl font-medium text-gray-900">
                    {initiative.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Contribute */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
              Your Impact
            </span>
            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
            Every Safari Makes a Difference
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            When you travel with Modus Safaris, you're not just experiencing East Africa—you're
            helping to protect it. Your journey directly funds conservation projects, supports
            local communities, and ensures that these wild places remain for future generations.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 border-y border-gray-200">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-medium text-[#3a5a40]">$120K+</p>
              <p className="text-gray-600 mt-1">Conservation funds raised</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-medium text-[#3a5a40]">2,500+</p>
              <p className="text-gray-600 mt-1">Trees planted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-medium text-[#3a5a40]">15</p>
              <p className="text-gray-600 mt-1">Community partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Report */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-[#3a5a40] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Read Our Sustainability Report
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Download our comprehensive sustainability report to learn more about our
            environmental practices, community initiatives, and conservation partnerships.
          </p>
          <a
            href="/sustainability-report.pdf"
            download="Modus-Safaris-Sustainability-Report.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#3a5a40] font-medium rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <HiDownload size={24} />
            Download Sustainability Report
          </a>
          <p className="text-white/60 text-sm mt-4">PDF • 2.4 MB</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 flex flex-col items-center gap-8 text-center bg-white">
        <div className="flex flex-col gap-3 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Travel Responsibly with Us
          </h2>
          <p className="text-gray-600">
            Ready to experience East Africa while making a positive impact?
            Let us craft your sustainable safari adventure.
          </p>
        </div>
        <Link
          to="/booking"
          className="w-full sm:w-auto min-w-48 px-8 py-3 bg-[#3a5a40] text-white font-medium shadow hover:scale-105 transition-all duration-300"
        >
          Plan Your Journey
        </Link>
      </section>

      <Footer />
    </div>
  )
}
