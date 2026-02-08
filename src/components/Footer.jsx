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
                            <div className='w-10 h-10 border flex items-center justify-center rounded-md hover:scale-105'>
                                <FaInstagram size={30} />
                            </div>
                        </a>

                        <a href="#">
                            <div className='w-10 h-10 border flex items-center justify-center rounded-md hover:scale-105'>
                                <FaFacebook size={30} />
                            </div>
                        </a>

                        <a href="#">
                            <div className='w-10 h-10 border flex items-center justify-center rounded-md hover:scale-105'>
                                <IoMailOutline size={30} />
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-3 text-sm'>
                    <p className="text-xl">DESTINATIONS</p>
                    <Link className="text-white">Uganda</Link>
                    <Link className="text-white">Kenya</Link>
                    <Link className="text-white">Tanzania</Link>
                    <Link className="text-white">Rwanda</Link>
                    
                </div>
                <div className='flex flex-col justify-between gap-3 text-sm'>
                    <p className="text-xl">COMPANY</p>
                    <Link className="text-white">About Us</Link>
                    <Link className="text-white">Sustainability</Link>
                    <Link className="text-white">Travel Advisors</Link>
                    <Link className="text-white">Stories</Link>
                </div>
                <div className='flex flex-col justify-between gap-3 text-sm'>
                    <p className="text-xl">CONTACT</p>
                    <div>
                        <p className="text-xl">PHONE</p>
                        <p className="text-white"><a href="tel:+256756733094">+256-756-733-094</a></p>
                    </div>
                    <div>
                        <p className="text-xl">EMAIL</p>
                        <p className="text-white"><a href="mailto:info@modussafaris.com">info@modussafaris.com</a></p>
                    </div>
                    <div>
                        <p className="text-xl">OFFICE</p>
                        <p className="text-white">Mbarara, Uganda</p>
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