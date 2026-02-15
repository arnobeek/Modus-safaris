import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import ExperienceDetail from './pages/ExperienceDetail'
import Stories from './pages/Stories'
import About from './pages/About'
import Sustainability from './pages/Sustainability'
import Booking from './pages/Booking'
import DestinationDetail from './pages/DestinationDetail'
import CountryDetail from './pages/CountryDetail'
import NotFound from './pages/NotFound'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ResponsibleTravel from './pages/ResponsibleTravel'
import HealthAndSafety from './pages/HealthAndSafety'
import SupplierCharter from './pages/SupplierCharter'
import SustainabilityPolicy from './pages/SustainabilityPolicy'
import CodeOfConduct from './pages/CodeOfConduct'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
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
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
