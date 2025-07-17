import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from './services/blog.service';
import { Blog } from './model/model';

export const dataResolver: ResolveFn<Blog[]> = () => {
  const blogService = inject(BlogService);
  return blogService.getBlogs();
};
