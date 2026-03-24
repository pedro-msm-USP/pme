export type OpportunityStatus = 'aberta' | 'em-breve' | 'encerrada';

export interface Opportunity {
  id: string;
  title: string;
  level: 'graduacao' | 'pos-graduacao' | 'pos-doutorado';
  description: string;
  type: string;
  deadline: string;
  status: OpportunityStatus;
}

export interface ExternalEntity {
  name: string;
  description: string;
  area: string;
  link?: string;
}

export interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'youtube' | 'site';
  href: string;
}
