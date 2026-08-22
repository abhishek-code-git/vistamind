"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import GalleryLightbox from "@/components/GalleryLightbox";
import { galleryFilters, galleryItems } from "@/data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the Vistamind Journey"
          description="A dynamic gallery ready for events, education initiatives, community activities, workshops, awards and campaigns."
        />
        <div className="mb-8 flex snap-x justify-start gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
          {galleryFilters.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => {
                setFilter(item);
                setActiveIndex(null);
              }}
              className={`shrink-0 snap-start rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition ${
                filter === item
                  ? "border-brand-green bg-brand-green text-white"
                  : "border-brand-navy/10 bg-white text-brand-muted hover:border-brand-green/40 hover:text-brand-green"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredItems.length > 0 ? (
          <div className="masonry-grid">
            {filteredItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-brand-navy/10 text-left shadow-sm"
                aria-label={`Open gallery image: ${item.title}`}
              >
                <div
                  className={`relative ${
                    index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/10 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold leading-tight sm:mt-3 sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex min-h-72 flex-col items-center justify-center rounded-[28px] border border-dashed border-brand-navy/20 bg-brand-warm p-10 text-center">
            <ImageIcon aria-hidden className="mb-4 h-12 w-12 text-brand-green" />
            <h3 className="text-2xl font-bold text-brand-ink">
              Gallery images coming soon
            </h3>
            <p className="mt-3 max-w-md text-brand-muted">
              Add image entries in data/gallery.ts and place files in
              public/images/gallery.
            </p>
          </div>
        )}
      </div>

      {activeIndex !== null ? (
        <GalleryLightbox
          items={filteredItems}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onMove={setActiveIndex}
        />
      ) : null}
    </section>
  );
}
