import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

const variants = {
  primary:
    "bg-brand-green text-white shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-green/25",
  secondary:
    "border border-brand-navy/15 bg-white text-brand-navy shadow-sm hover:-translate-y-0.5 hover:border-brand-green/35 hover:shadow-card",
  ghost:
    "bg-transparent text-brand-green hover:-translate-y-0.5 hover:bg-brand-green/10",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <ArrowRight aria-hidden className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      <ArrowRight aria-hidden className="h-4 w-4" />
    </button>
  );
}
