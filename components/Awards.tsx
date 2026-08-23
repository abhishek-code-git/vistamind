"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { awards } from "@/data/awards";
import { fadeUp, viewport } from "@/components/animations";

export default function Awards() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Awards & Recognition"
          title="Recognizing the Journey"
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {awards.map((award) => (
            <article
              key={award.id}
              className="min-w-[260px] snap-start overflow-hidden rounded-3xl border border-brand-navy/10 bg-brand-warm shadow-sm lg:min-w-0"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={award.image}
                  alt={`${award.title} award placeholder`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
                  {award.year}
                </p>
                <h3 className="mt-2 text-xl font-bold text-brand-ink">
                  {award.title}
                </h3>
                <p className="mt-2 text-sm text-brand-muted">
                  {award.organization}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
