import { SectionHeader } from '@/components/section-header';

const areas = [
  { title: 'Ciências térmicas', text: 'Abrange termodinâmica, transferência de calor e conversão de energia, com aplicações em sistemas térmicos industriais e energéticos.' },
  { title: 'Mecânica dos fluidos', text: 'Estuda o comportamento de fluidos em repouso e movimento, base para projetos em energia, processos e transporte.' },
  { title: 'Mecânica dos sólidos', text: 'Analisa esforços, deformações e resistência de materiais para garantir segurança estrutural e desempenho mecânico.' },
  { title: 'Dinâmica e controle', text: 'Trata da modelagem de sistemas dinâmicos e desenvolvimento de estratégias de controle para estabilidade e automação.' },
  { title: 'Projeto e fabricação', text: 'Integra concepção de produtos, seleção de materiais, processos de manufatura e melhoria contínua de produção.' },
];

export default function EngenheiroMecanicoPage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Carreira" title="O que faz um Engenheiro Mecânico" description="Visão didática e profissional sobre áreas de atuação e possibilidades de carreira." />
      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <article key={area.title} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
            <p className="mt-2 text-slate-600">{area.text}</p>
          </article>
        ))}
      </div>
      <section className="mt-8 rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Mercado de trabalho</h2>
        <p className="mt-3 text-slate-600">O engenheiro mecânico pode atuar em setores como energia, mobilidade, manufatura avançada, automação, consultoria técnica, pesquisa e inovação, empreendedorismo e carreira acadêmica, contribuindo para ganhos de eficiência, competitividade e sustentabilidade.</p>
      </section>
    </main>
  );
}
