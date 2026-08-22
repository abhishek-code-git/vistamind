type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto mb-12 max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-[1.1] text-brand-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
