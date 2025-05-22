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
      title: 'Analista de Suporte N3',
      company: 'Sonner Sistemas',
      date: '2023 - Presente',
      description: 'Atuo na linha de frente como suporte técnico, atendendo Prefeituras, Câmaras e Autarquias.' +
      'Minha atuação vai desde tarefas simples como a criação de usuários até tarefas mais complexas, como a configuração de web-services. ' + 
      'Participo de implantações, importações de dados e treinamentos, além de atuar na liderança de uma equipe de suportes.\n' +
      '<br>Principais atividades:\n- Atendimento de usuários e resolução de chamados N3\n- Implantação de sistemas de RH e Contabilidade\n- Treinamento e capacitação de usuários finais\n' +
      '- Testes de correções, homologação e validação de novas funcionalidades\n- Atualização de bases de dados e acompanhamento de versões\n- Apoio na liderança de projetos e equipes de suporte técnico'
    },
    {
      title: 'Analista de Infraestrutura',
      company: 'Prefeitura Municipal da Estância de Socorro',
      date: '2021 - 2023',
      description: 'Trabalhei no departamento de tecnologia, onde tive ganhei uma experiência prática que foi fundamental para o início da minha trajetória profissional. ' +
      'atuei na reestruturação da rede interna, montagem e manutenção de computadores e notebooks, configuração de servidores e switchs e também no controle de tickets.\n' +
      '<br>Principais atividades:\n- Montagem e manutenção de computadores e notebooks\n - Instalação e formatação de sistemas operacionais\n- Monitoramento e manutenção da rede de fibra óptica (Zabbix)\n' +
      '- Controle e atendimento de chamados técnicos (GLPI)\n- Instalação e configuração de servidores (Linux e Windows)'
    }
  ].map(exp => ({
    ...exp,
    description: exp.description.replace(/\n/g, '<br>')
  }));
}
