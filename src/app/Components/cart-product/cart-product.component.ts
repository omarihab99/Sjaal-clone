import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../../Models/cart-product.model';
import { CustomCurrencyPipe } from "../../Pipes/custom-currency.pipe";
import { HttpClientModule } from '@angular/common/http';
import { CartProductsService } from '../../Services/cart-products.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart-product',
    standalone: true,
    templateUrl: './cart-product.component.html',
    styleUrl: './cart-product.component.css',
    imports: [CustomCurrencyPipe,HttpClientModule,CommonModule],
    providers:[CartProductsService]
})
export class CartProductComponent {
@Input() oneProduct!:CartProduct
appear:boolean=true;

constructor(private cartProductService: CartProductsService) { }
  @Output() deteltedProduct = new EventEmitter<CartProduct>()
  ngOnInit(): void {
 
  
    
  }
  incrementQuantity(product: CartProduct) {
    this.cartProductService.incrementQuantity(product).subscribe(() => {
      
    });
  }
  decrementQuantity(product: CartProduct) {
    this.cartProductService.decrementQuantity(product).subscribe(() => {
   
    });
  }
  removeFromCart(productId: any) {
    this.cartProductService.removeFromCart(productId).subscribe(
      
      {
        next:()=>{
          this.appear=false;
          this.deteltedProduct.emit(this.oneProduct);
        }

      }
      
   
    );
  }

}
