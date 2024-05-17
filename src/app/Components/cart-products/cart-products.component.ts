import { Component, OnInit } from '@angular/core';
import { CartProductsService } from '../../Services/cart-products.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartProduct } from '../../Models/cart-product.model';
import { RouterLink } from '@angular/router';
import { CustomCurrencyPipe } from "../../Pipes/custom-currency.pipe";
import { CartTotalPriceComponent } from "../cart-total-price/cart-total-price.component";
import { CartProductComponent } from "../cart-product/cart-product.component";
import { YourCartEmptyComponent } from "../your-cart-empty/your-cart-empty.component";
import { CartTitleComponent } from "../cart-title/cart-title.component";

@Component({
  selector: 'app-cart-products',
  standalone: true,
  providers: [CartProductsService],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css',
  imports: [CommonModule, HttpClientModule, RouterLink, CustomCurrencyPipe, CartTotalPriceComponent, CartProductComponent, YourCartEmptyComponent, CartTitleComponent]
})
export class CartProductsComponent implements OnInit {


  products!: CartProduct[];
  subtotal: number = 0;

  constructor(private cartProductService: CartProductsService) {

  }

  ngOnInit() {
    this.fetchProducts();
    
  }
  getDeletedProduct(event: CartProduct) {

    this.products = this.products.filter(item => item !== event);


  }

   fetchProducts() {
     this.cartProductService.getProducts()
      .subscribe({
        next: products => {
          this.products = products;
          console.log(this.products);
          
          this.calculateTotal();
        }
      });


  }
  calculateTotal() {
    console.log(this.products);
    if (this.products && this.products.length > 0) {

      this.subtotal = this.products.reduce((total, product) => {
        const price = typeof product.price === 'number' ? product.price : 0;
        const quantity = typeof product.quantity === 'number' ? product.quantity : 0;
        let sum = total + (price * quantity);
        console.log(sum);
        return sum;

      }, 0);
    } else {
      console.log("hello from failed" + this.subtotal)
      this.subtotal = 0;
    }
  }




}
