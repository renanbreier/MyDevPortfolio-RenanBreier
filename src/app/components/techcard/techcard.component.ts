import { Component } from '@angular/core';

@Component({
  selector: 'app-techcard',
  templateUrl: './techcard.component.html',
  styleUrls: ['./techcard.component.css']
})
export class TechcardComponent {
  items = [
    // Frontend
    { img: 'assets/techs/html.svg', name: 'HTML', level: 5, category: 'Frontend' },
    { img: 'assets/techs/css.svg', name: 'CSS', level: 5, category: 'Frontend' },
    { img: 'assets/techs/javascript.svg', name: 'JavaScript', level: 5, category: 'Frontend' },
    { img: 'assets/techs/typescript.svg', name: 'TypeScript', level: 2, category: 'Frontend' },
    { img: 'assets/techs/vitejs.svg', name: 'Vite', level: 2, category: 'Frontend' },
    { img: 'assets/techs/react.svg', name: 'React', level: 3, category: 'Frontend' },
    { img: 'assets/techs/angular.svg', name: 'Angular', level: 4, category: 'Frontend' },
    { img: 'assets/techs/nextjs.svg', name: 'Next.js', level: 1, category: 'Frontend' },
    { img: 'assets/techs/sass.svg', name: 'Sass', level: 4, category: 'Frontend' },
    { img: 'assets/techs/tailwindcss.svg', name: 'Tailwind', level: 2, category: 'Frontend' },

    // Backend
    { img: 'assets/techs/c.svg', name: 'C', level: 2, category: 'Backend'},
    { img: 'assets/techs/java.svg', name: 'Java', level: 4, category: 'Backend'},
    { img: 'assets/techs/spring.svg', name: 'Spring', level: 4, category: 'Backend'},
    { img: 'assets/techs/python.svg', name: 'Python', level: 5, category: 'Backend'},
    { img: 'assets/techs/nodejs.svg', name: 'Node.js', level: 2, category: 'Backend'},
    { img: 'assets/techs/graphql.svg', name: 'GraphQL', level: 2, category: 'Backend'},

    // Mobile
    { img: 'assets/techs/flutter.svg', name: 'Flutter', level: 3, category: 'Mobile'},
    { img: 'assets/techs/dart.svg', name: 'Dart', level: 3, category: 'Mobile'},
    { img: 'assets/techs/react-native.svg', name: 'React Native', level: 1, category: 'Mobile'},

    // Banco de dados
    { img: 'assets/techs/postgresql.svg', name: 'PostgreSQL', level: 4, category: 'Banco de dados'},
    { img: 'assets/techs/mysql.svg', name: 'MySQL', level: 5, category: 'Banco de dados'},
    { img: 'assets/techs/oracle.svg', name: 'Oracle', level: 5, category: 'Banco de dados'},
    { img: 'assets/techs/mongodb.svg', name: 'MongoDB', level: 2, category: 'Banco de dados'},

    // Infraestrutura
    { img: 'assets/techs/google-cloud.svg', name: 'Google Cloud', level: 3, category: 'Infraestrutura'},
    { img: 'assets/techs/aws.svg', name: 'AWS', level: 1, category: 'Infraestrutura'},

    // Ferramentas
    { img: 'assets/techs/github.svg', name: 'GitHub', level: 5, category: 'Ferramentas'},
    { img: 'assets/techs/git.svg', name: 'Git', level: 5, category: 'Ferramentas'},
    { img: 'assets/techs/gitlab.svg', name: 'GitLab', level: 2, category: 'Ferramentas'},
    { img: 'assets/techs/ionic.svg', name: 'Ionic', level: 1, category: 'Ferramentas'},
    { img: 'assets/techs/insominia.svg', name: 'Insominia', level: 2, category: 'Ferramentas'},
    { img: 'assets/techs/postman.svg', name: 'Postman', level: 2, category: 'Ferramentas'},
    { img: 'assets/techs/jira.svg', name: 'Jira', level: 3, category: 'Ferramentas'},
  ];

  filters = ['Todos', 'Frontend', 'Backend', 'Mobile', 'Banco de dados', 'Infraestrutura', 'Ferramentas'];
  selectedFilter = 'Todos';

  get filteredItems() {
    if (this.selectedFilter === 'Todos') return this.items;
    return this.items.filter(item => item.category === this.selectedFilter);
  }

  filter(filter: string) {
    this.selectedFilter = filter;
  }
}
