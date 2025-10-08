"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Clock, Award } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [progressWidth, setProgressWidth] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setProgressWidth(95), 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative red glow accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <Image
                height={200}
                width={200}
                src="/about.png"
                alt="Angles Tyres professional tyre repair service"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div
              className={`absolute -bottom-8 -right-8 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Image
                height={400}
                width={600}
                src="/about.png"
                alt="Angles Tyres expert mechanics at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-black p-4 rounded-lg shadow-lg transform transition-all duration-700 delay-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-600 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-700">Call for Assistance</div>
                  <div className="font-bold text-lg text-black">7476 306677</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-600">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="font-semibold uppercase tracking-wider text-sm">
                  About Angles Tyres
                </span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-300"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-400"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Expert Tyre & Wheel Services in{" "}
                <span className="text-red-600 relative">
                  United Kingdom
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded-full animate-pulse"></div>
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              At Angles Tyres, we provide professional tyre repair, replacement, and wheel balancing
              services that keep your vehicle running safely and smoothly. Whether it’s a roadside
              emergency or a scheduled tyre change, our expert team ensures fast, reliable, and
              high-quality service every time.
            </p>

            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-200 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <p className="text-xl font-semibold text-black italic relative z-10">
                &quot;Your safety starts where your tyres meet the road.&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div
                className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
              >
                <div className="p-3 bg-red-600 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">24/7 Tyre Support</h4>
                  <p className="text-sm text-gray-600">Emergency Service</p>
                </div>
              </div>

              <div
                className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 delay-100 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
              >
                <div className="p-3 bg-red-600 rounded-full">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Certified Technicians</h4>
                  <p className="text-sm text-gray-600">Trusted Experts</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-black">
                  Professional Certified Tyre Specialists
                </span>
                <span className="font-bold text-red-600">{progressWidth}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${progressWidth}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <a href="tel:447476306677">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
