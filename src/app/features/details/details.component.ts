import { Component, inject, Input, OnInit } from '@angular/core';
import { Blog } from '../blog/model/model';
import { BlogService } from '../blog/services/blog.service';
import { map } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-details',
  imports: [MatListModule, MatDividerModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  @Input() id!: string;

  blog?: Blog;

  blogService = inject(BlogService);

  ngOnInit(): void {
    this.blogService
      .getBlogs()
      .pipe(map((blogs) => blogs.find((blog) => blog.id === Number(this.id))))
      .subscribe((blog) => {
        this.blog = blog;
      });
  }
}
