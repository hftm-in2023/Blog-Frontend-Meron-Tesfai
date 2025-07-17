import { Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { dataResolver } from '../blog/blog.resolver';

export const detailsRoutes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    resolve: { details: dataResolver },
  },
];
