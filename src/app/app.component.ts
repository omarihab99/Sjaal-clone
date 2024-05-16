import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { MainsectionComponent } from './Components/mainsection/mainsection.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CategorySectionComponent } from './Components/category-section/category-section.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartProductsComponent } from './Components/cart-products/cart-products.component';
// import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainsectionComponent,
    SidebarComponent,
    CategorySectionComponent,
    HomeComponent,
    HeaderComponent,
    FeedbackComponent,
    FooterComponent, HeaderComponent, CartComponent, CartProductsComponent, ProductDetailsComponent, ProductsPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sjaal';
}
