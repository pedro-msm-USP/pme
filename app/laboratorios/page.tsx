import { SectionHeader } from '@/components/section-header';
import { labs } from '@/data/site-data';

export default function LaboratoriosPage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Laboratórios" title="Infraestrutura de pesquisa do PME" description="Página estruturada para apresentar laboratórios com descrição, área de atuação e links oficiais." />
      <div className="grid gap-4 md:grid-cols-2">
        {labs.map((lab) => (
          <article key={lab.name} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{lab.name}</h3>
            <p className="mt-2 text-slate-600">{lab.description}</p>
            <p className="mt-2 text-sm text-slate-500">Área de atuação: {lab.area}</p>
            <a target="_blank" rel="noreferrer" href={lab.link ?? '#'} className="mt-4 inline-block text-sm font-medium text-institutional-blue underline">Acessar site oficial</a>
          </article>
        ))}
      </div>
    </main>
  );
}
