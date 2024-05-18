import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CheckoutDirective } from './Directives/checkout.directive';
import { RouterModule } from '@angular/router';
import { CartService } from '../../Services/cart.service';
@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule, CurrencyPipe, CheckoutDirective, RouterModule],
  providers: [],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent implements OnInit {
  @Output() shippingPrice = new EventEmitter<number | undefined>();

  checkoutData: FormGroup<any> = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      notifyMe: new FormControl(false,),
      country: new FormControl("", [Validators.required]),
      fName: new FormControl("", [Validators.required]),
      lName: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      apartment: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      governorate: new FormControl("", [Validators.required]),
      pCode: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.min(11), Validators.max(11)]),
      nextTime: new FormControl(false, [Validators.required]),
      shippingCity: new FormControl('', [Validators.required]),
      sameAddress: new FormControl("", [Validators.required]),

    }
  );

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.checkoutData.get('shippingCity')?.valueChanges.subscribe(value => {
      this.shippingPrice.emit(this.getPriceForCity(value));
      console.log(this.shippingPrice);


    });
  }

  selectionArr: { value: String, option: String }[] = [
    { value: "SU", option: "6th of October" },
    { value: "SHR", option: "Al Sharqia" },
    { value: "ALX", option: "Alexandria" },
    { value: "ASN", option: "Aswan" },
    { value: "AST", option: "Asyut" },
    { value: "BH", option: "Beheira" },
    { value: "BNS", option: "Beni Suef" },
    { value: "C", option: "Cairo" },
    { value: "DK", option: "Dakahlia" },
    { value: "DT", option: "Damietta" },
    { value: "FYM", option: "Faiyum" },
    { value: "GH", option: "Gharbia" },
    { value: "GZ", option: "Giza" },
    { value: "HU", option: "Helwan" },
    { value: "IS", option: "Ismailia" },
    { value: "KFS", option: "Kafr el-Sheikh" },
    { value: "IS", option: "Ismailia" },
    { value: "LX", option: "Luxor" },
    { value: "MT", option: "Matrouh" },
    { value: "MN", option: "Minya" },
    { value: "MNF", option: "Monufia" },
    { value: "WAD", option: "New Valley" },
    { value: "SIN", option: "North Sinai" },
    { value: "PTS", option: "Port Said" },
    { value: "KB", option: "Port Said" },
    { value: "PTS", option: "Qalyubia" },
    { value: "KN", option: "Qena" },
    { value: "BA", option: "Red Sea" },
    { value: "SHG", option: "Sohag" },
    { value: "JS", option: "South Sinai" },
    { value: "SUZ", option: "Suez" },
  ];

  shippingMethodArr: { value: String, id: String, price: number }[] = [

    { value: "Cairo & Giza", id: "exampleRadios", price: 50 },
    { value: "Alexandria", id: "exampleRadios1", price: 55 },
    { value: "Behira", id: "exampleRadios2", price: 55 },
    { value: "Sahel", id: "exampleRadios3", price: 55 },
    { value: "Dakahlia", id: "exampleRadios4", price: 60 },
    { value: "Damietta", id: "exampleRadios5", price: 60 },
    { value: "El Kalioubia", id: "exampleRadios6", price: 60 },
    { value: "Gharbia", id: "exampleRadios7", price: 60 },
    { value: "Ismailia", id: "exampleRadios8", price: 60 },
    { value: "Kafr El-Sheikh", id: "exampleRadios9", price: 60 },
    { value: "Monufia", id: "exampleRadios10", price: 60 },
    { value: "Port Said", id: "exampleRadios11", price: 60 },
    { value: "Sharqia", id: "exampleRadios12", price: 60 },
    { value: "Suez", id: "exampleRadios13", price: 60 },
    { value: "Assiut", id: "exampleRadios14", price: 70 },
    { value: "Beni Suef", id: "exampleRadios15", price: 70 },
    { value: "Fayoum", id: "exampleRadios16", price: 70 },
    { value: "Menya", id: "exampleRadios17", price: 70 },
    { value: "Sohag", id: "exampleRadios18", price: 70 },
    { value: "Aswan", id: "exampleRadios19", price: 85 },
    { value: "Luxor", id: "exampleRadios20", price: 85 },
    { value: "Matrouh", id: "exampleRadios21", price: 85 },
    { value: "North Coast", id: "exampleRadios22", price: 85 },
    { value: "Qena", id: "exampleRadios23", price: 85 },
    { value: "Red Sea", id: "exampleRadios24", price: 85 },
    { value: "New Valley", id: "exampleRadios25", price: 90 },
    { value: "North Sinai", id: "exampleRadios26", price: 90 },
    { value: "South Sinai", id: "exampleRadios27", price: 90 },
  ]

  getPriceForCity(city: string): number | undefined {
    const shippingMethod = this.shippingMethodArr.find(method => method.value === city);
    return shippingMethod?.price;
  }
  click(e: Event, itemPrice?: number) {
    let target = e.currentTarget as HTMLInputElement;
    let input = target.querySelector('input');
    input!.checked = true;
    if (itemPrice) {
      this.shippingPrice.emit(itemPrice);
      console.log(this.shippingPrice);
    }
  }
  removeCartProducts() {
    this.cartService.clearCart();
  }

  // completeOrder() {

  //   window.alert("Thank you for your order!!")


  // }
}
