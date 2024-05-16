import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = "http://localhost:3000/products";
  private collectionsDB = "http://localhost:3000/collections";
  private productsDB ="http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  getCollectionProducts(collectionId:string) : Observable<Product[]> {
    return this.http.get(this.URL+`?collectionId=${collectionId}`) as Observable<Product[]>;
  }
 
  getLimitedCollectionProducts(collectionId:string, limit:number) : Observable<Product[]> {
    const startIndex = 1;
    return this.http.get(this.URL+`?collectionId=${collectionId}&_start=${startIndex}&_limit=${limit}`) as Observable<Product[]>;
  }

  getProductById(productId:string) : Observable<Product> {
    return this.http.get(this.URL+"/"+productId) as Observable<Product>;
  }
  getAllProducts(){
    return this.http.get(this.productsDB);
  }

  getCollectionByID(collectionId:string){
    return this.http.get(this.collectionsDB+"/"+collectionId);
  }
}



