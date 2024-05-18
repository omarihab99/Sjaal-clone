import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartProduct } from '../Models/cart-product.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  URL = "http://localhost:3000/cart";
  private cartCountSubject = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { 
    this.initializeCartCount();
  }

  private initializeCartCount(): void {
    this.getCartProducts().subscribe((cartProducts: CartProduct[]) => {
      this.cartCountSubject.next(cartProducts.length);
    });
  }

  addToCart(cartProduct: CartProduct): Observable<CartProduct> {
    return this.http.post<CartProduct>(this.URL, cartProduct).pipe(
      tap(() => {
        this.cartCountSubject.next(this.cartCountSubject.value + 1);
      })
    );
  }

  get getCartNumber$(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  updateProduct(cartProduct: CartProduct): Observable<CartProduct> {
    return this.http.put<CartProduct>(`${this.URL}/${cartProduct.id}`, cartProduct);
  }

  getCartProducts(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(this.URL);
  }

  removeFromCart(productId: any): Observable<any> {
    return this.http.delete(`${this.URL}/${productId}`).pipe(
      tap(() => {
        this.cartCountSubject.next(this.cartCountSubject.value - 1);
      })
    );
  }
}
