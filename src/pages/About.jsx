import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { HiOutlineGlobe, HiOutlineBadgeCheck, HiOutlineStar, HiOutlineShieldCheck, HiOutlineUserGroup } from "react-icons/hi"

const SEO = {
  title: "About Modus Safaris | East Africa Safari Company, Uganda & Responsible Travel",
  description:
    "Ugandan-owned safari company crafting authentic East African experiences. Sustainability, conservation, and community empowerment. Discover our story and values.",
  ogImage: "https://images.unsplash.com/photo-1761976671459-8a27e6b78c09?w=1200&auto=format&fit=crop&q=80",
}

export default function About(){

    const aboutInfo = [
        {
            id:1,
            title:"Our Vision",
            info:"To be a leading safari company in Uganda, recognized for excellence in service, responsible tourism practices, and meaningful travel experiences that conserve nature and uplift local communities."
        },
        {
            id:2,
            title:"Our Mission",
            info:"To design and deliver high-quality, safe, and sustainable safari experiences that showcase Uganda's natural and cultural heritage while promoting conservation, community development, and responsible travel."
        }
    ]

    const values=[
        {
            id:1,
            icon:<HiOutlineGlobe size={50} color="#3a5a40"/>,
            title:'Sustainability & Responsibility',
            description:'We promote environmentally friendly practices and support conservation efforts.'
        },
        {
            id:2,
            icon:<HiOutlineBadgeCheck size={50} color="#3a5a40"/>,
            title:'Authenticity',
            description:"We offer genuine experiences that reflect Uganda's true spirit."
        },
        {
            id:3,
            icon:<HiOutlineStar size={50} color="#3a5a40"/>,
            title:'Customer Excellence',
            description:'We prioritize personalized service and guest satisfaction.'
        },
        {
            id:4,
            icon:<HiOutlineShieldCheck size={50} color="#3a5a40"/>,
            title:'Integrity & Professionalism',
            description:'We operate with transparency, honesty, and high ethical standards.'
        },
        {
            id:5,
            icon:<HiOutlineUserGroup size={50} color="#3a5a40"/>,
            title:'Community Empowerment',
            description:'We work with local guides, lodges, artisans, and communities to ensure shared benefits.'
        }
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
            <header className="text-white flex flex-col gap-5 justify-center min-h-[60vh] md:min-h-[70vh] px-6 md:px-10 hero-image-destination">
                <div className="flex items-center gap-2">
                    <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
                    <p className="text-sm tracking-widest uppercase">Who We Are</p>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium">About Modus</h1>
                <p className="text-base md:text-xl max-w-2xl leading-relaxed">
                    Discover East Africa, Travel with Purpose—We are passionate curators of authentic
                    East African experiences, dedicated to creating journeys that inspire wonder,
                    foster connection, and support conservation.
                </p>
            </header>

            {/* Our Story */}
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                        <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                            Our Story
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1 flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                                Modus Safaris (U) Limited
                            </h2>
                            <div className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Modus Safaris (U) Limited is a Ugandan-owned safari company dedicated to
                                    delivering authentic, memorable, and responsible travel experiences across
                                    Uganda and the East African region. We specialize in crafting tailor-made
                                    safaris that connect travelers to Uganda's rich wildlife, diverse cultures,
                                    breathtaking landscapes, and vibrant communities.
                                </p>
                                <p>
                                    With a strong commitment to sustainability, community empowerment, and
                                    conservation, Modus Safaris ensures that every journey creates lasting value
                                    for our guests while positively impacting the destinations we operate in.
                                </p>
                                <p>
                                    Every safari is carefully designed to deliver unforgettable experiences while
                                    supporting conservation and local communities.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="aspect-square md:aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1761976671459-8a27e6b78c09?w=800&auto=format&fit=crop&q=80"
                                    alt="Safari landscape"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-100">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                        <img 
                            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=80" 
                            alt="Elephant in the wild" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        {aboutInfo.map((about) => (
                            <div
                                key={about.id}
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                            >
                                <div className="w-12 h-1 bg-[#3a5a40] rounded-full mb-2" />
                                <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
                                    {about.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{about.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                            <span className="text-sm font-medium tracking-widest text-[#3a5a40] uppercase">
                                Our Principles
                            </span>
                            <hr className="w-10 h-1 bg-[#3a5a40] border-none" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            These principles guide every decision we make and every journey we create.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div
                                key={value.id}
                                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-zinc-50 transition-colors"
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-[#3a5a40]/10 rounded-full mb-6 text-[#3a5a40]">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}