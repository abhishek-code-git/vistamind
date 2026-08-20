"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { programs } from "@/data/programs";
import { fadeUp, staggerChildren, viewport } from "@/components/animations";

export default function Programs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Initiatives"
          title="Our Initiatives"
          description="Focused program areas prepared for real foundation updates and future CMS publishing."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2"
        >
          {programs.map((program) => (
            <motion.article
              variants={fadeUp}
              key={program.id}
              className="group overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-warm shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={program.image}
                  alt={`${program.title} placeholder image`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                  {program.category}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-brand-ink">
                  {program.title}
                </h3>
                <p className="mt-3 leading-7 text-brand-muted">
                  {program.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                  Learn More
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
