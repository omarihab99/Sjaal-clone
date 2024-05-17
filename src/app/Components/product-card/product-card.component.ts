import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { ProductDirective } from './Directives/product.directive';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CustomCurrencyPipe, RouterLink, CurrencyPipe,HttpClientModule,ProductDirective],
  providers:[ProductsService],
  templateUrl: './product-card.component.html',
  styleUrls:['./product-card.component.css'],
})
export class ProductCardComponent{
  @Input() product:Product={id:"", collectionId:"", name:"", price:0, availableSizes:[], availableQuantaties:0, images:[], description:""}
  buttonAppear:boolean = true;
  constructor(private activeLink: ActivatedRoute){
  
    if(this.activeLink.snapshot.url[0].path == "product"){
      this.buttonAppear = false;
    }

  
  }

}
