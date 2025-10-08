"use client";

import { useEffect, useRef, useState } from "react";
import { Truck, Clock, Shield, Headphones } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Truck, title: "Professional Fleet", delay: 0 },
    { icon: Clock, title: "Rapid Response", delay: 200 },
    { icon: Shield, title: "Certified Technicians", delay: 400 },
    { icon: Headphones, title: "24/7 Support", delay: 600 },
  ];

  return (
    <section
      id="choose-us"
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image
          height={500}
          width={500}
          src="/service4.jpg"
          alt="Professional breakdown recovery service"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-600/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              {/* Section Label */}
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="font-semibold uppercase tracking-wider text-sm text-red-500">
                  Why Choose Us
                </span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-300"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-400"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Why You Should Choose{" "}
                <span className="text-red-500 relative">
                  Amish Breakdown Recovery
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 rounded-full animate-pulse"></div>
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-gray-200 leading-relaxed">
                We deliver reliable, professional, and efficient breakdown recovery services across London that ensure your safety and peace of mind in every emergency situation.
              </p>
            </div>
          </div>

          {/* Right: Back to Top */}
          <div
            className={`flex justify-end transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="writing-mode-vertical text-red-500 hover:text-red-400 font-medium tracking-widest transition-colors duration-300 transform rotate-90 origin-center"
            >
              BACK TO TOP
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 group-hover:scale-110 transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-red-500/0 group-hover:border-red-500/30 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
