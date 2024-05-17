import { Component } from '@angular/core';
import { CheckoutProductsComponent } from '../checkout-products/checkout-products.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CheckoutProductsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
