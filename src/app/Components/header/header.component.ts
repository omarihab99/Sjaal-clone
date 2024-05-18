import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CartService } from '../../Services/cart.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule, 
    SidebarComponent,
    RouterModule
  ],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  cartCount! : number ;
  offcanvasNavbarId  = "offcanvasNavbar";
  private cartCountSubscription!: Subscription;
  constructor(private cartService: CartService){
    
  }

  ngOnInit(): void {
    this.cartCountSubscription = this.cartService.cartNumber.subscribe({
      next: (cartCount : number) => {
        console.log("New cart count: " + cartCount);
        
        this.cartCount = cartCount;
      }
    })
  }
}
