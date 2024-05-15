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
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainsectionComponent, SidebarComponent, CategorySectionComponent, HomeComponent, ProductDetailsComponent, HeaderComponent,
    
  
  FeedbackComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sjaal';
}
