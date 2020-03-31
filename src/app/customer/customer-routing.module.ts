import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'shoppingCart',
    component: ShoppingCartComponent
  },
  {
    path: 'shoppingForm',
    component: ShoppingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
