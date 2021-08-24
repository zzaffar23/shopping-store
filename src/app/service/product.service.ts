import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public filteredProduct$ = new Subject<any>();
  filteredProducts: any[] = [];
  filteredProducts2: any[] = [];

  getProducts() {
    return this.http.get<any>('http://fakestoreapi.com/products').pipe(
      take(2),
      map((products: any) => {
        this.filteredProducts = products;
        this.filteredProduct$.next(products);
        return products;
      })
    );
  }

  getCategories() {
    return this.http
      .get<any>('http://localhost:4200/assets/categories.json')
      .pipe(
        map((categories: any) => {
          return categories;
        })
      );
  }

  getFilteredProducts(category: string) {
    console.log(category);
    return this.filteredProducts.filter((product: any) => {
      switch (category) {
        case 'all products':
          {
            return product;
          }
          break;
        case 'fashion': {
          if (
            product.category.toLowerCase() === "men's clothing" ||
            product.category.toLowerCase() === "women's clothing"
          ) {
            return product;
          }
          break;
        }
        default: {
          if (product.category.toLowerCase() === category) {
            return product;
          }
          break;
        }
      }
    });
  }
}
