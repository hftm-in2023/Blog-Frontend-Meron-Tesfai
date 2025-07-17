import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Meronsblog',
  },

  {
    path: 'blog',
    loadChildren: () =>
      import('./features/blog/blog.routes').then((blog) => blog.blogRoutes),
    title: 'Blogs',
  },
  {
    path: 'blog/:id',
    loadChildren: () =>
      import('./features/details/details.routes').then(
        (detail) => detail.detailsRoutes,
      ),
    title: 'Blogdetail',
  },
];
