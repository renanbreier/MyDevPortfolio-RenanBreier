import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Desenvolvedor de Software',
      company: 'Autônomo',
      date: 'Jan 2024 - Presente',
      description: 'Desenvolvedor de software autônomo com sólida experiência em projetos tanto para pessoas físicas quanto empresas. Trabalho com tecnologias modernas e escaláveis, com foco em entregar soluções robustas, de alta qualidade e alinhadas às necessidades de negócio.'
    },
    {
      title: 'Gerente de Suporte Técnico',
      company: 'Sonner Sistemas',
      date: 'Jul 2025 - Presente',
      description: 'Responsável por liderar três projetos de implantações técnicas, atuando como ponte entre clientes e equipe para garantir eficiência no atendimento. No dia a dia, coordeno a gestão de chamados, organizo prioridades e acompanho a execução das demandas, assegurando prazos e qualidade nas entregas.\n\n'
      + 'Participo ativamente das implantações de sistemas, homologação de melhorias e capacitação de usuários, sempre com foco em manter a satisfação dos clientes e a evolução contínua dos processos.'
    },
    {
      title: 'Analista de Suporte',
      company: 'Sonner Sistemas',
      date: 'Mar 2023 - Jun 2025',
      description: 'Atuei na linha de frente do suporte técnico, prestando atendimento especializado a servidores públicos de Prefeituras, Câmaras e Autarquias clientes Sonner.\n\n'
      + 'Minha atuação abregeu desde demandas operacionais até configurações técnicas avançadas, como a integração de sistemas via web services.\n\n'
      + 'Obtive experiência em implantação de sistemas corporativos, migração e conversão de dados, além de ministrar treinamentos presenciais e remotos em larga escala. Um dos marcos da minha trajetória foi a coordenação do desenvolvimento e implantação do aplicativo "Cidadão Online", contribuindo para a transformação digital dos serviços públicos em diversas cidades.\n\n'
    },
    {
      title: 'Analista de Infraestrutura',
      company: 'Prefeitura Municipal da Estância de Socorro',
      date: '2021 - 2023',
      description: 'Atuei como Analista de Infraestrutura no setor de Tecnologia da Informação da Prefeitura, onde adquiri experiência prática fundamental para minha trajetória profissional. Nesse período, desenvolvi competências em suporte técnico, administração de sistemas, redes e ambientes em nuvem, atuando desde a infraestrutura básica até a configuração de servidores e redes de fibra óptica.\n\n'
      + 'Minhas atividades incluíram desenvolvimento de software interno, montagem e manutenção de computadores, instalação e configuração de sistemas operacionais Windows e Linux, além da administração de servidores físicos e em nuvem (AWS e GCP).\n\n'
      + 'Tecnologias e ferramentas: Java | Spring | Linux | AWS | GCP | Zabbix | GLPI | Mikrotik | Cisco'
    }
  ].map(exp => ({
    ...exp,
    description: exp.description.replace(/\n/g, '<br>')
  }));
}
