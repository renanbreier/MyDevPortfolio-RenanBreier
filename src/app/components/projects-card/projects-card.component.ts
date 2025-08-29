import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css'],
})
export class ProjectsCardComponent {
  items = [
    {
    proj: 'assets/projects/emailjava.png',
    title: 'Microsserviço de Email',
    sub: 'Projeto em Spring Boot para envio de e-mails com Amazon SES, inspirado em um desafio técnico da Uber. Desenvolvido com princípios de Clean Code e integração segura com AWS',
    tech_1: 'Java',
    tech_2: 'Spring',
    tech_3: 'AWS',
    tech_4: 'SES',
    tech_5: '',
    view: 'https://github.com/renanbreier/Java-Email-Sender',
    code: 'https://github.com/renanbreier/Java-Email-Sender',
  },
  {
    proj: 'assets/projects/controleativos.png',
    title: 'Controle de Ativos',
    sub: 'Software completo com objetivo de monitorar e controlar os ativos de um empresa, desenvolvido com Python e Django utilizando Django REST Framework e Simple JWT',
    tech_1: 'React',
    tech_2: 'Vite',
    tech_3: 'Python',
    tech_4: 'Django',
    tech_5: '',
    view: 'https://github.com/renanbreier/Django-Assets',
    code: 'https://github.com/renanbreier/Django-Assets',
  },
  {
    proj: 'assets/projects/datingapp2.png',
    title: 'DatingApp',
    sub: 'Aplicativo de relacionamentos criado com Flutter e Dart, para aprimorar conceitos de UI/UX, rotas e navegação, gerencimaneto de estados e animações',
    tech_1: 'Flutter',
    tech_2: 'Dart',
    tech_3: 'FireBase',
    tech_4: 'NoSQL',
    tech_5: '',
    view: 'https://github.com/renanbreier/DatingApp-V2-FlutterProject/releases/tag/V2.0.0',
    code: 'https://github.com/renanbreier/DatingApp-V2-FlutterProject',
  },
  ]
}
