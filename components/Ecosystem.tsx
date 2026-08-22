"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { ecosystemNodes } from "@/data/siteData";
import { fadeUp, staggerChildren, viewport } from "@/components/animations";

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r from-brand-navy/10 via-brand-green/10 to-brand-gold/10" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education Ecosystem"
          title="Building an Empowered Future"
          description="Connected areas of work create a stronger foundation for learning, development and recognition."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mx-auto grid max-w-5xl gap-5 md:grid-cols-3 md:auto-rows-fr"
        >
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            aria-hidden
          >
            <motion.path
              d="M 170 115 C 360 55, 570 55, 760 115 S 920 330, 740 420 C 570 505, 370 505, 190 420 S 0 205, 170 115"
              fill="none"
              stroke="rgba(7,89,133,0.22)"
              strokeWidth="2"
              strokeDasharray="9 9"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={viewport}
              transition={{ duration: 1.4 }}
            />
          </svg>

          {ecosystemNodes.slice(0, 3).map((node) => (
            <Node key={node.label} {...node} />
          ))}
          <motion.div
            variants={fadeUp}
            className="relative z-10 flex min-h-44 items-center justify-center rounded-[28px] bg-gradient-to-br from-brand-navy to-brand-green p-8 text-center text-white shadow-premium md:col-start-2 md:row-start-2"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/75">
                Empowered
              </p>
              <p className="mt-2 font-display text-4xl font-bold">Futures</p>
            </div>
          </motion.div>
          {ecosystemNodes.slice(3).map((node) => (
            <Node key={node.label} {...node} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Node({
  label,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative z-10 flex min-h-32 items-center gap-4 rounded-3xl border border-brand-navy/10 bg-white p-5 shadow-card"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy/10 text-brand-navy">
        <Icon aria-hidden className="h-6 w-6" />
      </span>
      <span className="font-bold text-brand-ink">{label}</span>
    </motion.div>
  );
}
