"use client";

import { LucideIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type WorkCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function WorkCard({
  icon: Icon,
  title,
  description,
}: WorkCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-brand-navy/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-card"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green transition group-hover:rotate-3 group-hover:scale-105">
        <Icon aria-hidden className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-brand-ink">{title}</h3>
      <p className="mt-3 min-h-24 leading-7 text-brand-muted">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
        Learn More
        <ArrowRight
          aria-hidden
          className="h-4 w-4 transition group-hover:translate-x-1"
        />
      </span>
    </motion.article>
  );
}
