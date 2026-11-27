import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService, Localized } from '../../service/language.service';

interface Project {
  id: number;
  title: Localized<string>;
  description: Localized<string>;
  techs: string[];
  link: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ProjectsComponent {
  readonly language = inject(LanguageService);

  projects: Project[] = [
    {
      id: 1,
      title: {
        'pt-BR': 'Nota Fiscal System',
        'en-US': 'Electronic Invoicing System',
      },
      description: {
        'pt-BR': 'Sistema completo para gerenciamento de notas fiscais com integração, componentização, e autenticação.',
        'en-US': 'An end-to-end invoicing system with integrations, reusable components, and authentication.',
      },
      techs: ['Angular', 'DevExtreme', 'TypeScript', 'Java', 'Spring'],
      link: 'https://github.com/renanbreier/NotaFiscal-System',
      image: 'assets/projects/notafiscal.png',
    },
    {
      id: 2,
      title: {
        'pt-BR': 'Microsserviço de Email',
        'en-US': 'Email Microservice',
      },
      description: {
        'pt-BR': 'Projeto em Spring Boot para envio de e-mails com Amazon SES, inspirado em um desafio técnico da Uber.',
        'en-US': 'A Spring Boot project that sends emails through Amazon SES, inspired by an Uber coding challenge.',
      },
      techs: ['Java', 'Spring', 'AWS', 'Amazon SES'],
      link: 'https://github.com/renanbreier/Java-Email-Sender',
      image: 'assets/projects/emailjava.png',
    },
    {
      id: 3,
      title: {
        'pt-BR': 'Controle de Ativos',
        'en-US': 'Asset Management',
      },
      description: {
        'pt-BR': 'Software completo com objetivo de monitorar e controlar os ativos, desenvolvido com Python e Django.',
        'en-US': 'A complete asset tracking and management application built with Python and Django.',
      },
      techs: ['React', 'Vite', 'Python', 'Django'],
      link: 'https://github.com/renanbreier/Django-Assets',
      image: 'assets/projects/controleativos.png',
    },
    {
      id: 4,
      title: {
        'pt-BR': 'DatingApp',
        'en-US': 'DatingApp',
      },
      description: {
        'pt-BR': 'Aplicativo de relacionamentos criado com Flutter e Dart, para aprimorar conceitos de UI/UX, rotas e navegação, gerencimaneto de estados e animações.',
        'en-US': 'A dating app built with Flutter and Dart to practice UI/UX design, routing and navigation, state management, and animations.',
      },
      techs: ['Flutter', 'Dart', 'FireBase', 'NoSQL'],
      link: 'https://github.com/renanbreier/DatingApp-V2-FlutterProject',
      image: 'assets/projects/datingapp2.png',
    },
    {
      id: 5,
      title: {
        'pt-BR': 'To-Do List',
        'en-US': 'To-Do List',
      },
      description: {
        'pt-BR': 'Single Page criada para gerir listas de tarefas, desenvolvido com Angular, Django e Docker para realizar todo o gerenciamento da aplicação.',
        'en-US': 'A single-page task management app built with Angular and Django and run with Docker.',
      },
      techs: ['Angular', 'TypeScript', 'Python', 'Django', 'Docker'],
      link: 'https://github.com/renanbreier/toDo-Flask-Angular',
      image: 'assets/projects/todolist.jpeg',
    },
    {
      id: 6,
      title: {
        'pt-BR': 'GraphQL Spring API',
        'en-US': 'GraphQL Spring API',
      },
      description: {
        'pt-BR': 'API GraphQL simples desenvolvida com Java e Spring.',
        'en-US': 'A simple GraphQL API built with Java and Spring.',
      },
      techs: ['Java', 'Spring', 'GraphQL'],
      link: 'https://github.com/renanbreier/Spring-GraphQL-API',
      image: 'assets/projects/graphql-api.png',
    },
    {
      id: 7,
      title: {
        'pt-BR': 'Jogo da Velha',
        'en-US': 'Tic-Tac-Toe',
      },
      description: {
        'pt-BR': 'Projeto em React para consumo de API e lógica de progamação.',
        'en-US': 'A React project for practicing API integration and programming logic.',
      },
      techs: ['React', 'Vite', 'JavaScript', 'REST API'],
      link: 'https://github.com/renanbreier/React-ConsumoAPIs',
      image: 'assets/projects/jogovelha.png',
    },
  ];
}
