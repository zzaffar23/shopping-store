import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCategories().subscribe(
      categories => {
        this.categories = categories;
        console.log(categories);
      })
  }

  filter(category: string)
  {
    console.log('filter:' + category);
  }

}
