"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto my-20 p-8 bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 gap-10 border border-gray-100"
    >
      {/* Left Image */}
      <div className="rounded-2xl overflow-hidden shadow-md">
        <Image
          height={400}
          width={600}
          src="/contact.webp"
          alt="Contact our mobile tyre experts"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Right Form */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-center text-black">
          Feel Free to <span className="text-red-600">Write Us</span>
        </h2>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Your Name"
              {...form.register("name")}
              className="w-full p-3 border border-gray-300 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {form.formState.errors.name && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="col-span-1">
            <input
              type="email"
              placeholder="Email Address"
              {...form.register("email")}
              className="w-full p-3 border border-gray-300 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {form.formState.errors.email && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Phone"
              {...form.register("phone")}
              className="w-full p-3 border border-gray-300 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {form.formState.errors.phone && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          {/* Subject */}
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Subject"
              {...form.register("subject")}
              className="w-full p-3 border border-gray-300 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
            {form.formState.errors.subject && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              placeholder="Write a Message"
              {...form.register("message")}
              rows={5}
              className="w-full p-3 border border-gray-300 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            ></textarea>
            {form.formState.errors.message && (
              <p className="text-red-600 text-sm mt-1">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-600 font-medium md:col-span-2 text-center">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium md:col-span-2 text-center">
              ❌ Failed to send message. Please try again.
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:col-span-2 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send A Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
