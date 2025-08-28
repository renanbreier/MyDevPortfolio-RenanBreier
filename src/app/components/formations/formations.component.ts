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
      description: 'Graduação focada no ciclo completo de desenvolvimento de softwares e projetos, aborda conceitos de engenharia e arquitetura de software, estrutura e análise de dados, além de disciplinas de front e backend utilizando Java, Python e React.'
    },
    {
      icon: 'fab fa-java',
      title: 'Introdução ao Teste de Software',
      institution: 'Universidade de São Paulo',
      period: '2025',
      description: 'Curso oferecido pela USP, aborda conceitos fundamentais de garantia de qualidade, técnicas de teste funcional, estrutural e baseado em defeitos (como mutação), além de estratégias de planejamento, execução e análise de resultados.'
    },
    {
      icon: 'fab fa-aws',
      title: 'AWS Cloud Foundations',
      institution: 'AWS Academy',
      period: '2025',
      description: 'O curso proporciona uma base robusta em conceitos de computação em nuvem, abordando gerenciamento de identidade (IAM), redes (VPC), computação (EC2, Lambda, Elastic Beanstalk), armazenamento (S3, EBS, EFS, Glacier), bancos de dados (RDS, DynamoDB, Redshift, Aurora), escalabilidade (Auto Scaling, Elastic Load Balancing) e monitoramento (CloudWatch)'
    },
  ];

}