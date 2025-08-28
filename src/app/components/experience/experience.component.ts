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
      title: 'Analista de Sistemas',
      company: 'Sonner Sistemas',
      date: '2023 - Presente',
      description: 'Atuo como Analista de Sistemas e Desenvolvedor Full Stack, liderando a implantação de soluções de ponta a ponta e o ciclo de vida de novas funcionalidades. Tenho experiência em Java (Spring Boot), Angular, TypeScript e APIs REST, com forte atuação em cloud (AWS e GCP) e bancos de dados como PostgreSQL e Oracle.\n\n'
      + 'Participo ativamente do desenvolvimento, integração e homologação de sistemas, aplicando metodologias ágeis (Scrum) e garantindo entregas contínuas. Também exerço liderança técnica, apoiando a equipe na resolução de problemas complexos e promovendo boas práticas em qualidade e escalabilidade.\n\n'
      + 'Competências principais: Java | Spring Boot | Angular | TypeScript | APIs REST | PostgreSQL | Oracle | AWS | GCP | Scrum | CI/CD | Testes e Homologação.'
    },
    {
      title: 'Analista de Infraestrutura (Jovem Aprendiz)',
      company: 'Prefeitura Municipal da Estância de Socorro',
      date: '2021 - 2023',
      description: 'Atuei como Analista de Infraestrutura no setor de Tecnologia da Informação da Prefeitura, onde adquiri experiência prática fundamental para minha trajetória profissional. Nesse período, desenvolvi competências em suporte técnico, administração de sistemas, redes e ambientes em nuvem, atuando desde a infraestrutura básica até a configuração de servidores e redes de fibra óptica.\n\n'
      + 'Minhas atividades incluíram desenvolvimento de software interno (Java, Spring, Python, Django), montagem e manutenção de computadores, instalação e configuração de sistemas operacionais Windows e Linux, além da administração de servidores físicos e em nuvem (AWS e GCP). Também trabalhei com monitoramento de rede via Zabbix, gestão de chamados pelo GLPI e manutenção de infraestrutura utilizando equipamentos Mikrotik e Cisco.\n\n'
      + 'Tecnologias e ferramentas: Java | Spring | Python | Django | Linux | Windows Server | AWS | GCP | Zabbix | GLPI | Mikrotik | Cisco'
    }
  ].map(exp => ({
    ...exp,
    description: exp.description.replace(/\n/g, '<br>')
  }));
}
