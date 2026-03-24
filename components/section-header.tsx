interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="mb-8 space-y-3">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-institutional-blue">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      {description ? <p className="max-w-3xl text-slate-600">{description}</p> : null}
    </header>
  );
}
