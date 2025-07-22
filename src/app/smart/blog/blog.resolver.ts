import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from './services/blog.service';
import { BlogData } from './model/model';

export const dataResolver: ResolveFn<BlogData[]> = () => {
  const blogService = inject(BlogService);
  return blogService.getBlogs();
};
