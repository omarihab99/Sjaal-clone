import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient:HttpClient) { }

  private DB = "http://localhost:3000/collections";

  getAllProducts(){
    return this.httpClient.get(this.DB);
  }
}
