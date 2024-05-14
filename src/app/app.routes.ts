import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "collections/:collectionName", component: HomeComponent },
    { path: "collections", component: HomeComponent }
];
