import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

interface Skill {
  name: string;
  iconClass: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.skill-card', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true })
      ])
    ]),
  ]
})
export class SkillsComponent {
  skillsList: Skill[] = [
    {
      name: 'Angular',
      iconClass: 'assets/techs/angular.svg',
      description: 'Framework Angular desenvolvido pela Google para componentização de interfaces.',
      gradientFrom: '#3B82F6',  // blue-500
      gradientTo: '#06B6D4',    // cyan-500
      bgColor: 'rgba(59, 130, 246, 0.1)',
    },
    {
      name: 'React',
      iconClass: 'assets/techs/react.svg',
      description: 'Framework React para aplicações web modernas com renderização híbrida (SSR, SSG).',
      gradientFrom: '#111827',  // gray-800
      gradientTo: '#1F2937',    // gray-900
      bgColor: 'rgba(17, 24, 39, 0.1)',
    },
    {
      name: 'TypeScript',
      iconClass: 'assets/techs/typescript.svg',
      description: 'Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade.',
      gradientFrom: '#2563EB',  // blue-600
      gradientTo: '#1D4ED8',    // blue-700
      bgColor: 'rgba(37, 99, 235, 0.1)',
    },
    {
      name: 'Java',
      iconClass: 'assets/techs/java.svg',
      description: 'Linguagem orientada a objetos, usada para construir sistemas e APIs robustos.',
      gradientFrom: '#8B5CF6',  // purple-500
      gradientTo: '#7C3AED',    // purple-600
      bgColor: 'rgba(139, 92, 246, 0.1)',
    },
    {
      name: 'Spring',
      iconClass: 'assets/techs/spring.svg',
      description: 'Framework Java que simplifica o desenvolvimento de aplicações.',
      gradientFrom: '#1E40AF',  // blue-700
      gradientTo: '#1E3A8A',    // blue-800
      bgColor: 'rgba(30, 64, 175, 0.1)',
    },
    {
      name: 'Python',
      iconClass: 'assets/techs/python.svg',
      description: 'Linguagem de alto nível com foco na legibilidade, utilizada em desenvolvimento web (backend).',
      gradientFrom: '#06B6D4',  // cyan-500
      gradientTo: '#14B8A6',    // teal-500
      bgColor: 'rgba(6, 182, 212, 0.1)',
    },
    {
      name: 'Postgres',
      iconClass: 'assets/techs/postgresql.svg',
      description: 'Banco de dados relacional, conhecido por sua robustez, conformidade com padrões e recursos avançados.',
      gradientFrom: '#EAB308',  // yellow-500
      gradientTo: '#D97706',    // yellow-600
      bgColor: 'rgba(234, 179, 8, 0.1)',
    },
    {
      name: 'AWS',
      iconClass: 'assets/techs/aws.svg',
      description: 'Plataforma de computação em nuvem, oferece infraestrutura (computação, armazenamento, banco de dados).',
      gradientFrom: '#F97316',  // orange-500
      gradientTo: '#EA580C',    // orange-600
      bgColor: 'rgba(249, 115, 22, 0.1)',
    },
    {
      name: 'Docker',
      iconClass: 'assets/techs/docker.svg',
      description: 'Plataforma de contêineres, garante que o software funcione de forma confiável em qualquer ambiente.',
      gradientFrom: '#3B82F6',  // blue-500
      gradientTo: '#6366F1',    // indigo-500
      bgColor: 'rgba(59, 130, 246, 0.1)',
    },
  ];
}
