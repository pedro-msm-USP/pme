import { SectionHeader } from '@/components/section-header';
import { extensionGroups } from '@/data/site-data';
import { SocialIcons } from '@/components/social-icons';

export default function GruposExtensaoPage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Grupos de Extensão" title="Equipes estudantis e iniciativas de impacto" description="Seção dedicada a grupos ligados ao universo da engenharia mecânica com acesso rápido às redes sociais." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {extensionGroups.map((group) => (
          <article key={group.name} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{group.name}</h3>
            <p className="mt-2 text-slate-600">{group.description}</p>
            <p className="mt-2 text-sm text-slate-500">Área: {group.area}</p>
            <div className="mt-4"><SocialIcons links={group.social} /></div>
          </article>
        ))}
      </div>
    </main>
  );
}
