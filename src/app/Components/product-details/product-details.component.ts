import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cart-product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CustomCurrencyPipe, CommonModule],
  providers: [CartService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  cartProduct: CartProduct = {};
  product: Product = {
    id: "1",
    categoryId: 1,
    name: "Black Linen Dress",
    price: 850,
    availableSizes: [
      "S/M",
      "L/XL"
    ],
    availableQuantaties: 5,
    description: "The Dress that makes Modesty the REAL fashion statement! Linen Dress with simplistic design that you can style casually or uplifted Available in Black, Olive, Jade, Mint, Cashmere and Beige Available in S/M, L/XL",
    images: ["assets/images/BlackLinenDress.webp", "assets/images/BlackLinenDress2.webp", "assets/images/BlackLinenDress3.webp", "assets/images/BlackLinenDress4.webp", "assets/images/BlackLinenDress5.webp"]

  }
  clickedImage: any = this.product.images[0];
  desiredQuantity = signal(1);
  choosenSize: string = this.product.availableSizes[0]
  cartProducts: CartProduct[] = []
  constructor(private cartService: CartService) { }
  ngOnInit(): void {


  }


  changeImage(newImage: string) {
    this.clickedImage = newImage;
  }

  chooseSize(size: string) {
    this.choosenSize = size;
  }

  increase() {
    this.desiredQuantity.update((val) => val + 1);
  }
  decrease() {
    this.desiredQuantity.update((val) => val - 1);
  }

  addToCart() {
    this.cartProduct = {
      id: this.product.id,
      categoryId: this.product.categoryId,
      name: this.product.name,
      price: this.product.price,
      size: this.choosenSize,
      quantity: this.desiredQuantity(),
      image: this.product.images[0]
    }

    this.cartService.getCartProducts().subscribe({

      next: (data:any) => {
        
        this.cartProducts = data;
 
        let neededProduct: CartProduct|any = this.cartProducts.find(product => product.id === this.cartProduct.id);
        
        if (neededProduct && neededProduct.size == this.cartProduct.size) {
          console.log("in update");
          this.cartProduct.quantity = this.cartProduct.quantity + neededProduct.quantity;
          this.cartService.updateProduct(this.cartProduct).subscribe({
            next: (data) => {

            },
            error: (err: any) => {
              console.log(err);
              window.alert("something went wrong")

            }
          })

        }
        else {
          console.log("in add");
          console.log(this.cartProduct);
          

          this.cartService.addToCart(this.cartProduct).subscribe({
            next: (data) => {



            },
            error: (err: any) => {
              console.log(err);
              window.alert("something went wrong")

            }
          })
        }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
