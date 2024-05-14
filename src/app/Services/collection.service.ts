import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection } from '../Models/collection.model';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private readonly URL = 'http://localhost:3000/collections';
  constructor(private http: HttpClient) {
  }

  getCollections(): Observable<Collection[]> {
    return this.http.get(this.URL) as Observable<Collection[]>;
  }
  getCollectionByID(categoryID: string): Observable<Collection[]> {
    
    return this.http.get(`${this.URL}?categoryId=${categoryID}`) as Observable<Collection[]>;
  }
}
