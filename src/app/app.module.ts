import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ShareService} from './shared/share.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CustomerModule,
    AdminModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
