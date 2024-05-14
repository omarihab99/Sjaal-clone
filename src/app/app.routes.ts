import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';

export const routes: Routes = [
    {path:"product", component:ProductDetailsComponent} ,
    {path:"header", component:HeaderComponent},
    {path:"feedback", component:FeedbackComponent},
    {path:"footer", component:FooterComponent}
];
