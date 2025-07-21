import { Component, inject, Input, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { BlogData } from './model/model';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  blog: BlogData[] | null = null;

  private blogService = inject(BlogService);

  blogs: BlogData[] = [];
  isLoading = true;

  @Input() id?: string;

  sendData() {
    if (this.blogs != null) {
      this.blogService.updateData(this.blogs);
    }
  }

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
