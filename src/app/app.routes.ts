import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';


export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "collections/:collectionName", component: HomeComponent },
    { path: "collections", component: HomeComponent },
    {path:"product", component:ProductDetailsComponent},
    {path:"header", component:HeaderComponent},
    {path:"feedback", component:FeedbackComponent},
    {path:"footer", component:FooterComponent}
]
;
