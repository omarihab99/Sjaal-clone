import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getCollectionProducts(collectionId:string) : Observable<Product[]> {
    return this.http.get(this.URL+`?categoryId=${collectionId}`) as Observable<Product[]>;
  }

  getProductById(productId:string) : Observable<Product> {
    return this.http.get(this.URL+"/"+productId) as Observable<Product>;
  }
}
