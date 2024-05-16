import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [ProductCardComponent],
  providers:[ProductsService],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent implements OnInit{
  categoryId:any;
  products: Product[]=[]

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    console.log(this.categoryId);
    this.categoryId = localStorage.getItem("categoryId");
    
    this.productsService.getCollectionProducts(this.categoryId).subscribe({
      next:(data:Product[])=>{
        this.products = data;
        console.log(this.products)
        
      },
      error:(err: any)=>{
        console.log(err)

      }
    })
    
  }

}
