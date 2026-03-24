import { SectionHeader } from '@/components/section-header';
import { memberSections } from '@/data/site-data';

function MemberCard({ member }: { member: { name: string; role: string; area: string; email: string; bio: string } }) {
  return (
    <article className="rounded-2xl border border-slate-200 p-5">
      <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
      <p className="text-sm text-slate-500">{member.role}</p>
      <p className="mt-2 text-sm text-slate-600">Área: {member.area}</p>
      <p className="text-sm text-slate-600">E-mail: {member.email}</p>
      <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
    </article>
  );
}

export default function MembrosPage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Membros do PME" title="Administrativo, Docente, Técnicos e Corpo Discente" description="Layout preparado para exibir informações institucionais com atualização simplificada." />

      <section id="administrativo" className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Administrativo</h2>
        <div className="grid gap-3 md:grid-cols-2">{memberSections.administrativo.map((m) => <MemberCard key={m.email + m.role} member={m} />)}</div>
      </section>

      <section id="docente" className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Corpo Docente</h2>
        <div className="grid gap-3 md:grid-cols-2">{memberSections.docente.map((m) => <MemberCard key={m.email + m.role} member={m} />)}</div>
      </section>

      <section id="tecnicos" className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Técnicos</h2>
        <div className="grid gap-3 md:grid-cols-2">{memberSections.tecnicos.map((m) => <MemberCard key={m.email + m.role} member={m} />)}</div>
      </section>

      <section id="discente">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Corpo Discente</h2>
        <div className="grid gap-3 md:grid-cols-2">{memberSections.discente.map((m) => <MemberCard key={m.email + m.role} member={m} />)}</div>
      </section>
    </main>
  );
}
