import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "collections/:collectionName", component: HomeComponent },
    { path: "collections", component: HomeComponent },
    {path:"product", component:ProductDetailsComponent}

]