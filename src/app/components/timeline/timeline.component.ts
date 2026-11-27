import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../shared/resume-timeline.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TimelineComponent {
  readonly language = inject(LanguageService);

  readonly companies = [
    {
      name: 'Sonner Sistemas',
      logo: 'assets/companies/sonner-sistemas.jpeg',
      roles: [
        {
          periodo: {
            'pt-BR': 'Fev 2026 - Atual',
            'en-US': 'Feb 2026 – Present',
          },
          cargo: 'Full Stack Software Engineer',
          descricao: {
            'pt-BR': 'Atuo como Engenheiro de Software no desenvolvimento, manutenção e evolução de sistemas corporativos, participando ativamente da criação de novos módulos e funcionalidades utilizando Java e Angular.',
            'en-US': 'I develop, maintain, and improve enterprise systems, building new modules and features with Java and Angular.',
          },
          atual: true,
        },
        {
          periodo: {
            'pt-BR': 'Jul 2025 - Fev 2026',
            'en-US': 'Jul 2025 – Feb 2026',
          },
          cargo: 'Technical Support Manager',
          descricao: {
            'pt-BR': 'Atuei como Gerente Técnico, realizando a ponte entre o cliente e a equipe de suporte garantindo eficiência no atendimento. No dia a dia, coordeno a gestão de chamados, organizo prioridades e acompanho a execução das demandas, assegurando prazos e qualidade nas entregas.',
            'en-US': 'I served as the liaison between customers and the technical support team. I coordinated support tickets, set priorities, and tracked requests to keep work on schedule and maintain service quality.',
          },
          atual: false,
        },
        {
          periodo: {
            'pt-BR': 'Mar 2023 - Jun 2025',
            'en-US': 'Mar 2023 – Jun 2025',
          },
          cargo: 'Technical Support Analyst',
          descricao: {
            'pt-BR': 'Atuei na linha de frente do suporte, prestando atendimento técnico especializado. Minha atuação abregeu desde demandas operacionais até configurações técnicas avançadas, como a integração de sistemas via web services.',
            'en-US': 'I provided frontline technical support, handling requests ranging from day-to-day operations to advanced configurations such as integrating systems through web services.',
          },
          atual: false,
        },
      ],
    },
    {
      name: 'Prefeitura Municipal da Estância de Socorro',
      logo: 'assets/companies/prefeitura-socorro.jpeg',
      roles: [
        {
          periodo: {
            'pt-BR': 'Out 2021 - Fev 2023',
            'en-US': 'Oct 2021 – Feb 2023',
          },
          cargo: 'IT analyst',
          descricao: {
            'pt-BR': 'Atuei no setor de Tecnologia da Informação da Prefeitura, onde atuei na manutenção de todo o parque tecnológico, incluindo configuração de servidores em nuvem e a manutenção de switchs de fibra óptica.',
            'en-US': 'I worked in the city’s IT department, maintaining its technology infrastructure, configuring cloud servers, and servicing fiber-optic switches.',
          },
          atual: false,
        },
      ],
    },
  ];
}
