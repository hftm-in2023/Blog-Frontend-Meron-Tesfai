import { Routes } from '@angular/router';
import { dataResolver } from './features/blog/blog.resolver';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog',
        loadComponent: () =>
          import('./features/blog/blog.component').then((m) => m.BlogComponent),
        resolve: {
          blog: dataResolver,
        },
      },
      {
        path: 'blog/:id',
        loadComponent: () =>
          import('./features/details/details.component').then(
            (m) => m.DetailsComponent,
          ),
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
