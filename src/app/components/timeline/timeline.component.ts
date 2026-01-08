import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
    trigger('slideIn', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateX(0)',
        })
      ),
      state(
        'left',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'right',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('hidden => left', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('600ms cubic-bezier(.2,.9,.2,1)'),
      ]),
      transition('hidden => right', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('600ms cubic-bezier(.2,.9,.2,1)'),
      ]),
    ]),

    // Header fade-in up
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms cubic-bezier(.2,.9,.2,1)'),
      ]),
    ]),
  ],
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  inView = new Set<number>();
  private observer?: IntersectionObserver;

  @ViewChildren('cardRefs', { read: ElementRef })
  cardRefs!: QueryList<ElementRef<HTMLElement>>;

  experiences = [
    {
      periodo: 'Jan 2024 - Atual',
      cargo: 'Engenheiro de Software',
      empresa: 'Autônomo',
      descricao:
        'Atuo como Engenheiro de Software, desenvolvendo aplicações web completas utilizando Angular no frontend e Java com Spring Framework no backend. Trabalho com banco de dados PostgreSQL, criando soluções escaláveis e performáticas para atender as necessidades dos clientes.',
      atual: true,
      colorFrom: '#3b82f6',
      colorTo: '#06b6d4',
    },
    {
      periodo: 'Jul 2025 - Atual',
      cargo: 'Gerente de Suporte Técnico',
      empresa: 'Sonner Sistemas',
      descricao:
        'Atuo como Gerente Técnico, realizando a ponte entre o cliente e a equipe de suporte garantindo eficiência no atendimento. No dia a dia, coordeno a gestão de chamados, organizo prioridades e acompanho a execução das demandas, assegurando prazos e qualidade nas entregas.',
      atual: true,
      colorFrom: '#8b5cf6',
      colorTo: '#ec4899',
    },
    {
      periodo: 'Mar 2023 - Jun 2025',
      cargo: 'Analista de Suporte Técnico',
      empresa: 'Sonner Sistemas',
      descricao:
        'Atuei na linha de frente do suporte, prestando atendimento técnico especializado. Minha atuação abregeu desde demandas operacionais até configurações técnicas avançadas, como a integração de sistemas via web services.',
      atual: false,
      colorFrom: '#f97316',
      colorTo: '#ef4444',
    },
    {
      periodo: 'Out 2021 - Fev 2023',
      cargo: 'Analista de Infraestrutura',
      empresa: 'Prefeitura de Socorro',
      descricao: 'Atuei no setor de Tecnologia da Informação da Prefeitura, onde atuei na manutenção de todo o parque tecnológico, incluindo configuração de servidores em nuvem e a manutenção de switchs de fibra óptica.',
      atual: false,
      colorFrom: '#f59e0b',
      colorTo: '#facc15',
    },
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute('data-index');
          if (!indexAttr) return;
          const idx = Number(indexAttr);
          if (entry.isIntersecting) {
            this.inView.add(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.25,
      }
    );

    this.cardRefs.forEach((el) => {
      const native = el.nativeElement;
      this.observer?.observe(native);
    });

    this.cardRefs.changes.subscribe((ql) => {
      ql.forEach((el: { nativeElement: any; }) => {
        const native = el.nativeElement;
        this.observer?.observe(native);
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  isLeft(index: number) {
    return index % 2 === 0;
  }

  slideState(index: number) {
    if (this.inView.has(index)) {
      return this.isLeft(index) ? 'left' : 'right';
    }
    return 'hidden';
  }
}
