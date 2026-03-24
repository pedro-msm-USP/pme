import Link from 'next/link';
import { navItems } from '@/data/site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold text-slate-900 md:text-base">PME · Engenharia Mecânica · Poli-USP</Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link href={item.href} className="text-sm text-slate-700 transition hover:text-institutional-blue">{item.label}</Link>
              {item.submenu ? (
                <div className="invisible absolute left-0 top-7 w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-md transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.submenu.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-institutional-blue">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
