"use client";

import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { events } from "@/data/events";
import { fadeUp, staggerChildren, viewport } from "@/components/animations";

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Events"
          title="Upcoming and Recent Foundation Activities"
          // description="Event cards are data-driven and ready for publish/unpublish controls in a future admin panel."
        />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-4 sm:gap-5 md:grid-cols-3"
        >
          {events.map((event) => (
            <motion.article
              variants={fadeUp}
              key={event.id}
              className="rounded-3xl border border-brand-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card sm:p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-navy">
                <CalendarDays aria-hidden className="h-6 w-6" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                {event.date}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-tight text-brand-ink sm:text-2xl">
                {event.title}
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-muted">
                <MapPin aria-hidden className="h-4 w-4" />
                {event.location}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-muted">
                {event.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                View Event
                <ArrowRight aria-hidden className="h-4 w-4" />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
