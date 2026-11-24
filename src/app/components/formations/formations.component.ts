import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormationsComponent {
  readonly language = inject(LanguageService);


  formations = [
    {
      icon: 'fas fa-graduation-cap',
      title: {
        'pt-BR': 'Análise e Desenvolvimento de Sistemas',
        'en-US': 'Systems Analysis and Development',
      },
      institution: 'Instituto Federal de São Paulo',
      period: '2023 - 2025',
      description: {
        'pt-BR': 'Graduação focada no ciclo completo de desenvolvimento de softwares e projetos, aborda conceitos de engenharia e arquitetura de software, estrutura e análise de dados, além de disciplinas de front e backend utilizando Java, Python e React.',
        'en-US': 'A degree covering the full software development lifecycle, including software engineering and architecture, data structures and analysis, and front-end and back-end development with Java, Python, and React.',
      }
    },
    {
      icon: 'fab fa-java',
      title: {
        'pt-BR': 'Introdução ao Teste de Software',
        'en-US': 'Introduction to Software Testing',
      },
      institution: 'Universidade de São Paulo',
      period: '2025',
      description: {
        'pt-BR': 'Curso oferecido pela USP, aborda conceitos fundamentais de garantia de qualidade, técnicas de teste funcional, estrutural e baseado em defeitos (como mutação), além de estratégias de planejamento, execução e análise de resultados.',
        'en-US': 'A course offered by USP covering quality assurance fundamentals, functional and structural testing, defect-based testing such as mutation testing, and strategies for planning, running, and analyzing tests.',
      }
    },
    {
      icon: 'fab fa-aws',
      title: {
        'pt-BR': 'AWS Cloud Foundations',
        'en-US': 'AWS Cloud Foundations',
      },
      institution: 'AWS Academy',
      period: '2025',
      description: {
        'pt-BR': 'O curso proporciona uma base robusta em conceitos de computação em nuvem, abordando gerenciamento de identidade (IAM), redes (VPC), computação (EC2, Lambda, Elastic Beanstalk), armazenamento (S3, EBS, EFS, Glacier), bancos de dados (RDS, DynamoDB, Redshift, Aurora), escalabilidade (Auto Scaling, Elastic Load Balancing) e monitoramento (CloudWatch)',
        'en-US': 'A course covering cloud computing fundamentals, including identity management (IAM), networking (VPC), compute (EC2, Lambda, Elastic Beanstalk), storage (S3, EBS, EFS, Glacier), databases (RDS, DynamoDB, Redshift, Aurora), scaling (Auto Scaling, Elastic Load Balancing), and monitoring (CloudWatch).',
      }
    },
  ];
}
