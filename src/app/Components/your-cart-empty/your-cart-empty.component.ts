import { Component } from '@angular/core';
import { CartTitleComponent } from "../cart-title/cart-title.component";
import { EnlargeDirective } from '../../Directives/enlarge.directive';

@Component({
    selector: 'app-your-cart-empty',
    standalone: true,
    templateUrl: './your-cart-empty.component.html',
    styleUrl: './your-cart-empty.component.css',
    imports: [CartTitleComponent,EnlargeDirective]
})
export class YourCartEmptyComponent {

}
