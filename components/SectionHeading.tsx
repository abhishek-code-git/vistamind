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
      <h2 className="font-display text-4xl font-bold leading-tight text-brand-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-brand-muted">{description}</p>
      ) : null}
    </div>
  );
}
