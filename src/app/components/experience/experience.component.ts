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
      description: 'Atuo na linha de frente como suporte técnico, atendendo Prefeituras, Câmaras e Autarquias. Participei de implantações, importações de dados, treinamentos e já atuei na liderança de uma equipe de suportes.'
    },
    {
      title: 'Analista de Infraestrutura',
      company: 'Prefeitura Municipal da Estância de Socorro',
      date: '2021 - 2023',
      description: 'Trabalhei no departamento de T.I, atuando na reestruturação da rede interna, montagem e manutenção de computadores e notebooks, configuração de servidores e switchs e controle de tickets.'
    }
  ];
}
