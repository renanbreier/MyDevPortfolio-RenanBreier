import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent {
  items = [
    {
    proj: 'assets/projects/datingapp.png',
    title: 'DatingApp',
    sub: 'Aplicativo de relacionamentos criado com Flutter, para aprimorar conceitos de UI/UX, rotas e navegação, gerencimaneto de estados e animações',
    tech_1: 'Flutter',
    tech_2: 'Dart',
    tech_3: 'FireBase',
    tech_4: '',
    tech_5: '',
    view: 'https://github.com/renanbreier/DatingApp-FlutterProject/releases/tag/V1.0.0',
    code: 'https://github.com/renanbreier/DatingApp-FlutterProject',
  },
  {
    proj: 'assets/projects/webfilms.png',
    title: 'WebFilms',
    sub: 'Site com inspiração na Netflix, utilizando React e Vite para consumir a API TMDb e apresentar e listar informações de filmes',
    tech_1: 'React',
    tech_2: 'Vite',
    tech_3: 'Netlify',
    tech_4: '',
    tech_5: '',
    view: 'https://projetoapiifsp.netlify.app/',
    code: 'https://github.com/renanbreier/React-ListagemDeFilmes',
  },
  {
    proj: 'assets/projects/gabrielwerneck.png',
    title: 'Portifólio Gabriel Werneck',
    sub: 'Portifólio profissional criado utilizando HTML5, CSS3, Bootstrap e interações com Javascript',
    tech_1: 'HTML5',
    tech_2: 'CSS3',
    tech_3: 'Javascript',
    tech_4: 'Bootstrap',
    tech_5: '',
    view: 'https://renanbreier.github.io/Portifolio-GabrielWerneck/',
    code: 'https://github.com/renanbreier/Portifolio-GabrielWerneck',
  },
  ]
}
