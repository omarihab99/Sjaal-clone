import { AfterViewInit, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../../Models/category.model';
import { CategoryService } from '../../Services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { CollectionService } from '../../Services/collection.service';
import { Collection } from '../../Models/collection.model';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CategoryService, HttpClientModule, CollectionService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {
  constructor(private categoryService: CategoryService, private collectionService: CollectionService) { }
  
  @Input() sideBarId!: string;
  categories!: Category[];
  collections!: Collection[];
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  activeCategory: string = "";
  offcanvas!: Element;
  ngAfterViewInit(): void {
    this.offcanvas = document.querySelector('#offcanvasNavbar')!;
    this.offcanvas.addEventListener('hidden.bs.offcanvas', () => {
      this.activeCategory = "";
      this.openHome();
    });
  }
  openCategories() {
    const collections: Element = document.querySelector('#divCollectionsTabs')!;
    const homeTabs: Element = document.querySelector('#divHomeTabs')!;
    const categories: Element = document.querySelector('#divCategoriesTabs')!;
    if (homeTabs) {
      homeTabs.classList.remove('d-flex');
      homeTabs.classList.add('d-none');
    }
    if (collections) {
      collections.classList.remove('d-flex');
      collections.classList.add('d-none');
    }
    this.categoryService.getCategories().subscribe(
      {
        next: (categories) => {
          this.categories = categories;
        }
      }
    )
    if (categories) {
      categories.classList.remove('d-none');
      categories.classList.add('d-flex');
    }
  }
  openHome() {
    const collections: Element = document.querySelector('#divCollectionsTabs')!;
    const homeTabs: Element = document.querySelector('#divHomeTabs')!;
    const category: Element = document.querySelector('#divCategoriesTabs')!;
    if (category) {
      category.classList.remove('d-flex');
      category.classList.add('d-none');
    }
    if (collections) {
      collections.classList.remove('d-flex');
      collections.classList.add('d-none');
    }
    if (homeTabs) {
      homeTabs.classList.remove('d-none');
      homeTabs.classList.add('d-flex');
    }


  }
  openSelectedCategory(event: Event) {
    const categories: Element = document.querySelector('#divCategoriesTabs')!;
    const collections: Element = document.querySelector('#divCollectionsTabs')!;
    if (categories) {
      categories.classList.remove('d-flex');
      categories.classList.add('d-none');
    }
    const button = event.target as HTMLButtonElement;
    this.activeCategory = button.innerText.trim();
    const activeCategoryId = this.categories.find((category) => category.name === this.activeCategory)?.id;
    if (activeCategoryId) {
      this.collectionService.getCollectionByID(activeCategoryId).subscribe(
        {
          next: (collections) => {
            this.collections = collections;
          }
        }
      )
    }
    if (collections) {
      collections.classList.remove('d-none');
      collections.classList.add('d-flex');
    }

  }
  // closeSideBar(){
  //     this.offcanvas.classList.toggle('open');
  // }
}
