import { Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { dataResolver } from '../../smart/blog/blog.resolver';

export const detailsRoutes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    resolve: { details: dataResolver },
  },
];
