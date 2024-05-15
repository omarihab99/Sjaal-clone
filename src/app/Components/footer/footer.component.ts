import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { InputDirectiveDirective } from '../../Directives/input-directive.directive';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// import { faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,
    InputDirectiveDirective
  ], // alternatively, individual components can be imported
  templateUrl: './footer.component.html',
  styleUrls:[
    './footer.component.css',
  

  ]
})
export class FooterComponent {
  faArrowRight = faArrowRight;
 
}
