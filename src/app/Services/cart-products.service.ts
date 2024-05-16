import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct } from '../Models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {

  
  private baseUrl = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<CartProduct[]>(this.baseUrl);
  }
  incrementQuantity(product: CartProduct) {
    const url = `${this.baseUrl}/${product.id}`;
    product.quantity?product.quantity++:0;
    return this.http.put<CartProduct>(url, product);
  }

  decrementQuantity(product: CartProduct) {
    const url = `${this.baseUrl}/${product.id}`;
    product.quantity=product.quantity?product.quantity:1;
    if(product.quantity>1){
      product.quantity--;
    }
    return this.http.put<CartProduct>(url, product);
  }
  removeFromCart(productId: any){
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }

}
