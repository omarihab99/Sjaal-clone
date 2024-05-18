import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';


import { CartComponent } from './Components/cart/cart.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
export const routes: Routes = [
    { path: "" ,component: HomeComponent, pathMatch: "full" },
    { path: "collections/:collectionId", component: ProductsPageComponent },
    // { path: "collections", component: HomeComponent },
    // {path:"header", component:HeaderComponent},
    {path:"feedback", component:FeedbackComponent},
    {path:"product/:id", component:ProductDetailsComponent},
    {path: "cart", component: CartComponent},
    {path:"checkout", component:CheckoutComponent}
];

