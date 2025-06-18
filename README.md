
# Portfólio - Renan Breier

Este projeto é um portfólio pessoal desenvolvido em **Angular**, com foco em apresentar minhas experiências profissionais, habilidades técnicas e principais projetos.

---

## 🚀 Tecnologias utilizadas

- Angular
- TypeScript
- Angular Animations
- HTML5
- CSS3 / SCSS

---

## 🎨 Principais características

- Página inicial com apresentação e texto de boas-vindas
- Sessão de experiências profissionais
- Seção de projetos com destaque para links externos (GitHub, deploy, etc.)
- Listagem de tecnologias utilizadas (Skills)
- Estilo responsivo, adaptado para desktop e mobile
- Navegação por componentes Angular separados (Home, About, Experience, Projects, Techs)

---

## 📦 Como executar o projeto localmente

> Pré-requisitos: Node.js (recomendado v18.x) e Angular CLI instalado globalmente.

1. **Clone o repositório**

```bash
git clone https://github.com/renanbreier/Portifolio-RenanBreier.git
cd Portifolio-RenanBreier
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
ng serve
```

4. **Acesse no navegador**

```
http://localhost:4200/
```

---

## 📌 Estrutura principal do projeto

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── home/
│   │   ├── projects/
│   │   └── techs/
│   ├── pages/
│   │   └── home/
│   └── app.module.ts
├── assets/
├── environments/
└── index.html
```

---

## ✨ Customização

Você pode alterar os textos, imagens e links dos projetos diretamente nos componentes correspondentes dentro da pasta `/src/app/components/`.

Por exemplo:

- Experiências: em `/components/experience/experience.component.ts`
- Projetos: em `/components/projects/projects.component.ts`
- Skills: em `/components/techs/techs.component.ts`

---

## 👨‍💻 Autor

Renan Breier  
[LinkedIn](https://www.linkedin.com/in/renanbreier)  
[GitHub](https://github.com/renanbreier)
