import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   data => {
    //     this.products = data;
    //     console.log(data);
    //   })

    this.productService.getProducts().subscribe();

    this.productService.filteredProduct$.subscribe((products) => {
      console.log("obs fired!");
      this.products = products;
      console.log(products);
    });
  }
}
