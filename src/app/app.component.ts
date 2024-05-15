import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { CartProductsComponent } from "./Components/cart-products/cart-products.component";
import { CartComponent } from "./Components/cart/cart.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        ProductDetailsComponent,
        ProductsPageComponent,
        CartProductsComponent,
        CartComponent
    ]
})
export class AppComponent {
  title = 'sjaal';
}
