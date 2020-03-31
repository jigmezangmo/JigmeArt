import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { CustomerComponent } from './customer.component';
import {FormsModule} from '@angular/forms';
import { ShareService } from '../shared/share.service';


@NgModule({
  declarations: [ ShoppingCartComponent, ShoppingFormComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  providers: [ShareService]
})
export class CustomerModule { }
export class Customer {
  id: number; 
  FirstName:string; 
  LastName: string;
  Designation: string;
  Contact: number;
  Address:string;
}