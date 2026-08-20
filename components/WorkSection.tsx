"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import { fadeUp, staggerChildren, viewport } from "@/components/animations";
import { workCards } from "@/data/siteData";

export default function WorkSection() {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Work"
          title="Our Work"
          description="A community-driven approach to creating equal opportunities."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {workCards.map((card) => (
            <motion.div variants={fadeUp} key={card.title}>
              <WorkCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
