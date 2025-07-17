import { Component, inject, Input, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Blog } from './model/model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  blog: Blog[] | null = null;

  private blogService = inject(BlogService);

  blogs: Blog[] = [];
  isLoading = true;

  @Input() id?: string;

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Fehler beim Laden der Blog-Daten.');
      },
    });
  }
}
