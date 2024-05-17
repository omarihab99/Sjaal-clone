import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,HttpClientModule],
  providers:[ProductsService],
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css']
})
export class ProductsComponent{
  @Input() myProducts:any;
}
