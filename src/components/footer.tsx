"use client"

import { Phone, MapPin, Clock, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ff0000' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/5 via-transparent to-red-700/5"></div>

      <div className="relative z-10">
        {/* Main Content */}
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-red-700/20 rounded-2xl flex items-center justify-center border border-red-700/30 shadow-lg">
                    <Truck className="w-8 h-8 text-red-700" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-700 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-black fill-current" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    Angles Tyres
                  </h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <Clock className="w-4 h-4 text-red-700 animate-pulse" />
                    <span className="text-red-700 font-semibold text-sm">
                      24/7 Emergency Service
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                Professional tyre services across Cleckheaton and nearby areas.
                Fast, reliable, and affordable mobile tyre repair and replacement service.
              </p>

              {/* Emergency Call To Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+447476306677">
                  <Button
                    size="lg"
                    className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-red-700/30 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Emergency: +44 7476 306677
                  </Button>
                </a>
                <div className="bg-white/5 border border-red-700/20 rounded-xl p-4 flex items-center space-x-3 backdrop-blur-sm">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-red-700 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    5.0 Customer Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <div className="w-2 h-8 bg-red-700 rounded-full"></div>
                <span>Our Services</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Emergency Tyre Repair",
                  "Tyre Replacement",
                  "Puncture Repair",
                  "Car Tyre Replacement",
                  "Wheel Balancing",
                  "TPMS Sensor Supplied, Programmed and Fitted",
                ].map((service) => (
                  <li key={service} className="group">
                    <a
                      href="#services"
                      className="flex items-center space-x-3 text-gray-400 hover:text-red-700 transition-all duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-red-700/60 rounded-full group-hover:bg-red-700 group-hover:scale-125 transition-all duration-300"></div>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <div className="w-2 h-8 bg-red-700 rounded-full"></div>
                <span>Contact Info</span>
              </h3>
              <div className="space-y-5">
                {/* Phone */}
                <div className="bg-white/5 border border-red-700/20 rounded-xl p-4 hover:border-red-700/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-700/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-700">
                        Emergency Hotline
                      </div>
                      <a
                        href="tel:+447476306677"
                        className="text-white font-bold hover:underline"
                      >
                        +44 7476 306677
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white/5 border border-red-700/20 rounded-xl p-4 hover:border-red-700/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-700/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-700" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-700">
                        Service Area
                      </div>
                      <div className="text-gray-300 text-sm">75 Westgate</div>
                      <div className="text-gray-300 text-sm">
                        Cleckheaton BD19 5HS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response */}
                <div className="bg-white/5 border border-red-700/20 rounded-xl p-4 hover:border-red-700/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-700/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-red-700 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-700">
                        Response Time
                      </div>
                      <div className="text-white font-bold">
                        15 minutes average
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-700/20 bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <span>© 2025 Angles Tyres</span>
                <span className="hidden md:inline">•</span>
                <a href="#" className="hover:text-red-700 transition-colors">
                  Privacy Policy
                </a>
                <span className="hidden md:inline">•</span>
                <a href="#" className="hover:text-red-700 transition-colors">
                  Terms of Service
                </a>
                <span className="hidden md:inline">•</span>
                <span className="text-gray-500 italic">
                  Design and development by{" "}
                  <Link
                    href="https://brightreachsolutions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline font-semibold"
                  >
                    Bright Reach Solutions
                  </Link>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-400">Licensed & Insured</div>
                <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
                <div className="text-sm text-red-700 font-semibold">
                  Professional Tyre Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
