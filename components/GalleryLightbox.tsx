"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/data/gallery";

type GalleryLightboxProps = {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onMove: (index: number) => void;
};

export default function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onMove,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const item = items[activeIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onMove((activeIndex + 1) % items.length);
      if (event.key === "ArrowLeft")
        onMove((activeIndex - 1 + items.length) % items.length);
    };

    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length, onClose, onMove]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-ink/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      tabIndex={-1}
      ref={dialogRef}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-premium">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-brand-ink shadow-card"
          aria-label="Close gallery lightbox"
        >
          <X aria-hidden />
        </button>
        <div className="relative aspect-[16/10] bg-brand-navy/10">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="90vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              {item.category}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-brand-ink">
              {item.title}
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() =>
                onMove((activeIndex - 1 + items.length) % items.length)
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy"
              aria-label="Previous gallery image"
            >
              <ChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => onMove((activeIndex + 1) % items.length)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 text-brand-navy"
              aria-label="Next gallery image"
            >
              <ChevronRight aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
