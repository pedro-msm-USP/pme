import { ExternalEntity, Opportunity, SocialLink } from '@/lib/types';

export const navItems = [
  {
    label: 'Oportunidades',
    href: '/oportunidades',
    submenu: [
      { label: 'Graduação', href: '/oportunidades/graduacao' },
      { label: 'Pós-Graduação', href: '/oportunidades/pos-graduacao' },
      { label: 'Pós-Doutorado', href: '/oportunidades/pos-doutorado' },
    ],
  },
  {
    label: 'Laboratórios e Grupos de Pesquisa',
    href: '/laboratorios',
    submenu: [
      { label: 'Laboratórios', href: '/laboratorios' },
      { label: 'Grupos de Pesquisa', href: '/grupos-pesquisa' },
    ],
  },
  { label: 'Grupos de Extensão', href: '/grupos-extensao' },
  { label: 'Sobre o PME', href: '/sobre' },
  { label: 'O que faz um Engenheiro Mecânico', href: '/o-que-faz-engenheiro-mecanico' },
  {
    label: 'Membros do PME',
    href: '/membros-pme',
    submenu: [
      { label: 'Administrativo', href: '/membros-pme#administrativo' },
      { label: 'Corpo Docente', href: '/membros-pme#docente' },
      { label: 'Técnicos', href: '/membros-pme#tecnicos' },
      { label: 'Corpo Discente', href: '/membros-pme#discente' },
    ],
  },
];

export const opportunities: Opportunity[] = [
  { id: 'g1', title: 'Programa de Iniciação Científica', level: 'graduacao', description: 'Vagas em linhas de pesquisa do departamento com acompanhamento docente.', type: 'IC', deadline: 'Fluxo contínuo', status: 'aberta' },
  { id: 'g2', title: 'Monitoria de disciplinas básicas', level: 'graduacao', description: 'Seleção semestral para apoio didático em disciplinas obrigatórias.', type: 'Monitoria', deadline: 'A definir', status: 'em-breve' },
  { id: 'p1', title: 'Bolsa de Mestrado', level: 'pos-graduacao', description: 'Edital para bolsas em projetos alinhados às linhas do programa.', type: 'Bolsa', deadline: 'A definir', status: 'em-breve' },
  { id: 'p2', title: 'Processo seletivo de Doutorado', level: 'pos-graduacao', description: 'Ingresso regular com avaliação de projeto e currículo.', type: 'Processo seletivo', deadline: 'Encerrado', status: 'encerrada' },
  { id: 'pd1', title: 'Chamada de Pós-Doutorado', level: 'pos-doutorado', description: 'Vaga para pesquisador com experiência em projetos aplicados.', type: 'Pós-doc', deadline: 'Fluxo contínuo', status: 'aberta' },
];

export const labs: ExternalEntity[] = [
  { name: 'NDF', description: 'Descrição institucional pendente de validação oficial. Campo preparado para atualização.', area: 'Área a confirmar', link: '#' },
  { name: 'LFS', description: 'Descrição institucional pendente de validação oficial. Campo preparado para atualização.', area: 'Área a confirmar', link: '#' },
];

export const researchGroups: ExternalEntity[] = [
  { name: 'Grupo de Pesquisa 01', description: 'Placeholder institucional para grupo de pesquisa do PME.', area: 'Linha de pesquisa a informar', link: '#' },
  { name: 'Grupo de Pesquisa 02', description: 'Placeholder institucional para grupo de pesquisa do PME.', area: 'Linha de pesquisa a informar', link: '#' },
];

export const extensionGroups: Array<ExternalEntity & { social: SocialLink[] }> = [
  { name: 'PET Mecânica', description: 'Grupo de extensão com foco em formação acadêmica e impacto social.', area: 'Educação e Extensão', social: [{ platform: 'instagram', href: '#' }, { platform: 'linkedin', href: '#' }] },
  { name: 'Baja', description: 'Equipe estudantil para projetos de mobilidade e prototipagem.', area: 'Projeto e Competição', social: [{ platform: 'instagram', href: '#' }, { platform: 'youtube', href: '#' }] },
  { name: 'Milhagem', description: 'Equipe voltada à eficiência energética e engenharia aplicada.', area: 'Eficiência Energética', social: [{ platform: 'instagram', href: '#' }] },
  { name: 'Fórmula', description: 'Desenvolvimento de protótipos e integração multidisciplinar.', area: 'Mobilidade', social: [{ platform: 'instagram', href: '#' }, { platform: 'site', href: '#' }] },
  { name: 'Keep Flying', description: 'Projetos estudantis com foco em sistemas aeronáuticos.', area: 'Sistemas Mecânicos', social: [{ platform: 'instagram', href: '#' }] },
  { name: 'Thunderratz', description: 'Equipe de tecnologia e robótica com forte base em engenharia.', area: 'Automação e Robótica', social: [{ platform: 'instagram', href: '#' }, { platform: 'youtube', href: '#' }] },
];

export const memberSections = {
  administrativo: [{ name: 'Nome Placeholder', role: 'Secretaria Acadêmica', area: 'Gestão Administrativa', email: 'email@usp.br', bio: 'Mini bio editável para publicação institucional.' }],
  docente: [{ name: 'Nome Placeholder', role: 'Professor(a) Titular', area: 'Área de pesquisa', email: 'email@usp.br', bio: 'Mini bio editável para perfil docente.' }],
  tecnicos: [{ name: 'Nome Placeholder', role: 'Técnico(a) de Laboratório', area: 'Suporte experimental', email: 'email@usp.br', bio: 'Mini bio editável para perfil técnico.' }],
  discente: [{ name: 'Nome Placeholder', role: 'Representante Discente', area: 'Graduação/Pós-graduação', email: 'email@usp.br', bio: 'Mini bio editável para perfil discente.' }],
};
