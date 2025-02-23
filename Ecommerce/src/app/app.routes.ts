import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];
