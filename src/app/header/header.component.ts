import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
    console.log('filter2:' + category);
  }

}
