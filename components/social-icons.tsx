import { Globe, Instagram, Linkedin, Youtube } from 'lucide-react';
import { SocialLink } from '@/lib/types';

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  site: Globe,
};

export function SocialIcons({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={`${link.platform}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Acessar ${link.platform}`}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-institutional-blue hover:text-institutional-blue"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
