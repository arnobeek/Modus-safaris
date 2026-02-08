import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaFacebook, FaMailBulk } from "react-icons/fa";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {

    return (
        <div className='px-10 bg-[#3a5a40] pt-10 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-5'>
                <div className=' flex flex-col w-50 gap-3'>
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-15" />
                        <h1 className="text-2xl font-extrabold ">MODUS SAFARIS</h1>
                    </div>
                    <p className="text-white">Curating extraordinary East African journeys for the discerning traveler.</p>
                    <div className='flex justify-between'>
                        <a href="#">
                            <div className='w-10 h-10 border flex items-center justify-center rounded-md hover:scale-105 hover:text-amber-300'>
                                <FaInstagram size={30} />
                            </div>
                        </a>

                        <a href="#">
                            <div className='w-10 h-10 border flex items-center justify-center rounded-md hover:scale-105 hover:text-amber-300'>
                                <FaFacebook size={30} />
                            </div>
                        </a>

                        <a href="#">
                            <div className='w-10 h-10 border flex items-center justify-center rounded-md hover:scale-105 hover:text-amber-300'>
                                <IoMailOutline size={30} />
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-3 text-sm'>
                    <p className="text-xl font-bold">DESTINATIONS</p>
                    <Link className="text-white hover:text-amber-300">Uganda</Link>
                    <Link className="text-white hover:text-amber-300">Kenya</Link>
                    <Link className="text-white hover:text-amber-300">Tanzania</Link>
                    <Link className="text-white hover:text-amber-300">Rwanda</Link>
                    
                </div>
                <div className='flex flex-col justify-between gap-3 text-sm'>
                    <p className="text-xl font-bold">COMPANY</p>
                    <Link className="text-white hover:text-amber-300">About Us</Link>
                    <Link className="text-white hover:text-amber-300">Sustainability</Link>
                    <Link className="text-white hover:text-amber-300">Travel Advisors</Link>
                    <Link className="text-white hover:text-amber-300">Stories</Link>
                </div>
                <div className='flex flex-col justify-between gap-3 text-sm'>
                    <p className="text-xl font-bold">CONTACT</p>
                    <div>
                        <p className="font-semibold">PHONE</p>
                        <p className="text-white hover:text-amber-300"><a href="tel:+256756733094">+256-756-733-094</a></p>
                    </div>
                    <div>
                        <p className="font-semibold">EMAIL</p>
                        <p className="text-white hover:text-amber-300"><a href="mailto:info@modussafaris.com">info@modussafaris.com</a></p>
                    </div>
                    <div>
                        <p className="font-semibold">OFFICES</p>
                        <p className="text-white hover:text-amber-300">Mbarara, Uganda</p>
                    </div>
                </div>

            </div>
            <hr className='mt-10' />
            <div className='flex justify-between py-5 text-sm'>
                <div>
                    <p>&copy;2026 Modus Safaris. All Rights Reserved</p>
                </div>
                <div className='flex justify-between gap-10'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    )
}