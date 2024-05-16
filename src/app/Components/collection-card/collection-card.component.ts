import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../Models/collection.model';
import { RouterModule } from '@angular/router';
import { faArrowRight, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollectionService } from '../../Services/collection.service';
@Component({
  selector: 'app-collection-card',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  providers: [CollectionService],
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.css',
})
export class CollectionCardComponent implements OnInit {

  @Input() collection!: Collection;
  faArrow = faArrowRight;
  faArrowRight = faArrowRight;
  faLongArrowRight = faLongArrowRight;
  ngOnInit(): void {
   
    
  }

  collectionClicked() {
    localStorage.setItem("collectionId", this.collection.id);
  }
}
