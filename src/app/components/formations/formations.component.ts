import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['../shared/resume-timeline.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FormationsComponent {
  readonly language = inject(LanguageService);

  readonly degree = {
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
  };
}
