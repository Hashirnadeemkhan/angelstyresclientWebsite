"use client"

import { useEffect, useRef, useState } from "react"
import { Wrench, Shield, Clock, Award } from "lucide-react"
import Image from "next/image"

export default function LuxurySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff0000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 transform rotate-45" />
              ))}
            </div>
            <span className="text-gray-700 font-medium tracking-wide">
              Trusted Mobile Tyre Experts
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 transform rotate-45" />
              ))}
            </div>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold text-black transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Fast, Professional &{" "}
            <span className="text-red-600">Always There When You Need Us</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Emergency Tyre Service Card */}
          <div
            className={`group bg-white border border-red-100 rounded-2xl shadow-md overflow-hidden transition-all duration-1000 delay-300 hover:shadow-lg hover:-translate-y-2 hover:border-red-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-3 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold mb-6 shadow-md group-hover:bg-red-700 transition-colors">
                <Clock className="w-5 h-5" />
                24/7 Tyre Assistance
              </div>

              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Emergency Tyre Repair & Replacement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Flat tyre or sudden puncture? Our mobile tyre experts reach you fast with all
                  the tools needed to fix, replace, or balance your tyre — anytime, anywhere in
                  Cleckheaton and surrounding areas.
                </p>
              </div>

              <div className="flex justify-between items-end">
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-red-600 to-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className="relative h-64 lg:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  Mobile Tyre Van
                </div>
              </div>
              <Image
                src="/service3.png"
                alt="Mobile tyre repair and emergency service van"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Professional Technicians Card */}
          <div
            className={`group bg-white border border-blue-100 rounded-2xl shadow-md overflow-hidden transition-all duration-1000 delay-500 hover:shadow-lg hover:-translate-y-2 hover:border-blue-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-3 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold mb-6 shadow-md group-hover:bg-blue-700 transition-colors">
                <Shield className="w-5 h-5" />
                Certified Technicians
              </div>

              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Trusted Tyre Experts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From puncture repairs to TPMS sensor programming, our fully insured technicians
                  use modern tools to ensure your car’s safety and performance. Quality workmanship
                  with a professional attitude — every time.
                </p>
              </div>

              <div className="flex justify-between items-end">
                <a
                  href="tel:+447476306677"
                  className="bg-gradient-to-r from-blue-900 to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <span className="flex items-center gap-2">
                    Contact Us
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="relative h-64 lg:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Expert Service
                </div>
              </div>
              <Image
                src="/service2.png"
                alt="Expert technicians providing tyre replacement service"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { number: "15min", label: "Average Response" },
            { number: "24/7", label: "Tyre Support" },
            { number: "99%", label: "Customer Satisfaction" },
            { number: "2000+", label: "Tyres Repaired" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
