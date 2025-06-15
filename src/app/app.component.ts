import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from './model/model';
import { BlogService } from './services/blog.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private blogService = inject(BlogService);

  blogs: Blog[] = [];
  isLoading = true;

  constructor() {
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
