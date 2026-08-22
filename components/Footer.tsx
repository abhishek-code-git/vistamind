import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { brand, navItems } from "@/data/siteData";

const getInvolved = ["Donate", "Volunteer", "Partner With Us"];
const social = [
  { label: "Instagram", href: brand.social.instagram, icon: Instagram },
  { label: "Facebook", href: brand.social.facebook, icon: Facebook },
  { label: "LinkedIn", href: brand.social.linkedin, icon: Linkedin },
  { label: "YouTube", href: brand.social.youtube, icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink pb-20 pt-16 text-white lg:pb-8">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${brand.name} logo`}
              width={180}
              height={180}
              className="h-16 w-auto rounded-xl bg-white p-1.5 object-contain"
            />
            <p className="mt-5 max-w-sm text-white/70">{brand.tagline}</p>
          </div>
          <FooterColumn title="Quick Links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-gold"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Get Involved">
            {getInvolved.map((item) => (
              <Link
                key={item}
                href={item === "Donate" ? "/donate" : "#contact"}
                className="hover:text-brand-gold"
              >
                {item}
              </Link>
            ))}
          </FooterColumn>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">
              Newsletter
            </h3>
            <form className="mt-5 flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 text-white placeholder:text-white/50"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-gold px-5 text-sm font-bold uppercase tracking-[0.12em] text-brand-ink"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              {social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-gold hover:text-brand-ink"
                >
                  <Icon aria-hidden className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© Vistamind Social Foundation</p>
          <div className="flex flex-wrap gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Transparency</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-gold">
        {title}
      </h3>
      <div className="mt-5 grid gap-3 text-white/70">{children}</div>
    </div>
  );
}
