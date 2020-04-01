import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';


export const HomeRoutes: Route[] = [
    {
    path: '',
    component: HomeComponent,
    children: [
        {path:'login', component: LoginComponent},
        {path:'signup', component: SignupComponent} ]
    }
];