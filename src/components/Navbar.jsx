import { useState } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { HiOutlineMenu, HiOutlineX, HiChevronDown } from "react-icons/hi"
import logo from "../assets/logo.png"

const COUNTRIES = ["Uganda", "Kenya", "Tanzania", "Rwanda"]

const navLinks = [
  { to: "/destinations", label: "DESTINATIONS", hasDropdown: true },
  { to: "/stories", label: "STORIES" },
  { to: "/sustainability", label: "SUSTAINABILITY" },
  { to: "/about", label: "ABOUT" },
]

function DestinationsDropdown({ onNavigate }) {
  return (
    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <div className="bg-white shadow-xl rounded-lg py-2 min-w-48 border border-gray-100">
        <Link
          to="/destinations"
          onClick={onNavigate}
          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#3a5a40]/10 hover:text-[#3a5a40] transition-colors font-medium"
        >
          All Destinations
        </Link>
        <hr className="my-1 border-gray-100" />
        {COUNTRIES.map((country) => (
          <Link
            key={country}
            to={`/destinations/${country.toLowerCase()}`}
            onClick={onNavigate}
            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-[#3a5a40]/10 hover:text-[#3a5a40] transition-colors"
          >
            {country}
          </Link>
        ))}
      </div>
    </div>
  )
}

function NavLinkItem({ to, label, hasDropdown }) {
  const location = useLocation()
  const isActive = location.pathname === to || (hasDropdown && location.pathname.startsWith(to))

  if (hasDropdown) {
    return (
      <div className="group relative flex flex-col items-center">
        <NavLink
          to={to}
          className={`tracking-widest text-md transition-colors flex items-center gap-1 ${
            isActive ? "text-[#3a5a40] font-medium" : "text-gray-800 text-sm hover:text-[#3a5a40]"
          }`}
        >
          {label}
          <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
        </NavLink>
        <hr
          className={`h-0.5 bg-[#3a5a40] border-none transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
        <DestinationsDropdown />
      </div>
    )
  }

  return (
    <div className="group flex flex-col items-center">
      <NavLink
        to={to}
        className={`tracking-widest text-sm transition-colors block ${
          isActive ? "text-[#3a5a40] font-medium" : "text-gray-800 hover:text-[#3a5a40]"
        }`}
      >
        {label}
      </NavLink>
      <hr
        className={`h-0.5 bg-[#3a5a40] border-none transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </div>
  )
}

function MobileNavLinkWithDropdown({ to, label, onNavigate }) {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()
  const isActive = location.pathname === to || location.pathname.startsWith(to)

  return (
    <div className="w-full max-w-xs">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center justify-center tracking-widest text-lg transition-colors ${
          isActive ? "text-[#3a5a40] font-medium" : "text-gray-800 hover:text-[#3a5a40]"
        }`}
      >
        <span>{label}</span>
        <HiChevronDown className={`w-5 h-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-60 mt-3 ml-15" : "max-h-0"}`}>
        <Link
          to="/destinations"
          onClick={onNavigate}
          className="block py-2 pl-4 text-base text-gray-700 hover:text-[#3a5a40] font-medium"
        >
          All Destinations
        </Link>
        {COUNTRIES.map((country) => (
          <Link
            key={country}
            to={`/destinations?country=${encodeURIComponent(country)}`}
            onClick={onNavigate}
            className="block py-2 pl-4 text-base text-gray-500 hover:text-[#3a5a40]"
          >
            {country}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const headerBg = menuOpen
    ? "bg-white"
    : isHomePage
      ? "bg-white/30 backdrop-blur-md"
      : "bg-white/85 backdrop-blur-md"

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed flex items-center justify-between px-6 md:px-10 w-full shadow py-2.5 z-50 transition-all duration-500 ${headerBg}`}
      >
        <Link to="/" className="flex items-center shrink-0" onClick={closeMenu}>
          <img src={logo} alt="Modus" className="w-20" />
          <h1 className="text-2xl font-extrabold text-[#3a5a40]"></h1>
        </Link>

        <nav className="hidden md:flex justify-between gap-8 lg:gap-12">
          {navLinks.map(({ to, label, hasDropdown }) => (
            <NavLinkItem key={to} to={to} label={label} hasDropdown={hasDropdown} />
          ))}
        </nav>

        <div className="hidden md:block shrink-0">
          <Link
            to="/booking"
            className="border border-[#3a5a40] px-6 py-2 hover:cursor-pointer hover:shadow-lg text-lg font-medium transition-all button-animation inline-block"
          >
            MAKE INQUIRY
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-gray-800 hover:text-[#3a5a40] transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden transition-opacity duration-300 pt-20 overflow-y-auto ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-6 px-6 py-8">
          {navLinks.map(({ to, label, hasDropdown }) =>
            hasDropdown ? (
              <MobileNavLinkWithDropdown key={to} to={to} label={label} onNavigate={closeMenu} />
            ) : (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `tracking-widest text-lg transition-colors ${
                    isActive ? "text-[#3a5a40] font-medium" : "text-gray-800 hover:text-[#3a5a40]"
                  }`
                }
              >
                {label}
              </NavLink>
            )
          )}
          <Link
            to="/booking"
            onClick={closeMenu}
            className="border border-[#3a5a40] px-6 py-3 mt-4 text-lg font-medium transition-all button-animation w-full max-w-xs inline-block text-center"
          >
            MAKE AN INQUIRY
          </Link>
        </nav>
      </div>
    </>
  )
}
