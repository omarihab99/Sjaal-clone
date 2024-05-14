import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent {

}
