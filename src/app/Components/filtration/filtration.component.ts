import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtration',
  standalone: true,
  imports: [],
  templateUrl: './filtration.component.html',
  styleUrl: './filtration.component.css'
})
export class FiltrationComponent {
@Input() numOfProducts:any;
}
