
# Portfólio - Renan Breier

Este projeto é um portfólio pessoal desenvolvido em **Angular**, com foco em apresentar minhas experiências profissionais, habilidades técnicas e principais projetos.

---

## 🚀 Tecnologias utilizadas

- Angular 22.3 e Angular CLI
- Angular Material
- TypeScript 6
- Angular Animations
- HTML5 e CSS3

---

## 🎨 Principais características

- Página inicial com apresentação e texto de boas-vindas
- Seção de experiências profissionais
- Seção de projetos com destaque para links externos (GitHub, deploy, etc.)
- Listagem de tecnologias utilizadas (Skills)
- Estilo responsivo, adaptado para desktop e mobile
- Navegação entre as seções de apresentação, habilidades, projetos, experiência e formação

---

## 📦 Como executar o projeto localmente

Instale o [Node.js](https://nodejs.org/en/download) 24 LTS, a partir da versão 24.15.0 na linha 24. Ele já inclui o npm. Confira se os dois estão disponíveis no terminal com `node -v` e `npm -v`.

Se você ainda não tem uma cópia do projeto, clone o repositório.

```bash
git clone https://github.com/renanbreier/MyDevPortfolio-RenanBreier.git
cd MyDevPortfolio-RenanBreier
```

Na pasta do projeto, instale as dependências do `package-lock.json` e inicie o servidor de desenvolvimento.

```bash
npm ci
npm start
```

Acesse [localhost:4200](http://localhost:4200/). Para encerrar o servidor, pressione `Ctrl+C` no terminal.

O `npm start` usa o Angular CLI instalado no próprio projeto. Para conferir a versão do Angular e do CLI, execute `npm run ng -- version`.

## 🛠️ Build de produção

```bash
npm run build
```

Os arquivos gerados ficam em `dist/portifolio/`.

---

## 📌 Estrutura principal do projeto

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── formations/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── timeline/
│   ├── pages/
│   │   └── home/
│   └── app.module.ts
├── assets/
├── index.html
└── main.ts
```

---

## ✨ Customização

- Edite o histórico profissional em [timeline.component.ts](src/app/components/timeline/timeline.component.ts).
- Edite os textos, links e referências às imagens dos projetos em [projects.component.ts](src/app/components/projects/projects.component.ts).
- Edite as habilidades em [skills.component.ts](src/app/components/skills/skills.component.ts).

---

## 👨‍💻 Autor

Renan Breier  
[LinkedIn](https://www.linkedin.com/in/renanbreier)  
[GitHub](https://github.com/renanbreier)
