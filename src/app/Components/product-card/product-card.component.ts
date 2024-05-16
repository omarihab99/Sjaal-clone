import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product.model';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CustomCurrencyPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls:['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:Product={id:"", collectionId:"", name:"", price:0, availableSizes:[], availableQuantaties:0, images:[], description:""}
  buttonAppear:boolean = true;
  constructor(private activeLink: ActivatedRoute){
  
    if(this.activeLink.snapshot.url[0].path == "product"){
      this.buttonAppear = false;
    }

  
  }

}
