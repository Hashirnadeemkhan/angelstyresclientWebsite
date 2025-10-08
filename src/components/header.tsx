"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa6"
import {
  Menu,
  X,
  Phone,
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div
        className={`h-10 flex justify-center items-center bg-red-600 text-white text-sm transition-all duration-500 ease-in-out ${
          isScrolled
            ? "transform -translate-y-full opacity-0"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Facebook className="w-4 h-4 hover:text-red-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              <Instagram className="w-4 h-4 hover:text-red-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              <a
                href="https://wa.me/447476306677"
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 hover:text-red-300 cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="hidden md:flex items-center space-x-2 font-medium">
              <Clock className="w-4 h-4" />
              <span>Mon to Sat: 8.00 am - 8.00 pm</span>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 font-medium">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>75 Westgate 
Cleckheaton
BD19 5HS
</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@angletyres@gmai.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-500 ease-in-out fixed w-full ${
          isScrolled
            ? "bg-black/95 top-0 backdrop-blur-md shadow-2xl border-b border-red-800"
            : "bg-black top-10 border-b border-red-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`flex items-center space-x-3 transition-all duration-300 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <Image src="/logo.png" alt="Logo" width={120} height={120} />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {["home", "about", "services", "testimonial", "choose-us", "contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className={`transition-colors duration-300 ${
                      isScrolled
                        ? "text-white hover:text-red-500"
                        : "text-white hover:text-red-400"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                  </Link>
                )
              )}
            </nav>

            {/* Call Options (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              <div
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "bg-red-50 border border-red-200 hover:bg-red-100"
                    : "bg-black/50 border border-red-700 hover:bg-red-900/50"
                }`}
              >
                <div>
                  <div
                    className={`text-xs transition-colors duration-300 ${
                      isScrolled ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    Call to Questions
                  </div>
                  <div
                    className={`font-semibold transition-colors duration-300 ${
                      isScrolled ? "text-white" : "text-white"
                    }`}
                  >
                    7886 051544
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="tel:447886051544"
                    className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition"
                  >
                    <Phone className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href="https://wa.me/447886051544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-white" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`lg:hidden mt-4 pb-4 border-t transition-all duration-300 animate-in slide-in-from-top ${
                isScrolled ? "border-red-800" : "border-red-800"
              }`}
            >
              <nav className="flex flex-col space-y-4 pt-4">
                {["home", "about", "services", "testimonial", "choose-us", "contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`#${item}`}
                      className={`transition-colors duration-300 ${
                        isScrolled
                          ? "text-white hover:text-red-500"
                          : "text-white hover:text-red-400"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                    </Link>
                  )
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
