import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
