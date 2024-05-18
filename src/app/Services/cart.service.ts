import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../Models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  URL = "http://localhost:3000/cart";
  constructor(private http: HttpClient) { }

  addToCart(cartProduct:CartProduct) : Observable<CartProduct>{
    return this.http.post(this.URL, cartProduct) as Observable<CartProduct>;
  }

  updateProduct(cartProduct:CartProduct) : Observable<CartProduct>{
    return this.http.put(`${this.URL}/${cartProduct.id}`, cartProduct) as Observable<CartProduct>;
  }

  getCartProducts() : Observable<CartProduct[]> { 
    return this.http.get(this.URL) as Observable<CartProduct[]>;
  }
  get cartNumber() : Observable<number> {
    return this.cartCountSubject.asObservable();
  }
  addToCartCount(val:number){
    this.cartCountSubject.next(this.cartCountSubject.value+val);
  }
  removeFromCartCount(val:number){
    this.cartCountSubject.next(this.cartCountSubject.value-val > 0 ? this.cartCountSubject.value-val : 0);
  }
  clearCart(){
    this.cartCountSubject.next(0);
  }
}
