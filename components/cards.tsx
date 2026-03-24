import Link from 'next/link';

export function InfoCard({ title, description, href }: { title: string; description: string; href?: string }) {
  const content = (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
