import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joangique';
  informations: { icon: string, data: string, link?: string }[] = [
    {
      icon: 'bx bxs-phone',
      data: '+51 974420252',
      link: 'tel:+51974420252'
    },
    {
      icon: 'bx bxl-gmail',
      data: 'devneonix@gmail.com',
      link: 'mailto:devneonix@gmail.com'
    },
    {
      icon: 'bx bxl-linkedin',
      data: 'jolver-andré-gil-quevedo-22b383144',
      link: 'https://pe.linkedin.com/in/jolver-andr%C3%A9-gil-quevedo-22b383144'
    },
    {
      icon: 'bx bxl-github',
      data: 'github.com/DevNeonix',
      link: 'https://github.com/DevNeonix'
    }
  ];
  skills: { icon?: string, description: string, percent: number }[] = [
    {
      icon: 'bx bxl-angular',
      description: 'Angular',
      percent: 90
    },
    {
      icon: 'fab fa-laravel',
      description: 'Laravel',
      percent: 90
    },
    {
      icon: 'fa fa-database',
      description: 'Sql Server',
      percent: 90
    },
    {
      icon: 'far fa-dot-circle',
      description: 'Ionic',
      percent: 90
    },
    {
      icon: 'bx bxl-android',
      description: 'Android Native',
      percent: 70
    },
    {
      icon: 'bx bxl-vuejs',
      description: 'Vue',
      percent: 70
    },
    {
      icon: 'bx bxs-file-find',
      description: 'NativeScript',
      percent: 60
    },
    {
      icon:'bx bxl-html5',
      description: 'HTML',
      percent: 100
    },
    {
      icon: 'bx bxs-file-find',
      description: 'Typescript',
      percent: 90
    },
    {
      icon: 'bx bxl-javascript',
      description: 'JavaScript',
      percent: 90
    },
    {
      icon: 'bx bxl-css3',
      description: 'Css/Scss',
      percent: 100
    },
    {
      icon: 'bx bxl-php',
      description: 'Php',
      percent: 90
    },
  ];

  constructor() {

  }

}
