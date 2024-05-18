import { Component, OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CartService } from '../../Services/cart.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule, 
    SidebarComponent,
    RouterModule
  ],
  providers: [CartService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges {
  
  cartCount = 0 ;
  offcanvasNavbarId  = "offcanvasNavbar";
  constructor(private cartService: CartService){
    
  }

  ngOnInit(): void {
    console.log("in the header on init");
    
    this.cartService.getCartProducts()
    .subscribe(res=>{
      this.cartCount = res.length;
    })
  }
  ngOnChanges() : void{
    // this.cartService.getCartProducts().subscribe({
    //   next: (cartProducts) => {
    //     this.cartCount = cartProducts.length;
    //   }
    // });
  }
  //TODO: Add Cart Count from product-details component.
}
