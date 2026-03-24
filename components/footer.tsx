import Link from 'next/link';

const links = [
  { href: '/oportunidades', label: 'Oportunidades' },
  { href: '/laboratorios', label: 'Laboratórios' },
  { href: '/grupos-extensao', label: 'Grupos de Extensão' },
  { href: '/membros-pme', label: 'Membros do PME' },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-institutional-blue">Departamento de Engenharia Mecânica</h2>
          <p className="mt-3 text-sm text-slate-600">Escola Politécnica da Universidade de São Paulo (Poli-USP).</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Links principais</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {links.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-institutional-blue">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contato</h3>
          <p className="mt-3 text-sm text-slate-600">Contato institucional: [substituir por e-mail oficial].</p>
          <p className="mt-2 text-sm text-slate-500">© {new Date().getFullYear()} PME Poli-USP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
