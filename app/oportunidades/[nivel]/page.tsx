import { SectionHeader } from '@/components/section-header';
import { opportunities } from '@/data/site-data';

const labels: Record<string, string> = {
  graduacao: 'Graduação',
  'pos-graduacao': 'Pós-Graduação',
  'pos-doutorado': 'Pós-Doutorado',
};

const statusStyle = {
  aberta: 'bg-emerald-100 text-emerald-700',
  'em-breve': 'bg-amber-100 text-amber-700',
  encerrada: 'bg-slate-200 text-slate-700',
};

export default async function OportunidadeNivelPage({ params }: { params: Promise<{ nivel: string }> }) {
  const { nivel } = await params;
  const items = opportunities.filter((item) => item.level === nivel);

  return (
    <main className="container-shell py-12">
      <SectionHeader title={`Oportunidades · ${labels[nivel] ?? 'Categoria'}`} description="Estrutura mockada preparada para expansão futura com backend/CMS." />
      <div className="mb-6 flex gap-2 text-sm">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">Aberta</span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">Em breve</span>
        <span className="rounded-full bg-slate-200 px-3 py-1 text-slate-700">Encerrada</span>
      </div>
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle[item.status]}`}>{item.status.replace('-', ' ')}</span>
            </div>
            <p className="mt-2 text-slate-600">{item.description}</p>
            <p className="mt-2 text-sm text-slate-500">Tipo: {item.type} · Prazo: {item.deadline}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
