import { Component, Input, OnInit } from '@angular/core';
import { CollectionService } from '../../Services/collection.service';
import { Category } from '../../Models/category.model';
import { Collection } from '../../Models/collection.model';
import { CollectionCardComponent } from '../collection-card/collection-card.component';
@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [CollectionCardComponent],
  providers: [CollectionService],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css'
})
export class CategorySectionComponent implements OnInit {
  collections!: Collection[];
  @Input() category!: Category;
  colSize: string = "col-sm-12 col-md-6 col-lg-4"
  constructor(private collectionService: CollectionService) {

  }

  ngOnInit(): void {
    this.collectionService.getCollectionByID(this.category.id).subscribe({
      next: (collections) => {
        this.collections = collections;
        console.log(collections);
        
      }
    });
  }
}
