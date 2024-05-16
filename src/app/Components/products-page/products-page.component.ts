import { Component, Input } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { FiltrationComponent } from '../filtration/filtration.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../Services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../Models/product.model';
import { Collection } from '../../Models/collection.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    DescriptionComponent,
    FiltrationComponent,
    ProductsComponent,
    HttpClientModule
  ],
  providers:[
    ProductsService,
  ],
  templateUrl: './products-page.component.html',
  styles:''
})
export class ProductsPageComponent {
  collectionID!:string;
  constructor(private productService:ProductsService, private route:ActivatedRoute){
    console.log(this.route.snapshot.params);
    
    this.collectionID=this.route.snapshot.params['collectionId'];
  }

  products!: Product[];
  length:any;
  desc:any;
  productsOfCollection:Product[]=[];
  collectionName:any;
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params);

    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.products=data;
     // console.log(this.products.length);
     this.getCollectionProducts(this.products);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
        
      }
    });

    this.productService.getCollectionByID(this.collectionID).subscribe({
      next:(data)=>{
        let collection:Collection=data;
       this.collectionName=collection.name;
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
        
      }
    });

  //  console.log(this.products);
}


getCollectionProducts(allProducts:any){
   for (let index = 0; index < allProducts.length; index++) {
    const element = allProducts[index];
    if(element.collectionId===this.collectionID){
        this.productsOfCollection.push(element);
    }
  }

  this.length=this.productsOfCollection.length;
  //console.log(this.productsOfCollection.length,this.productsOfCollection[0].description);
  this.desc=this.productsOfCollection[0].description;
}
}
