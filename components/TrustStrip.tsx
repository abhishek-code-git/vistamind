"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { trustItems } from "@/data/siteData";
import { fadeUp, viewport } from "@/components/animations";

export default function TrustStrip() {
  return (
    <section className="border-y border-brand-navy/10 bg-white/80 py-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="group flex min-h-20 items-center gap-3 rounded-2xl border border-brand-navy/10 bg-white px-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-muted grayscale transition hover:-translate-y-0.5 hover:text-brand-navy hover:grayscale-0"
          >
            <span className="relative h-10 w-16 shrink-0 overflow-hidden rounded-xl bg-brand-warm">
              <Image
                src={item.image}
                alt={`${item.label} placeholder logo`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
