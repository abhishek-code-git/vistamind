"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { fadeUp, viewport } from "@/components/animations";

export default function FounderSection() {
  return (
    <section className="bg-brand-warm py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid items-center gap-8 rounded-[28px] border border-brand-navy/10 bg-white p-5 shadow-card sm:gap-10 sm:p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-navy/10">
            <Image
              src="/images/founder.jpg"
              alt="Sangeeta Rani, Founder and Chairperson of Vistamind Social Foundation"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
              Founder
            </p>
            <h2 className="font-display text-3xl font-bold leading-[1.1] text-brand-ink sm:text-4xl md:text-5xl">
              Leadership Driven by a Passion for Education
            </h2>
            <p className="mt-6 text-2xl font-semibold text-brand-navy">
              Sangeeta Rani
            </p>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-muted">
              Founder & Chairperson
            </p>
            <blockquote className="mt-7 border-l-4 border-brand-gold pl-4 font-display text-2xl font-bold leading-tight text-brand-ink sm:mt-8 sm:pl-6 sm:text-3xl">
              &ldquo;True progress begins with empowered minds.&rdquo;
            </blockquote>
            <p className="mt-6 text-lg leading-8 text-brand-muted">
           "It is an honour to be a part of the educator community. My journey in education and social work has been deeply 
enriching, and I consider this a golden opportunity to serve our nation, society, and most importantly, our students.
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Read Founder&apos;s Message
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
