import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { Category } from '../../Models/category.model';
import { CategorySectionComponent } from '../category-section/category-section.component';
import { MainsectionComponent } from '../mainsection/mainsection.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySectionComponent, MainsectionComponent],
  providers:[CategoryService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories!: Category[];
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      }
    }
      
    )
  }

}
