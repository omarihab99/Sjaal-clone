import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainsectionComponent } from './Components/mainsection/mainsection.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { CategorySectionComponent } from './Components/category-section/category-section.component';
import { HomeComponent } from './Components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainsectionComponent, SidebarComponent, CategorySectionComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sjaal';
}
