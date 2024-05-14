import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CustomCurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls:['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:Product={id:"", categoryId:"", name:"", price:0, availableSizes:[], availableQuantaties:0, images:[], description:""}

}
