import { Component } from '@angular/core';
import { CheckoutProductsComponent } from '../checkout-products/checkout-products.component';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CheckoutProductsComponent, CheckoutFormComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
