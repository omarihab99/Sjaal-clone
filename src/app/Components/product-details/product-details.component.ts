import { Component, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cart-product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomCurrencyPipe } from '../../Pipes/custom-currency.pipe';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CustomCurrencyPipe, CommonModule, RecommendationComponent, ProductCardComponent, RouterModule],
  providers: [ProductsService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  cartProduct: CartProduct = {
    id: "", collectionId: "", name: "", price: 0,
    size: '',
    quantity: 0,
    image: ''
  };
  productId: string = ""
  product: Product = {
    id: "",
    collectionId: "",
    name: "",
    price: 0,
    availableSizes: [],
    availableQuantaties: 0,
    description: "",
    images: []
  }

  clickedImage: any = ""
  desiredQuantity = signal(1);
  choosenSize: string = this.product.availableSizes[0]
  cartProducts: CartProduct[] = []
  collectionId: string = ""

  constructor(private cartService: CartService, private productsService: ProductsService, private activeLink: ActivatedRoute, private router: Router) {
  }



  ngOnInit(): void {
    this.productId = this.activeLink.snapshot.url[1].path;

    this.productsService.getProductById(this.productId).subscribe({


      next: (data: Product) => {
        this.product = data;
        this.clickedImage = this.product.images[0];
        this.choosenSize = this.product.availableSizes[0];

      },
      error: (err: any) => {
        console.log(err)

      },
    })

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
      collectionId: this.product.collectionId,
      name: this.product.name,
      price: this.product.price,
      size: this.choosenSize,
      quantity: this.desiredQuantity(),
      image: this.product.images[0]
    }

    this.cartService.getCartProducts().subscribe({

      next: (data: any) => {
        this.cartProducts = data;
        let neededProduct: CartProduct | any = this.cartProducts.find(product => product.id === this.cartProduct.id);
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
              this.cartService.addToCartCount(1);
            },
            error: (err: any) => {
              console.log(err);
              window.alert("something went wrong")
            }
          })
        }
        this.router.navigate(['/cart']);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
