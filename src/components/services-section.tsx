"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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
    image: "/tyre-replacement.jpeg",
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
    image: "/car-tyre-replacement.jpeg",
    delay: 300,
  },
  {
    title: "Wheel Balancing",
    description:
      "Ensure a smooth, vibration-free drive with our expert wheel balancing service. Proper balancing improves tyre lifespan, fuel efficiency, and overall driving comfort.",
    image: "/wheel-balancing.jpeg",
    delay: 400,
  },
  {
    title: "TPMS Sensor Supplied, Programmed & Fitted",
    description:
      "We supply, program, and fit new TPMS (Tyre Pressure Monitoring System) sensors for all vehicles. Maintain accurate tyre pressure readings for better safety and fuel efficiency.",
    image: "/tpms-sensor.jpeg",
    delay: 500,
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
    <section id="services" ref={sectionRef} className="py-20 bg-white overflow-hidden relative">
      {/* subtle red tint pattern background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_#ef4444_1px,_transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 rotate-45"></div>
              ))}
            </div>
            <span className="text-gray-800 font-medium tracking-wider">Our Service</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-600 rotate-45"></div>
              ))}
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            We&#39;re Offering the Best
            <span className="block text-red-600">Services to You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <Card
                key={index}
                data-index={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-700 border border-red-200 bg-red-600 text-white ${
                  isVisible ? "animate-slide-up opacity-100" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${service.delay}ms`,
                  transform: isVisible ? "translateY(0)" : "translateY(32px)",
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-6">{service.description}</p>

                  <Button
                    asChild
                    className="bg-white text-red-700 hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-md relative overflow-hidden group/btn transition-all duration-300"
                  >
                    <a href="tel:447886051544">
                      <span className="relative z-10 flex items-center gap-2">
                        Book Now
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
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
