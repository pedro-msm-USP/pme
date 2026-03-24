import Link from 'next/link';
import { InfoCard } from '@/components/cards';
import { NewsletterForm } from '@/components/newsletter-form';
import { SectionHeader } from '@/components/section-header';

const pillars = [
  { title: 'Graduação', description: 'Formação sólida em fundamentos e aplicação da engenharia mecânica.', href: '/oportunidades/graduacao' },
  { title: 'Pós-Graduação', description: 'Pesquisa avançada em mestrado e doutorado.', href: '/oportunidades/pos-graduacao' },
  { title: 'Pesquisa', description: 'Laboratórios e grupos com atuação acadêmica e tecnológica.', href: '/grupos-pesquisa' },
  { title: 'Extensão', description: 'Projetos estudantis e iniciativas com impacto social.', href: '/grupos-extensao' },
];

export default function HomePage() {
  return (
    <main>
      <section className="container-shell py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-institutional-blue">Departamento de Engenharia Mecânica · Poli-USP</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">Excelência acadêmica em ensino, pesquisa e extensão.</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-600">O PME atua na formação de engenheiros mecânicos, no avanço científico e na conexão com os desafios tecnológicos da sociedade.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-lg bg-institutional-blue px-5 py-3 text-sm font-medium text-white" href="/sobre">Conheça o departamento</Link>
          <Link className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700" href="/oportunidades">Oportunidades e notícias</Link>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Sobre o PME" title="Tradição acadêmica e compromisso com inovação" description="O departamento integra a Escola Politécnica da USP e mantém atuação consistente em formação de excelência, pesquisa aplicada e cooperação com diferentes setores produtivos." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => <InfoCard key={item.title} {...item} />)}
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Destaques" title="Conteúdo institucional objetivo e organizado" description="Estrutura pronta para publicar oportunidades, iniciativas de pesquisa e informações institucionais com atualização contínua." />
      </section>

      <section className="container-shell py-10">
        <SectionHeader eyebrow="Newsletter" title="Receba novidades do PME" description="Inscreva-se para acompanhar oportunidades, eventos e comunicados institucionais." />
        <NewsletterForm />
      </section>
    </main>
  );
}
