import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cart-product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';

@Component({
  selector: 'app-checkout-products',
  standalone: true,
  imports: [HttpClientModule, CustomCurrencyPipe],
  providers:[],
  templateUrl: './checkout-products.component.html',
  styleUrl: './checkout-products.component.css'
})
export class CheckoutProductsComponent implements OnInit, OnChanges{
  cartProducts:CartProduct[]=[]
  subTotal:number=0;
  total:number = 0;
  @Input() shippingPrice=0;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.getCartProducts();
  

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['shippingPrice'] && !changes['shippingPrice'].isFirstChange()) {
      this.total = this.shippingPrice + this.subTotal;
    }
  }

  getCartProducts(){
    this.cartService.getCartProducts().subscribe({
      next:(products)=> {
        this.cartProducts = products;
        this.clacSubTotal();
        this.total = this.shippingPrice + this.subTotal
      },
    })
  }

  clacSubTotal(){

    this.subTotal = this.cartProducts.reduce((accumulator:number, currentItem:CartProduct) => {
      return accumulator + currentItem.price;
    }, 0);

  }

}
