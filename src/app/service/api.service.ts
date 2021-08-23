import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private http: HttpClient ) {}

  getProducts() {

    return this.http.get<any>("http://fakestoreapi.com/products")
    .pipe(
      map((products: any) => {
        return products;
      })
    )
  }

  getCategories() {
    return this.http.get<any>("http://localhost:4200/assets/categories.json")
    .pipe (
      map((categories: any) => {
        return categories;
      })
    )
  }
}
