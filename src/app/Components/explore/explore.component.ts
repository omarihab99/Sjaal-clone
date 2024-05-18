import { Component, OnInit } from '@angular/core';
import { Category } from '../../Models/category.model';
import { CategoryService } from '../../Services/category.service';
import { CategorySectionComponent } from '../category-section/category-section.component';
@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CategorySectionComponent],
  providers: [CategoryService],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit {
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
