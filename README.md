# PME Poli-USP Site

Projeto institucional em Next.js + TypeScript + Tailwind.

## Deploy no GitHub Pages

Este repositório usa export estático do Next.js (`output: export`) e workflow em `.github/workflows/deploy-pages.yml`.

Se o GitHub Pages mostrar erro **404 File not found**, confirme:

1. O workflow **Deploy Next.js to GitHub Pages** executou com sucesso.
2. Em **Settings → Pages**, a opção de source está configurada para **GitHub Actions**.
3. A branch que dispara deploy (main/master/work) recebeu push recente.

Após isso, o `index.html` é gerado automaticamente em `out/` durante o build e publicado pelo workflow.
