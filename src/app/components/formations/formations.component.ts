import { Component } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent {

  formations = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Instituto Federal de São Paulo',
      period: '2023 - 2025',
      description: 'Graduação focada no ciclo completo de desenvolvimento de softwares e projetos.'
    },
    {
      icon: 'fab fa-angular',
      title: 'Desenvolvimento com Angular',
      institution: 'Plataforma Alura',
      period: '2025',
      description: 'Curso completo sobre o ecossistema Angular, abordando desde conceitos básicos até tópicos avançados como RxJS e NgRx.'
    },
    {
      icon: 'fab fa-java',
      title: 'Curso Java e Spring',
      institution: 'Plataforma Alura',
      period: '2025',
      description: 'Desenvolvimento de APIs REST com o ecossistema Spring. Foco em boas práticas, Spring Security para autenticação, e integração com bancos de dados usando Spring Data JPA.'
    },
  ];

}