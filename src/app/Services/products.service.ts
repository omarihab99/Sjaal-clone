import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient:HttpClient) { }

  private collectionsDB = "http://localhost:3000/collections";
  private productsDB ="http://localhost:3000/products";

  getAllProducts(){
    return this.httpClient.get(this.productsDB);
  }

  getCollectionByID(collectionId:string){
    return this.httpClient.get(this.collectionsDB+"/"+collectionId);
  }
}
