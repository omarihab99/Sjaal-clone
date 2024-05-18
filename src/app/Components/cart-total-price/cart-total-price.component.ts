import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from "../../Pipes/custom-currency.pipe";
import { EnlargeDirective } from '../../Directives/enlarge.directive';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-cart-total-price',
    standalone: true,
    templateUrl: './cart-total-price.component.html',
    styleUrl: './cart-total-price.component.css',
    imports: [FormsModule, CustomCurrencyPipe,EnlargeDirective, RouterModule]
})
export class CartTotalPriceComponent {
  @Input() subtotal: number=0;
}
