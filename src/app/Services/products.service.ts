import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }

  getCategoryProduct(categoryId:string){
    return this.http.get(this.URL+`?categoryId=${categoryId}`)

  }

  getProductById(productId:string){
    return this.http.get(this.URL+"/"+productId);
  }
}
