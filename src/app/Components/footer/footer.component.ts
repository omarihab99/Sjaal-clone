import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule], // alternatively, individual components can be imported
  templateUrl: './footer.component.html',
  styleUrls:[
    './footer.component.css',
    '../../../../fontawesome/css/all.css'
    // 'finalProject/Sjaal-clone/fontawesome/css/all.css' ,

  ]
})
export class FooterComponent {

 
}
