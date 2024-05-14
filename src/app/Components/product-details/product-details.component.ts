import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product:any ={
    "name": "Black Linen Dress",
    "price": 850,
    "availableSizes": [
      "s/m",
      "l/xl"
    ],
    "availableQuantaties": 5,
    "description": "The Dress that makes Modesty the REAL fashion statement! Linen Dress with simplistic design that you can style casually or uplifted Available in Black, Olive, Jade, Mint, Cashmere and Beige Available in S/M, L/XL",
    "images": ["assets/images/BlackLinenDress.webp", "assets/images/BlackLinenDress.webp", "assets/images/BlackLinenDress.webp" ,"assets/images/BlackLinenDress.webp"]
    
  }
  clickedImage:any = this.product.images[0];
  
  changeImage(newImage:string){
    this.clickedImage = newImage;
  }
  
  desiredQuantity = signal(0);
  increase(){   
      this.desiredQuantity.update((val)=>val+1);
  }
  decrease(){
      this.desiredQuantity.update((val)=>val-1);
  }
}
