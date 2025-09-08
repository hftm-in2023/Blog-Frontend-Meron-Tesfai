import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { BlogData } from './model/model';
import { BlogService } from '../../core/blog/blog-backend';

export const dataResolver: ResolveFn<BlogData[]> = () => {
  const blogService = inject(BlogService);
  return blogService.getBlogs();
};
