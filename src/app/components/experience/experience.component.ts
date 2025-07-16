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
      description: 'Atuo na linha de frente do suporte técnico, prestando atendimento especializado a servidores públicos de Prefeituras, Câmaras Municipais e Autarquias que utilizam os sistemas da Sonner. Minha atuação abrange desde demandas operacionais até configurações técnicas avançadas, como a integração de sistemas via web services.\n\n'
      + 'Tenho experiência em liderança de equipes de suporte, implantação de sistemas corporativos, migração e conversão de dados, além de ministrar treinamentos presenciais e remotos em larga escala. Um dos marcos da minha trajetória foi a coordenação do desenvolvimento e implantação do aplicativo "Cidadão Online" no município de Socorro, contribuindo para a transformação digital dos serviços públicos locais.'
    },
    {
      title: 'Jovem Aprendiz de T.I',
      company: 'Prefeitura Municipal da Estância de Socorro',
      date: '2021 - 2023',
      description: 'Atuei no setor de Tecnologia da Informação da Prefeitura, onde tive uma experiência prática essencial para o início da minha trajetória profissional na área. Durante esse período, desenvolvi competências técnicas e interpessoais fundamentais, que reforçaram minha vocação para a área de TI e me prepararam para desafios mais complexos no futuro.\n\n'
      + 'Minhas atividades abrangeram desde tarefas de infraestrutura básica até intervenções em redes de fibra óptica e configuração de servidores. Essa vivência me proporcionou uma base sólida em suporte técnico, redes, manutenção e administração de sistemas.'
    }
  ].map(exp => ({
    ...exp,
    description: exp.description.replace(/\n/g, '<br>')
  }));
}
