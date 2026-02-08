import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm"

const SEO = {
  title: "Book Your Safari | Plan Your East Africa Journey | Modus Safaris",
  description:
    "Book your dream safari experience. Tell us your travel dates, preferences, and group size. We'll craft your bespoke East Africa safari adventure.",
  ogImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80",
}

export default function Booking() {
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

      <header className="text-white flex flex-col gap-5 justify-center min-h-[50vh] md:min-h-[60vh] px-6 md:px-10 hero-image-booking">
        <div className="flex items-center gap-2">
          <hr className="w-10 bg-[#3a5a40] h-0.5 border-none" />
          <p className="text-sm tracking-widest">PLAN YOUR JOURNEY</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">Book Your Safari</h1>
        <p className="text-base md:text-xl max-w-2xl">
          Share your travel dreams and we'll craft a bespoke East African experience tailored just for you.
        </p>
      </header>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-zinc-100">
        <div className="mx-auto max-w-3xl">
          <BookingForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}
