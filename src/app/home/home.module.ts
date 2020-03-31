import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShareService } from '../shared/share.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HomeComponent,LoginComponent,SignupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  providers: [ShareService],
})
export class HomeModule { }
