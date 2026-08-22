"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { FormEvent, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { brand } from "@/data/siteData";

const socialLinks = [
  { label: "Instagram", href: brand.social.instagram, icon: Instagram },
  { label: "Facebook", href: brand.social.facebook, icon: Facebook },
  { label: "LinkedIn", href: brand.social.linkedin, icon: Linkedin },
  { label: "YouTube", href: brand.social.youtube, icon: Youtube },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      return;
    }
    setStatus("success");
    form.reset();
  };

  return (
    <section id="contact" className="bg-brand-warm py-20 pb-28 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build a Better Future Together."
          description="Reach out for support, volunteering, partnerships or foundation information."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[28px] bg-brand-navy p-6 text-white shadow-premium sm:p-7 md:p-9">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Vistamind Social Foundation
            </h3>
            <p className="mt-4 leading-7 text-white/78">{brand.tagline}</p>
            <div className="mt-8 space-y-5">
              <ContactLine icon={Mail} label={brand.email} href={`mailto:${brand.email}`} />
              <ContactLine icon={Phone} label={brand.phone} href={`tel:${brand.phone}`} />
              <ContactLine icon={MapPin} label={brand.address} />
            </div>
            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-brand-navy"
                >
                  <Icon aria-hidden className="h-5 w-5" />
                </a>
              ))}
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="rounded-[28px] border border-brand-navy/10 bg-white p-6 shadow-card md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Subject" name="subject" required />
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-brand-ink">
                Message
              </span>
              <textarea
                name="message"
                required
                minLength={10}
                rows={6}
                className="w-full resize-none rounded-2xl border border-brand-navy/10 bg-brand-warm px-4 py-3 text-brand-ink outline-none transition focus:border-brand-green"
              />
            </label>
            {status !== "idle" ? (
              <p
                className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
                  status === "success"
                    ? "bg-brand-green/10 text-brand-green"
                    : "bg-brand-red/10 text-brand-red"
                }`}
              >
                {status === "success"
                  ? "Thank you. Your message has been prepared for future backend delivery."
                  : "Please complete the required fields before sending."}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-brand-green/20 transition hover:-translate-y-0.5 md:w-auto"
            >
              Send Message
              <Send aria-hidden className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-brand-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-2xl border border-brand-navy/10 bg-brand-warm px-4 text-brand-ink outline-none transition focus:border-brand-green"
      />
    </label>
  );
}

function ContactLine({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Mail;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon aria-hidden className="h-5 w-5 shrink-0 text-brand-gold" />
      <span className="min-w-0 break-words">{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 text-white/85">
        {content}
      </a>
    );
  }

  return <p className="flex items-start gap-3 text-white/85">{content}</p>;
}
