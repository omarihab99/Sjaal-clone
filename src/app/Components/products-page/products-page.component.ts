import { Component } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { FiltrationComponent } from '../filtration/filtration.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../Services/products.service';
import { HttpClientModule } from '@angular/common/http';

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
    ProductsService
  ],
  templateUrl: './products-page.component.html',
  styles:''
})
export class ProductsPageComponent {
  constructor(private productService:ProductsService){}

  mydata:any;
  products:any;
  length:any;
  desc:any;
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.mydata=data;
        this.products=this.mydata[0]["products"];
      //console.log(this.mydata[0]["products"][0].description);
        this.length=this.products.length;
        this.desc=this.mydata[0]["desc"];
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
        
      }
    });
  }
}
