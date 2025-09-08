import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { isAuthenticatedGuardGuard } from './core/guard/is-authenticated-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Meronsblog',
  },

  {
    path: 'blog',
    loadComponent: () =>
      import('./feature/blog/blog.component').then(
        (blog) => blog.BlogComponent,
      ),
    title: 'Blogs',
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./feature/details/details.component').then(
        (detail) => detail.DetailsComponent,
      ),
    title: 'Blogdetail',
  },
  {
    path: 'add-blog',
    loadComponent: () =>
      import('./feature/add-blog-page/add-blog-page.component').then(
        (addBlog) => addBlog.AddBlogPageComponent,
      ),
    canActivate: [isAuthenticatedGuardGuard],
  },
];
