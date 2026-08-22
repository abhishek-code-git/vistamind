"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { fadeLeft, fadeRight, viewport } from "@/components/animations";

export default function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-white py-20 md:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[2rem] bg-brand-gold/15" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-premium">
            <Image
              src="/images/about.jpg"
              alt="Vistamind Social Foundation community learning placeholder"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
            Who We Are
          </p>
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-brand-ink sm:text-4xl md:text-5xl">
            Education is not just about learning. It is about creating
            possibilities.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-brand-muted">
            <p>
              Vistamind Social Foundation is built around education,
              empowerment and community participation. The foundation works to
              create meaningful opportunities for learners through equal access,
              future-ready learning and human-centered support.
            </p>
            <p>
              Its work is designed to connect children, families, educators and
              partners around one shared belief: empowered minds can build
              stronger communities.
            </p>
          </div>
          <div className="mt-8">
            <Button href="#work" variant="secondary">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
