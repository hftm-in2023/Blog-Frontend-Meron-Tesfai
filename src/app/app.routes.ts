import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './core/guard/is-authenticated-guard.guard';
import { WelcomeComponent } from './feature/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
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
    canActivate: [isAuthenticatedGuard],
  },
];
