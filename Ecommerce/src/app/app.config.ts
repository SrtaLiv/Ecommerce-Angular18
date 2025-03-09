import { provideClientHydration } from '@angular/platform-browser';
import {ApplicationConfig} from '@angular/core';
import {routes} from './app.routes';
import { provideRouter } from '@angular/router';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // provideAnimationsAsync(),
    // providePrimeNG({ 
    //     theme: {
    //         preset: Aura
    //     }
    // })
  ]
};
