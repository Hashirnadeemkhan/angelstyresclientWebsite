"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

const featuredServices = [
  {
    title: "Emergency Tyre Repair",
    description:
      "Stuck with a flat tyre on the roadside? Our 24/7 emergency tyre repair service ensures fast response and professional on-site repairs — getting you back on the road safely and quickly.",
    image: "/emergency-tyre.png",
    delay: 0,
  },
  {
    title: "Tyre Replacement",
    description:
      "We offer quick and affordable tyre replacement for all vehicle types. Whether your tyre is damaged or worn out, our experts will replace it with high-quality tyres that ensure safety and performance.",
    image: "/tyre-replacement.png",
    delay: 100,
  },
  {
    title: "Puncture Repair",
    description:
      "Got a puncture? Our skilled technicians use professional tools to repair punctures on-site, ensuring a perfect seal and extended tyre life — saving you time and money.",
    image: "/puncture-repair.jpg",
    delay: 200,
  },
  {
    title: "Car Tyre Replacement",
    description:
      "We specialize in car tyre replacements for all makes and models. From premium to budget tyres, we provide the best options to match your driving style and vehicle needs.",
    image: "/car-replace.png",
    delay: 300,
  },
  {
    title: "Wheel Balancing",
    description:
      "Ensure a smooth, vibration-free drive with our expert wheel balancing service. Proper balancing improves tyre lifespan, fuel efficiency, and overall driving comfort.",
    image: "/wheel-balancing.png",
    delay: 400,
  },
  {
    title: "TPMS Sensor Supplied, Programmed & Fitted",
    description:
      "We supply, program, and fit new TPMS (Tyre Pressure Monitoring System) sensors for all vehicles. Maintain accurate tyre pressure readings for better safety and fuel efficiency.",
    image: "/tpms-sensor.png",
    delay: 500,
  },
  {
    title: "Fleet Services",
    description:
      "At Angles Tyres Ltd, we provide free fleet accounts with no hidden fees. We even offer complimentary tyre breakdown support across United Kingdom and nearby areas. Contact us for emergency tyre assistance anytime.",
    image: "/fleet-services.png",
    delay: 600,
  },
]

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated red pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ff0000' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-red-600/20 border border-red-600/30 text-red-500 rounded-full text-sm font-semibold backdrop-blur-sm animate-pulse mb-6">
            <Star className="w-4 h-4 mr-2 animate-spin" />
            Our Premium Services
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Keeping You Moving With
            <span className="block text-red-600">Expert Tyre Solutions</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From emergency tyre repair to professional wheel balancing — we handle it all, anytime, anywhere.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {featuredServices.map((service, index) => {
            const isVisible = visibleCards.includes(index)
            return (
              <Card
                key={index}
                data-index={index}
                className={`group bg-gradient-to-b from-gray-900 via-gray-800 to-black border border-red-600/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/30 transition-all duration-700 transform ${
                  isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${service.delay}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    height={400}
                    width={600}
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-red-600/40 transition-all duration-300 hover:scale-105"
                  >
                    <a href="tel:+447476306677" className="flex items-center gap-2">
                      Book Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}