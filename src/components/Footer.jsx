import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {

    return (
        <div className='px-6 md:px-10 bg-[#3a5a40] pt-12 md:pt-16 pb-8 text-white font-ui'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12'>
                <div className='flex flex-col gap-4'>
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-16 md:w-20" alt="Modus Safaris Logo" />
                        <h1 className="text-2xl md:text-3xl font-extrabold font-heading tracking-tight">MODUS SAFARIS</h1>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed max-w-xs">
                        Curating extraordinary East African journeys for the discerning traveler. Experience the wild in comfort and style.
                    </p>
                    <div className='flex gap-4 mt-2'>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <div className='w-10 h-10 border border-white/30 flex items-center justify-center rounded-full hover:bg-white hover:text-[#3a5a40] transition-all duration-300'>
                                <FaInstagram size={18} />
                            </div>
                        </a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <div className='w-10 h-10 border border-white/30 flex items-center justify-center rounded-full hover:bg-white hover:text-[#3a5a40] transition-all duration-300'>
                                <FaFacebookF size={18} />
                            </div>
                        </a>

                        <a href="mailto:info@modussafaris.com" aria-label="Email Us">
                            <div className='w-10 h-10 border border-white/30 flex items-center justify-center rounded-full hover:bg-white hover:text-[#3a5a40] transition-all duration-300'>
                                <IoMailOutline size={18} />
                            </div>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col gap-4 text-sm'>
                    <p className="text-lg font-bold font-heading tracking-wide mb-2">DESTINATIONS</p>
                    <Link to="/destinations/uganda" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Uganda Safaris</Link>
                    <Link to="/destinations/kenya" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Kenya Safaris</Link>
                    <Link to="/destinations/tanzania" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Tanzania Safaris</Link>
                    <Link to="/destinations/rwanda" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Rwanda Safaris</Link>
                </div>

                <div className='flex flex-col gap-4 text-sm'>
                    <p className="text-lg font-bold font-heading tracking-wide mb-2">COMPANY</p>
                    <Link to="/about" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">About Us</Link>
                    <Link to="/sustainability" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Sustainability</Link>
                    <Link to="/stories" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Travel Stories</Link>
                    <Link to="/responsible-travel" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Responsible Travel</Link>
                    <Link to="/health-and-safety" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Health & Safety</Link>
                    <Link to="/supplier-charter" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Supplier Charter</Link>
                    <Link to="/booking" className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit">Book a Trip</Link>
                    <a href="/Modus Safaris UG Limited Sustainability Report 2025.docx" download className="text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-300 w-fit flex items-center gap-2">
                        <span>Sustainability Report</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </a>
                </div>

                <div className='flex flex-col gap-4 text-sm'>
                    <p className="text-lg font-bold font-heading tracking-wide mb-2">CONTACT</p>
                    <div>
                        <p className="font-semibold text-amber-300 mb-1">PHONE</p>
                        <a href="tel:+256763174100" className="text-white/80 hover:text-white transition-colors block">+256 763 174 100</a>
                    </div>
                    <div>
                        <p className="font-semibold text-amber-300 mb-1">EMAIL</p>
                        <a href="mailto:info@modussafaris.com" className="text-white/80 hover:text-white transition-colors block">info@modussafaris.com</a>
                    </div>
                    <div>
                        <p className="font-semibold text-amber-300 mb-1">OFFICES</p>
                        <p className="text-white/80">Mirage Complex, Kitintale, Kampala</p>
                    </div>
                </div>

            </div>
            
            <hr className='border-white/20 mt-8 mb-8' />
            
            <div className='flex flex-col md:flex-row justify-between items-center text-xs text-white/60 gap-4'>
                <div>
                    <p>&copy; {new Date().getFullYear()} Modus Safaris. All Rights Reserved.</p>
                </div>
                <div className='flex gap-8'>
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    )
}