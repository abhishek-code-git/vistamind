import Link from "next/link";
import { ArrowLeft, HeartHandshake } from "lucide-react";
import Button from "@/components/Button";

export const metadata = {
  title: "Donate | Vistamind Social Foundation",
  description:
    "Support Vistamind Social Foundation's education and community impact work.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-brand-warm text-brand-ink">
      <section className="section-shell flex min-h-screen items-center py-24">
        <div className="max-w-3xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-green"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Back to home
          </Link>
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green text-white shadow-card">
            <HeartHandshake aria-hidden className="h-8 w-8" />
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-navy">
            Donate Now
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
            Support educational opportunity with Vistamind.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            This donation page is ready for payment gateway integration. Razorpay,
            Stripe, bank transfer, or a custom giving flow can be connected here
            when the foundation finalizes its preferred provider.
          </p>
          <div className="mt-10">
            <Button href="/#contact">Talk to the Foundation</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
