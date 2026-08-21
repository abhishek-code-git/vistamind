import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <h1 className="font-display text-6xl font-bold text-brand-ink">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-brand-navy">
        Page Not Found
      </h2>
      <p className="mt-2 text-brand-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-brand-green/90"
      >
        Return Home
      </Link>
    </main>
  );
}
