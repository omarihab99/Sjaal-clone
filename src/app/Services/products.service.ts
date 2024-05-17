import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { Observable } from 'rxjs';
import { Collection } from '../Models/collection.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private collectionsDB = "http://localhost:3000/collections";
  private productsDB ="http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  getCollectionProducts(collectionId:string) : Observable<Product[]> {
    return this.http.get(this.productsDB+`?collectionId=${collectionId}`) as Observable<Product[]>;
  }
 
  getLimitedCollectionProducts(collectionId:string, limit:number) : Observable<Product[]> {
    const startIndex = 1;
    return this.http.get(this.productsDB+`?collectionId=${collectionId}&_start=${startIndex}&_limit=${limit}`) as Observable<Product[]>;
  }

  getProductById(productId:string) : Observable<Product> {
    return this.http.get(this.productsDB+"/"+productId) as Observable<Product>;
  }
  getAllProducts() : Observable<Product[]> {
    return this.http.get(this.productsDB) as Observable<Product[]>;
  }

  getCollectionByID(collectionId:string) : Observable<Collection> {
    return this.http.get(this.collectionsDB+"/"+collectionId) as Observable<Collection>;
  }
}



