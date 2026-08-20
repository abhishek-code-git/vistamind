"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-brand-navy px-6 py-16 text-center text-white shadow-premium md:px-14 md:py-20">
          <motion.div
            aria-hidden
            className="absolute left-8 top-8 -z-10 h-32 w-32 rounded-[2rem] border border-white/10"
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-8 right-8 -z-10 h-40 w-40 rounded-full bg-brand-green/30 blur-2xl"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
            Get Involved
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Together, We Can Empower the Next Generation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Your support can help create meaningful opportunities through
            education and community action.
          </p>
          <div className="mt-9 grid gap-3 sm:flex sm:justify-center">
            <Button href="/donate" className="w-full sm:w-auto">
              Support Our Mission
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
