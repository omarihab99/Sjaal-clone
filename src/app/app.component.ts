import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductDetailsComponent,
    ProductsPageComponent,
    CheckoutFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sjaal';
}
