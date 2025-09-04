import { Component, computed, inject, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { BlogData } from './model/model';
import { BlogListStatServiceService } from '../../state/blog-list-stat.service.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, MatCardModule, RouterLink, MatProgressBarModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  blog: BlogData[] | null = null;

  private blogService = inject(BlogService);
  private blogStateService = inject(BlogListStatServiceService);

  blogs = computed(() => this.blogStateService.state().blogs);

  loading = computed(() => this.blogStateService.state().loading);

  sendData() {
    if (this.blogs().length > 0) {
      this.blogService.updateData(this.blogs());
    }
  }

  ngOnInit(): void {
    this.blogStateService.setLoading(true);

    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogStateService.setItems(data);
      },
      error: () => {
        this.blogStateService.setLoading(false);
        alert('Fehler beim Laden der Blog-Daten.');
      },
    });
  }
}
