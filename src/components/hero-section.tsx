"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen lg:mt-0 mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5"></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ff0000' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div
            className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-red-600/20 border border-red-600/30 text-red-600 rounded-full text-sm font-semibold backdrop-blur-sm animate-pulse">
                <Star className="w-4 h-4 mr-2 animate-spin" />
                24/7 Emergency Tyre Service Available
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="text-white block animate-fade-in-up">Fast & Reliable</span>
                <span className="block text-red-600 animate-fade-in-up animation-delay-200">
                  Tyre Repair & Replacement
                </span>
                <span className="block text-white text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 animate-fade-in-up animation-delay-400">
                  Amish Tyre & Recovery Services
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
                Providing expert tyre repair, puncture fixing, wheel balancing, and TPMS sensor fitting in Cleckheaton
                and nearby areas. When you&apos;re stuck — we’re just one call away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-800">
              {/* Emergency Call Now -> Direct Call */}
              <a href="tel:+447476306677">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-7 rounded-xl font-semibold shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now for Emergency Help
                </Button>
              </a>

              {/* View All Services -> Scroll to services section */}
              <a href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-xl bg-transparent border-2 border-red-600/50 text-red-600 hover:bg-red-600/10 hover:border-red-600 transition-all duration-300"
                >
                  View All Services
                </Button>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-red-600/20 hover:border-red-600/40 transition-all duration-300 hover:scale-105">
                <Clock className="w-10 h-10 text-red-600 animate-pulse" />
                <div>
                  <div className="font-bold text-white text-lg">24/7 Service</div>
                  <div className="text-sm text-gray-400">Always on standby</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-red-600/20 hover:border-red-600/40 transition-all duration-300 hover:scale-105">
                <MapPin className="w-10 h-10 text-red-600 animate-bounce" />
                <div>
                  <div className="font-bold text-white text-lg">Cleckheaton Based</div>
                  <div className="text-sm text-gray-400">75 Westgate, BD19 5HS</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-red-600/20 hover:border-red-600/40 transition-all duration-300 hover:scale-105">
                <Phone className="w-10 h-10 text-red-600 animate-pulse" />
                <div>
                  <div className="font-bold text-white text-lg">Quick Response</div>
                  <div className="text-sm text-gray-400">Average 15min arrival</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative ${isVisible ? "animate-fade-scale" : "opacity-0 scale-95"}`}
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-3xl blur-xl animate-pulse"></div>

              <Image
                src="/hero.png"
                height={600}
                width={800}
                alt="Mobile tyre repair service in Cleckheaton"
                className="relative w-full h-auto rounded-2xl shadow-2xl animate-float hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute -bottom-8 -left-8 bg-black/90 backdrop-blur-md border-2 border-red-600/30 rounded-2xl p-8 shadow-2xl animate-bounce-slow">
                <div className="text-4xl font-bold text-red-600 mb-2">15min</div>
                <div className="text-sm text-gray-300 font-medium">Average Response Time</div>
                <div className="flex items-center mt-3">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-red-600 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
