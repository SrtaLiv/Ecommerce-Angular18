import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    // {
    //     path: 'details/:id',
    //     component: DetailsComponent,
    //     title: 'Home details',
    //   },
  ];