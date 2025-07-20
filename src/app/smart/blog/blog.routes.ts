import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { dataResolver } from './blog.resolver';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: { blog: dataResolver },
  },
];
