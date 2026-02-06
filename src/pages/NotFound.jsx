import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const SEO = {
  title: "Page Not Found | Modus Safaris",
  description: "The page you're looking for doesn't exist. Return to Modus Safaris to plan your East Africa safari, gorilla trekking, or wildlife journey.",
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <Helmet>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:site_name" content="Modus Safaris" />
      </Helmet>

      <hr className="w-10 h-1 bg-[#3a5a40] border-none self-center mb-6" />
      <h1 className="text-6xl font-medium text-[#3a5a40] mb-3">404</h1>
      <p className="text-xl text-gray-900 font-medium mb-2">Page not found</p>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The path you're looking for doesn't exist. Head back to start your journey again.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#3a5a40] shadow text-white font-medium hover:scale-105 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
