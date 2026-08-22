"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerChildren, viewport } from "@/components/animations";
import { impactStats } from "@/data/siteData";

function CountUp({ target, fallback }: { target?: number; fallback: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 90, damping: 18, mass: 0.8 });
  const [display, setDisplay] = useState(target ? "0" : fallback);

  useMotionValueEvent(spring, "change", (latest) => {
    if (target) {
      setDisplay(`${Math.round(latest)}+`);
    }
  });

  useEffect(() => {
    if (isInView && target) value.set(target);
  }, [isInView, target, value]);

  return <span ref={ref}>{display}</span>;
}

export default function ImpactStats() {
  return (
    <section id="impact" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Impact"
          title="Creating Impact That Reaches Beyond the Classroom"
          description="A concise view of the foundation's education-first work, with confirmed facts kept easy to update."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={fadeUp}
              className="rounded-3xl border border-brand-navy/10 bg-white p-7 shadow-card"
            >
              <p className="font-display text-5xl font-bold text-brand-navy">
                <CountUp target={stat.numeric} fallback={stat.value} />
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-brand-muted">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
