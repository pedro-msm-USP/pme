import { SectionHeader } from '@/components/section-header';

export default function SobrePage() {
  return (
    <main className="container-shell py-12">
      <SectionHeader eyebrow="Sobre o PME" title="História, missão e relevância institucional" />
      <div className="space-y-4 text-slate-700">
        <p>O Departamento de Engenharia Mecânica da Escola Politécnica da USP atua como referência acadêmica na formação de engenheiros, na produção científica e no desenvolvimento de soluções tecnológicas para desafios industriais e sociais.</p>
        <p>Com trajetória consolidada dentro da Poli-USP, o PME integra ensino, pesquisa, inovação e extensão em ambiente de excelência, fortalecendo a contribuição da universidade pública para o país.</p>
        <p>Esta versão do site foi estruturada para comunicação institucional clara e atualização contínua de conteúdos por equipe acadêmica e administrativa.</p>
      </div>
    </main>
  );
}
