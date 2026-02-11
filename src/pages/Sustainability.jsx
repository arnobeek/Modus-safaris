import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineHeart, HiOutlineSparkles, HiDownload, HiOutlineShieldCheck, HiOutlineScale, HiOutlineHand } from "react-icons/hi"
import { Link } from "react-router-dom"

const SEO = {
  title: "Sustainability & Conservation | Responsible Travel | Modus Safaris",
  description:
    "Our commitment to conservation, community empowerment, and sustainable safari tourism. Learn how Modus Safaris protects East Africa's wildlife and supports local communities.",
  ogImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80",
}

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
      <header className="text-white flex flex-col gap-5 justify-center min-h-[50vh] md:min-h-[70vh] px-6 md:px-10 hero-image-sustainability">
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest uppercase">Our Commitment</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-heading">
          Sustainability &<br />
          Responsible Tourism
        </h1>
        <p className="text-base md:text-xl max-w-2xl leading-relaxed mt-4">
          We believe that travel should be a force for good. Every journey we curate is designed to protect wildlife, empower communities, and preserve cultural heritage.
        </p>
      </header>

      {/* Our Commitment */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 font-heading">Our Core Philosophy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            At Modus Safaris, sustainability is not an add-on; it is the foundation of everything we do. We are committed to minimizing our environmental footprint while maximizing the positive impact of tourism on local economies and ecosystems.
            </p>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <HiOutlineGlobeAlt size={32} className="text-[#3a5a40]" />
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 font-heading">Environmental Responsibility</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                    We strive to protect the pristine environments of East Africa. Our operations prioritize:
                </p>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Working with lodges that use renewable energy and water conservation systems.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Minimizing plastic use by providing refillable water bottles for all guests.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Adhering to strict "Leave No Trace" principles in all national parks.</span>
                    </li>
                </ul>
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1699078109661-0269200668ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW52aXJvbm1lbnRhbCUyMHByb3RlY3Rpb258ZW58MHx8MHx8fDA%3D" alt="Landscape" className="w-full h-full object-cover" />
            </div>
        </div>
      </section>

      {/* Wildlife Conservation */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop&q=70" alt="Lion" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                    <HiOutlineHeart size={32} className="text-[#3a5a40]" />
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 font-heading">Wildlife Conservation</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Wildlife is the heart of our business. We actively support conservation efforts by:
                </p>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Contributing a portion of every booking to the Gorilla Conservation Fund.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Partnering with anti-poaching units in key conservancies.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Educating guests on ethical wildlife viewing practices.</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="px-6 md:px-12 lg:px-20 py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <HiOutlineUserGroup size={32} className="text-[#3a5a40]" />
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 font-heading">Community Engagement</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                    We believe that local communities are the true custodians of the land. We empower them through:
                </p>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Employing local guides and staff to ensure tourism revenue stays in the region.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Sourcing food and crafts from local markets and artisans.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#3a5a40] mt-2 shrink-0"></span>
                        <span>Supporting community schools and healthcare initiatives.</span>
                    </li>
                </ul>
            </div>
            <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1656278345231-e6545c47508a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbW11bml0eSUyMHVnYW5kYXxlbnwwfHwwfHx8MA%3D%3D" alt="Community" className="w-full h-full object-cover" />
            </div>
        </div>
      </section>

      {/* Additional Responsibilities Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <HiOutlineScale size={32} className="text-[#3a5a40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fair Trade & Ethics</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    We ensure fair wages and ethical working conditions for all our partners and suppliers, promoting equity across the tourism value chain.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <HiOutlineShieldCheck size={32} className="text-[#3a5a40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Staff Welfare</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Our team is our family. We provide regular training, fair compensation, and safe working environments for all our guides and administrative staff.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <HiOutlineHand size={32} className="text-[#3a5a40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Safeguarding</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    We implement strict safeguarding policies to protect vulnerable groups, including children and indigenous communities, from exploitation.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <HiOutlineSparkles size={32} className="text-[#3a5a40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Guest Responsibility</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    We encourage our guests to travel responsibly by respecting local customs, minimizing waste, and treating wildlife with dignity.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <HiOutlineGlobeAlt size={32} className="text-[#3a5a40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Business Conduct</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    We operate with transparency and integrity, complying with all local laws and paying all taxes and park fees to support national development.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <HiOutlineSparkles size={32} className="text-[#3a5a40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Continuous Improvement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Sustainability is a journey. We regularly review our practices and seek new ways to reduce our impact and enhance our positive contribution.
                </p>
            </div>

        </div>
      </section>

      {/* Download Report */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#3a5a40] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 font-heading">
            Transparency in Action
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            We believe in being accountable. Download our 2025 Sustainability Report to see the detailed impact of our initiatives, financial contributions to conservation, and our goals for the future.
          </p>
          <a
            href="/Modus Safaris UG Limited Sustainability Report 2025.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#3a5a40] font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <HiDownload size={24} />
            Download 2025 Sustainability Report
          </a>
          <p className="text-white/60 text-sm mt-6">PDF Document</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
