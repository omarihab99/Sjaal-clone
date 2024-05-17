import { Component } from '@angular/core';
import { CartTitleComponent } from "../cart-title/cart-title.component";
import { CartProductsComponent } from "../cart-products/cart-products.component";
import { CartTotalPriceComponent } from "../cart-total-price/cart-total-price.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [CartTitleComponent, CartProductsComponent, CartTotalPriceComponent, FooterComponent, HeaderComponent]
})
export class CartComponent {
   

}
