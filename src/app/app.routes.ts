import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'standard',
    loadComponent: () =>
      import('./pages/standard/standard.component').then(
        (mod) => mod.StandardComponent
      ),
  },
  {
    path: 'scientific',
    loadComponent: () =>
      import('./pages/scientific/scientific.component').then(
        (mod) => mod.ScientificComponent
      ),
  },
  {
    path: 'dates',
    loadComponent: () =>
      import('./pages/dates/dates.component').then((mod) => mod.DatesComponent),
  },
];
