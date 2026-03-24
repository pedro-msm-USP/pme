import { SectionHeader } from '@/components/section-header';
import { InfoCard } from '@/components/cards';

const levels = [
  { title: 'Graduação', description: 'Editais, IC, monitoria, estágios e processos seletivos para graduação.', href: '/oportunidades/graduacao' },
  { title: 'Pós-Graduação', description: 'Bolsas, chamadas acadêmicas e oportunidades de pesquisa.', href: '/oportunidades/pos-graduacao' },
  { title: 'Pós-Doutorado', description: 'Chamadas para pesquisadores e projetos estratégicos.', href: '/oportunidades/pos-doutorado' },
];

export default function OportunidadesPage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Oportunidades" title="Graduação, Pós-Graduação e Pós-Doutorado" description="Ambiente central para divulgação de editais, bolsas e processos seletivos do departamento." />
      <div className="grid gap-4 md:grid-cols-3">{levels.map((item) => <InfoCard key={item.title} {...item} />)}</div>
    </main>
  );
}
