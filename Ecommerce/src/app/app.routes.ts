import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];
