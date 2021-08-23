import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsComponent implements OnInit {

 products: any;
 filterdProducts: any;

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      data => {
        this.products = data;
        this.filterdProducts = data;
        console.log(data);
      })
  }

}
