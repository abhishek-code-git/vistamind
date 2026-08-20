"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from the Community"
          description="Prepared for verified testimonials only, so the foundation's public voice remains credible."
        />
        <article className="mx-auto max-w-4xl rounded-[28px] border border-brand-navy/10 bg-white p-6 shadow-card md:p-10">
          <Quote aria-hidden className="mb-6 h-11 w-11 text-brand-gold" />
          <p className="font-display text-3xl font-bold leading-tight text-brand-ink md:text-4xl">
            {testimonial.quote}
          </p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-brand-navy/10">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} placeholder portrait`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-brand-ink">{testimonial.name}</p>
                <p className="text-sm text-brand-muted">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  setIndex((value) =>
                    value === 0 ? testimonials.length - 1 : value - 1,
                  )
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy"
                aria-label="Previous testimonial"
              >
                <ChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() =>
                  setIndex((value) => (value + 1) % testimonials.length)
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy"
                aria-label="Next testimonial"
              >
                <ChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
