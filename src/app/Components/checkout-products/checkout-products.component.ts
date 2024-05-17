import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cart-product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';

@Component({
  selector: 'app-checkout-products',
  standalone: true,
  imports: [HttpClientModule, CustomCurrencyPipe],
  providers:[CartService],
  templateUrl: './checkout-products.component.html',
  styleUrl: './checkout-products.component.css'
})
export class CheckoutProductsComponent implements OnInit{
  cartProducts:CartProduct[]=[]
  subTotal:number=0;
  shipping:number=50;
  total:number = 0;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.getCartProducts();
  

  }

  getCartProducts(){
    this.cartService.getCartProducts().subscribe({
      next:(products)=> {
        this.cartProducts = products;
        this.clacSubTotal();
        this.total = this.shipping + this.subTotal
      },
    })
  }

  clacSubTotal(){

    this.subTotal = this.cartProducts.reduce((accumulator:number, currentItem:CartProduct) => {
      return accumulator + currentItem.price;
    }, 0);

  }

}
