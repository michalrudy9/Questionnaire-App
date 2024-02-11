import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('../components/admin-panel/admin-panel.component').then(
        (c) => c.AdminPanelComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
