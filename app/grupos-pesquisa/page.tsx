import { SectionHeader } from '@/components/section-header';
import { researchGroups } from '@/data/site-data';

export default function GruposPesquisaPage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Grupos de Pesquisa" title="Linhas de investigação acadêmica" description="Organização de grupos de pesquisa em formato institucional claro e escalável." />
      <div className="grid gap-4 md:grid-cols-2">
        {researchGroups.map((group) => (
          <article key={group.name} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{group.name}</h3>
            <p className="mt-2 text-slate-600">{group.description}</p>
            <p className="mt-2 text-sm text-slate-500">Linha/Área: {group.area}</p>
            <a target="_blank" rel="noreferrer" href={group.link ?? '#'} className="mt-4 inline-block text-sm font-medium text-institutional-blue underline">Link externo</a>
          </article>
        ))}
      </div>
    </main>
  );
}
