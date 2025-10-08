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
    <section className="w-full max-w-6xl mx-auto my-12 p-6 bg-black rounded-xl shadow-lg grid md:grid-cols-2 gap-8">
      <div className="rounded-lg overflow-hidden">
        <Image
          height={400}
          width={600}
          src="/contact.webp"
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Feel Free to Write Us</h2>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            {...form.register("name")}
            className="w-full p-3 border border-red-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            {...form.register("email")}
            className="w-full p-3 border border-red-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
          )}

          <input
            type="text"
            placeholder="Phone"
            {...form.register("phone")}
            className="w-full p-3 border border-red-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {form.formState.errors.phone && (
            <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
          )}

          <input
            type="text"
            placeholder="Subject"
            {...form.register("subject")}
            className="w-full p-3 border border-red-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {form.formState.errors.subject && (
            <p className="text-red-500 text-sm">{form.formState.errors.subject.message}</p>
          )}

          <textarea
            placeholder="Write a Message"
            {...form.register("message")}
            rows={5}
            className="w-full md:col-span-2 p-3 border border-red-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm md:col-span-2">
              {form.formState.errors.message.message}
            </p>
          )}

          {status === "success" && (
            <p className="text-green-600 font-medium md:col-span-2">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 font-medium md:col-span-2">
              ❌ Failed to send message. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:col-span-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send A Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
