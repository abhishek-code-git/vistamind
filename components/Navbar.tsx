"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navItems } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = navItems.findLast((item) => {
        const node = document.querySelector(item.href);
        if (!node) return false;
        return node.getBoundingClientRect().top <= 140;
      });
      setActive(current?.href ?? "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition ${
          isScrolled || isOpen
            ? "bg-white/95 shadow-sm backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <nav
          className="section-shell flex min-h-20 items-center justify-between"
          aria-label="Primary navigation"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${brand.name} logo`}
              width={172}
              height={54}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-semibold text-brand-ink/80 transition hover:text-brand-green"
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand-green transition-all ${
                    active === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/donate"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-brand-green/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Donate Now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </nav>

        <div
          className={`overflow-hidden border-t border-brand-navy/10 bg-white transition-all lg:hidden ${
            isOpen ? "max-h-[520px]" : "max-h-0 border-transparent"
          }`}
        >
          <div className="section-shell py-5">
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={`${brand.name} logo`}
                width={150}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 font-semibold text-brand-ink transition hover:bg-brand-green/10 hover:text-brand-green"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-brand-green px-5 text-sm font-bold uppercase tracking-[0.14em] text-white"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </header>

      <Link
        href="/donate"
        className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center rounded-full bg-brand-green text-sm font-bold uppercase tracking-[0.16em] text-white shadow-2xl shadow-brand-green/30 lg:hidden"
      >
        Donate Now
      </Link>
    </>
  );
}
