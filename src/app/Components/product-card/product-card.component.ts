import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { ProductDirective } from './Directives/product.directive';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe,HttpClientModule,ProductDirective],
  providers:[ProductsService],
  templateUrl: './product-card.component.html',
  styleUrls:['./product-card.component.css'],
})
export class ProductCardComponent{
@Input() product:any;

}
