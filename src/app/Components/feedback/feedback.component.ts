import { Component } from '@angular/core';
import { InputDirectiveDirective } from '../../Directives/input-directive.directive';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    InputDirectiveDirective
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

}
