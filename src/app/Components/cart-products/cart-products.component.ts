import { Component, OnInit } from '@angular/core';
import { CartProductsService } from '../../Services/cart-products.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartProduct } from '../../Models/cart-product.model';
import { RouterLink } from '@angular/router';
import { CustomCurrencyPipe } from "../../Pipes/custom-currency.pipe";
import { CartTotalPriceComponent } from "../cart-total-price/cart-total-price.component";

@Component({
    selector: 'app-cart-products',
    standalone: true,
    providers: [CartProductsService],
    templateUrl: './cart-products.component.html',
    styleUrl: './cart-products.component.css',
    imports: [CommonModule, HttpClientModule, RouterLink, CustomCurrencyPipe, CartTotalPriceComponent]
})
export class CartProductsComponent implements OnInit{


  products!: CartProduct[];
  subtotal:number=0;

  constructor(private productService: CartProductsService) {
    
   }

  ngOnInit() {
    this.fetchProducts();
    
    
  }

  fetchProducts() {
    this.productService.getProducts()
      .subscribe({
        next:products => {
        this.products = products;
        this.calculateTotal();
      }});
      

  }
  calculateTotal() {
    console.log(this.products);
    if (this.products && this.products.length > 0) {
      
        this.subtotal = this.products.reduce((total, product) => {
            const price = typeof product.price === 'number' ? product.price : 0;
            const quantity = typeof product.quantity === 'number' ? product.quantity : 0;
            let sum= total + (price * quantity);
            console.log(sum);
            return sum;
            
        }, 0);
    } else {
      console.log("hello from failed"+this.subtotal)
        this.subtotal = 0;
    }
}
incrementQuantity(product: CartProduct) {
  this.productService.incrementQuantity(product).subscribe(() => {
    this.fetchProducts();
  });
}

decrementQuantity(product: CartProduct) {
  this.productService.decrementQuantity(product).subscribe(() => {
    this.fetchProducts();
  });
}
removeFromCart(productId: any) {
  this.productService.removeFromCart(productId).subscribe(() => {
    this.fetchProducts();
  });
}

}
