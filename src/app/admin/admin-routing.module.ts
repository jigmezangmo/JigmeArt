import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'orderSummary',
    component: OrderSummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
