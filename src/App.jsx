import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Destinations = lazy(() => import('./pages/Destinations'))
const ExperienceDetail = lazy(() => import('./pages/ExperienceDetail'))
const Stories = lazy(() => import('./pages/Stories'))
const About = lazy(() => import('./pages/About'))
const Sustainability = lazy(() => import('./pages/Sustainability'))
const Booking = lazy(() => import('./pages/Booking'))
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'))
const CountryDetail = lazy(() => import('./pages/CountryDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const ResponsibleTravel = lazy(() => import('./pages/ResponsibleTravel'))
const HealthAndSafety = lazy(() => import('./pages/HealthAndSafety'))
const SupplierCharter = lazy(() => import('./pages/SupplierCharter'))
const SustainabilityPolicy = lazy(() => import('./pages/SustainabilityPolicy'))
const CodeOfConduct = lazy(() => import('./pages/CodeOfConduct'))
const ChildProtectionPolicy = lazy(() => import('./pages/ChildProtectionPolicy'))

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-[#3a5a40] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Destination Hierarchy */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:countrySlug" element={<CountryDetail />} />
          <Route path="/destinations/:countrySlug/:slug" element={<DestinationDetail />} />
          <Route path="/destinations/:countrySlug/:slug/:experienceSlug" element={<ExperienceDetail />} />
          
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/sustainability/policy" element={<SustainabilityPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/responsible-travel" element={<ResponsibleTravel />} />
          <Route path="/health-and-safety" element={<HealthAndSafety />} />
          <Route path="/supplier-charter" element={<SupplierCharter />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/child-protection-policy" element={<ChildProtectionPolicy />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
