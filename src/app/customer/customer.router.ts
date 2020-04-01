import { Route } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingFormComponent} from './shopping-form/shopping-form.component';
import { CustomerComponent } from './customer.component';


export const CustomerRoutes: Route[] = [
    {
    path: '',
    component: CustomerComponent,
    children: [
        {path:'shoppingcart', component: ShoppingCartComponent},
        {path:'shoppingform', component: ShoppingFormComponent} ]
    }
];