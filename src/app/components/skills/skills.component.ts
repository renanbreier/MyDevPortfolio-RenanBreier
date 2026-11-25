import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService, Localized } from '../../service/language.service';

interface Skill {
  name: string;
  iconClass: string;
  description: Localized<string>;
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SkillsComponent {
  readonly language = inject(LanguageService);

  skillsList: Skill[] = [
    {
      name: 'Angular',
      iconClass: 'assets/techs/angular.svg',
      description: {
        'pt-BR': 'Framework Angular desenvolvido pela Google para componentização de interfaces.',
        'en-US': 'Framework developed by Google for building component-based interfaces.',
      },
      gradientFrom: '#EF4444',
      gradientTo: '#FB923C',
      bgColor: 'rgba(59, 130, 246, 0.1)',
    },
    {
      name: 'React',
      iconClass: 'assets/techs/react.svg',
      description: {
        'pt-BR': 'Framework React para aplicações web modernas com renderização híbrida (SSR, SSG).',
        'en-US': 'Framework for building modern web applications with hybrid rendering (SSR and SSG).',
      },
      gradientFrom: '#3B82F6',
      gradientTo: '#60A5FA',
      bgColor: 'rgba(17, 24, 39, 0.1)',
    },
    {
      name: 'TypeScript',
      iconClass: 'assets/techs/typescript.svg',
      description: {
        'pt-BR': 'Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade.',
        'en-US': 'JavaScript superset that adds static typing for safer code and improved productivity.',
      },
      gradientFrom: '#2563EB',
      gradientTo: '#1D4ED8',
      bgColor: 'rgba(37, 99, 235, 0.1)',
    },
    {
      name: 'Java',
      iconClass: 'assets/techs/java.svg',
      description: {
        'pt-BR': 'Linguagem orientada a objetos, usada para construir sistemas e APIs robustos.',
        'en-US': 'Object-oriented language used to build robust systems and APIs.',
      },
      gradientFrom: '#8B5CF6',
      gradientTo: '#7C3AED',
      bgColor: 'rgba(139, 92, 246, 0.1)',
    },
    {
      name: 'Spring',
      iconClass: 'assets/techs/spring.svg',
      description: {
        'pt-BR': 'Framework Java que simplifica o desenvolvimento de aplicações.',
        'en-US': 'Java framework that simplifies application development.',
      },
      gradientFrom: '#10B981',
      gradientTo: '#14B8A6',
      bgColor: 'rgba(30, 64, 175, 0.1)',
    },
    {
      name: 'Python',
      iconClass: 'assets/techs/python.svg',
      description: {
        'pt-BR': 'Linguagem de alto nível com foco na legibilidade, utilizada em desenvolvimento web (backend).',
        'en-US': 'High-level language focused on readability and used for back-end web development.',
      },
      gradientFrom: '#EAB308',
      gradientTo: '#D97706',
      bgColor: 'rgba(6, 182, 212, 0.1)',
    },
    {
      name: 'Postgres',
      iconClass: 'assets/techs/postgresql.svg',
      description: {
        'pt-BR': 'Banco de dados relacional, conhecido por sua robustez, conformidade com padrões e recursos avançados.',
        'en-US': 'Relational database known for reliability, standards compliance, and advanced features.',
      },
      gradientFrom: '#3B82F6',
      gradientTo: '#60A5FA',
      bgColor: 'rgba(234, 179, 8, 0.1)',
    },
    {
      name: 'AWS',
      iconClass: 'assets/techs/aws.svg',
      description: {
        'pt-BR': 'Plataforma de computação em nuvem, oferece infraestrutura (computação, armazenamento, banco de dados).',
        'en-US': 'Cloud computing platform that provides infrastructure for compute, storage, and databases.',
      },
      gradientFrom: '#F97316',
      gradientTo: '#EA580C',
      bgColor: 'rgba(249, 115, 22, 0.1)',
    },
    {
      name: 'Docker',
      iconClass: 'assets/techs/docker.svg',
      description: {
        'pt-BR': 'Plataforma de contêineres, garante que o software funcione de forma confiável em qualquer ambiente.',
        'en-US': 'Container platform that helps software run reliably across environments.',
      },
      gradientFrom: '#3B82F6',
      gradientTo: '#6366F1',
      bgColor: 'rgba(59, 130, 246, 0.1)',
    },
  ];
}
