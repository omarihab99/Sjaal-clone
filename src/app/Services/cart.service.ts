import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { CartProduct } from '../Models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  URL = "http://localhost:3000/cart";
  constructor(private http: HttpClient) { }

  addToCart(cartProduct:CartProduct){
    return this.http.post(this.URL, cartProduct);
  }

  updateProduct(cartProduct:CartProduct){
    return this.http.put(`${this.URL}/${cartProduct.id}`, cartProduct);
  }


}
