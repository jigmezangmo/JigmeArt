import { Route } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AdminComponent } from './admin.component';


export const AdminRoutes: Route[] = [
    {
    path: '',
    component: AdminComponent,
    children: [
        {path:'order', component: OrderComponent},
        {path:'ordersummar', component: OrderSummaryComponent} ]
    }
];