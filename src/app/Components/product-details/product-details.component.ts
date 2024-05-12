import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cart-product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers:[CartService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  cartProduct: CartProduct = {};
  product: Product = {
    id:1,
    categoryId: 1,
    name: "Black Linen Dress",
    price: 850,
    availableSizes: [
      "s/m",
      "l/xl"
    ],
    availableQuantaties: 5,
    description: "The Dress that makes Modesty the REAL fashion statement! Linen Dress with simplistic design that you can style casually or uplifted Available in Black, Olive, Jade, Mint, Cashmere and Beige Available in S/M, L/XL",
    images: ["assets/images/BlackLinenDress.webp", "assets/images/BlackLinenDress.webp", "assets/images/BlackLinenDress.webp", "assets/images/BlackLinenDress.webp"]

  }

  constructor(private cartService: CartService) { }
  clickedImage: any = this.product.images[0];

  changeImage(newImage: string) {
    this.clickedImage = newImage;
  }

  desiredQuantity = signal(0);
  increase() {
    this.desiredQuantity.update((val) => val + 1);
  }
  decrease() {
    this.desiredQuantity.update((val) => val - 1);
  }

  addToCart() {
    this.cartProduct = {
      id:this.product.id,
      categoryId: this.product.categoryId,
      name: this.product.name,
      price: this.product.price,
      size: "sm",
      quantity: this.desiredQuantity(),
      image: this.product.images[0]
    }
    
    this.cartService.updateProduct(this.cartProduct).subscribe({
      next: (data) => {

      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }
}
