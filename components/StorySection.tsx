"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { fadeLeft, fadeRight, viewport } from "@/components/animations";

export default function StorySection() {
  return (
    <section id="stories" className="py-20 md:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-premium"
        >
          <Image
            src="/images/story.jpg"
            alt="Vistamind story placeholder showing education and community impact"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
            Featured Story
          </p>
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-brand-ink sm:text-4xl md:text-5xl">
            Stories That Inspire Change
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-muted">
            This storytelling section is prepared for verified beneficiary,
            parent, educator or community stories. Until real stories are
            supplied, the design intentionally avoids fabricated testimonials.
          </p>
          <div className="mt-8">
            <Button href="#gallery" variant="secondary">
              Read More Stories
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
