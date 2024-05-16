import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

export const routes: Routes = [
    {path:"product/:id", component:ProductDetailsComponent},
    {path:"checkout", component:CheckoutComponent}
];
