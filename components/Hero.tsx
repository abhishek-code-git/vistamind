"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { fadeRight, fadeUp, staggerChildren } from "@/components/animations";

const impactCards = ["18+ Years", "60+ Awards", "Education First"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 md:pb-28 md:pt-40">
      <div className="absolute inset-0 -z-10 logo-pattern opacity-60" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="section-shell grid items-center gap-9 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-brand-navy"
          >
            Vistamind Social Foundation
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.65rem] font-bold leading-[1.04] text-brand-ink sm:text-5xl md:text-7xl"
          >
            Empowering Futures Through{" "}
            <span className="bg-gradient-to-r from-brand-green to-brand-navy bg-clip-text text-transparent">
              Education
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-7 text-brand-muted sm:mt-6 sm:text-lg sm:leading-8"
          >
            Building stronger communities by creating meaningful opportunities
            for learning, growth and a better future.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 grid gap-3 sm:flex sm:flex-wrap"
          >
            <Button href="/donate" className="w-full sm:w-auto">
              Support Our Mission
            </Button>
            <Button href="#work" variant="secondary" className="w-full sm:w-auto">
              Explore Our Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -left-4 top-8 h-24 w-24 rounded-3xl border border-brand-gold/40 bg-white/50" />
          <div className="absolute -right-3 bottom-10 h-20 w-20 rounded-full bg-brand-red/10" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-gradient-to-br from-brand-navy/15 via-white to-brand-green/15 shadow-premium sm:aspect-[5/4] sm:rounded-[28px]">
            <Image
              src="/images/hero.jpg"
              alt="Students learning together through Vistamind Social Foundation"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          {impactCards.map((card, index) => (
            <motion.div
              key={card}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm font-bold text-brand-ink shadow-card backdrop-blur ${
                index === 0
                  ? "-left-1 bottom-12"
                  : index === 1
                    ? "right-4 top-5"
                    : "bottom-5 right-10"
              }`}
            >
              {card}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
