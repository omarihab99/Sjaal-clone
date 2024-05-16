import { Component } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { FiltrationComponent } from '../filtration/filtration.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    DescriptionComponent,
    FiltrationComponent,
    ProductsComponent
  ],
  templateUrl: './products-page.component.html',
  styles:''
})
export class ProductsPageComponent {

}
