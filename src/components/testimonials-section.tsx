"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Williams",
    text: "My car had a flat tyre near Cleckheaton, and these guys arrived within 15 minutes! Quick puncture repair and super friendly service. Highly recommended for emergencies.",
    image: "/customer4.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Roberts",
    text: "Excellent experience! I got my car tyres replaced at home, and the technician even balanced all wheels properly. Fast, affordable, and professional service!",
    image: "/customer5.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "James Turner",
    text: "Had a TPMS sensor issue — they supplied, programmed, and fitted it perfectly. The technician explained everything clearly. Couldn’t ask for better service.",
    image: "/customer6.jpg",
    rating: 5,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${
          i < rating ? "fill-red-600 text-red-600" : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonial"
      className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our <span className="text-red-700">Customers</span> Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Real feedback from real drivers who trust our fast, mobile tyre services every day.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="relative p-8 md:p-12 border border-gray-200 bg-white shadow-xl rounded-3xl">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left: Image */}
                  <div className="relative w-80 h-80 mx-auto">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="space-y-6">
                    <div className="flex gap-1">{renderStars(testimonials[currentIndex].rating)}</div>
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium italic">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </blockquote>
                    <div className="pt-4">
                      <h3 className="text-2xl font-bold text-red-700">
                        {testimonials[currentIndex].name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next Buttons */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="relative mt-10 flex justify-center">
          <div className="relative">
            <div className="bg-red-600 px-8 py-4 rounded-full flex items-center gap-4 shadow-lg">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-white scale-110 shadow-lg"
                      : "border-white/50 hover:border-white hover:scale-105"
                  }`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-red-700 scale-125"
                  : "bg-gray-400 hover:bg-red-600/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
